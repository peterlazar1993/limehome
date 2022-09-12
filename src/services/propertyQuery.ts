import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { fetchProperty } from '../network/api';
import { APIResponseBase } from './propertiesForCityQuery';

export const usePropertyQuery = (property_id: number) =>
  useQuery(getQueryKeyForPropertiesForCityQuery(property_id), () => getProperty({ property_id }));

const getQueryKeyForPropertiesForCityQuery = (property_id: number) => ['property', property_id];

const getProperty = ({ property_id }: { property_id: number }) =>
  fetchProperty({ property_id }).then((r) => {
    const parsedResult = Property.safeParse(r);
    if (parsedResult.success) {
      return parsedResult.data.payload;
    } else {
      throw parsedResult.error;
    }
  });

const Property = APIResponseBase.extend({
  payload: z.object({
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
    description: z.string(),
    additional_services: z.null(),
    parking: z.string(),
    things_to_know: z.string(),
    house_rules: z.string(),
    images: z.array(
      z.object({
        url: z.string(),
        is_portrait: z.boolean(),
        position: z.number(),
        unit_group_ids: z.array(z.number()),
        tags: z.array(z.string()),
      })
    ),
    lowest_price_per_night: z.null(),
    lowest_price_per_month: z.null(),
    default_check_in_time: z.string(),
    default_check_out_time: z.string(),
    unit_groups: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        custom_title: z.string(),
        external_id: z.string(),
        name: z.string(),
        max_guests: z.number(),
        rental_type: z.string(),
        bedroom_count: z.number(),
        lowest_price_per_night: z.null(),
        lowest_price_per_month: z.null(),
        spaces: z.array(
          z.object({
            icon: z.string(),
            name: z.string(),
            name_plural: z.string(),
            slug: z.string(),
            value: z.number(),
          })
        ),
        amenities: z.array(z.object({ icon: z.string(), name: z.string() })),
        images: z.array(
          z.object({
            url: z.string(),
            is_portrait: z.boolean(),
            position: z.number(),
          })
        ),
      })
    ),
  }),
});
