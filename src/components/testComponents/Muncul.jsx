import { motion } from "framer-motion";
import React from "react";

const Muncul = () => {
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

  const companies = [
    { id: 1, title: "Company A" },
    { id: 2, title: "Company B" },
    { id: 3, title: "Company C" },
  ];

  return (
    <div>
      <div className="text-center text-xl">
        <p className="text-base font-semibold mb-[28px] mt-[50px] ">Muncul</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          className="mx-[20px] h-[200px] flex flex-row justify-between items-center text-4xl font-bold"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 1 }}
            >
              <div>{company.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Muncul;
