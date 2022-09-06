import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Pressable, ScrollView } from 'react-native';

import { ExploreMore } from '../components/ExploreMore';
import { FeaturedLocations } from '../components/FeaturedLocations';
import { Logo } from '../components/Logo';
import { Theme } from '../theme';
import Box from '../theme/Box';
import MotiBox from '../theme/MotiBox';
import { RootStackParamList } from './Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: ScreenProps) {
  const { spacing } = useTheme<Theme>();
  return (
    <MotiBox key={2} flex={1} paddingTop="s">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: spacing.m }}>
        <Pressable onLongPress={() => navigation.push('Playground')}>
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
        </Pressable>
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
