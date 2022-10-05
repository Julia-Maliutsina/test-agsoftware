import { Link } from 'react-router-dom';

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

const MENU = ['articles', 'edit', 'users'];

const Menu = ({ pagename }) => (
  <MenuWrapper>
    <nav>
      <MenuList>
        {MENU.map((item) => (
          <Link key={item} to={`/${item}`}>
            <MenuItem selected={pagename === item}>{item}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </nav>
    <User>
      <UserInfo>
        <UserName>Name Surname</UserName>
        <UserRole>role</UserRole>
      </UserInfo>
      <LogOutButton>Log out</LogOutButton>
    </User>
  </MenuWrapper>
);

export default Menu;
