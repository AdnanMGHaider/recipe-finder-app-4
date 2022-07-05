import { useState, useEffect } from "react";
import Logo from "../../Assets/SvgComponents/Logo";
import { Link } from "react-router-dom";
import styles from "./CuisinePage.module.css";
import { useParams } from "react-router-dom";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { motion } from "framer-motion";

const CuisinePage = (props) => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`
    );
    const recipes = await data.json();
    console.log(recipes.results);
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <motion.div
      className={styles.lgScrBackground}
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={styles.sectionContainer}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        <h1 className={styles.heading}>{params.type}</h1>
        <div className={styles.contentContainer}>
          {cuisine.map((recipe) => {
            return (
              <article className={styles.mealCard} key={recipe.id}>
                <img src={recipe.image} alt="" />
                <LinkButton to={"/recipe/" + recipe.id}>
                  {recipe.title}
                </LinkButton>
              </article>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default CuisinePage;
