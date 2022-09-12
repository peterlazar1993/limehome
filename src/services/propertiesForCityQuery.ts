import { useQuery } from '@tanstack/react-query';
import z from 'zod';

import { fetchPropertiesForCity } from '../network/api';

export const usePropertiesForCityQuery = (city_id: number) =>
  useQuery(getQueryKeyForPropertiesForCityQuery(city_id), () => getPropertiesForCity({ city_id }));

const getQueryKeyForPropertiesForCityQuery = (city_id: number) => ['propertiesForCity', city_id];

const getPropertiesForCity = ({ city_id }: { city_id: number }) =>
  fetchPropertiesForCity({ city_id }).then((r) => {
    const parsedResult = PropertiesForCity.safeParse(r);
    if (parsedResult.success) {
      return parsedResult.data.payload;
    } else {
      throw parsedResult.error;
    }
  });

export const APIResponseBase = z.object({ message: z.string(), success: z.boolean() });

const PropertiesForCity = APIResponseBase.extend({
  payload: z.array(
    z.object({
      id: z.number(),
      external_id: z.string(),
      review_widget_id: z.string().nullish(),
      name: z.string(),
      city: z.string(),
      city_id: z.number(),
      street: z.string(),
      location: z.object({
        lat: z.number(),
        lng: z.number(),
        city: z.string(),
        postalCode: z.string(),
        countryCode: z.string(),
        addressLine1: z.string(),
        countryName: z.string(),
      }),
      distance: z.number(),
      images: z.array(
        z.object({
          url: z.string(),
          is_portrait: z.boolean(),
          position: z.number(),
          unit_group_ids: z.array(z.number().nullish()),
          tags: z.array(z.string().nullish()),
        })
      ),
      lowest_price_per_night: z.null(),
      lowest_price_per_month: z.null(),
      unit_groups: z.array(
        z.object({
          id: z.number(),
          bedroom_count: z.number(),
          lowest_price_per_night: z.null(),
          lowest_price_per_month: z.null(),
        })
      ),
    })
  ),
});
