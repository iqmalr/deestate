// home.jsx
// import { motion } from "framer-motion";
import React from "react";
// import About2 from "../components/About2";
// import About3 from "../components/About3";
// import Footer from "../components/Footer";
// import Service from "../components/Service";
// import Contact from "../components/container/Contact";
// import Properties from "../components/container/Properties";
import NavbarFix from "../components/navbar/navbar";
// import { companies } from "../data/data";
// import Hero from "../images/Hero.png";
// import { StickyNavbar } from "../navbar";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="font-Poppins ">
      <NavbarFix />
      {/* Hero Start */}
      <div className="w-auto mx-[20px] md:mx-[42px] bg-teal-300 ">
        a
        <div className="mb-12 overflow-hidden flex items-center justify-center bg-slate-900">
          {/* <img
            alt="nature"
            className="w-auto md:w-full lg:w-full object-cover object-center rounded-lg"
            src={Hero}
          /> */}
          {/* <div class="w-full px-5 md:px-[247px] absolute bg-amber-300 flex flex-col items-center">
              
            {/* </div> */}
          {/* <div className="container w-auto t-[50px] md:t-[140px] px-5 md:px-[165px] absolute bg-amber-300 flex flex-col justify-between items-center">
            <h5 className="bg-teal-400 font-bold text-[24pt] md:text-7xl text-black text-center tracking-tight pb-5">
              We <span className="text-primary">Connect You</span> with the
              <span className="text-primary">Best Property</span> Opportunities
            </h5>
            <h3 className="bg-red-600 font-bold text-base px-5 md:px-[81px] md:text-xl pb-12 text-center ">
              Explore a variety of properties. Choose the one that suits you
              best
            </h3> */}
          {/* search */}
          {/* <div class="mx-auto  bg-pink-400">
              <form action="" class="relative mx-auto w-max">
                <input
                  type="search"
                  class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* Hero End */}

      {/* Section 2 Start */}
      {/* <div className="mb-[60px] lg:mb-[75px]  md:h-[120px] flex flex-col justify-between items-center gap-[28px] w-auto mx-[20px] lg:mx-[100px] bg-slate-500">
        <div className="bg-pink-300">Trusted by companies</div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className=" bg-amber-400 h-[200px] md:h-[48px] w-full text-primary text-opacity-50 flex flex-col md:flex-row justify-between items-center text-4xl  font-bold "
        >
          {companies.map((company) => (
            <motion.div variants={item} className="" key={company.id}>
              <div>{company.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
      {/* Section 2 End */}
      {/* section 3 start */}
      {/*  */}
      {/* <Properties /> */}

      {/* section 3 end */}
      {/* section 4 start */}
      {/* <Service /> */}
      {/* section 4 end */}
      {/* section5 start */}
      {/* About */}
      {/* <About /> */}
      {/* <About2 /> */}
      {/* contact */}
      {/* <Contact />
      <Footer /> */}
      {/* <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10"> */}

      {/* </div> */}
      {/* <About3 /> */}
    </div>
  );
};

export default Home;
