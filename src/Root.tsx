import { BackgroundColor } from '@bacons/expo-background-color';
import { useTheme } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { AnimatePresence, MotiView } from 'moti';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from './components/Logo';
import { SplashScreen } from './components/SplashScreen';
import { useTimeout } from './hooks/useTimeout';
import { Theme } from './theme';
import MotiBox from './theme/MotiBox';
import Text from './theme/Text';

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
      <BackgroundColor color={colors.background} />

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
  return (
    <MotiBox key={2} flex={1} paddingTop="s">
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
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
            duration: 600,
            type: 'timing',
          }}>
          <Logo />
        </MotiBox>
        <MotiBox
          delay={700}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 600,
            type: 'timing',
          }}
          flex={1}
          width="100%"
          alignItems="center"
          paddingHorizontal="xl">
          <Text variant="sectionTitle" color="decorative-one-surface">
            our locations
          </Text>
          <Text variant="description" marginTop="s">
            Discover our wide variety of locations across Europe. All our limehomes are situated in
            prime locations, conveniently connected to public transport &amp; our suites are
            suitable for short city trips as well as longer business stays. Stay tuned!
          </Text>
        </MotiBox>
      </ScrollView>
    </MotiBox>
  );
}
export default Root;

const featured = {
  image:
    'https://www.limehome.com/wp-content/uploads/2022/07/limehome-haro-calle-de-la-vega-str-4A-one-bedroom-dining-room-view.jpg',
};
