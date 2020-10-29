import styles from "./HomeContainer.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const HomeContainer = () => (
  <div className={styles.HomeContainer}>
    <h1>
      Welcome to <span>Truffle</span>
    </h1>
    <LoginForm />
  </div>
);

export default HomeContainer;
