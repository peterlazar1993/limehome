import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

import { Theme } from '../theme';
import { Home } from './Home';
import { Locations } from './Locations';
import { Playground } from './Playground';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  const { colors } = useTheme<Theme>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors['surface-primary'] },
          animation: Platform.select({ android: 'fade_from_bottom', ios: 'default' }),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen
          options={{ contentStyle: { backgroundColor: 'white' } }}
          name="Playground"
          component={Playground}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Locations: undefined;
  Playground: undefined;
};
