import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { useTheme } from '@shopify/restyle';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';

import { getCitiesWithProperties, getImageForProperties } from '../services/citiesService';
import { Theme } from '../theme';
import Box from '../theme/Box';
import Text from '../theme/Text';

export const Locations = () => {
  const citiesWithProperties = getCitiesWithProperties();
  const { spacing } = useTheme<Theme>();
  const windowWidth = useWindowDimensions().width;

  const estimatedItemSize = (windowWidth - 2 * spacing.l) * (9 / 16) + 114;

  return (
    <FlashList
      estimatedItemSize={estimatedItemSize}
      contentContainerStyle={{ paddingBottom: 16 }}
      data={citiesWithProperties}
      renderItem={renderItem}
      ListHeaderComponent={Header}
      ItemSeparatorComponent={Separator}
    />
  );
};

const renderItem: ListRenderItem<ReturnType<typeof getCitiesWithProperties>[number]> = ({
  item,
}) => {
  const propertyCount = parseInt(item.property_count, 10);
  return (
    <Box borderWidth={StyleSheet.hairlineWidth * 3} marginHorizontal="l">
      <Image
        source={{ uri: getImageForProperties(item.properties) }}
        style={{ width: '100%', aspectRatio: 16 / 9, height: undefined }}
        resizeMode="cover"
      />
      <Box alignItems="center" marginVertical="l">
        <Text variant="listingTitle">{item.name.en}</Text>
        <Text variant="propertyCount" marginTop="xs">{`${propertyCount} ${
          propertyCount === 1 ? 'Property' : 'Properties'
        }`}</Text>
      </Box>
    </Box>
  );
};

const Header = () => {
  return (
    <Box paddingTop="xl" marginHorizontal="l" marginBottom="l">
      <Text variant="heading">so suite!</Text>
      <Text variant="subheading" marginTop="s" marginBottom="m">
        Wherever you go, we have a limehome for you
      </Text>
      <Text variant="description" textAlign="left">
        All limehomes are situated in prime locations and are conveniently linked to public
        transport. Our suites are available for short city trips as well as longer business stays.
      </Text>
    </Box>
  );
};

const Separator = () => {
  return <Box marginTop="l" />;
};
