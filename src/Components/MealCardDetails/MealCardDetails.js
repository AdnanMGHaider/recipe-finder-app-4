import styles from "./MealCardDetails.module.css";
import DurationIcon from "../../Assets/SvgComponents/DurationIcon";
import LinkButton from "../../Components/LinkButton/LinkButton";

const MealCardDetails = (props) => {
  return (
    <li className={styles.card}>
      <img className={styles.cardImg} src={props.img} alt={props.altText} />
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardInfoWrapper}>
          <h2 className={styles.mealName}>{props.name}</h2>
          <span className={styles.mealDurationWrapper}>
            <DurationIcon className={styles.durationIcon} />
            <p className={styles.mealDuration}>{props.duration} mins</p>
          </span>
          <LinkButton to={"/recipe/" + props.id}>Get the recipe</LinkButton>
        </div>
      </div>
    </li>
  );
};

export default MealCardDetails;
