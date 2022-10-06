import UserModel from '../models/User.js';

const getAllUsers = async (request, response) => {
  const users = await UserModel.findAll();
  response.status(200).send(users);
};

const updateUser = async (request, response) => {
  const user = await UserModel.findByPk(request.params.id);
  user.set({
    role: request.body.role,
  });
  await user.save();
  response.status(200).send(user);
};

export { getAllUsers, updateUser };
