import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div
        className={styles.footer_button}
        onClick={() => {
          window.open("https://bit.ly/TLE_Ozone", "_blank");
        }}
      >
        {"Register for O(zone) 2.0"}
      </div>
      <div className={styles.social_icons}>
        <BsGlobe
          className={styles.social_icon}
          onClick={() => window.open("https://tle.mec.ac.in/", "_blank")}
        />
        <FaInstagram
          className={styles.social_icon}
          onClick={() =>
            window.open("http://www.instagram.com/tle.mec/", "_blank")
          }
        />
        <FaLinkedin
          className={styles.social_icon}
          onClick={() =>
            window.open("https://www.linkedin.com/company/tle-mec/", "_blank")
          }
        />
        <FaYoutube
          className={styles.social_icon}
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCs_SoUB3FdeUQ5E892Vq8OQ",
              "_blank"
            )
          }
        />
      </div>
      <div className={styles.footer_text}>Made with ❤️ TLE MEC 2023</div>
    </div>
  );
}

export default Footer;
