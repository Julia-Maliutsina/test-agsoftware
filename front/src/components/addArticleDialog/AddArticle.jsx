import { Button } from '../shared/button';
import {
  DialogWrapper,
  Dialog,
  DialogTitle,
  InputTitle,
  NewArticleTitle,
  NewArticleText,
} from './styled';

const AddArticle = ({ toggleAddOpen }) => (
  <DialogWrapper onClick={() => toggleAddOpen()}>
    <Dialog
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DialogTitle>Add new article</DialogTitle>
      <InputTitle>Title:</InputTitle>
      <NewArticleTitle maxLength={45} />
      <InputTitle>Text:</InputTitle>
      <NewArticleText maxLength={5000} />
      <Button>Save article</Button>
    </Dialog>
  </DialogWrapper>
);

export default AddArticle;
