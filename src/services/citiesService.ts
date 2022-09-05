import groupBy from 'lodash/groupBy';

import countries from './countries.json';
import properties from './properties.json';

export function getCitiesWithProperties() {
  const allCities = countries
    .flatMap((c) => c.cities)
    .sort((a, b) => a.name.en.localeCompare(b.name.en));

  const propertiesByCity = groupBy(properties.payload, 'city_id');

  const s = allCities.flatMap((c) => {
    const propertiesForCity = propertiesByCity[c.id];
    if (propertiesForCity) {
      return [{ ...c, properties: propertiesForCity }];
    } else {
      return [];
    }
  });

  return s;
}

export const getImageForProperties = (
  properties: ReturnType<typeof getCitiesWithProperties>[number]['properties']
) => {
  for (let index = 0; index < properties.length; index++) {
    const image = properties[index].images.find((i) => !i.is_portrait);
    if (image) {
      return `${image.url}?w=320&h=195&fit=crop&auto=format`;
    }
  }
  return 'https://limehome.imgix.net/cities/28/53201cd1-8c03-4e5e-9fa2-e307230523d8.jpg?w=320&h=195&fit=crop&auto=format';
};
