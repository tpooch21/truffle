import ImageCarousel from "../../ImageCarousel/ImageCarousel";

// item will evaluate to either 'board' or 'group'
const AddBoardOrGroup = ({ item, onSubmit, input, onUserInput }) => {
  const cap = item.charAt(0).toUpperCase() + item.slice(1);
  const isBoard = item === "board";
  return (
    <form onSubmit={(e) => onSubmit(e, isBoard)} className="form-body">
      <label className="input-label" htmlFor="name">
        {cap} Name:
      </label>
      <input
        onChange={(e) => onUserInput(e)}
        className="text-input"
        name="name"
        type="text"
        placeholder={`Enter a name for your ${item}`}
        value={input}
      />
      {isBoard && <ImageCarousel />}
      <input className="submit" type="submit" value={`Add ${cap}`} />
    </form>
  );
};

export default AddBoardOrGroup;
