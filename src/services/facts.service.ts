import axios from 'axios';
import { FACTS_API_URL } from '@constants/index';

/**
 * It makes a request to the cat facts API, and returns the response data if the request is successful,
 * or an error message if it's not
 * @param {string} count - The number of facts to return.
 * @returns A function that returns a promise that resolves to a string or an object.
 */
async function factsApi(count: string) {
  try {
    const { data, status } = await axios.get<cat.GetFactsResponse>(
      `${FACTS_API_URL}/?count=${count}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    if (status === 200) {
      return data.data;
    }
    throw new Error('An unexpected error occurred');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
}

export default factsApi;
