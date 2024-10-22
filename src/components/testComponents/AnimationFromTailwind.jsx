import { motion } from "framer-motion";
import React from "react";

const AnimationFromTailwind = () => {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <h1>spin</h1>
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
      <h1>bounce</h1>
      <div class="animate-bounce bg-green-500">Bounce</div>
      <h1>animate-linear</h1>
      <div className="mt-12 p-4 overflow-x-hidden relative rounded-lg shadow-lg ">
        <div className="flex  bg-green-600  gap-8  animate-slide">
          {items.map((item, index) => (
            <SmallCard key={index} index={item} />
          ))}
        </div>
      </div>
      <h1>animate-linear2</h1>
      <div className="mt-12 bg-blue-400 p-4 overflow-x-hidden relative rounded-lg shadow-lg ">
        <div className="flex w-full gap-8 bg-amber-500 animate-slide">
          <div className=" shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] bg-red-500">
            1
          </div>
          <div className=" shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] bg-red-500">
            1
          </div>
          <div className=" shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] bg-red-500">
            1
          </div>
          <div className=" shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] bg-red-500">
            1
          </div>
          <div className=" shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] bg-red-500">
            1
          </div>
        </div>
      </div>
    </>
  );
};
const SmallCard = () => {
  return (
    <div className="overflow-hidden">
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="aspect-video  shrink-0 bg-pink-600 rounded-lg flex items-center justify-center text-white"
            // whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            Card {index + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimationFromTailwind;
