import { Layout } from '../../components/layout';
import { User, UserName, UserLogin, UserRoleWrapper, UserRole } from './styled';

const Users = ({ users }) => (
  <Layout pagename="users">
    {users.map((user) => (
      <User key={user.id}>
        <UserName>
          {user.name} {user.lastName}
        </UserName>
        <UserLogin>{user.username}</UserLogin>
        <UserRoleWrapper>
          <UserRole role={user.role}>{user.role}</UserRole>
        </UserRoleWrapper>
      </User>
    ))}
  </Layout>
);

export default Users;
