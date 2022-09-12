import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { Image, Pressable } from 'react-native';

import { LocationsStackParamList } from '../../navigation/types';
import { getImageUrl } from '../../services/citiesService';
import { usePropertiesForCityQuery } from '../../services/propertiesForCityQuery';
import { Theme } from '../../theme';
import Box from '../../theme/Box';
import Text from '../../theme/Text';

export const PropertyCard = ({
  property,
  setSelectedPropertyId,
}: {
  property: NonNullable<ReturnType<typeof usePropertiesForCityQuery>['data']>[number];
  setSelectedPropertyId: (a: undefined) => void;
}) => {
  const { colors } = useTheme<Theme>();
  const navigation = useNavigation<NavigationProp<LocationsStackParamList>>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('PropertyDetails', { property_id: property.id });
      }}>
      <Box
        bg="surface-primary"
        flexDirection="row"
        borderRadius={3}
        overflow="hidden"
        borderWidth={1}
        borderColor="surface-decorative-two-lighter">
        <Box>
          <Image
            source={{ uri: getImageUrl(property.images[0].url, 'THUMBNAIL_SMALL') }}
            style={{ height: 120, aspectRatio: 1 }}
            resizeMode="cover"
          />
          <Box
            flexDirection="row"
            position="absolute"
            right={5}
            bottom={5}
            bg="surface-primary"
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            style={{ padding: 3 }}>
            <Text variant="propertyCount" color="text-on-light" marginRight="xs">
              {4.5}
            </Text>
            <Ionicons name="md-star" size={18} color={colors['surface-secondary']} />
          </Box>
          <Pressable
            onPress={() => {
              setSelectedPropertyId(undefined);
            }}
            style={{ position: 'absolute' }}>
            <Box
              top={4}
              left={4}
              width={28}
              aspectRatio={1}
              borderRadius={28 / 2}
              alignItems="center"
              justifyContent="center"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <Ionicons name="close-outline" size={22} color="white" />
            </Box>
          </Pressable>
        </Box>

        <Box
          marginHorizontal="m"
          style={{ paddingVertical: 12 }}
          flexShrink={1}
          justifyContent="space-between">
          <Text variant="heading" color="text-on-light" numberOfLines={1}>
            {property.name}
          </Text>
          <Box>
            <Box flexDirection="row" alignItems="center">
              <Ionicons name="md-location-outline" size={22} color={colors['surface-secondary']} />
              <Text variant="body14SemiBold" color="text-on-light" marginLeft="xs">
                {property.distance.toFixed(1)} km from city center
              </Text>
            </Box>
            <Box
              height={1}
              backgroundColor="surface-decorative-two-lighter"
              marginVertical="s"
              opacity={0.5}
            />
            <Text variant="body14SemiBold" color="text-on-light">
              From{' '}
              <Text variant="body14SemiBold" color="surface-secondary">
                55.00€
                <Text variant="body14Regular">/Night</Text>
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};
