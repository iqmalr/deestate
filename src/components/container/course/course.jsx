import { motion } from "framer-motion";
import React from "react";
import { categories, courses } from "../../../data/data";
import Categories from "./Categories";
import Coursee from "./Coursee";
// import { categories } from "../../../data/data";
// import { courses } from "../../../data/data";

const Course = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center ">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className=" text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray  leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          aliquam adipisci magnam alias esse tempora voluptatum distinctio,
          neque excepturi fuga molestias error aspernatur quisquam rerum
          perferendis deleniti ex eum aperiam quis velit porro natus officia.
          Provident aliquam dolores possimus quasi!
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      {/* course card start */}
      <div className="text-xl font-bold mt-32 ">Most Popular Course</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Coursee key={courses.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
