import styles from "./TeamMemberCard.module.css";
import TeamCardLeafDesign1 from "../../Assets/SvgComponents/TeamCardLeafDesign1";
import TeamCardLeafDesign2 from "../../Assets/SvgComponents/TeamCardLeafDesign2";

const TeamMemberCard = (props) => {
  return (
    <article className={styles.teamMemberCard}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.teamMemberImage}
          src={props.imgSrc}
          alt={props.altText}
        />
      </div>
      <div className={styles.nameAndJobDescWrapper}>
        <h4 className={styles.teamMemberName}>{props.name}</h4>
        <p className={styles.teamMemberJobDesc}>{props.jobDesc}</p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
