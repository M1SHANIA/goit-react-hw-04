import styles from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <p className={styles.errorMessage}>Error happened. Please try again</p>
  );
}
