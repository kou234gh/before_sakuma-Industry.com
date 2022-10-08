import * as React from "react";
import { useRef } from "react";
import { motion, useCycle, useReducedMotion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Link } from "react-router-dom";


export const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();
  const closedX1 = shouldReduceMotion ? 0 : "-50vw";
  const closedX2 = shouldReduceMotion ? 0 : "100vw";
  const closedY1 = shouldReduceMotion ? 0 : "150vh";


  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className={"bg-sb-900 w-[50px] h-[50px] fixed top-[5vh] right-[1vw] bottom-0 border-2 rounded-xl z-40"}
    >

      <MenuToggle toggle={() => { toggleOpen() }} isOpen={isOpen} />
      {/* <NavMenu isOpen={isOpen} toggle={() => {toggleOpen()}} /> */}

      <motion.div
        className="fixed md:left-[0vw] md:top-[0vh] md:w-[30vw] md:h-[50vh] left-[0vw] top-[0vh] w-[40vw] h-[50vh] z-[49] bg-sb-800 pl-[7vw] pt-[7vw]"
        initial={false}
        animate={{ x: isOpen ? 0 : closedX1 }}
        transition={{
          duration: 1.5
        }}
      >
        <ul className="">
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/'} >ホーム</Link></li>
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/about/'} onClick={() => toggleOpen()} >会社概要</Link></li>
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/recruit/'} onClick={() => toggleOpen()} >採用</Link></li>
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/news/'} onClick={() => toggleOpen()} >ニュース</Link></li>
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/corporate/'} onClick={() => toggleOpen()} >協業</Link></li>
          <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/contact/'} onClick={() => toggleOpen()} >お問い合わせ</Link></li>
        </ul>
      </motion.div>
      <motion.div
        className="fixed md:left-[30vw] md:top-[0vh] md:w-[70vw] md:h-[50vh] left-[40vw] top-[0vh] w-[70vw] h-[50vh]  z-[49] bg-sb-700 border-solid border-b-black"
        initial={false}
        animate={{ x: isOpen ? 0 : closedX2 }}
        transition={{
          duration: 2.0
        }}
      />
      <motion.div
        className="fixed md:left-[0vw] md:top-[50vh] md:w-[100vw] md:h-[50vh] left-[0vw] top-[50vh] w-[100vw] h-[50vh] z-[49] bg-sb-600"
        initial={false}
        animate={{ y: isOpen ? 0 : closedY1 }}
        transition={{
          duration: 2.5
        }}
      />
    </motion.nav>
  );
};
