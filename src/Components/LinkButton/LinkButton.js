import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link className={`${styles.linkButton} ${props.className}`} to={props.to}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
