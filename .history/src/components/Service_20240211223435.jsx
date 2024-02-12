import { motion } from "framer-motion";
import React from "react";
import rumah from "../assets/icons/home.png";
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
  return (
    <div className="flex flex-col items-center gap-9 justify-between py-[70px] w-full h-auto md:h-[550px] bg-[#e9efff] ">
      <div className="flex flex-col items-center gap-[15px] w-[400px] h-[131px] bg-red-400">
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
  );
};

export default Service;
