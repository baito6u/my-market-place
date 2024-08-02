import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } else {
      setCartItems([]);
    }
  }, [userId, isAuthenticated]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, product];
      localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item._id !== productId);
      localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
};

export default CartContext;
