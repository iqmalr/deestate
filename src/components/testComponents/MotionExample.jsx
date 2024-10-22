import { motion } from "framer-motion";
import React from "react";
const properties = [
  { property: "initial", type: "object | string" },
  { property: "animate", type: "object | string" },
  { property: "exit", type: "object | string" },
  { property: "transition", type: "object" },
  { property: "variants", type: "object" },
  { property: "whileHover", type: "object | string" },
  { property: "whileTap", type: "object | string" },
  { property: "whileFocus", type: "object | string" },
  { property: "whileDrag", type: "object | string" },
  { property: "drag", type: "boolean | string" },
  { property: "dragConstraints", type: "object" },
  { property: "dragElastic", type: "number" },
  { property: "dragSnapToOrigin", type: "boolean" },
  { property: "layout", type: "boolean" },
  { property: "layoutId", type: "string" },
  { property: "onAnimationStart", type: "function" },
  { property: "onAnimationComplete", type: "function" },
  { property: "onDragStart", type: "function" },
  { property: "onDragEnd", type: "function" },
  { property: "onDrag", type: "function" },
  { property: "style", type: "object" },
  { property: "className", type: "string" },
];
const MotionExample = () => {
  return (
    <div>
      <h1>Framer Motion Properties</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop, index) => (
            <tr key={index}>
              <td>{prop.property}</td>
              <td>{prop.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>1</div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="h-10 w-10 bg-amber-500"
        />
      </div>
      <div>
        <div>2</div>
        <motion.div
          className="h-10 w-10 "
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            backgroundColor: [
              "#3b82f6",
              "#14b8a6",
              "#f97316",
              "#ef4444",
              "#3b82f6",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <h1 className="mb-14">a</h1>
        <motion.div
          className="h-10 w-10 bg-blue-500"
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            translateX: [0, 100, 100, 0, 0],
            backgroundColor: [
              "#3b82f6",
              "#14b8a6",
              "#f97316",
              "#ef4444",
              "#3b82f6",
            ],
            borderRadius: ["0%", "20%", "40%", "60%", "0%"],
            opacity: [1, 0.8, 0.5, 0.8, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
        <h1>3</h1>
        <motion.div
          className="h-16 w-16 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.3, 0.8, 1.5, 1],
            translateY: [0, -50, 50, -50, 0],
            backgroundColor: [
              "#a855f7",
              "#f43f5e",
              "#10b981",
              "#f59e0b",
              "#a855f7",
            ],
            rotate: [0, 45, 90, 135, 360],
            opacity: [1, 0.7, 0.5, 0.7, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default MotionExample;
