import styles from "./Accordion.module.css";
import Dropdown from "../Dropdown/Dropdown";
import FacebookIcon from "../../Assets/SvgComponents/FacebookIcon";
import TwitterIcon from "../../Assets/SvgComponents/TwitterIcon";
import InstagramIcon from "../../Assets/SvgComponents/InstagramIcon";
import PinterestIcon from "../../Assets/SvgComponents/PinterestIcon";
import NextArrowIcon from "../../Assets/SvgComponents/NextArrowIcon";

const Accordion = () => {
  return (
    <div className={styles.accordionContainer}>
      <Dropdown label={<h5 className={styles.siteMapHeading}>SITE MAP</h5>}>
        <li className={styles.siteMapLi}>Recipes and Menus</li>
        <li className={styles.siteMapLi}>Expert Advice</li>
        <li className={styles.siteMapLi}>Ingredients</li>
        <li className={styles.siteMapLi}>Holidays and Events</li>
        <li className={styles.siteMapLi}>Video</li>
      </Dropdown>
      <Dropdown label={<h5 className={styles.learnMoreHeading}>LEARN MORE</h5>}>
        <li className={styles.learnMoreLi}>About Us</li>
        <li className={styles.learnMoreLi}>Contact Us</li>
        <li className={styles.learnMoreLi}>Subscribe</li>
        <li className={styles.learnMoreLi}>Advertise</li>
        <li className={styles.learnMoreLi}>Contact Licensing</li>
        <li className={styles.learnMoreLi}>Careers</li>
      </Dropdown>
      <Dropdown label={<h5 className={styles.connectHeading}>CONNECT</h5>}>
        <li
          className={`${styles.connectLi} ${styles.socialMediaIconsContainer}`}
        >
          <FacebookIcon className={styles.socialMediaIcons} />
          <TwitterIcon className={styles.socialMediaIcons} />
          <InstagramIcon className={styles.socialMediaIcons} />
          <PinterestIcon className={styles.socialMediaIcons} />
        </li>
        <li className={styles.connectLi}>Subscribe to our Newsletter</li>
      </Dropdown>
    </div>
  );
};

export default Accordion;
