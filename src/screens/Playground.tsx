import { useTheme } from '@shopify/restyle';
import { ScrollView } from 'react-native';

import { Separator } from '../components/Separator';
import { Theme } from '../theme';
import Box from '../theme/Box';
import Text from '../theme/Text';
import { Button } from '../theme/Touchable';

export const Playground = () => {
  const { spacing } = useTheme<Theme>();

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.m }}>
      <Typography />
      <Colors />
      <Buttons />
    </ScrollView>
  );
};

function Typography() {
  return (
    <Box marginTop="l">
      <Text variant="sectionTitle" fontSize={44} color="text-decorative-one">
        Typography
      </Text>
      <Separator />
      <Text variant="sectionTitle">sectionTitle</Text>
      <Separator />
      <Text variant="listingTitle">listingTitle</Text>
      <Separator />
      <Text variant="heading">heading</Text>
      <Separator />
      <Text variant="subheading">subheading</Text>
      <Separator />
      <Text variant="listingStreet">listingStreet</Text>
      <Separator />
      <Text variant="description" textAlign="left">
        description
      </Text>
      <Separator />
      <Text variant="propertyCount">propertyCount</Text>
      <Separator />
      <Text variant="buttonLabelOnDarkSurface" color="text-on-light">
        buttonLabelOnDarkSurface
      </Text>
      <Separator />
    </Box>
  );
}

function Buttons() {
  return (
    <Box marginTop="l" alignItems="flex-start">
      <Text variant="sectionTitle" fontSize={44} color="text-decorative-one">
        Buttons
      </Text>
      <Separator />
      <Button variant="primary">
        <Text variant="buttonLabelOnDarkSurface" color="text-on-dark">
          primary
        </Text>
      </Button>
      <Separator />
      <Button variant="secondary">
        <Text variant="buttonLabelOnDarkSurface" color="text-on-light">
          secondary
        </Text>
      </Button>
      <Separator />
      <Button variant="decorative">
        <Text variant="buttonLabelOnDarkSurface" color="text-on-dark">
          long decorative button
        </Text>
      </Button>
      <Separator />
    </Box>
  );
}

function Colors() {
  return (
    <Box marginTop="l">
      <Text variant="sectionTitle" fontSize={44} color="text-decorative-one">
        Colors
      </Text>

      <Separator />
      <Box padding="l" bg="surface-primary">
        <Text variant="subheading">surface-primary</Text>
      </Box>
      <Separator />
      <Box padding="l" bg="surface-decorative-one">
        <Text variant="subheading" color="text-on-dark">
          surface-decorative-one
        </Text>
      </Box>
      <Separator />
      <Box padding="l" bg="surface-secondary">
        <Text variant="subheading" color="text-on-dark">
          surface-secondary
        </Text>
      </Box>
      <Separator />
      <Text variant="subheading" color="text-on-light" padding="l">
        text-on-light
      </Text>
      <Separator />
      <Box padding="l" bg="surface-secondary">
        <Text variant="subheading" color="text-on-dark">
          text-on-dark
        </Text>
      </Box>
      <Separator />
      <Text variant="subheading" color="text-decorative-one" padding="l">
        text-decorative-one
      </Text>
      <Separator />
    </Box>
  );
}
