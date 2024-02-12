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
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <Properties />
      <Service />
      {/*  <Course />
      <Teacher />
      <Contact />
      <Footer /> */}
    </div>
  );
}
