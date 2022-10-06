import { useQuery } from 'react-query';
import axios from 'axios';

const useGetArticles = () =>
  useQuery('articles', async () => {
    const response = await axios.get('http://localhost:3000/articles');
    return response.data;
  });

export default useGetArticles;
