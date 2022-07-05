import styles from "./Testimonials.module.css";
import TestimonialCard from "../../../Components/TestimonialCard/TestimonialCard";
import Peter from "../../../Assets/Images/Testimonials/Peter.jpg";
import Julian from "../../../Assets/Images/Testimonials/Julian.jpg";
import Shamir from "../../../Assets/Images/Testimonials/Shamir.jpg";
import Susan from "../../../Assets/Images/Testimonials/Susan.jpg";
import Amal from "../../../Assets/Images/Testimonials/Amal.jpg";
import Kevin from "../../../Assets/Images/Testimonials/Kevin.jpg";

const TESTIMONIAL_CARDS = [
  {
    id: "card-1",
    name: "Peter Wyatt",
    imgSrc: Peter,
    altText: "Customer image",
    description:
      "I have discovered many recipes here that I've thoroughly enjoyed cooking and eating",
  },
  {
    id: "card-2",
    name: "Julian Cheng",
    imgSrc: Julian,
    altText: "Customer image",
    description:
      "I love Pizza and I've made 8 different types of Pizza from the KookBook",
  },
  {
    id: "card-3",
    name: "Shamir Hussain",
    imgSrc: Shamir,
    altText: "Customer image",
    description:
      "I've never thought of myself as a good cook but learning to cook has never felt easier",
  },
  {
    id: "card-4",
    name: "Susan Jacobs",
    imgSrc: Susan,
    altText: "Customer image",
    description:
      "The vegetarian collection of recipes in here is just amazing!!!",
  },
  {
    id: "card-5",
    name: "Amal Khalid",
    imgSrc: Amal,
    altText: "Customer image",
    description:
      "I've had multiple dinner parties where all the food was made using KookBook",
  },
  {
    id: "card-6",
    name: "Kevin Thompson",
    imgSrc: Kevin,
    altText: "Customer image",
    description: "My kids love the desserts I've learnt to make from here.",
  },
];

const Testimonials = () => {
  const customerInfo = TESTIMONIAL_CARDS.map((customer) => (
    <TestimonialCard
      id={customer.id}
      key={customer.key}
      name={customer.name}
      imgSrc={customer.imgSrc}
      altText={customer.altText}
      description={customer.description}
    />
  ));
  return (
    <div className={styles.lgScrBackground}>
      <section id="testimonials" className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Testimonials</h2>
          <div className={styles.testimonialCardWrapper}>{customerInfo}</div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
