import Menu from './menu';
import { LayoutWrapper, PageContent } from './styled';

const Layout = (props) => (
  <LayoutWrapper>
    <Menu pagename={props.pagename} />
    <PageContent>{props.children}</PageContent>
  </LayoutWrapper>
);

export default Layout;
