import { motion } from "framer-motion";
import React from "react";

const ServicesCard = ({ image, category, desc }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    // <div className="flex items-center justify-center">
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col w-[294px] bg-red-500 text-center gap-[9px] "
    >
      <img className="w-[83px] h-[83px] " src={image} alt="" />
      <div className="text-base font-semibold">{category}</div>
      <div className="text-sm text-grey">{desc}</div>
    </motion.div>
    // </div>
  );
};

export default ServicesCard;
