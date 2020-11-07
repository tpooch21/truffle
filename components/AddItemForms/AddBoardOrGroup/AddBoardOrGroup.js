import styles from "../../../styles/genericForm.module.css";
// item will evaluate to either 'board' or 'group'
const AddBoardOrGroup = ({ item, onSubmit, input, onUserInput }) => {
  const cap = item.charAt(0).toUpperCase() + item.slice(1);
  return (
    <form onSubmit={onSubmit} className={styles.formBody}>
      <label className={styles.inputLabel} htmlFor="name">
        {cap} Name:
      </label>
      <input
        onChange={(e) => onUserInput(e)}
        className={styles.textInput}
        name="name"
        type="text"
        placeholder={`Enter a name for your ${item}`}
        value={input}
      />
      <input className={styles.submit} type="submit" value={`Add ${cap}`} />
    </form>
  );
};

export default AddBoardOrGroup;
