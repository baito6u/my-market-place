import { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

function LoginPage() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [serverError, setServerError] = useState("");
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  async function handleSubmit() {
    setServerError(""); // Clear previous server error

    try {
      await loginSubmitHandler(values);
    } catch (error) {
      setServerError(error.message);
    }
  }

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      {serverError && <p className={styles.error}>{serverError}</p>}
      <form id="login" onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
        </div>
        <button type="submit">Login</button>
        <p className="field">
          <span>
            If you don't have profile click <a href="/register">here</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
