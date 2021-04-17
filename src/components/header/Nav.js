import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Nav = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/favorite">
          Favorites
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
