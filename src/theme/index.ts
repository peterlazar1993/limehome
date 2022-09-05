import { createTheme } from '@shopify/restyle';
import { TextStyle } from 'react-native';

import { palette } from './palette';

const colors = {
  background: palette['orange-200'],
  'decorative-one-surface': palette['grassGreen-500'],
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
  description: {
    fontFamily: 'Gilmer_500Medium',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
  },
};

const theme = createTheme({
  colors,
  spacing: {
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
});

export type Theme = typeof theme;
export { theme };
