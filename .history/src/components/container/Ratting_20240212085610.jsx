import { motion } from "framer-motion";
import React from "react";
import { rattings } from "../../data/data2";

const Ratting = () => {
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
      className=" bg-amber-400 h-[48px] w-full text-primary text-opacity-50 flex flex-row justify-between items-center text-4xl  font-bold "
    >
      {rattings.map((ratting) => {
        <motion.div variants={item} className="" key={ratting.id}>
          <div>{ratting.image}</div>
        </motion.div>;
      })}
    </motion.div>
  );
};

export default Ratting;

{
  /* <div variants={item} key={ratting.id}>
  <div>{ratting.image}</div>
  <motion.div variants={item} className="" key={company.id}>
    <div>{company.title}</div>
  </motion.div>
</div>; */
}
