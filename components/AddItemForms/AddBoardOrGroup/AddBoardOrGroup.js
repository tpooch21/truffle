import { useEffect, useState } from "react";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

// item will evaluate to either 'board' or 'group'
const AddBoardOrGroup = ({ item, onSubmit, input, onUserInput, error }) => {
  // This will only be used if the user is adding a board
  const [currentImagePath, selectImage] = useState("");
  const [noImageSelectedError, toggleImageError] = useState(false);

  const cap = item.charAt(0).toUpperCase() + item.slice(1);
  const isBoard = item === "board";

  const textErrorMessage =
    item === "board"
      ? "Please give your board a name"
      : "Please give your group a name";

  const handleImageSelection = (path) => {
    selectImage(path);
    toggleImageError(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (currentImagePath === "" && input !== "") {
          toggleImageError(true);
          return;
        }
        onSubmit(e, isBoard, currentImagePath);
      }}
      className="form-body"
    >
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
      {error && <p className="invalid-input">{textErrorMessage}</p>}
      {isBoard && (
        <ImageCarousel
          currentImg={currentImagePath}
          selectImage={handleImageSelection}
          imageError={noImageSelectedError}
        />
      )}
      <input className="submit" type="submit" value={`Add ${cap}`} />
    </form>
  );
};

export default AddBoardOrGroup;
