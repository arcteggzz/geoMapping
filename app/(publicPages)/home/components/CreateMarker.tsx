"use client";

import styles from "../styles/CreateMarker.module.scss";

const CreateMarker = () => {
  return (
    <form className={styles.CreateMarker}>
      <input type="text" placeholder="Enter your Location name" />
      <button className={styles.create_button}>Create</button>
    </form>
  );
};

export default CreateMarker;
