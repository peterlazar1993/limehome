import {
  BoxProps,
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import { Pressable, PressableProps } from 'react-native';

import { Theme } from '.';

type TouchableProps = BoxProps<Theme> & VariantProps<Theme, 'buttonVariants'> & PressableProps;

const Touchable = createRestyleComponent<TouchableProps, Theme>(
  [createVariant({ themeKey: 'buttonVariants' })],
  createBox<Theme>(Pressable)
);

export default Touchable;
