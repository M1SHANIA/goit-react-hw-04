import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ handleLoadMore }) {
  return (
    <div className={styles.container}>
      <button onClick={() => handleLoadMore()} className={styles.btn}>
        Load more
      </button>
    </div>
  );
}
