import { useState } from 'react';

import useGetUsers from '../../api/getUsers';
import userInfo from '../../utils/getUserFromStorage';
import Users from './Users';

const UsersContainer = () => {
  const { data, isLoading } = useGetUsers();

  const [userInEdit, setUserInEdit] = useState({});

  const user = userInfo();

  const chooseUserToEdit = (user) => {
    const chosenUser = {
      id: user.id,
      role: user.role,
      username: user.username,
    };
    setUserInEdit(chosenUser);
  };

  return isLoading ? (
    'Loading...'
  ) : (
    <Users
      users={data}
      userInEdit={userInEdit}
      chooseUserToEdit={chooseUserToEdit}
      authorizedUser={user.id}
    />
  );
};

export default UsersContainer;
