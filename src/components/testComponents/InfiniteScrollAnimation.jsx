import { motion } from "framer-motion";
import React from "react";

export const InfiniteScrollAnimation = () => {
  return (
    <div className="h-dvh p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 bg-blue-300"
      >
        <h2 className="text-2xl font-bold">Infinity</h2>
        <SmallCard />
      </motion.div>
    </div>
  );
};

const SmallCard = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="aspect-video w-[23vw] shrink-0 bg-pink-600 rounded-lg flex items-center justify-center text-white"
            // whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            Card {index + 1}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollAnimation;
