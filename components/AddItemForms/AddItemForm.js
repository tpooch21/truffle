import Modal from "../UI/Modal/Modal";
import AddBoardOrGroup from "./AddBoardOrGroup/AddBoardOrGroup";

const AddItemForm = ({
  input,
  onUserInput,
  onSubmit,
  show,
  close,
  addBoard,
  modalGroupName,
  error,
}) => {
  const message = addBoard
    ? `Add Board to ${modalGroupName}`
    : "Add a New Group";
  const item = addBoard ? "board" : "group";

  return (
    <Modal show={show} close={close}>
      <header>
        <h2>{message}</h2>
      </header>
      <AddBoardOrGroup
        item={item}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        input={input}
        error={error}
      />
    </Modal>
  );
};

export default AddItemForm;
