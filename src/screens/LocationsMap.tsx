import { AnimatePresence } from 'moti';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { usePropertiesForCityQuery } from '../services/propertiesForCityQuery';
import Box from '../theme/Box';
import MotiBox from '../theme/MotiBox';
import Text from '../theme/Text';

export const LocationsMap = ({ navigation, route }) => {
  const city_id = route.params.city_id;
  const { data, isLoading, error } = usePropertiesForCityQuery(city_id);

  if (error || isLoading) {
    return null;
  }

  if (data) {
    return <Map data={data} />;
  }
  return null;
};

const Map = ({
  data,
}: {
  data: NonNullable<ReturnType<typeof usePropertiesForCityQuery>['data']>;
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<number>();
  const initialRegion = {
    latitude: data[0].location.lat,
    longitude: data[0].location.lng,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  const selectedProperty = data.find((d) => d.id === selectedPropertyId);

  return (
    <Box flex={1}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {data.map((marker, index) => {
          const isPropertySelected = marker.id === selectedPropertyId;
          return (
            <MemoizedPropertyMaker
              key={marker.id}
              isPropertySelected={isPropertySelected}
              marker={marker}
              setSelectedPropertyId={setSelectedPropertyId}
            />
          );
        })}
      </MapView>
      <AnimatePresence>
        {selectedProperty ? (
          <MotiBox
            position="absolute"
            bottom={16}
            paddingHorizontal="m"
            width="100%"
            from={{ bottom: -100, opacity: 0.5 }}
            animate={{ bottom: 16, opacity: 1 }}
            exit={{ bottom: -100, opacity: 0.5 }}
            transition={{
              duration: 200,
              type: 'timing',
            }}
          />
        ) : null}
      </AnimatePresence>
    </Box>
  );
};

const PropertyMarker = ({
  marker,
  isPropertySelected,
  setSelectedPropertyId,
}: {
  marker: NonNullable<ReturnType<typeof usePropertiesForCityQuery>['data']>[number];
  isPropertySelected: boolean;
  setSelectedPropertyId: (a: number | undefined) => void;
}) => {
  return (
    <Marker
      onPress={() => setSelectedPropertyId(marker.id)}
      coordinate={{ longitude: marker.location.lng, latitude: marker.location.lat }}>
      <Box alignItems="center">
        <Box
          bg={isPropertySelected ? 'surface-secondary' : 'surface-decorative-two'}
          borderRadius={isPropertySelected ? 10 : 3}
          justifyContent="center"
          alignItems="center"
          style={{ padding: 12 }}>
          <Text variant="listingStreet" color="text-on-dark">
            {12}€
          </Text>
        </Box>
        <Box
          borderTopColor={
            isPropertySelected ? 'surface-secondary' : 'surface-decorative-two-lighter'
          }
          style={{
            width: 10,
            height: 10,
            borderLeftWidth: 6,
            borderLeftColor: 'transparent',
            borderRightWidth: 6,
            borderRightColor: 'transparent',
            borderTopWidth: 6,
          }}
        />
      </Box>
    </Marker>
  );
};

const MemoizedPropertyMaker = React.memo(
  PropertyMarker,
  (prevProps, nextProps) => prevProps.isPropertySelected === nextProps.isPropertySelected
);
