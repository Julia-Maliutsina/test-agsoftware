import jwt from 'jsonwebtoken';

import { KEY } from '../routes/config.js';

const roleCheck = (validRoles) => {
  return (request, response, next) => {
    try {
      const token = request.headers.authorization.split(' ')[1];
      if (!token) {
        return response.status(403).send({ message: 'User is not authorized' });
      }
      let hasAccess = false;
      const userRole = jwt.verify(token, KEY).role;
      if (validRoles.includes(userRole)) {
        hasAccess = true;
      }
      if (!hasAccess) {
        return response.status(403).send({ message: "You can't have access to this data" });
      }
      next();
    } catch (e) {
      console.log(e);
      return response.status(403).send({ message: 'User is not authorized' });
    }
  };
};

export default roleCheck;
