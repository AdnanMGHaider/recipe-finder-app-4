import styles from "./AllCuisinesAccordion.module.css";
import { Link } from "react-router-dom";

const ALL_CUISINES = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Irish",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Nordic",
  "Southern",
  "Spanish",
  "Vietnamese",
];

const AllCuisinesAccordion = ({ className }) => {
  return (
    <div className={className}>
      {ALL_CUISINES.map((cuisine) => (
        <Link to={`/cuisine/${cuisine}`} className={styles.singularCuisine}>
          {cuisine}
        </Link>
      ))}
    </div>
  );
};

export default AllCuisinesAccordion;
