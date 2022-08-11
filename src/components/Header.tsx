import { NavLink, useLocation } from 'react-router-dom';

const Header = (): JSX.Element => {
  const location = useLocation().pathname;

  return (
    <header className='Header'>
      <h1>TODO</h1>
      <nav>
        {location === '/' ? (
          <NavLink to='add' title='add new todo'>
            <span>+</span>
          </NavLink>
        ) : (
          <NavLink to='/' title='Close'>
            <span className='home'>x</span>
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
