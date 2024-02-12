import { motion } from "framer-motion";
import React from "react";
import hero from "../../assets/images/Hero.png";
import { logos } from "../../data/data";

const Home = () => {
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
    <div className="section" id="home">
      <div className="">
        <img
          className="px-[20px] md:px-[42px] h-[382px] md:h-full bg-red-800"
          src={hero}
          alt=""
        />
        <div className="container w-auto t-[50px] md:t-[140px] px-5 md:px-[165px] absolute bg-amber-300 flex flex-col justify-between items-center">
          <h5 className="bg-teal-400 font-bold text-[24pt] md:text-7xl text-black text-center tracking-tight pb-5">
            We <span className="text-primary">Connect You</span> with the
            <span className="text-primary">Best Property</span> Opportunities
          </h5>
          <h3 className="bg-red-600 font-bold text-base px-5 md:px-[81px] md:text-xl pb-12 text-center ">
            Explore a variety of properties. Choose the one that suits you best
          </h3>
          {/* search */}
          <div class="mx-auto  bg-pink-400">
            <form action="" class="relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-xl">
        <p>
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities and companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8  p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className=" w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
