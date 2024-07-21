import { useContext } from "react";

import styles from "./LoginPage.module.css";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
  Email: "email",
  Password: "password"
}

function LoginPage() {
  const {loginSubmitHandler} = useContext(AuthContext)
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
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
          name={LoginFormKeys.Email} 
          onChange={onChange} 
          value={values[LoginFormKeys.Email]}
          />

        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
          va
            type="password"
            id="password"
            name={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
