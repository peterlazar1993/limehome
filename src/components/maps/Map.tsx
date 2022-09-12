import { useIsFocused } from '@react-navigation/native';
import { AnimatePresence } from 'moti';
import { useState } from 'react';
import MapView from 'react-native-maps';

import { usePropertiesForCityQuery } from '../../services/propertiesForCityQuery';
import Box from '../../theme/Box';
import MotiBox from '../../theme/MotiBox';
import { PropertyCard } from './PropertyCard';
import { MemoizedPropertyMaker } from './PropertyMarker';

export const Map = ({
  data,
}: {
  data: NonNullable<ReturnType<typeof usePropertiesForCityQuery>['data']>;
}) => {
  const isFocused = useIsFocused();
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
      {isFocused ? (
        <MapView style={{ flex: 1 }} initialRegion={initialRegion} toolbarEnabled={false}>
          {data.map((property, index) => {
            const isPropertySelected = property.id === selectedPropertyId;
            return (
              <MemoizedPropertyMaker
                key={property.id}
                isPropertySelected={isPropertySelected}
                property={property}
                setSelectedPropertyId={setSelectedPropertyId}
              />
            );
          })}
        </MapView>
      ) : null}
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
            }}>
            <PropertyCard
              property={selectedProperty}
              setSelectedPropertyId={setSelectedPropertyId}
            />
          </MotiBox>
        ) : null}
      </AnimatePresence>
    </Box>
  );
};
