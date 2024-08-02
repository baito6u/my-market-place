import { useContext } from "react";
import { Navigate } from "react-router-dom";
import styles from "./MyCartPage.module.css";
import CartContext from "../../contexts/cartContext";
import AuthContext from "../../contexts/authContext";

function MyCartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.cart}>
      <h2>My Cart</h2>

      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.title} className={styles.image} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <button onClick={() => removeFromCart(item._id)} className={styles.btn}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="no-products">Your cart is empty!</h3>
      )}
    </div>
  );
}

export default MyCartPage;
