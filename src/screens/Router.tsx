import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

import { HomeTabParamList, LocationsStackParamList, RootStackParamList } from '../navigation/types';
import { Theme } from '../theme';
import { Home } from './Home';
import { LocationsList } from './LocationsList';
import { LocationsMap } from './LocationsMap';
import { Playground } from './Playground';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const LocationsStack = createNativeStackNavigator<LocationsStackParamList>();
const HomeTab = createBottomTabNavigator<HomeTabParamList>();

export const Router = () => {
  const { colors } = useTheme<Theme>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors['surface-primary'] },
          animation: Platform.select({ android: 'fade_from_bottom', ios: 'default' }),
        }}>
        <RootStack.Screen name="Root" component={HomeTabNavigator} />
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
      <HomeTab.Screen name="Home" component={Home} />
      <HomeTab.Screen name="Locations" component={LocationsStackNavigator} />
      <HomeTab.Screen name="Saved" component={Playground} />
      <HomeTab.Screen name="Profile" component={Playground} />
    </HomeTab.Navigator>
  );
}

function LocationsStackNavigator() {
  return (
    <LocationsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="List">
      <LocationsStack.Screen name="List" component={LocationsList} />
      <LocationsStack.Screen name="Map" component={LocationsMap} />
    </LocationsStack.Navigator>
  );
}
