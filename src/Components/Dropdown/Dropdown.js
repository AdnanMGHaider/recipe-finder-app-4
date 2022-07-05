import { useState } from "react";
import NextArrowIcon from "../../Assets/SvgComponents/NextArrowIcon";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={styles.dropDownTitleContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}{" "}
        {isOpen ? (
          <NextArrowIcon className={styles.pointingDown} />
        ) : (
          <NextArrowIcon className={styles.pointingRight} />
        )}
      </div>
      <ul
        className={
          isOpen
            ? `${styles.dropDownContentContainer} ${styles.show}`
            : styles.dropDownContentContainer
        }
      >
        {props.children}
      </ul>
    </div>
  );
};

export default Dropdown;
