import { createTheme } from '@shopify/restyle';
import { TextStyle } from 'react-native';

import { palette } from './palette';

const colors = {
  'surface-primary': palette['orange-200'],
  'surface-decorative-one': palette['grassGreen-500'],
  'surface-decorative-two': palette['orange-1300'],
  'text-on-dark': palette['orange-200'],
  'text-on-light': palette['gray-4400'],
  'text-decorative-one': palette['orange-1300'],
};
type Color = keyof typeof colors;

/**
 *
 * DO NOT USE fontWeight, fontStyle fields, instead use the appropriate
 * fontFamily by mapping the fontWeight/fontStyle to the fontFamily
 *
 * 100	Thin (Hairline)
 * 200	Extra Light (Ultra Light)
 * 300	Light
 * 300	Light Italic              -
 * 400	Normal (Regular)          - PlayfairDisplay_400Regular
 * 400	Normal Italic (Italic)    -
 * 500	Medium                    -
 * 600	Semi Bold (Semi Bold)
 * 700	Bold                      -
 * 800	Extra Bold (Ultra Bold)
 * 900	Black (Heavy)
 * 950	Extra Black (Ultra Black)
 */
type FontFamily = 'Milkman_300Light' | 'Gilmer_300Light' | 'Gilmer_500Medium';

type ReStyleTextStyle = TextStyle & {
  color?: Color;
  backgroundColor?: Color;
  fontFamily?: FontFamily;
};

// const textVariants: Record<string, ReStyleTextStyle> = {
const textVariants = {
  defaults: {},
  sectionTitle: {
    fontFamily: 'Milkman_300Light',
    fontSize: 40,
  },
  listingTitle: {
    fontFamily: 'Milkman_300Light',
    fontSize: 30,
    color: 'text-on-light',
  },
  heading: {
    fontFamily: 'Milkman_300Light',
    fontSize: 24,
    color: 'text-on-light',
    letterSpacing: -0.5,
  },
  subheading: {
    fontFamily: 'Milkman_300Light',
    fontSize: 16,
    color: 'text-on-light',
    lineHeight: 24,
  },
  propertyCount: {
    fontFamily: 'Gilmer_500Medium',
    fontSize: 12,
    color: 'text-on-light',
  },
  listingStreet: {
    fontFamily: 'Gilmer_500Medium',
    fontSize: 15,
    color: 'text-on-light',
  },
  description: {
    fontFamily: 'Gilmer_500Medium',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 21,
    color: 'text-on-light',
  },
  buttonLabelOnDarkSurface: {
    fontFamily: 'Gilmer_500Medium',
    fontSize: 12,
    color: 'text-on-dark',
    letterSpacing: 2,
  },
};

const buttonVariants = {
  defaults: {},
  primary: {
    backgroundColor: 'surface-decorative-one',
    padding: 'm',
    borderRadius: 10,
    minWidth: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    padding: 'm',
    borderRadius: 10,
    minWidth: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorative: {
    backgroundColor: 'surface-decorative-two',
    padding: 'm',
    borderRadius: 10,
    minWidth: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const theme = createTheme({
  colors,
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants,
  buttonVariants,
});

type Theme = typeof theme;
export { theme, Theme };
