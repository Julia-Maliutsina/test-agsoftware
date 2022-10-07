import { Layout } from '../../components/layout';
import { EditUserDialog } from '../../components/editUser';
import { User, UserName, UserLogin, UserRoleWrapper, UserRole } from './styled';

const Users = ({ users, userInEdit, chooseUserToEdit, authorizedUser }) => (
  <Layout pagename="users">
    {users.map((user) => (
      <User key={user.id}>
        <UserName>
          {user.name} {user.lastName}
        </UserName>
        <UserLogin>{user.username}</UserLogin>
        <UserRoleWrapper>
          <UserRole
            role={user.role}
            onClick={() => {
              if (authorizedUser !== user.id) {
                chooseUserToEdit(user);
              }
            }}
            currentUser={authorizedUser === user.id}
          >
            {user.role}
          </UserRole>
        </UserRoleWrapper>
      </User>
    ))}
    {userInEdit.id && <EditUserDialog toggleEditOpen={chooseUserToEdit} user={userInEdit} />}
  </Layout>
);

export default Users;
