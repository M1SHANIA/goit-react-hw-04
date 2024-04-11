import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ gallery, handleModal }) {
  const handleClick = (bigImage) => {
    handleModal(bigImage);
  };

  return (
    <>
      <ul className={styles.gridContainer}>
        {gallery.map(({ id, urls: { small, regular }, description }) => {
          return (
            <li className={styles.gridlI} key={id}>
              <ImageCard
                src={small}
                alt={description}
                onClick={() =>
                  handleClick({ id, urls: { small, regular }, description })
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
