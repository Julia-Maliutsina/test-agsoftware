import { useQuery } from 'react-query';
import axios from 'axios';

import getToken from '../utils/getTokenFronStorage';

const useGetUsers = () =>
  useQuery('users', async () => {
    const token = getToken();
    const config = {
      method: 'get',
      url: 'http://localhost:4000/users',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await axios(config);
    return response.data;
  });

export default useGetUsers;
