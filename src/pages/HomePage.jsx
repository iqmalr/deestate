import React from "react";
// import Properties from "./components/container/Properties";
import {
  About2,
  Contact,
  Footer,
  // Contact,
  // Course,
  // Footer,
  Home,
  Navbar,
  Properties,
  Service,
} from "../components/index";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Properties />
      <Service />
      <About2 />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
