import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { ResizeMode, Video } from 'expo-av';
import { Alert, ImageBackground } from 'react-native';

import { Theme } from '../theme';
import Box from '../theme/Box';
import MotiBox from '../theme/MotiBox';
import Text from '../theme/Text';
import { Button } from '../theme/Touchable';

const VIDEO_URL =
  'https://www.limehome.com/wp-content/uploads/2021/12/limehome_video_export_20.12_1.mp4';
const BACKGROUND_IMAGE_URL =
  'https://www.limehome.com/wp-content/uploads/2022/02/limehome_texture-palette_feature-fleck-peach_web-1.jpg';

export function ExploreMore() {
  const { spacing } = useTheme<Theme>();
  const isFocused = useIsFocused();
  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      backgroundColor="surface-decorative-two"
      marginHorizontal="m">
      <ImageBackground
        source={{
          uri: BACKGROUND_IMAGE_URL,
        }}>
        <Box flex={1} alignItems="center" paddingVertical="l">
          <Text variant="sectionTitle" color="text-decorative-one">
            explore us
          </Text>
          {isFocused ? (
            <Video
              source={{
                uri: VIDEO_URL,
              }}
              style={{
                width: '94%',
                aspectRatio: 16 / 9,
                borderRadius: 8,
                marginTop: spacing.l,
                marginBottom: spacing.m,
              }}
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              shouldPlay
            />
          ) : null}
          <Text variant="description" marginTop="s" paddingHorizontal="l">
            limehome is designed to stay. We design a better place for those who want to change
            their way of travelling, living and working.
          </Text>
          <MotiBox
            flexWrap="wrap"
            marginTop="m"
            flexDirection="row"
            paddingHorizontal="s"
            justifyContent="space-evenly"
          />
          <Button
            variant="decorative"
            marginTop="m"
            onPress={() => {
              Alert.alert('No Op');
            }}>
            <Text variant="buttonLabelOnDarkSurface">EXPLORE MORE</Text>
          </Button>
        </Box>
      </ImageBackground>
    </Box>
  );
}
