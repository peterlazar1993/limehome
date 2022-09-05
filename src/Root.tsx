import { BackgroundColor } from '@bacons/expo-background-color';
import { useTheme } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { AnimatePresence, MotiView } from 'moti';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExploreMore } from './components/ExploreMore';
import { FeaturedLocations } from './components/FeaturedLocations';
import { Logo } from './components/Logo';
import { SplashScreen } from './components/SplashScreen';
import { useTimeout } from './hooks/useTimeout';
import { Theme } from './theme';
import Box from './theme/Box';
import MotiBox from './theme/MotiBox';

function Root() {
  const { colors } = useTheme<Theme>();
  const [isAppReady, setIsAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Milkman_300Light: require('../assets/fonts/Milkman-Light.ttf'),
    Gilmer_300Light: require('../assets/fonts/Gilmer-Light.ttf'),
    Gilmer_500Medium: require('../assets/fonts/Gilmer-Medium.ttf'),
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
          <Home />
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

function Home() {
  const { spacing } = useTheme<Theme>();
  return (
    <MotiBox key={2} flex={1} paddingTop="s">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: spacing.m }}>
        <MotiBox
          width={70}
          aspectRatio={1}
          marginVertical="s"
          from={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          transition={{
            duration: 300,
            type: 'timing',
          }}>
          <Logo />
        </MotiBox>
        <MotiBox
          delay={350}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 300,
            type: 'timing',
          }}
          flex={1}
          width="100%">
          <FeaturedLocations />
          <Box marginTop="xl">
            <ExploreMore />
          </Box>
        </MotiBox>
      </ScrollView>
    </MotiBox>
  );
}
export default Root;
