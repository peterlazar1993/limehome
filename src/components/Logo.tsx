import { useTheme } from '@shopify/restyle';
import { Image } from 'react-native';

import { Theme } from '../theme';
import Box from '../theme/Box';

export function Logo() {
  const { colors } = useTheme<Theme>();
  return (
    <Box
      justifyContent="center"
      bg="decorative-one-surface"
      alignItems="center"
      borderRadius={200}
      aspectRatio={1}>
      <Image
        source={require('../../assets/images/limehome.png')}
        style={{ width: '80%', tintColor: colors.background, position: 'absolute' }}
        resizeMode="contain"
      />
    </Box>
  );
}
