import { Button } from '../../shared/button';
import {
  DialogWrapper,
  Dialog,
  DialogTitle,
  InputTitle,
  NewArticleTitle,
  NewArticleText,
  ButtonWrapper,
} from './styled';

const ArticleDialog = ({
  dialogTitle,
  toggleAddOpen,
  saveArticle,
  title,
  text,
  changeText,
  changeTitle,
}) => (
  <DialogWrapper onClick={() => toggleAddOpen()}>
    <Dialog
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <InputTitle>Title:</InputTitle>
      <NewArticleTitle maxLength={45} value={title} onChange={(e) => changeTitle(e.target.value)} />
      <InputTitle>Text:</InputTitle>
      <NewArticleText
        maxLength={5000}
        onChange={(e) => changeText(e.target.value)}
        defaultValue={text}
      ></NewArticleText>
      <ButtonWrapper onClick={() => saveArticle()}>
        <Button>Save article</Button>
      </ButtonWrapper>
    </Dialog>
  </DialogWrapper>
);

export default ArticleDialog;
