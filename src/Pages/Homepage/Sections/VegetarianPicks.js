import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";

import styles from "./VegetarianPicks.module.css";

import LgScreenSwipeMessage from "../../../Components/LgScreenSwipeMessage/LgScreenSwipeMessage";
import SmScreenSwipeMessage from "../../../Components/SmScreenSwipeMessage/SmScreenSwipeMessage";

import MealCardDetails from "../../../Components/MealCardDetails/MealCardDetails";
import MealCardCarousel from "../../../Components/MealCardCarousel";

const VegetarianPicks = () => {
  const [vegetarianPicks, setVegetarianPicks] = useState([]);

  useEffect(() => {
    getVegetarianPicks();
  }, []);

  const getVegetarianPicks = async () => {
    const recipesInLocalStorage = localStorage.getItem("vegetarianPicks");

    if (recipesInLocalStorage) {
      setVegetarianPicks(JSON.parse(recipesInLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("vegetarianPicks", JSON.stringify(data.recipes));
      setVegetarianPicks(data.recipes);
      console.log(data.recipes);
    }
  };

  const recipeInfo = vegetarianPicks.map((recipe) => (
    <SwiperSlide>
      <MealCardDetails
        id={recipe.id}
        key={recipe.id}
        img={recipe.image}
        name={recipe.title}
        duration={recipe.readyInMinutes}
      />
    </SwiperSlide>
  ));

  return (
    <div className={styles.lgScrBackground}>
      <section className={styles.sectionContainer}>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.02 }}
          className={styles.contentContainer}
        >
          <h2 className={styles.heading}>Vegetarian Picks</h2>
          <SmScreenSwipeMessage />
          <LgScreenSwipeMessage />
          <MealCardCarousel>
            <ul>{recipeInfo}</ul>
          </MealCardCarousel>
        </motion.div>
      </section>
    </div>
  );
};

export default VegetarianPicks;
