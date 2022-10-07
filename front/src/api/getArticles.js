import { useQuery } from 'react-query';
import axios from 'axios';

import getToken from '../utils/getTokenFronStorage';

const useGetArticles = () =>
  useQuery('articles', async () => {
    const token = getToken();
    const config = {
      method: 'get',
      url: 'http://localhost:4000/articles',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await axios(config);
    return response.data;
  });

export default useGetArticles;
