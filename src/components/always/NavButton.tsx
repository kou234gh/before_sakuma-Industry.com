import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const NavButton = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className={"bg-sb-400 w-[50px] h-[50px] fixed top-[5vh] right-[1vw] bottom-0"}
    >
      {/* <motion.div className="background bg-[#fff000] absolute top-0 left-0 bottom-0 w-[300px] h-[100vh]" variants={sidebar} /> */}
      {/* <Navigation /> */}
      <MenuToggle toggle={() => toggleOpen()} />

    </motion.nav>
  );
};
