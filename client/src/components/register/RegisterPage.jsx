import React from 'react';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.register}>
      <h2>Register</h2>
      <form>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
