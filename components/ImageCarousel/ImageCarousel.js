import styles from "./ImageCarousel.module.css";

import dynamic from "next/dynamic";
import { imagePaths } from "./CarouselBuild";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <IconContext.Provider value={{ className: styles.arrowIcon }}>
      <div className={styles.CarouselContainer}>
        {/* <button type="button" className={styles.arrowBtn}>
          <IoMdArrowDropleftCircle />
        </button> */}

        <Carousel>
          {imagePaths.map((path) => (
            <Carousel.Item>
              <img className={styles.btnImage} src={path} key={path} />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* <button type="button" className={styles.arrowBtn}>
          <IoMdArrowDroprightCircle />
        </button> */}
      </div>
    </IconContext.Provider>
  );
};

export default ImageCarousel;
