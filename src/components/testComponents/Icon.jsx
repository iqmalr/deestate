import { motion } from "framer-motion";
import React from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Icon = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 perspective-[500px]">
      <div className="flex items-center justify-center w-[150px] h-[150px] overflow-hidden bg-white/20 rounded-[30px]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-[56%] overflow-visible stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Icon;
