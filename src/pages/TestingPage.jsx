import React from "react";
import AnimationFromTailwind from "../components/testComponents/AnimationFromTailwind";
import Icon from "../components/testComponents/Icon";
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
      <Icon />
    </div>
  );
};

export default TestingPage;
