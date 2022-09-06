import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'react-native';

import { RootStackParamList } from '../screens/Router';
import Box from '../theme/Box';
import MotiBox from '../theme/MotiBox';
import Text from '../theme/Text';
import { Button } from '../theme/Touchable';

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];

export function FeaturedLocations() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Box flex={1} alignItems="center">
      <Text variant="sectionTitle" color="surface-decorative-one">
        our locations
      </Text>
      <Text variant="description" marginTop="s" paddingHorizontal="xl">
        Discover our wide variety of locations across Europe. All our limehomes are situated in
        prime locations, conveniently connected to public transport &amp; our suites are suitable
        for short city trips as well as longer business stays. Stay tuned!
      </Text>
      <MotiBox
        flexWrap="wrap"
        marginTop="l"
        flexDirection="row"
        paddingHorizontal="s"
        justifyContent="space-evenly">
        {featuredListings.map((listing) => (
          <Box marginVertical="s" width="45%" key={listing.listing_street.en}>
            <Image
              source={{ uri: listing.image }}
              style={{ width: undefined, aspectRatio: 1, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text variant="listingTitle" marginTop="xs">
              {listing.listing_title.en}
            </Text>
            <Text variant="listingStreet">{listing.listing_street.en}</Text>
          </Box>
        ))}
      </MotiBox>
      <Button
        variant="primary"
        marginTop="l"
        onPress={() => {
          navigation.push('Locations');
        }}>
        <Text variant="buttonLabelOnDarkSurface">DISCOVER MORE</Text>
      </Button>
    </Box>
  );
}

const featuredListings = [
  {
    image:
      'https://www.limehome.com/wp-content/uploads/2022/07/limehome-haro-calle-de-la-vega-str-4A-one-bedroom-dining-room-view.jpg',
    country: {
      code: 'ES',
      name: {
        de: 'Spanien',
        en: 'Spain',
        es: 'España',
      },
    },
    listing_title: {
      de: 'haro',
      en: 'haro',
      es: 'haro',
      nl: 'haro',
    },
    listing_street: {
      de: 'Calle de la Vega',
      en: 'Calle de la Vega',
      es: 'Calle de la Vega',
      nl: 'Calle de la Vega',
    },
  },
  {
    image:
      'https://www.limehome.com/wp-content/uploads/2022/05/limehome-frankfurt-am-main-gutleutstr-701-superior-suite-bedroom.jpg',
    country: {
      code: 'DE',
      name: {
        de: 'Deutschland',
        en: 'Germany',
        es: 'Alemania',
      },
    },
    listing_title: {
      de: 'frankfurt',
      en: 'frankfurt',
      es: 'fráncfort',
      nl: null,
    },
    listing_street: {
      de: 'Gutleutstraße',
      en: 'Gutleutstraße',
      es: ' Gutleutstraße',
    },
  },
  {
    image:
      'https://www.limehome.com/wp-content/uploads/2022/06/limehome-hannover-bleichenstr-5-exterior-Two-Bedroom-Penthouse-Suite-XXL-with-sofa-bed-rooftop-terrace-502-terraceoverview.jpg',
    country: {
      code: 'DE',
      name: {
        de: 'Deutschland',
        en: 'Germany',
        es: 'Alemania',
      },
    },
    listing_title: {
      de: 'hannover',
      en: 'hannover',
      es: 'hannover',
    },
    listing_street: {
      de: 'Bleichenstraße',
      en: 'Bleichenstraße',
      es: 'Bleichenstraße',
    },
  },
  {
    image:
      'https://www.limehome.com/wp-content/uploads/2022/06/limehome-sevilla-TorcuatoLucaDeTena-str-rooftop-terrace.jpg',
    country: {
      code: 'ES',
      name: {
        de: 'Spanien',
        en: 'Spain',
        es: 'España',
      },
    },
    listing_title: {
      de: 'sevilla',
      en: 'seville',
      es: 'sevilla',
      nl: null,
    },
    listing_street: {
      de: 'Torcuato Luca de Tena',
      en: 'Torcuato Luca de Tena',
      es: 'Torcuato Luca de Tena',
    },
  },
];
