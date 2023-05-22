import React from 'react'
import { motion } from "framer-motion";

const HeadingCmp = () => {
  return (
    <div className="text-center">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`md:text-4xl text-2xl font-bold dark:text-slate-100 text-slate-900`}
    >
      Welcome to
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`md:text-5xl text-4xl font-extrabold text-orange-500 `}
    >
      Swarm
    </motion.h2>
    {/* <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`mt-4 text-xl  text-slate-500`}
    >
      Empower Your Projects with Collaboration and Efficiency
    </motion.p> */}
  </div>
  )
}

export default HeadingCmp