import { useState } from 'react';

import EditUserDialog from './EditUserDialog';
import updateUser from '../../api/updateUser';

const EditUserContainer = ({ toggleEditOpen, user }) => {
  const [role, setRole] = useState(user.role);

  const closeEdit = () => {
    toggleEditOpen({});
  };

  const saveUser = () => {
    if (user.role !== role) {
      updateUser(user.id, role);
      closeEdit();
    } else {
      closeEdit();
    }
  };

  const changeRole = (roleValue) => {
    setRole(roleValue);
  };

  return (
    <EditUserDialog
      dialogTitle="Edit user's role"
      toggleAddOpen={closeEdit}
      saveUser={saveUser}
      role={role}
      username={user.username}
      changeRole={changeRole}
    />
  );
};

export default EditUserContainer;
