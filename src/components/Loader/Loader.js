import React from "react";
import {  CircleLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <CircleLoader size={150} color="#640000" />
    </div>
  );
}

export default Loader;
