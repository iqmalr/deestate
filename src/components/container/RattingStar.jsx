import { motion } from "framer-motion";
import React from "react";

const Categories = ({ image }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div variants={item} whileHover={{ scale: 1.1 }} className="">
      <div className="">{image}</div>
    </motion.div>
  );
};

export default Categories;
