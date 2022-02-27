import { fetchAPI } from './api';

export async function getPageData(params) {
  const slug = params.slug.join('/');
  // Find the pages that match this slug
  const { data } = await fetchAPI(`/api/pages?filters[slug][$eq]=${slug}&populate[content][populate]=*&populate[seo][populate]=*`);
  const pageData = data[0]?.attributes;

  // Make sure we found something, otherwise return null
  if (data == null || data.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pageData;
}
