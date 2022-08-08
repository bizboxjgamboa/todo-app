import { Outlet } from 'react-router-dom';
import './styles/App.sass';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Outlet />
      Test
    </div>
  );
};

export default App;
