import styles from "./RecipePage.module.css";
import Logo from "../../Assets/SvgComponents/Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const RecipePage = () => {
  const [details, setDetails] = useState({});
  let params = useParams();
  const fetchRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData);
    console.log(detailData.cuisines);
    setDetails(detailData);
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

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
        <h2 className={styles.heading}>{details.title}</h2>
        <div className={styles.contentContainer}>
          <div className={styles.imageWrapper}>
            <img src={details.image} alt={details.title} />
          </div>
          <div className={styles.durationWrapper}>
            <h4>Duration</h4>
            <span>
              <p>{`${details.readyInMinutes} mins`}</p>
            </span>
          </div>
          <div className={styles.servingWrapper}>
            <h4>Serving</h4>
            <span>
              <p>{details.servings}</p>
            </span>
          </div>
          <div className={styles.cuisineTypeWrapper}>
            <h4>Cuisine Type</h4>
            <ul>
              {details.cuisines?.length > 0 ? (
                details.cuisines?.map((cuisine) => {
                  return (
                    <li className={styles.cuisineTypeDataText}>{cuisine}</li>
                  );
                })
              ) : (
                <li className={styles.cuisineTypeNoDataText}>
                  No information found!
                </li>
              )}
            </ul>
          </div>
          <div className={styles.dietTypeWrapper}>
            <h4>Diet Type</h4>
            <ul>
              {details.diets?.length > 0 ? (
                details.diets?.map((diet) => {
                  return (
                    <li className={styles.dietTypeDataText}>
                      {diet.charAt(0).toUpperCase() + diet.slice(1)}
                    </li>
                  );
                })
              ) : (
                <li className={styles.dietTypeNoDataText}>
                  No information found!
                </li>
              )}
            </ul>
          </div>
          <div className={styles.ingredientsWrapper}>
            <h4>Ingredients</h4>
            <ul>
              {details.extendedIngredients?.length > 0 ? (
                details.extendedIngredients?.map((ingredient) => {
                  return (
                    <li className={styles.ingredientsDataText}>{`${
                      ingredient.nameClean?.charAt(0).toUpperCase() +
                      ingredient.nameClean?.slice(1)
                    }: ${ingredient.amount} ${ingredient.unit}`}</li>
                  );
                })
              ) : (
                <li className={styles.ingredientsNoDataText}>
                  No information found!
                </li>
              )}
            </ul>
          </div>
          <div className={styles.instructionsWrapper}>
            <h4>Cooking Instructions</h4>
            <ol>
              {details.analyzedInstructions?.length > 0 ? (
                details.analyzedInstructions?.[0]?.steps?.map((step) => {
                  return (
                    <li className={styles.instructionsDataText}>{step.step}</li>
                  );
                })
              ) : (
                <p className={styles.instructionsNoDataText}>
                  No information found!
                </p>
              )}
            </ol>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RecipePage;
