import { motion } from "framer-motion";
import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../data/data";

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
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className=" font-bold text-xs text-Teal mb-4">
            {/*  */}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br />
            the new way <br />
            to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm ">
            Join us for an innovative e-learning experience. Learn at your own
            pace with our adaptive platform. Embark on a journey of knowledge
            and growth.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal hover:bg-white hover:text-Teal focus:text-Teal focus:bg-gray-200 rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold text-Teal bg-white hover:bg-Teal hover:text-white  rounded-lg mr-4 text-sm border-gray">
              Discover
            </button>
            {/* <button class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-Teal hover:bg-white hover:text-Teal focus:text-Teal focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
              Submit
            </button> */}
            {/*  */}
          </div>
        </div>
        <div className="md:">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="text-center text-xl">
        <p>
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities and companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8  p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className=" w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
