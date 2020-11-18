import styles from "./ImageCarousel.module.css";

const imagePaths0 = [
  "/boardImages/beach.jpg",
  "/boardImages/canyon.jpg",
  "/boardImages/cinqueterre.jpg",
];

const imagePaths1 = [
  "/boardImages/florence.jpg",
  "/boardImages/forest.jpg",
  "/boardImages/halfdome.jpg",
];

const imagePaths2 = [
  "/boardImages/lake.jpg",
  "/boardImages/northernlights.jpg",
  "/boardImages/mountain.jpg",
];

const imagePaths3 = ["/boardImages/rainbowsky.jpg"];

const ImageLayout = ({ current }) => {
  let imagesToShow;
  if (current === 0) imagesToShow = imagePaths0;
  else if (current === 1) imagesToShow = imagePaths1;
  else if (current === 2) imagesToShow = imagePaths2;
  else imagesToShow = imagePaths3;

  return (
    <section className={styles.ImageChunk}>
      {imagesToShow.map((path) => (
        <img src={path} key={path} className={styles.imgOption} />
      ))}
    </section>
  );
};

export default ImageLayout;
