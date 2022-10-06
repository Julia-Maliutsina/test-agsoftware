import useGetUsers from '../../api/getUsers';
import Users from './Users';

const UsersContainer = () => {
  const { data, isLoading } = useGetUsers();

  return isLoading ? 'Loading...' : <Users users={data} />;
};

export default UsersContainer;
