import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.jpeg";
import ozoneheading from "../../assets/ozoneheading.jpeg";

function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <Image
        src={logo}
        alt="logo"
        className={styles.tlelogo}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          window.open("https://tle.mec.ac.in/", "_blank");
        }}
      />
      <Image
        src={ozoneheading}
        alt="ozoneheading"
        onClick={() => {
          window.open("https://bit.ly/TLE_Ozone", "_blank");
        }}
        style={{
          cursor: "pointer",
        }}
        className={styles.ozoneheading}
      />
    </div>
  );
}

export default Navbar;
