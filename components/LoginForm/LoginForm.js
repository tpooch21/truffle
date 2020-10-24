import styles from "./LoginForm.module.css";

const LoginForm = () => (
  <form className={styles.LoginForm}>
    <label className={styles.inputLabel} for="email">
      Email:
    </label>
    <input
      className={styles.email}
      name="email"
      type="text"
      placeholder="Email address"
    />
    <label className={styles.inputLabel} for="password">
      Password:
    </label>
    <input
      className={styles.password}
      name="password"
      type="text"
      placeholder="Password"
    />
    <input className={styles.submit} type="submit" />
  </form>
);

export default LoginForm;
