import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className={styles.gridItem}>
      <img className={styles.gridImg} src={src} alt={alt} onClick={onClick} />
    </div>
  );
}
