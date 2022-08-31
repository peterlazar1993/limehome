import { createTheme } from '@shopify/restyle';

import { palette } from './palette';

const theme = createTheme({
  colors: {
    background: palette['orange-200'],
    'decorative-one-surface': palette['grassGreen-500'],
  },
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
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export { theme };
