import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import SearchBar from "../../../../Components/SearchBar/SearchBar";

import Noodles from "../../../../Assets/Images/Noodles.jpg";
import RaspberryCheeseCake from "../../../../Assets/Images/RaspberryCheeseCake.jpg";
import Fish from "../../../../Assets/Images/Fish.jpg";
import Ribs from "../../../../Assets/Images/Ribs.jpg";

const HeroSection = () => {
  return (
    <div className={styles.lgScrBackground}>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>Look it Up & Cook it Up!</h1>
          <p className={styles.bodyText}>
            Search or discover your next meal from our wide, and ever growing
            selection of mouth-watering recipes.
          </p>
          <SearchBar />
          <motion.img
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            src={Ribs}
            className={styles.lgScrRibs}
          />
          <motion.img
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            src={Noodles}
            className={styles.lgScrNoodles}
          />
          <div className={styles.mobileScrImgContainer}>
            <img src={Fish} className={styles.mobileScrFish} />
            <img src={Ribs} className={styles.mobileScrRibs} />
            <img src={Noodles} className={styles.mobileScrNoodles} />
            <img
              src={RaspberryCheeseCake}
              className={styles.mobileScrRaspberryCheeseCake}
            />
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, translateX: 100, translateY: -100 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 1.5 }}
          className={styles.lgScrFish}
          src={Fish}
          alt="Fish"
        />
        <motion.img
          initial={{ opacity: 0, translateX: -100, translateY: -100 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 1.5 }}
          className={styles.lgScrRaspberryCheeseCake}
          src={RaspberryCheeseCake}
          alt="Biriyani"
        />
      </section>
    </div>
  );
  // <section className={styles.sectionContainer}>
  //   <div className={styles.contentContainer}>
  //     <h1 className={styles.heading}>Look it Up & Cook it Up !</h1>
  //     <p className={styles.bodyText}>
  //       Search or discover your next meal from our wide, and ever growing
  //       selection of mouth-watering recipes.
  //     </p>
  //     <SearchBar />
  //     </div>
  //     <div className={styles.imageGridContainer}>
  //       <img className={styles.noodles} src={Noodles} />
  //       <img className={styles.biriyani} src={Biriyani} />
  //       <img className={styles.fish} src={Fish} />
  //       <img className={styles.ribs} src={Ribs} />
  //     </div>
  //   </div>
  // </section>
};

export default HeroSection;
