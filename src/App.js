import "./App.css";

import { useState } from "react";

// import NavBar from "./Components/NavBar/NavBar";
// import MobileNavBar from "./Components/MobileNavBar/MobileNavBar";
import HomePage from "./Pages/Homepage/HomePage";
import CuisinePage from "./Pages/CuisinePage/CuisinePage";
import SearchedPage from "./Pages/SearchedPage/SearchedPage";
import RecipePage from "./Pages/RecipePage/RecipePage";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [mobileNavBarIsOpen, setMobileNavBarIsOpen] = useState(false);

  const location = useLocation();

  function toggleMobileNavBar() {
    setMobileNavBarIsOpen(!mobileNavBarIsOpen);
  }

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <HomePage
              toggle={toggleMobileNavBar}
              mobileNavBarIsOpen={mobileNavBarIsOpen}
            />
          }
        />
        <Route path="/cuisine/:type" element={<CuisinePage />} />
        <Route path="/searched/:search" element={<SearchedPage />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
