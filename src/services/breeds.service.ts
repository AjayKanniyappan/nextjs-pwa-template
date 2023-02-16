import ApiClient from '@services/ApiClient';
import { BREEDS_API_URL } from '@constants/index';

const headers: cat.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

/**
 * It returns a promise that resolves to an object of type `cat.Breeds` or rejects with an error
 * @param {string} path - string - the path to the API endpoint
 * @returns A promise that resolves to an object of type cat.Breeds.
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
