import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">My Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;