import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className=" flex items-center justify-center text-center flex-col gap-[24px]  h-[242px] px-[40px] py-[28px] rounded-lg bg-black text-white mt-[100px] md:mt-[150px]"
      >
        <div className="text-3xl">Talk With Us</div>
        <div className="text-base">
          We are a real estate agency and we use it to generate leads
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="rounded-[18px] bg-primary text-sm font-semibold h-[41px] w-[120px]"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
