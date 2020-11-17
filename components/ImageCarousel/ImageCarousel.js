import { useState } from "react";
import styles from "./ImageCarousel.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";

import ImageLayout from "./ImageLayout";

const ImageCarousel = () => {
  const [currentSlide, toggleSlide] = useState(0);

  return (
    <IconContext.Provider value={{ className: styles.arrowIcon }}>
      <div className={styles.CarouselContainer}>
        <button type="button" className={styles.arrowBtn}>
          <IoMdArrowDropleftCircle />
        </button>
        <ImageLayout current={currentSlide} />
        <button type="button" className={styles.arrowBtn}>
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default ImageCarousel;
