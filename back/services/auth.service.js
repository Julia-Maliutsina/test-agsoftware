import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import UserModel from '../models/User.js';
import { KEY } from '../routes/config.js';

const generateAccessToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, KEY);
};

const login = async ({ username, password }) => {
  if (!username || !password) {
    return { status: 'error', message: 'Invalid parameters' };
  }

  const user = await UserModel.findOne({ where: { username } });
  if (!user) {
    return { status: 'error', message: 'User is not found' };
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return { status: 'error', message: 'Invalid password' };
  }

  const accessToken = generateAccessToken(user.id, user.role);
  const userInfo = {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    role: user.role,
    username: user.username,
  };

  return { status: 'ok', userInfo, accessToken };
};

const authService = { login };

export default authService;
