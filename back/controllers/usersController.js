import UserModel from '../models/User.js';
import userService from '../services/users.service.js';

const getAllUsers = async (request, response) => {
  const users = await userService.getAllUsers();
  response.status(200).send(users);
};

const updateUser = async (request, response) => {
  const id = request.params.id;
  const { role } = request.body;
  const user = await userService.updateUser({ id, role });
  response.status(200).send(user);
};

export { getAllUsers, updateUser };
