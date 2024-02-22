import { motion } from "framer-motion";
import React, { useState } from "react";
import { rattings } from "../data/data";
import heroabout from "../icons/Component9.png";
import favico from "../icons/ico_fav.png";
import iconcontainer from "../icons/icon_Container.png";
import profile1 from "../images/profile1.png";
// import bgBlack from "../images/About1.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// import kotakgambar from "../icons/Container.png";
// import kotakitem from "../images/About1.png";

// const CounterUpPage = () => {
//   const [counterOn, setCounterOn] = useState(false);
// };
const About3 = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row bg-primary border border-black mx-[20px] my-[50px] md:mx-[100px] md:my-[100px] w-auto gap-[60px]">
        <div data-aos="fade-right">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col p-[12px] items-start absolute mt-10 left-[150px] md:left-[540px] text-white bg-primary w-[200px] h-[86px]  rounded-xl"
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="  h-[48px] w-full  flex flex-row justify-between items-center  "
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
          <img
            className="w-[335px] h-[312px] md:w-[593px] md:h-[404px] float-right  "
            src={heroabout}
            alt=""
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col absolute mt-[200px] md:mt-[300px] left-[35px]   md:left-[220px]  bg-amber-300 w-[250px] h-[125px] text-center rounded-xl p-[18px]"
          >
            <img className=" h-[36px] w-[36px]" src={profile1} alt="" />
            <div className="flex h-[43px] items-center justify-between bg-green-500">
              <div className="flex items-start flex-col w-[133px] bg-pink-700">
                <p className="font-bold text-sm">Samuel Robert</p>
                <p className="text-xs">Makelar Agent</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-[89px] h-[34px] bg-primary rounded-lg text-center px-[9px] py-[8px] text-sm"
              >
                Messages
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="border border-red-400 flex flex-col w-full">
          <div className="flex justify-start items-center gap-3 bg-yellow-300">
            <img className="w-[59px]" src={iconcontainer} alt="" />
            <h1 className="text-base ">
              <b>About</b> Our Company
            </h1>
            <img className="w-[20px]" src={favico} alt="" />
          </div>
          <div className="flex flex-col bg-blue-950 gap-3">
            <div className="font-bold text-3xl">
              We offer exceptional Real Estate deals.
            </div>
            <div className="font-medium text-base ">
              we have sold over 1000+ real estate and all of them are great
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex flex-row justify-between  text-center bg-lime-400">
              <div className="flex flex-col w-[90px] md:w-[80px] ">
                <div className="text-2xl md:text-5xl font-bold text-primary bg-lime-300">
                  {counterOn && (
                    <CountUp start={0} end={200} duration={3} delay={1} />
                  )}
                </div>
                <div className="top-0 md:text-base font-medium">
                  Awward Winning
                </div>
              </div>
              <div className="flex flex-col w-[90px] md:w-[125px]">
                <div className=" text-2xl md:text-5xl font-bold text-primary bg-red-300">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={3} delay={1} />
                  )}
                </div>
                <div className=" top-0 md:text-base font-medium">
                  Happy Customer
                </div>
              </div>
              <div className="flex flex-col w-[90px] md:w-[100px]">
                <div className=" text-2xl md:text-5xl font-bold text-primary bg-yellow-300">
                  {counterOn && (
                    <CountUp start={0} end={500} duration={3} delay={1} />
                  )}
                </div>
                <div className="top-0 md:text-base font-medium">
                  Property Ready
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        {/* <img
        data-aos="fade-up"
        className="w-[335px] h-[312px] md:w-[500px] md:h-[320px]  -z-20 absolute mt-5 md:ml-[120px] ml-auto"
        src={bgBlack}
        alt=""
      /> */}
      </div>
      {/* COBA GRID */}
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-0 mx-5">
        <div className="bg-amber-200 -z-10">
          <img src={kotakitem} alt="" />
        </div>
        <div className="col-start-2 row-start-2">
          <img className="absolute" src={kotakgambar} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default About3;
