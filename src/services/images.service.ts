import ApiClient from '@services/ApiClient';
import { CAT_IMAGE_API_URL } from '@constants/index';

const headers: cat.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

/**
 * It makes a GET request to the Cat Image API, and returns the response data if the request is
 * successful
 * @param {string} path - The path to the API endpoint.
 * @returns A promise that resolves to an object with a data property that is an array of cat images.
 */
async function getImages(path: string): Promise<cat.Images> {
  const api = new ApiClient(CAT_IMAGE_API_URL, headers);
  const { data, status } = await api.get(path);
  if (status === 200) {
    return data;
  }
  throw new Error('An unexpected error occurred');
}

export default getImages;
