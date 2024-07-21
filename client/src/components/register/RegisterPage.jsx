import { useContext } from "react";
import styles from "./RegisterPage.module.css";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  Repass: "repass"
};

function RegisterPage() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.Repass]: "",
  });

  return (
    <div className={styles.register}>
      <h2>Register</h2>
      <form id="register" onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={onChange} value={values[RegisterFormKeys.Username]}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={onChange} value={values[RegisterFormKeys.Email]}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={onChange} value={values[RegisterFormKeys.Password]}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" id="repass" name="repass" onChange={onChange} value={values[RegisterFormKeys.Repass]}/>
        </div>
        <button type="submit">Register</button>
        <p className="field">
          <span>
            If you already have profile click <a href="/login">here</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
