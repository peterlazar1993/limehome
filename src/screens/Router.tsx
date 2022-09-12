import Ionicons from '@expo/vector-icons/Ionicons';
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
import { PropertyDetailsScreen } from './PropertyDetails';

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
        <RootStack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

function HomeTabNavigator() {
  const { colors } = useTheme<Theme>();
  return (
    <HomeTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          borderRadius: 10,
          backgroundColor: colors['surface-decorative-one'],
          height: 60,
        },
      }}>
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-home' : 'md-home-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Locations"
        component={LocationsStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-map' : 'md-map-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Saved"
        component={Playground}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-heart' : 'md-heart-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={Playground}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'md-person-circle' : 'md-person-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
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
