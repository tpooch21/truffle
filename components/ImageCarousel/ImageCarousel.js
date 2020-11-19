import { useState } from "react";
import styles from "./ImageCarousel.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";

import ImageLayout from "./ImageLayout";

const ImageCarousel = ({ currentImg, selectImage, imageError }) => {
  const [currentSlide, toggleSlide] = useState(0);

  const changeSlide = (next) => {
    if (next) {
      toggleSlide(currentSlide + 1);
    } else {
      toggleSlide(currentSlide - 1);
    }
  };

  return (
    <IconContext.Provider value={{ className: styles.arrowIcon }}>
      <section className={styles.ImageCarousel}>
        <label className="input-label" style={{ width: "85%" }}>
          Choose a Background Image for Your Board:
        </label>
        <div className={styles.CarouselContainer}>
          <button
            onClick={() => changeSlide(false)}
            type="button"
            className={styles.arrowBtn}
            disabled={currentSlide === 0}
          >
            <IoMdArrowDropleftCircle />
          </button>
          <ImageLayout
            currentSlide={currentSlide}
            currentImg={currentImg}
            select={selectImage}
          />
          <button
            onClick={() => changeSlide(true)}
            type="button"
            className={styles.arrowBtn}
            disabled={currentSlide === 3}
          >
            <IoMdArrowDroprightCircle />
          </button>
        </div>
        {imageError && (
          <p className="invalid-input" style={{ width: "85%" }}>
            Please select an image for your board
          </p>
        )}
      </section>
    </IconContext.Provider>
  );
};

export default ImageCarousel;
