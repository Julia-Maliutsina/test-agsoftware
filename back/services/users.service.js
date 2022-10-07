import UserModel from '../models/User.js';

const getAllUsers = async () => {
  return UserModel.findAll();
};

const updateUser = async ({ id, role }) => {
  const user = await UserModel.findByPk(id);
  user.set({
    role: role,
  });
  await user.save();
  return user;
};

const userService = { getAllUsers, updateUser };

export default userService;
