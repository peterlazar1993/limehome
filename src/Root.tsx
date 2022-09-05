import { BackgroundColor } from '@bacons/expo-background-color';
import { PlayfairDisplay_400Regular, useFonts } from '@expo-google-fonts/playfair-display';
import { useTheme } from '@shopify/restyle';
import { AnimatePresence, MotiView } from 'moti';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from './components/Logo';
import { SplashScreen } from './components/SplashScreen';
import { useTimeout } from './hooks/useTimeout';
import { Theme } from './theme';

function Root() {
  const { colors } = useTheme<Theme>();
  const [isAppReady, setIsAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
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
      <BackgroundColor color={colors.background} />

      <AnimatePresence exitBeforeEnter>
        {isReadyToShowHome ? (
          <MotiView
            key={2}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <MotiView
              from={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.5,
                opacity: 0,
              }}
              transition={{
                duration: 600,
                type: 'timing',
              }}
              style={{
                width: 70,
                aspectRatio: 1,
              }}>
              <Logo />
            </MotiView>
          </MotiView>
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
