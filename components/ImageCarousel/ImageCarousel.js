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
      </section>
    </IconContext.Provider>
  );
};

export default ImageCarousel;
