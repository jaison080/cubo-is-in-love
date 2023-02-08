import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.jpeg";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <Image src={logo} alt="logo" />
    </div>
  );
}

export default Navbar;
