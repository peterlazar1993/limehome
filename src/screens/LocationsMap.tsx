import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { Map } from '../components/maps/Map';
import { LocationsStackParamList } from '../navigation/types';
import { usePropertiesForCityQuery } from '../services/propertiesForCityQuery';

export const LocationsMap = ({ route }: NativeStackScreenProps<LocationsStackParamList>) => {
  const city_id = route.params.city_id;
  const { data, isLoading, error } = usePropertiesForCityQuery(city_id);

  if (error || isLoading) {
    return null;
  }

  if (data) {
    return <Map data={data} />;
  }
  return null;
};
