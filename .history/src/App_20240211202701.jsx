// import "./css/index.css";
import {
  // About,
  // Contact,
  // Course,
  // Footer,
  Home,
  Navbar,
} from "./components/index";

export default function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      {/* <About />
      <Course />
      <Teacher />
      <Contact />
      <Footer /> */}
    </div>
  );
}
