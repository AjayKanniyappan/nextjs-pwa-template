import ApiClient from '@services/ApiClient';
import { FACTS_API_URL } from '@constants/index';

const headers: cat.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

/**
 * It makes a GET request to the Cat Facts API, and returns the response data if the request is
 * successful
 * @param {string} path - The path to the facts API endpoint.
 * @returns A function that returns a promise that resolves to a cat.Facts object.
 */
async function getFacts(path: string): Promise<cat.Facts> {
  const api = new ApiClient(FACTS_API_URL, headers);
  const { data, status } = await api.get(path);
  if (status === 200) {
    return data;
  }
  throw new Error('An unexpected error occurred');
}

export default getFacts;
