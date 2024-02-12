import { motion } from "framer-motion";

export const withHover = (Component) => {
  return (props) => (
    <Component
      {...props}
      as={motion.div}
      style={{}}
      whileHover={{
        skew: -10,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          repeat: 0,
          repeatDelay: 0,
          delay: 0,
        },
      }}
    />
  );
};
