import { Button } from '../shared/button';
import { ROLES } from '../../constants/roles';
import {
  DialogWrapper,
  Dialog,
  DialogTitle,
  UsernameTitle,
  Username,
  SelectRoleTitle,
  SelectRole,
  ButtonWrapper,
} from './styled';

const EditUserDialog = ({ dialogTitle, toggleAddOpen, saveUser, role, username, changeRole }) => (
  <DialogWrapper onClick={() => toggleAddOpen()}>
    <Dialog
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <UsernameTitle>Username:</UsernameTitle>
      <Username>{username}</Username>
      <SelectRoleTitle>Role:</SelectRoleTitle>
      <SelectRole defaultValue={role} onChange={(e) => changeRole(e.target.value)}>
        <option value={ROLES.admin}>{ROLES.admin}</option>
        <option value={ROLES.editor}>{ROLES.editor}</option>
        <option value={ROLES.user}>{ROLES.user}</option>
      </SelectRole>
      <ButtonWrapper onClick={() => saveUser()}>
        <Button>Save changes</Button>
      </ButtonWrapper>
    </Dialog>
  </DialogWrapper>
);

export default EditUserDialog;
