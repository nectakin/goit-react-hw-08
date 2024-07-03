
import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
