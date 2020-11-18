import { useEffect, useState } from "react";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";

// item will evaluate to either 'board' or 'group'
const AddBoardOrGroup = ({ item, onSubmit, input, onUserInput }) => {
  // This will only be used if the user is adding a board
  const [currentImagePath, selectImage] = useState("");

  const cap = item.charAt(0).toUpperCase() + item.slice(1);
  const isBoard = item === "board";

  return (
    <form
      onSubmit={(e) => onSubmit(e, isBoard, currentImagePath)}
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
      {isBoard && (
        <ImageCarousel
          currentImg={currentImagePath}
          selectImage={selectImage}
        />
      )}
      <input className="submit" type="submit" value={`Add ${cap}`} />
    </form>
  );
};

export default AddBoardOrGroup;
