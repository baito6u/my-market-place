import { useContext, useState } from "react";
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
  const [serverError, setServerError] = useState("");
  const [validationError, setValidationError] = useState("");
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.Repass]: "",
  });

  async function handleSubmit() {
    setValidationError(""); // Clear previous validation error
    setServerError(""); // Clear previous server error

    if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.Repass]) {
      setValidationError("Passwords do not match.");
      return;
    }

    try {
      await registerSubmitHandler(values);
    } catch (error) {
      setServerError(error.message);
    }
  }

  return (
    <div className={styles.register}>
      <h2>Register</h2>
      {validationError && <p className={styles.error}>{validationError}</p>}
      {serverError && <p className={styles.error}>{serverError}</p>}
      <form id="register" onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            onChange={onChange} 
            value={values[RegisterFormKeys.Username]} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={onChange} 
            value={values[RegisterFormKeys.Email]} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={onChange} 
            value={values[RegisterFormKeys.Password]} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="repass">Confirm Password:</label>
          <input 
            type="password" 
            id="repass" 
            name="repass" 
            onChange={onChange} 
            value={values[RegisterFormKeys.Repass]} 
          />
        </div>
        <button type="submit">Register</button>
        <p className="field">
          <span>
            If you already have a profile click <a href="/login">here</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
