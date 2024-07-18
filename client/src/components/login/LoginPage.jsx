import React from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
