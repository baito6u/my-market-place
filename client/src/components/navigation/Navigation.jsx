import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

import AuthContext from "../../contexts/authContext";

function Navigation() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">My Market Place</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        {isAuthenticated && (
          <div id="user">
            <span> | {username}'s profile |</span>
            <li>
              <Link to="/create">Add Product</Link>
            </li>
            <li>
              <Link to="/cart">My Cart</Link>
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
