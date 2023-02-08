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
        style={{
          pointerEvents: "none",
        }}
        className={styles.ozoneheading}
      />
    </div>
  );
}

export default Navbar;
