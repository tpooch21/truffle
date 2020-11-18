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

const ImageLayout = ({ currentSlide, selectedImage, select }) => {
  let imagesToShow;
  if (currentSlide === 0) imagesToShow = imagePaths0;
  else if (currentSlide === 1) imagesToShow = imagePaths1;
  else if (currentSlide === 2) imagesToShow = imagePaths2;
  else imagesToShow = imagePaths3;

  return (
    <section className={styles.ImageChunk}>
      {imagesToShow.map((path) => {
        const imageClasses = [styles.imgOption];
        if (path === selectedImage) imageClasses.push(styles.selected);
        return (
          <img
            src={path}
            key={path}
            className={imageClasses.join(" ")}
            onClick={() => select(path)}
            alt="nature-background"
          />
        );
      })}
    </section>
  );
};

export default ImageLayout;
