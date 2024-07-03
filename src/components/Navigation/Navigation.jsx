
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import AuthNav from '../AuthNav/AuthNav';

import UserMenu from '../UserMenu';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navigation}>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
export default Navigation;
