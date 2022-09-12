import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useTheme } from '@shopify/restyle';
import { Image, Pressable, ScrollView, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { LocationsStackParamList } from '../navigation/types';
import { getImageUrl } from '../services/citiesService';
import { usePropertyQuery } from '../services/propertyQuery';
import { Theme } from '../theme';
import Box from '../theme/Box';
import Text from '../theme/Text';
import { Button } from '../theme/Touchable';

export const PropertyDetailsScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<LocationsStackParamList>) => {
  const property_id = route.params.property_id;

  const { data, isLoading, error } = usePropertyQuery(property_id);

  if (data) {
    return <PropertyDetails property={data} />;
  }

  return null;
};

const PropertyDetails = ({
  property,
}: {
  property: NonNullable<ReturnType<typeof usePropertyQuery>['data']>;
}) => {
  const navigation = useNavigation<NavigationProp<LocationsStackParamList>>();
  const { spacing, colors } = useTheme<Theme>();
  const windowWidth = useWindowDimensions().width;
  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 1, backgroundColor: colors['surface-primary'] }}>
        <Carousel
          loop
          width={windowWidth}
          height={windowWidth * (9 / 16)}
          data={property.images}
          renderItem={({ index, item }) => (
            <Box
              style={{
                flex: 1,
              }}>
              <Image
                source={{
                  uri: getImageUrl(
                    item.url,
                    item.is_portrait ? 'PORTRAIT_MEDIUM' : 'LANDSCAPE_MEDIUM'
                  ),
                }}
                style={{ height: undefined, width: undefined, flex: 1 }}
                resizeMode="cover"
              />
            </Box>
          )}
        />

        <Box paddingHorizontal="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
            marginTop="l">
            <Box flex={1}>
              <Text variant="heading" marginRight="s">
                {property.name}
              </Text>
              <Box flexDirection="row" alignItems="center" marginTop="s">
                <Ionicons
                  name="md-location-outline"
                  size={24}
                  color={colors['surface-secondary']}
                />
                <Text variant="body14SemiBold" fontSize={15} color="text-on-light" marginLeft="xs">
                  {property.distance.toFixed(1)} km from city center
                </Text>
              </Box>
            </Box>
            <Box
              flexDirection="row"
              bg="surface-primary"
              justifyContent="center"
              alignItems="center"
              borderWidth={1}
              borderRadius={4}
              style={{ padding: 6, paddingHorizontal: 8 }}>
              <Text variant="propertyCount" fontSize={16} color="text-on-light" marginRight="xs">
                {4.5}
              </Text>
              <Ionicons name="md-star" size={20} color={colors['surface-secondary']} />
            </Box>
          </Box>
          <Box marginVertical="m">
            <Text variant="description" textAlign="left">
              {property.description}
            </Text>
          </Box>
          <Box height={1} flex={1} bg="surface-decorative-two-lighter" opacity={0.5} />
          <Box marginTop="m">
            <Text variant="propertyCount" fontSize={20}>
              Room types available in this location
            </Text>
            <Box flexDirection="row" flexWrap="wrap" marginTop="m">
              {property.unit_groups.map((s) => (
                <Box
                  marginBottom="s"
                  marginRight="s"
                  key={s.id}
                  flexGrow={0}
                  borderRadius={3}
                  paddingVertical="xs"
                  paddingHorizontal="s"
                  bg="surface-decorative-three">
                  <Text variant="body16Regular">{s.name}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Pressable
        onPress={navigation.goBack}
        style={{
          flex: 1,
          position: 'absolute',
          top: spacing.m,
          left: spacing.m,
          width: 45,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors['surface-primary'],
        }}>
        <Ionicons name="close-outline" size={28} color="black" />
      </Pressable>
      <Box
        bg="surface-decorative-three"
        height={70}
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="m"
        flexDirection="row">
        <Text variant="body14SemiBold" fontSize={18} color="text-on-light">
          From{' '}
          <Text variant="body14SemiBold" fontSize={18} color="surface-secondary">
            {`${property.lowest_price_per_month ?? '55.00'}€`}
            <Text variant="body14Regular" fontSize={18}>
              /Night
            </Text>
          </Text>
        </Text>
        <Button variant="primary" borderRadius={1}>
          <Box flexDirection="row" alignItems="center">
            <Text variant="buttonLabelOnDarkSurface" fontSize={14} marginRight="xs">
              EXPLORE
            </Text>
            <Ionicons name="md-arrow-forward-outline" size={18} color="white" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
