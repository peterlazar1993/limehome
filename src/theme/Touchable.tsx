import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import { StyleProp, ViewStyle } from 'react-native';
import { Bounceable, BounceableProps } from 'rn-bounceable';

import { Theme } from '.';

const restyleFunctions = composeRestyleFunctions([layout, border, spacing, backgroundColor]);

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BounceableProps;

export const Touchable = ({ onPress, children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Bounceable onPress={onPress} contentContainerStyle={props.style as StyleProp<ViewStyle>}>
      {children}
    </Bounceable>
  );
};

const variant = createVariant<Theme>({
  themeKey: 'buttonVariants',
  defaults: {},
});

export const Button = createRestyleComponent<VariantProps<Theme, 'buttonVariants'> & Props, Theme>(
  [variant],
  Touchable
);
