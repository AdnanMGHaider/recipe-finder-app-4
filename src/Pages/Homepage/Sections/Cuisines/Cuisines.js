import { useState } from "react";
import styles from "./Cuisines.module.css";
import LeafDesign3 from "../../../../Assets/SvgComponents/LeafDesign3";
import NextArrowIcon from "../../../../Assets/SvgComponents/NextArrowIcon";

import Thai from "../../../../Assets/Images/Thai.jpg";
import Indian from "../../../../Assets/Images/Indian.jpg";
import MiddleEastern from "../../../../Assets/Images/MiddleEastern.jpg";
import Italian from "../../../../Assets/Images/Italian.jpg";

import AllCuisinesAccordion from "../../../../Components/AllCuisinesAccordion/AllCuisinesAccordion";
import LinkButton from "../../../../Components/LinkButton/LinkButton";
import LeafDesign4 from "../../../../Assets/SvgComponents/LeafDesign4";

import { Link } from "react-router-dom";

const CUISINE_CARDS = [
  {
    id: "card-1",
    cuisineImgSrc: Thai,
    cuisineType: "Thai",
    altText: "Thai food",
  },
  {
    id: "card-2",
    cuisineImgSrc: Indian,
    cuisineType: "Indian",
    altText: "Indian Food",
  },
  {
    id: "card-3",
    cuisineImgSrc: MiddleEastern,
    cuisineType: "Middle Eastern",
    altText: "Middle Eastern Food",
  },
  {
    id: "card-4",
    cuisineImgSrc: Italian,
    cuisineType: "Italian",
    altText: "Italian Food",
  },
];

const Cuisines = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const accordionToggler = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  const cuisineCard = CUISINE_CARDS.map((cuisine) => (
    <article className={styles.cuisineCard} key={cuisine.id}>
      <img
        className={styles.cuisineImg}
        src={cuisine.cuisineImgSrc}
        alt={cuisine.altText}
      />
      <LinkButton to={`/cuisine/${cuisine.cuisineType}`}>
        {cuisine.cuisineType}
      </LinkButton>
    </article>
  ));
  return (
    <div className={styles.lgScrBackground}>
      <section id="cuisines" className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <LeafDesign3 />
          <h2 className={styles.heading}>Try different Cuisines!</h2>
          <div className={styles.cuisineCardContainer}>{cuisineCard}</div>
          <div className={styles.seeAllCuisinesContainer}>
            <div
              onClick={accordionToggler}
              className={styles.seeAllCuisinesTitleAndArrowContainer}
            >
              <p className={styles.seeAllCuisinesTitle}>See all Cuisines</p>
              {accordionIsOpen ? (
                <NextArrowIcon className={styles.pointingDown} />
              ) : (
                <NextArrowIcon className={styles.pointingRight} />
              )}
            </div>
            <AllCuisinesAccordion
              className={
                accordionIsOpen
                  ? `${styles.allCuisinesAccordion} ${styles.show}`
                  : styles.allCuisinesAccordion
              }
            />
          </div>
          <LeafDesign4 />
        </div>
      </section>
    </div>
  );
};

export default Cuisines;
