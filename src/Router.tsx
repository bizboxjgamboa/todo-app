/* eslint-disable @typescript-eslint/promise-function-async */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import loadable from '@loadable/component';

const NewTodoForm = loadable(() => import('./pages/NewTodoForm'));

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='add' element={<NewTodoForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
