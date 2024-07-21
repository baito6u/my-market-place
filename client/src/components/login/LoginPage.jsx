import React from "react";
import useForm from "../../hooks/useForm";

import styles from "./LoginPage.module.css";

function LoginPage() {
  const { values, onChange, onSubmit } = useForm({
    email: "",
    password: "",
  });

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={onChange} 
          value={values.email}
          />

        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
          va
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
