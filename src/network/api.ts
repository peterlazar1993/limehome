import ky from 'ky';

const api = ky.create({
  fetch,
  prefixUrl: 'https://api.limehome.com',
});

export const fetchPropertiesForCity = ({ city_id }: { city_id: number }) => {
  return api.get(`properties/v1/public/properties/?cityId=${city_id}&adults=1`).json();
};

export const getProperty = ({ property_id }: { property_id: number }) => {
  return api.get(`properties/v1/public/properties/${property_id}`).json();
};
