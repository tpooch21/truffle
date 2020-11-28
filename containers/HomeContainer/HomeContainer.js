import styles from "./HomeContainer.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const HomeContainer = () => (
  <div className={styles.HomeContainer}>
    <div className={styles.LoginContainer}>
      <h1>
        Welcome to <span>Truffle</span>
      </h1>
      <LoginForm />
    </div>
    <div className={styles.HomeBackground}></div>
  </div>
);

export default HomeContainer;
