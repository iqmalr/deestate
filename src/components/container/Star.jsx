import { motion } from "framer-motion";
import { React, useState } from "react";

import { rattings } from "../../data/data2";
const Star = () => {
  const [counterOn, setCounterOn] = useState(false);

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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col p-[12px] items-start   text-white bg-primary w-[200px] h-[86px]  rounded-xl"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="  h-[48px] w-full  absolute flex flex-row justify-between items-center  "
      >
        {rattings.map((ratting) => (
          <motion.div variants={item} className="" key={ratting.id}>
            <img src={ratting.image} alt="" />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-xs font-bold">
        We have more than 10+ year experience
      </div>
    </motion.div>
  );
};

export default Star;
