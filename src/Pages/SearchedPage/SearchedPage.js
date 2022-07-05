import styles from "./SearchedPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { Link } from "react-router-dom";
import Logo from "../../Assets/SvgComponents/Logo";
import { motion } from "framer-motion";

const SearchedPage = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearchedItem = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`
    );
    const recipes = await data.json();
    console.log(recipes.results);
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearchedItem(params.search);
  }, [params.search]);

  return (
    <motion.div
      className={styles.lgScrBackground}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <section className={styles.sectionContainer}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        <h1 className={styles.heading}>
          {params.search.charAt(0).toUpperCase() + params.search.slice(1)}
        </h1>
        <div className={styles.contentContainer}>
          {searchedRecipes.map((recipe) => {
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

export default SearchedPage;
