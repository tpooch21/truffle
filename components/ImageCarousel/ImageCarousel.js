import styles from "./ImageCarousel.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";

const imagePaths = [
  "/boardImages/beach.jpg",
  "/boardImages/canyon.jpg",
  "/boardImages/cinqueterre.jpg",
  "/boardImages/florence.jpg",
  "/boardImages/forest.jpg",
  "/boardImages/halfdome.jpg",
  "/boardImages/lake.jpg",
  "/boardImages/mountain.jpg",
  "/boardImages/northernlights.jpg",
  "/boardImages/rainbowsky.jpg",
];

const ImageCarousel = () => (
  <IconContext.Provider value={{ className: styles.arrowIcon }}>
    <div className={styles.CarouselContainer}>
      <button type="button" className={styles.arrowBtn}>
        <IoMdArrowDropleftCircle />
      </button>
      <section className={styles.ImageCarousel}>
        {imagePaths.map((path) => (
          <button
            type="button"
            className={styles.btnImage}
            style={{ backgroundImage: `url(${path})` }}
            key={path}
          />
        ))}
      </section>
      <button type="button" className={styles.arrowBtn}>
        <IoMdArrowDroprightCircle />
      </button>
    </div>
  </IconContext.Provider>
);

export default ImageCarousel;
