import NavBar from "../../Components/NavBar/NavBar";
import MobileNavBar from "../../Components/MobileNavBar/MobileNavBar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import PopularPicks from "./Sections/PopularPicks/PopularPicks";
import VegetarianPicks from "./Sections/VegetarianPicks";
import Cuisines from "./Sections/Cuisines/Cuisines";
import Team from "./Sections/Team";
import Testimonials from "./Sections/Testimonials";
import { motion } from "framer-motion";

const HomePage = ({ toggle, mobileNavBarIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar toggle={toggle} />
      <MobileNavBar toggle={toggle} mobileNavBarIsOpen={mobileNavBarIsOpen} />
      <HeroSection />
      <PopularPicks />
      <VegetarianPicks />
      <Cuisines />
      <Team />
      <Testimonials />
    </motion.div>
  );
};

export default HomePage;
