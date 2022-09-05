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
      from={{ translateY: 10 }}
      animate={{ translateY: -10 }}
      exit={{
        translateY: windowHeight,
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
