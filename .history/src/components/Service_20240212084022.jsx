import { motion } from "framer-motion";
import React from "react";
// import rumah from "../assets/home.png";
import rumah from "../assets/icons/home.png";

import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape3.png";
import shape4 from "../assets/shape4.png";
import { services } from "../data/data2";
import ServicesCard from "./container/ServicesCard";

const Service = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  // bg - Solitude;
  return (
    <div className="bg-[#e9efff] md:bg-transparent">
      <img
        className="absolute hidden md:block lg:block w-[135px] right-0 top-[1850px]"
        src={shape1}
        alt=""
      />
      <img
        className="absolute hidden md:block lg:block left-0 top-[1850px] h-[120px] w-auto"
        src={shape2}
        alt=""
      />
      <img
        className="absolute  hidden md:block lg:block w-[135.72px] left-0 top-[1400px]"
        src={shape3}
        alt=""
      />
      <img
        className="absolute  hidden md:block lg:block w-[70px] right-[100px] top-[20px]"
        src={shape4}
        alt=""
      />
      {/* <img
        className="absolute  hidden md:block lg:block "
        src={shape5}
        alt=""
      /> */}
      <div className="flex flex-col items-center gap-9 justify-between py-[70px] w-full h-auto md:h-[550px]  ">
        <div className="flex flex-col items-center justify-between  h-[131px] bg-red-400">
          <div className="flex items-center justify-center ">
            <img className="w-[64px]" src={rumah} alt="" />
            <div className="font-bold text-3xl">Services</div>
          </div>
          <div className="text-grey text-center text-base font-medium">
            Additional services that can help you throughout the housing process
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className=" bg-yellow-400 flex flex-col md:flex-row justify-center  gap-[67px]"
        >
          {services.map((service) => {
            return <ServicesCard key={service.id} {...service} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
