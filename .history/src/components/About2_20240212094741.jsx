import { motion } from "framer-motion";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import herohitam from "../assets/About1.png";
import heroabout from "../assets/icons/Container2.png";
import favico from "../assets/icons/ico_fav.png";
import iconcontainer from "../assets/icons/icon_Container.png";
import profile1 from "../assets/images/profile1.png";
import { rattings } from "../data/data2";

// const CounterUpPage = () => {
//   const [counterOn, setCounterOn] = useState(false);
// };
const About2 = () => {
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
    <div className="   mx-[20px] md:mx-[100px] h-[470px] flex md:flex-row flex-col  items-center gap-[30px] md:gap-[81px] ">
      <div className=" h-[426px]    ">
        <img
          className="absolute w-[337.63px] md:w-auto -z-10 left-[5px] md:left-[90px] h-[300px]  md:h-[404px] -mt-2  "
          src={herohitam}
          alt=""
        />

        {/* <div className=" h-[400px] bg-red-500"> */}
        {/* <div> */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col p-[12px] items-start absolute mt-20 left-[170px] md:left-[450px] text-white bg-primary w-[200px] h-[86px]  rounded-xl"
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
            We have mor than 10+ year experience
          </div>
        </motion.div>

        <img className=" h-[312px]  md:h-[404px]  " src={heroabout} alt="" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col absolute -mt-[120px] left-[50px] md:left-[170px]  bg-amber-300 w-[250px] h-[125px] text-center rounded-xl p-[18px]"
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
      {/* <div className=" bg-pink-400"> */}
      <div
        data-aos="fade-left"
        className="flex flex-col  gap-[24px] bg-teal-900  h-[350px] "
      >
        <div className="flex justify-start items-center gap-3 bg-yellow-300">
          <img className="w-[59px]" src={iconcontainer} alt="" />
          <h1 className="text-base ">
            <b>About</b> Our Company
          </h1>
          <img className="w-[20px]" src={favico} alt="" />
        </div>
        <div className="flex flex-col bg-blue-950">
          <div className="font-bold text-3xl">
            We offer exceptional Real Estate deals.
          </div>
          <div className="text-base">
            we have sold over 1000+ real estate and all of them are great
          </div>
        </div>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-3 grid-rows-2  text-center bg-lime-400">
            <div className="w-[80px] text-5xl font-bold text-primary bg-lime-300">
              {counterOn && (
                <CountUp start={0} end={200} duration={3} delay={1} />
              )}
            </div>
            <div className="w-[125px] text-5xl font-bold text-primary bg-red-300">
              {counterOn && (
                <CountUp start={0} end={1000} duration={3} delay={1} />
              )}
            </div>
            <div className="w-[100px] text-5xl font-bold text-primary bg-yellow-300">
              {counterOn && (
                <CountUp start={0} end={500} duration={3} delay={1} />
              )}
            </div>
            <div className=" w-[80px] top-0 text-base bg-slate-500">
              Awward Winning
            </div>
            <div className="w-[125px] top-0 text-base">Happy Customer</div>
            <div className="w-[100px] top-0 text-base">Property Ready</div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default About2;
