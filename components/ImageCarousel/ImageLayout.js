import styles from "./ImageCarousel.module.css";

const imagePaths0 = [
  "/boardImages/beach.jpg",
  "/boardImages/canyon.jpg",
  "/boardImages/cinqueterre.jpg",
  "/boardImages/florence.jpg",
  "/boardImages/forest.jpg",
];

const imagePaths1 = [
  "/boardImages/halfdome.jpg",
  "/boardImages/lake.jpg",
  "/boardImages/northernlights.jpg",
  "/boardImages/mountain.jpg",
  "/boardImages/rainbowsky.jpg",
];

const ImageLayout = ({ current }) => {
  const imagesToShow = current ? imagePaths1 : imagePaths0;
  return (
    <section className={styles.imageChunk}>
      {imagesToShow.map((path) => (
        <img src={path} key={path} className={styles.btnImage} />
      ))}
    </section>
  );
};

export default ImageLayout;
