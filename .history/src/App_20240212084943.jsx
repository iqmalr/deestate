// import "./css/index.css";
import Properties from "./components/container/Properties";
import {
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
      {/* <Ratting/> */}
      {/*  <Course />
      <Teacher />
      <Contact />
      <Footer /> */}
    </div>
  );
}
