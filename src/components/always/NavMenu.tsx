export{}

// import { motion } from "framer-motion";
// import { useReducedMotion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useHref } from "react-router-dom";
// 
// export function NavMenu({ isOpen }:any, {toggle}:any) {
// 
//   const shouldReduceMotion = useReducedMotion();
//   const closedX1 = shouldReduceMotion ? 0 : "-50vw";
//   const closedX2 = shouldReduceMotion ? 0 : "100vw";
//   const closedY1 = shouldReduceMotion ? 0 : "150vh";
// 
//   return (
//     <>
//       <motion.div
//         id="testdiv"
//         className="fixed md:left-[0vw] md:top-[0vh] md:w-[30vw] md:h-[50vh] left-[0vw] top-[0vh] w-[40vw] h-[50vh] z-[-1] bg-sb-800 pl-[7vw] pt-[7vw]"
//         initial={false}
//         animate={{ x: isOpen ? 0 : closedX1 }}
//         transition={{
//           duration: 1.5
//         }}
// 
//       // onClick={() => {
//       //   setClose(isOpen = isIt);
//       //   console.log("isOpen:" + isOpen)
//       // }}
// 
//       >
//         <ul className="">
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/'} >ホーム</Link></li>
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/about/'} onClick={toggle} >会社概要</Link></li>
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/recruit/'} onClick={toggle} >採用</Link></li>
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/news/'} onClick={toggle} >ニュース</Link></li>
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/corporate/'} onClick={toggle} >協業</Link></li>
//           <li className="mt-[2px] " ><Link className="md:text-[18px] text-sm" to={'/contact/'} onClick={toggle} >お問い合わせ</Link></li>
//         </ul>
//       </motion.div>
//       <motion.div
//         className="fixed md:left-[30vw] md:top-[0vh] md:w-[70vw] md:h-[50vh] left-[40vw] top-[0vh] w-[70vw] h-[50vh]  z-[-1] bg-sb-700 border-solid border-b-black"
//         initial={false}
//         animate={{ x: isOpen ? 0 : closedX2 }}
//         transition={{
//           // from: 1300,
//           duration: 2.0
//         }}
// 
//       />
//       <motion.div
//         className="fixed md:left-[0vw] md:top-[50vh] md:w-[100vw] md:h-[50vh] left-[0vw] top-[50vh] w-[100vw] h-[50vh]   z-[-1] bg-sb-600"
//         initial={false}
//         animate={{ y: isOpen ? 0 : closedY1 }}
//         transition={{
//           // from: 700,
//           duration: 2.5
//         }}
//       />
//     </>
//   )
// }