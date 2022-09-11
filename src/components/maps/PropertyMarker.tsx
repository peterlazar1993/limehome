import React from 'react';
import { Marker } from 'react-native-maps';

import { usePropertiesForCityQuery } from '../../services/propertiesForCityQuery';
import Box from '../../theme/Box';
import Text from '../../theme/Text';

const PropertyMarker = ({
  property,
  isPropertySelected,
  setSelectedPropertyId,
}: {
  property: NonNullable<ReturnType<typeof usePropertiesForCityQuery>['data']>[number];
  isPropertySelected: boolean;
  setSelectedPropertyId: (a: number | undefined) => void;
}) => {
  return (
    <Marker
      onPress={() => setSelectedPropertyId(property.id)}
      coordinate={{ longitude: property.location.lng, latitude: property.location.lat }}>
      <Box alignItems="center">
        <Box
          bg={isPropertySelected ? 'surface-secondary' : 'surface-decorative-two'}
          borderRadius={isPropertySelected ? 10 : 3}
          justifyContent="center"
          alignItems="center"
          style={{ padding: 12 }}>
          <Text variant="listingStreet" color="text-on-dark">
            {property.lowest_price_per_night ?? 12}€
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

export const MemoizedPropertyMaker = React.memo(
  PropertyMarker,
  (prevProps, nextProps) => prevProps.isPropertySelected === nextProps.isPropertySelected
);
