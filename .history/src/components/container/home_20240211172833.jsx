import { motion } from "framer-motion";
import React from "react";
import hero from "../../assets/images/Hero.png";
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
      <div className="md:flex items-center justify-center p-[20px] md:p-[42px]">
        <img src={hero} alt="" />
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
