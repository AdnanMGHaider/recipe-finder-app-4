import styles from "./HamburgerMenuIcon.module.css";

const HamburgerMenuIcon = ({ toggle }) => {
  return (
    <svg
      onClick={toggle}
      className={styles.hamburgerMenuIcon}
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99 89.45"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,43.36A25.27,25.27,0,0,1,1.92,39.1a9.26,9.26,0,0,1,7.86-4H88.65a10.59,10.59,0,0,1,7.2,2.53,9.63,9.63,0,0,1,0,14.14A10.14,10.14,0,0,1,89,54.3q-39.53,0-79.06,0A9.62,9.62,0,0,1,.16,46.4,1.17,1.17,0,0,0,0,46.06Z" />
          <path d="M0,8.35A11.37,11.37,0,0,1,2.48,3.21,9.58,9.58,0,0,1,9.1,0c.35,0,.71,0,1.06,0q39.35,0,78.7,0A9.92,9.92,0,0,1,97,3.81c3.93,4.87,1.63,12.8-4.33,14.71a12.85,12.85,0,0,1-3.88.62c-26.2,0-52.4,0-78.61.05A9.91,9.91,0,0,1,.14,11.11,1,1,0,0,0,0,10.87Z" />
          <path d="M0,78.55a12.34,12.34,0,0,1,2.27-4.83,9.77,9.77,0,0,1,6.88-3.45c.32,0,.64,0,1,0h78.8A9.61,9.61,0,0,1,98,75.68a9.49,9.49,0,0,1-5.37,13.11,13.63,13.63,0,0,1-4,.59c-26.11,0-52.21,0-78.32.07-5,0-9.33-3.15-10.21-8A1.58,1.58,0,0,0,0,81.06Z" />
        </g>
      </g>
    </svg>
  );
};

export default HamburgerMenuIcon;