import * as React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";


const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export function MenuToggle({ toggle }: any){
  
  const shouldReduceMotion = useReducedMotion();
  const closedX1 = shouldReduceMotion ? 0 : "-50vw";
  const closedX2 = shouldReduceMotion ? 0 : "100vw";
  const closedY1 = shouldReduceMotion ? 0 : "150vh";

  return(
  <>
    <button
      onClick={toggle}
      className={"absolute w-[50px] h-[50px] m-[auto] flex justify-center items-center bg-transparent rounded-[50%] cursor-pointer border-none"}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>

    <motion.div
      className="fixed md:left-[0vw] md:top-[0vh] md:w-[30vw] md:h-[50vh] left-[0vw] top-[0vh] w-[40vw] h-[50vh] z-[-1] bg-sb-800 pl-[7vw] pt-[7vw]"
      initial={false}
      animate={{ x: toggle ? 0 : closedX1 }}
      transition={{
        duration: 1.5
      }}

      // onClick={() => {
      //   setClose(toggle = isIt);
      //   console.log("toggle:" + toggle)
      // }}

    >
      <ul className="">
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/'}>ホーム</Link></li>
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/about/'}>会社概要</Link></li>
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/recruit/'}>採用</Link></li>
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/news/'}>ニュース</Link></li>
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/corporate/'}>協業</Link></li>
        <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/contact/'}>お問い合わせ</Link></li>
      </ul>
    </motion.div>
    <motion.div
      className="fixed md:left-[30vw] md:top-[0vh] md:w-[70vw] md:h-[50vh] left-[40vw] top-[0vh] w-[70vw] h-[50vh]  z-[-1] bg-sb-700 border-solid border-b-black"
      initial={false}
      animate={{ x: toggle ? 0 : closedX2 }}
      transition={{
        // from: 1300,
        duration: 2.0
      }}

    />
    <motion.div
      className="fixed md:left-[0vw] md:top-[50vh] md:w-[100vw] md:h-[50vh] left-[0vw] top-[50vh] w-[100vw] h-[50vh]   z-[-1] bg-sb-600"
      initial={false}
      animate={{ y: toggle ? 0 : closedY1 }}
      transition={{
        // from: 700,
        duration: 2.5
      }}
    />
  </>
 );
};
