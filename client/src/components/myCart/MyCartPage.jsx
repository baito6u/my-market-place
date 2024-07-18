import React from 'react';
import styles from './MyCartPage.module.css';

function MyCartPage() {
  return (
    <div className={styles.cart}>
      <h2>My Cart</h2>
      <p>Your cart is empty.</p>
    </div>
  );
}

export default MyCartPage;
