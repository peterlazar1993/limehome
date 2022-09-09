import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

import { HomeTabParamList, RootStackParamList } from '../navigation/types';
import { Theme } from '../theme';
import { Home } from './Home';
import { Locations } from './Locations';
import { Playground } from './Playground';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeTab = createBottomTabNavigator<HomeTabParamList>();

export const Router = () => {
  const { colors } = useTheme<Theme>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors['surface-primary'] },
          animation: Platform.select({ android: 'fade_from_bottom', ios: 'default' }),
        }}>
        <RootStack.Screen name="Home" component={HomeTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

function HomeTabNavigator() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeTab.Screen name="Search" component={Home} />
      <HomeTab.Screen name="Map" component={Locations} />
      <HomeTab.Screen name="Saved" component={Playground} />
      <HomeTab.Screen name="Profile" component={Playground} />
    </HomeTab.Navigator>
  );
}
