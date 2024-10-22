import React from "react";
import AnimationFromTailwind from "../components/testComponents/AnimationFromTailwind";
import { InfiniteScrollAnimation } from "../components/testComponents/InfiniteScrollAnimation";
import MotionExample from "../components/testComponents/MotionExample";
import Muncul from "../components/testComponents/Muncul";

const TestingPage = () => {
  return (
    <div>
      <InfiniteScrollAnimation />
      <Muncul />
      <AnimationFromTailwind />
      <MotionExample />
    </div>
  );
};

export default TestingPage;
