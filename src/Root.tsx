import { BackgroundColor } from '@bacons/expo-background-color';
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

  useTimeout(function () {
    setIsAppReady(true);
  }, 3000);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundColor color={colors.background} />

      <AnimatePresence exitBeforeEnter>
        {isAppReady ? (
          <MotiView
            key={2}
            from={{ scale: 0.5, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.5,
              opacity: 0,
            }}
            style={{
              width: 100,
              aspectRatio: 1,
            }}>
            <Logo />
          </MotiView>
        ) : (
          <SplashScreen key={1} />
        )}
      </AnimatePresence>
    </SafeAreaView>
  );
}

export default Root;
