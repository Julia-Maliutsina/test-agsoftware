import { useQuery } from 'react-query';
import axios from 'axios';

const useGetUsers = () =>
  useQuery('users', async () => {
    const response = await axios.get('http://localhost:4000/users');
    return response.data;
  });

export default useGetUsers;
