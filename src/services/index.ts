// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

export default async function getUsers() {
  try {
    const { data, status } = await axios.get<GetUsersResponse>('test', {
      headers: {
        Accept: 'application/json',
      },
    });
    // console.log(JSON.stringify(data, null, 4));
    // console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // console.log('error message: ', error.message);
      return error.message;
    }
    // console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}
