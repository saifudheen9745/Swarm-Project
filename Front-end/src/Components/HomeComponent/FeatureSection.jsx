import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-xl md:text-3xl font-bold mb-2 dark:text-slate-400 text-gray-700`}
          >
            Boost Your Project Management
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-sm md:text-lg  mb-8 text-gray-500  `}
          >
            Swarm provides a comprehensive set of tools and features to
            streamline your project management process.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 border dark:border-slate-600 border-slate-400 rounded-lg shadow transform transition-transform hover:scale-110"
              onClick={()=>{
                navigate('/workspace')
              }}
            >
              <h4 className="text-lg md:text-2xl font-bold dark:text-gray-300 mb-2">
                Workspace Management
              </h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm md:text-lg">
                Efficiently track and manage workspaces, assign responsibilities, and
                monitor progress.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 border dark:border-slate-600 border-slate-400 rounded-lg shadow transform transition-transform hover:scale-105"
              onClick={()=>{navigate('/chat')}}
            >
              <h4 className="text-lg md:text-2xl font-bold dark:text-gray-300 mb-2">
                Project Discussions
              </h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm md:text-lg">
                Foster seamless collaboration among team members, with real-time
                communication and file sharing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 border dark:border-slate-600 border-slate-400 rounded-lg shadow transform transition-transform hover:scale-110"
              onClick={()=>{navigate('/project/create')}}
            >
              <h4 className="text-lg md:text-2xl font-bold dark:text-gray-300 mb-2">
                Project Analytics
              </h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm md:text-lg">
                Gain valuable insights into your projects performance and make
                data-driven decisions.
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;