import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js';
import { KEY } from '../routes/config.js';

const generateAccessToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, KEY);
};

const logIn = async (request, response) => {
  try {
    const user = await UserModel.findOne({ where: { username: request.body.username } });
    if (!user) {
      return response.status(400).send({ message: `User is not found` });
    }
    const validPassword = request.body.password === user.password;
    if (!validPassword) {
      return response.status(400).send({ message: `Invalid password` });
    }
    const accessToken = generateAccessToken(user.id, user.role);
    const userInfo = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      role: user.role,
      username: user.username,
    };
    response.status(200).send({ token: accessToken, user: userInfo });
    return;
  } catch (e) {
    console.log(e);
  }
};

export { logIn };
