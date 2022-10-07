import axios from 'axios';

import getToken from '../utils/getTokenFronStorage';

const updateUser = async (id, newRole) => {
  const token = getToken();
  let updatedUser = {
    role: newRole,
  };
  JSON.stringify(updatedUser);
  const config = {
    method: 'put',
    url: `http://localhost:4000/users/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    data: updatedUser,
  };
  const response = await axios(config);
  window.location.reload();
  return response.data;
};

export default updateUser;
