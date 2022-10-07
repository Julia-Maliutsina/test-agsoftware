import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ArticlesPage, EditPage, UsersPage, SignInPage } from './pages';
import userInfo from './utils/getUserFromStorage';
import { ROLES } from './constants/roles';

function App() {
  const queryClient = new QueryClient();

  const authorizedUser = userInfo();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {authorizedUser ? (
              <>
                <Route path="/" element={<Navigate replace to="/articles" />} />
                <Route path="signin" key="signin" element={<Navigate replace to="/articles" />} />
                <Route
                  path="articles"
                  key="articles"
                  element={<ArticlesPage pagename="articles" />}
                />
                {(authorizedUser.role === ROLES.editor || authorizedUser.role === ROLES.admin) && (
                  <Route path="edit" key="edit" element={<EditPage pagename="edit" />} />
                )}
                {authorizedUser.role === ROLES.admin && (
                  <Route path="users" key="users" element={<UsersPage pagename="users" />} />
                )}
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate replace to="/signin" />} />
                <Route path="signin" key="signin" element={<SignInPage pagename="signin" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
