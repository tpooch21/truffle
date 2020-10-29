import styles from "./GroupList.module.css";

const GroupList = ({ boards }) => (
  <section className={styles.GroupList}>
    <header>
      <h3>Groups</h3>
    </header>
    {boards.map(({ group }) => (
      <p>{group}</p>
    ))}
  </section>
);

export default GroupList;
