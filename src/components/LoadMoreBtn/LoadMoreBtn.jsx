import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoadMore }) {
  return (
    <div className={styles.container}>
      <button onClick={() => handleLoadMore()} className={styles.btn}>
        Load more
      </button>
    </div>
  );
}
