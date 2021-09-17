import { fetchAPI } from './api';

export async function getPageData(params) {
  const slug = params.slug.join('/');
  // Find the pages that match this slug
  const pagesData = await fetchAPI(`/pages?slug=${slug}`);

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
}
