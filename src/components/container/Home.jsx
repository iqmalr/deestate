import { motion } from "framer-motion";
import React from "react";
import hero from "../../assets/images/Hero.png";
import { companies } from "../../data/data2";
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
    <div className="border-b-2 mb-[100px]">
      <div className="section py-[75px]" id="home">
        <div className="flex items-center justify-center ">
          <img
            className="px-[20px] md:px-[42px] h-[382px] md:h-full "
            src={hero}
            alt=""
            loading="lazy"
          />
          <div className="container w-auto t-[50px] md:t-[140px] px-5 md:px-[110px] absolute  flex flex-col justify-between items-center">
            <h5 className=" font-bold text-[24px] md:text-[58px] leading-auto text-black text-center tracking-tight  ">
              We <span className="text-primary">Connect You</span> with the
              <span className="text-primary"> Best Property</span> Opportunities
            </h5>
            <h3 className=" font-medium text-base px-5 md:px-[81px] md:text-xl pb-12 text-center text-[#414141]">
              Explore a variety of properties. Choose the one that suits you
              best
            </h3>
            {/* search */}
            <div className="mx-auto  ">
              <form action="" className="relative mx-auto w-max">
                <input
                  type="search"
                  className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black peer-focus:stroke-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center text-xl">
          <p className="text-base font-semibold mb-[28px] mt-[50px] text-grey opacity-75">
            Trusted by companies
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className=" mx-[20px] md:mx-[100px] h-[200px] md:h-[48px]  text-[#4F91C1] text-opacity-50 flex flex-col md:flex-row justify-between items-center text-4xl  font-bold "
          >
            {companies.map((company) => (
              <motion.div variants={item} className="" key={company.id}>
                <div>{company.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
