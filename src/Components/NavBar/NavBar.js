import { useState } from "react";
import Logo from "../../Assets/SvgComponents/Logo";
import HamburgerMenuIcon from "../../Assets/SvgComponents/HamburgerMenuIcon";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [navBarScroll, setNavBarScroll] = useState(false);

  const addDropShadow = () => {
    if (window.scrollY >= 60) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  };

  window.addEventListener("scroll", addDropShadow);

  return (
    <>
      <nav
        className={`${styles.navBarContainer} ${
          navBarScroll && styles.scrollForContainer
        }`}
      >
        <div className={styles.navBarContentWrapper}>
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>
          <ul className={styles.navBarContentItems}>
            <li className={styles.navBarContentItem}>
              <SLink
                to="picks"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={styles.navBarContentItemLink}
              >
                OUR PICKS
              </SLink>
            </li>
            <li className={styles.navBarContentItem}>
              <SLink
                to="cuisines"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={styles.navBarContentItemLink}
              >
                CUISINES
              </SLink>
            </li>
            <li className={styles.navBarContentItem}>
              <SLink
                to="team"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className={styles.navBarContentItemLink}
              >
                OUR TEAM
              </SLink>
            </li>
            <li className={styles.navBarContentItem}>
              <SLink
                to="testimonials"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={styles.navBarContentItemLink}
              >
                TESTIMONIALS
              </SLink>
            </li>
          </ul>
          <HamburgerMenuIcon toggle={toggle} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
