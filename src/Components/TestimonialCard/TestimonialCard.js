import styles from "./TestimonialCard.module.css";
import LeftQuote from "../../Assets/SvgComponents/LeftQuote";
import RightQuote from "../../Assets/SvgComponents/RightQuote";

const TestimonialCard = (props) => {
  return (
    <article className={styles.testimonialCard}>
      <div className={styles.quotesAndDescContainer}>
        <LeftQuote />
        <p className={styles.testimonialDescription}>{props.description}</p>
        <RightQuote />
      </div>
      <div className={styles.imgAndNameContainer}>
        <img
          // className={styles.customerImg}
          src={props.imgSrc}
          alt={props.altText}
        />
        <h4 /*className={styles.customerName}*/>{props.name}</h4>
      </div>
    </article>
  );
};

export default TestimonialCard;
