import UserModel from '../models/User.js';

const getAllUsers = async (request, response) => {
  const users = await UserModel.findAll();
  response.status(200).send(users);
};

export { getAllUsers };
