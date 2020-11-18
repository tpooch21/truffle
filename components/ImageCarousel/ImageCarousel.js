import { useState } from "react";
import styles from "./ImageCarousel.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";

import ImageLayout from "./ImageLayout";

const ImageCarousel = () => {
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
      <div className={styles.CarouselContainer}>
        <button
          onClick={() => changeSlide(false)}
          type="button"
          className={styles.arrowBtn}
          disabled={currentSlide === 0}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <ImageLayout current={currentSlide} />
        <button
          onClick={() => changeSlide(true)}
          type="button"
          className={styles.arrowBtn}
          disabled={currentSlide === 3}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default ImageCarousel;
