import styles from "../../styles/genericForm.module.css";
import Link from "next/link";

const LoginForm = () => (
  <div className={styles.GenericForm}>
    <h3>Login to Get Organized</h3>
    <form className={styles.formBody}>
      <label className={styles.inputLabel} htmlFor="email">
        Email:
      </label>
      <input
        className={styles.textInput}
        name="email"
        type="text"
        placeholder="Email address"
      />
      <label className={styles.inputLabel} htmlFor="password">
        Password:
      </label>
      <input
        className={styles.textInput}
        name="password"
        type="text"
        placeholder="Password"
      />
      <input className={styles.submit} type="submit" value="Login" />
    </form>
    <div className={styles.signUp}>
      <p>New here?</p>
      <Link href="/">
        <a>Sign Up</a>
      </Link>
    </div>
  </div>
);

export default LoginForm;
