import { Footer, Loader, Navbar } from "@/components";
import CustomTitle from "@/utils/customTitle";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ozonecubo from "../assets/ozonecubo.jpeg";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <>
        <CustomTitle title="O(zone) 2.0" />
        <Loader />
      </>
    );
  }

  return (
    <>
      <CustomTitle title="O(zone) 2.0" />
      <div className={styles.homepage__container}>
        <Navbar />
        <div className={styles.main_container}>
          <div data-aos="zoom-in">
            <Image
              src={ozonecubo}
              alt="ozonecubo"
              style={{
                pointerEvents: "none",
              }}
              className={styles.ozonecubo}
            />
          </div>
          <div className={styles.text_1} data-aos="fade-up">
            Catch me if you can 15-40 km above you
          </div>
          <div
            className={styles.text_2}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find your X....but don't stop there....listen to Spotify premium
            with your EX for an ad free experience
          </div>
          <div
            className={styles.text_3}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Equation: 100x+95 =134
          </div>
          <div
            className={styles.text_4}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Here's a song for you…
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className={styles.music_link}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(
                "https://open.spotify.com/track/1tZQJiCrjMuWZkNdtClr2Z?si=EjP_LNbFSF-8q-BlystXKQ",
                "_blank"
              );
            }}
          >
            Call me by 90sFlav
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
