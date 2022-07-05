import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import styles from "./PopularPicks.module.css";
import LgScreenSwipeMessage from "../../../../Components/LgScreenSwipeMessage/LgScreenSwipeMessage";
import SmScreenSwipeMessage from "../../../../Components/SmScreenSwipeMessage/SmScreenSwipeMessage";
import MealCardDetails from "../../../../Components/MealCardDetails/MealCardDetails";
// import MealCardDetails from ;
import MealCardCarousel from "../../../../Components/MealCardCarousel";

const PopularPicks = () => {
  const [popularPicks, setPopularPicks] = useState([]);

  useEffect(() => {
    getPopularPicks();
  }, []);

  const getPopularPicks = async () => {
    const recipesInLocalStorage = localStorage.getItem("popularPicks");

    if (recipesInLocalStorage) {
      setPopularPicks(JSON.parse(recipesInLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popularPicks", JSON.stringify(data.recipes));
      setPopularPicks(data.recipes);
      console.log(data.recipes);
    }
  };

  const recipeInfo = popularPicks.map((recipe) => (
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
      <section
        name="testingScroll"
        id="picks"
        className={styles.sectionContainer}
      >
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.02 }}
          className={styles.contentContainer}
        >
          <h2 className={styles.heading}>Popular Picks</h2>
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
export default PopularPicks;
