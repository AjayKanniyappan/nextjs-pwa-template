import ApiClient from '@services/ApiClient';
import { BREEDS_API_URL } from '@constants/index';

const headers: cat.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

/**
 * It makes a GET request to the Cat API, and returns the response data if the request is successful
 * @param {string} path - string - The path to the API endpoint.
 * @returns A promise that resolves to an array of cat breeds.
 */
async function getBreeds(path: string): Promise<cat.Breeds> {
  const api = new ApiClient(BREEDS_API_URL, headers);
  const { data, status } = await api.get(path);
  if (status === 200) {
    return data;
  }
  throw new Error('An unexpected error occurred');
}

export default getBreeds;
