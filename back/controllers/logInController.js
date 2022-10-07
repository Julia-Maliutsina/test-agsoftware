import authService from '../services/auth.service.js';

const logIn = async (request, response) => {
  try {
    const { username, password } = request.body;
    const login = await authService.login({ username, password });

    if (login.status === 'error') {
      return response.status(400).send({ message: login.message });
    }

    response.status(200).send({ token: login.accessToken, user: login.userInfo });
    return;
  } catch (e) {
    console.log(e);
  }
};

export { logIn };
