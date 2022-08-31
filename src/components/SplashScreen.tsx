import { MotiView } from 'moti';
import { useWindowDimensions } from 'react-native';

import { Logo } from './Logo';

export function SplashScreen() {
  const windowHeight = useWindowDimensions().height;
  return (
    <MotiView
      style={{
        width: '60%',
      }}
      from={{ translateY: 10, opacity: 1 }}
      animate={{ translateY: -10, opacity: 1 }}
      exit={{
        translateY: windowHeight * 0.7,
        opacity: 0.8,
      }}
      transition={{
        type: 'timing',
        duration: 800,
        loop: true,
      }}>
      <Logo />
    </MotiView>
  );
}
