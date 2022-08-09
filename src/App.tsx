import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Todos';
import TodosContextProvider from './context/TodosContext';
import './styles/App.sass';

const App = (): JSX.Element => {
  return (
    <TodosContextProvider>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <main>
            <Outlet />
            <Home />
          </main>
        </div>
      </div>
    </TodosContextProvider>
  );
};

export default App;
