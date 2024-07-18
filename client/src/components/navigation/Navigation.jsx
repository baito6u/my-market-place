import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>

        <div id="user">
          <li><Link to="/create">Add Product</Link></li>
          <li><Link to="/cart">My Cart</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </div>

        <div id="guest">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
