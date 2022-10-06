import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ArticlesPage, EditPage, UsersPage } from './pages';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="articles" />} />
            <Route path="articles" key="articles" element={<ArticlesPage pagename="articles" />} />
            <Route path="edit" key="edit" element={<EditPage pagename="edit" />} />
            <Route path="users" key="users" element={<UsersPage pagename="users" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
