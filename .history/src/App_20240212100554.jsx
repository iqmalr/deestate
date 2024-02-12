// import "./css/index.css";
import Properties from "./components/container/Properties";
import {
  About2,
  Contact,
  // Contact,
  // Course,
  // Footer,
  Home,
  Navbar,
  Service,
} from "./components/index";

export default function App() {
  return (
    <div className="font-Poppins ">
      <Navbar />
      <Home />
      <Properties />
      <Service />
      <About2 />
      <Contact />
      {/* <Ratting /> */}
      {/*  <Course />
      <Teacher />
      <Contact />
      <Footer /> */}
    </div>
  );
}
