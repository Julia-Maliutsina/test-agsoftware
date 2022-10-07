import axios from 'axios';

const updateUser = async (id, newRole) => {
  let updatedUser = {
    role: newRole,
  };
  JSON.stringify(updatedUser);
  const config = {
    method: 'put',
    url: `http://localhost:4000/users/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: updatedUser,
  };
  const response = await axios(config);
  return response.data;
};

export default updateUser;
