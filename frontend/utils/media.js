import { getStrapiURL } from './api';

export function getStrapiMedia({ url }) {
  const imageUrl = getStrapiURL(url);
  return imageUrl;
}
