import styles from "./ImageCarousel.module.css";

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
  <section className={styles.ImageCarousel}>
    {imagePaths.map((path) => (
      <button
        className={styles.btnImage}
        style={{ backgroundImage: `url(${path})` }}
        key={path}
      />
    ))}
  </section>
);

export default ImageCarousel;
