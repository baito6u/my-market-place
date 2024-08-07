import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

import AuthContext from "../../contexts/authContext";
import CartContext from '../../contexts/cartContext';

function Navigation() {
  const { isAuthenticated, username } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">My Market Place</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuthenticated && (
          <div id="user">
            <span> | {username}'s profile |</span>
            <li>
              <Link to="/create">Add Product</Link>
            </li>
            <li className={styles.cart}>
              <Link to="/mycart">My Cart
              {cartItems.length > 0 && (
                <span className={styles.cartCounter}>{cartItems.length}</span>
              )}
              </Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        )}

        {!isAuthenticated && (
        <div id="guest">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </div>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
