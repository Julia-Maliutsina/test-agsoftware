import { Link } from 'react-router-dom';
import { ROLES } from '../../../constants/roles';

import userInfo from '../../../utils/getUserFromStorage';
import {
  MenuWrapper,
  MenuList,
  MenuItem,
  User,
  UserInfo,
  UserName,
  UserRole,
  LogOutButton,
} from './styled';

let menu = ['articles', 'edit', 'users'];

const Menu = ({ pagename }) => {
  const checkRole = (user) => {
    if (user.role === ROLES.user) {
      menu = menu.slice(0, 1);
    }
    if (user.role === ROLES.editor) {
      menu = menu.slice(0, 2);
    }
  };
  const user = userInfo();
  checkRole(user);
  const logOut = () => {
    localStorage.clear();
    window.location = '/signin';
  };

  return (
    <MenuWrapper>
      <nav>
        <MenuList>
          {menu.map((item) => (
            <Link key={item} to={`/${item}`}>
              <MenuItem selected={pagename === item}>{item}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </nav>
      <User>
        <UserInfo>
          <UserName>
            {user.name} {user.lastName}
          </UserName>
          <UserRole>{user.role}</UserRole>
        </UserInfo>
        <LogOutButton onClick={() => logOut()}>Log out</LogOutButton>
      </User>
    </MenuWrapper>
  );
};

export default Menu;
