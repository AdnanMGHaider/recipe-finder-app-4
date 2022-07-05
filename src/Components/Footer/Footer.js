import styles from "./Footer.module.css";
import Logo from "../../Assets/SvgComponents/Logo";
import Accordion from "../../Components/Accordion/Accordion";
import FacebookIcon from "../../Assets/SvgComponents/FacebookIcon";
import TwitterIcon from "../../Assets/SvgComponents/TwitterIcon";
import InstagramIcon from "../../Assets/SvgComponents/InstagramIcon";
import PinterestIcon from "../../Assets/SvgComponents/PinterestIcon";

const Footer = () => {
  return (
    <div className={styles.lgScrBackground}>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <Logo className={styles.logo} />
          <Accordion />
          <div className={styles.footerItemsContainer}>
            <div className={styles.siteMapContainer}>
              <h5 className={styles.siteMapHeading}>SITE MAP</h5>
              <ul className={styles.siteMapUl}>
                <li>Recipes and Menus</li>
                <li>Expert Advice</li>
                <li>Ingredients</li>
                <li>Holidays and Events</li>
                <li>Video</li>
              </ul>
            </div>
            <div className={styles.learnMoreContainer}>
              <h5 className={styles.learnMoreHeading}>LEARN MORE</h5>
              <ul className={styles.learnMoreUl}>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Subscribe</li>
                <li>Advertise</li>
                <li>Contact Licensing</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className={styles.connectContainer}>
              <h5 className={styles.connectHeading}>CONNECT</h5>
              <ul className={styles.connectUl}>
                <li className={styles.socialMediaIconsContainer}>
                  <FacebookIcon className={styles.socialMediaIcons} />
                  <InstagramIcon className={styles.socialMediaIcons} />
                  <TwitterIcon className={styles.socialMediaIcons} />
                  <PinterestIcon className={styles.socialMediaIcons} />
                </li>
                <li>Subscribe to our Newsletter</li>
              </ul>
            </div>
          </div>
          <p className={styles.copyrightMessage}>
            This website is created by <strong>Adnan Haider</strong> © Copyright
            2022.
          </p>
          <p className={styles.allRightsReservedMessage}>
            All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
