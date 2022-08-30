import { BackgroundColor } from '@bacons/expo-background-color';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from './theme';
import Box from './theme/Box';

const Root = () => {
  const { colors } = useTheme<Theme>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundColor color={colors.mainBackground} />
      <Box flex={1} justifyContent="center" alignItems="center" />
    </SafeAreaView>
  );
};

export default Root;
