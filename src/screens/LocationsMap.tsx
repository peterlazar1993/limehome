import React from 'react';

import { Map } from '../components/maps/Map';
import { LocationsStackScreenProps } from '../navigation/types';
import { usePropertiesForCityQuery } from '../services/propertiesForCityQuery';

export const LocationsMap = ({ route }: LocationsStackScreenProps<'Map'>) => {
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
