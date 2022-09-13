import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<HomeTabParamList>;
  PropertyDetails: { property_id: number };
};

export type LocationsStackParamList = {
  List: undefined;
  Map: { city_id: number };
};

export type HomeTabParamList = {
  Home: undefined;
  Locations: NavigatorScreenParams<LocationsStackParamList>;
  Saved: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type LocationsStackScreenProps<T extends keyof LocationsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<LocationsStackParamList, T>,
    HomeTabScreenProps<'Locations'>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
