import styles from "../LoginForm/LoginForm.module.css";

const AddBoardForm = () => (
  <>
    <form className={styles.formBody}>
      <label className={styles.inputLabel} for="name">
        Board Name:
      </label>
      <input
        className={styles.email}
        name="name"
        type="text"
        placeholder="Enter a name for your board"
        value=""
      />
      <input className={styles.submit} type="submit" value="Add Board" />
    </form>
  </>
);

export default AddBoardForm;
