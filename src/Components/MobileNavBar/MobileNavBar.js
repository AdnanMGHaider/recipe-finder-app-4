import styles from "./MobileNavBar.module.css";
import CloseIcon from "../../Assets/SvgComponents/CloseIcon";
import { Link as SLink } from "react-scroll";
// import { scroller } from "react-scroll";

const MobileNavBar = ({ mobileNavBarIsOpen, toggle }) => {
  return (
    <aside
      className={`${styles.mobileNavBarContainer} ${
        mobileNavBarIsOpen && styles.opened
      }`}
      onClick={toggle}
    >
      <CloseIcon className={styles.closeIcon} onClick={toggle} />
      <ul className={styles.mobileNavBarMenuWrapper}>
        {/* <li> */}
        <SLink
          className={styles.mobileNavBarMenuItem}
          onClick={toggle}
          to="picks"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          OUR PICKS
        </SLink>
        {/* </li> */}
        {/* <li> */}
        <SLink
          className={styles.mobileNavBarMenuItem}
          onClick={toggle}
          to="cuisines"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          CUISINES
        </SLink>
        {/* </li> */}
        {/* <li> */}
        <SLink
          className={styles.mobileNavBarMenuItem}
          onClick={toggle}
          to="team"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          OUR TEAM
        </SLink>
        {/* </li> */}
        {/* <li> */}
        <SLink
          className={styles.mobileNavBarMenuItem}
          onClick={toggle}
          to="testimonials"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          TESTIMONIALS
        </SLink>
        {/* </li> */}
      </ul>
    </aside>
  );
};

export default MobileNavBar;
