import { BackgroundColor } from '@bacons/expo-background-color';
import { useTheme } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { AnimatePresence, MotiView } from 'moti';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SplashScreen } from '../components/SplashScreen';
import { useTimeout } from '../hooks/useTimeout';
import { Theme } from '../theme';
import { Router } from './Router';

function Root() {
  const { colors } = useTheme<Theme>();
  const [isAppReady, setIsAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Milkman_300Light: require('../../assets/fonts/Milkman-Light.ttf'),
    Gilmer_300Light: require('../../assets/fonts/Gilmer-Light.ttf'),
    Gilmer_500Medium: require('../../assets/fonts/Gilmer-Medium.ttf'),
  });

  useTimeout(function () {
    setIsAppReady(true);
  }, 3000);

  const isReadyToShowHome = isAppReady && fontsLoaded;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <BackgroundColor color={colors['surface-primary']} />

      <AnimatePresence exitBeforeEnter>
        {isReadyToShowHome ? (
          <Router />
        ) : (
          <MotiView
            key={1}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SplashScreen />
          </MotiView>
        )}
      </AnimatePresence>
    </SafeAreaView>
  );
}

export default Root;
