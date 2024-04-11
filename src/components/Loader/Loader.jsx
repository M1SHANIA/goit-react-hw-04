import { ThreeDots } from "react-loader-spinner";

import styles from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={styles.container}>
      <ThreeDots
        visible={true}
        height="70"
        width="70"
        color="#007bff"
        radius="30"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
