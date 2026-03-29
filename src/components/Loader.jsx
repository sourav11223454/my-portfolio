import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  // Progress logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-white z-[9999] flex flex-col justify-center items-center text-black"
    >

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          SOURAV <span className="text-yellow-500">.</span>
        </h1>

        <div className="w-12 h-[2px] bg-gray-300 mx-auto my-4"></div>

        <p className="text-sm tracking-[0.3em] text-gray-500">
          MERN STACK DEVELOPER
        </p>
      </motion.div>

      {/* PROGRESS */}
      <div className="absolute bottom-10 right-10 w-40">
        <div className="h-[2px] bg-gray-200 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <p className="text-right text-sm mt-2 font-medium">
          {progress}%
        </p>
      </div>

    </motion.div>
  );
}

export default Loader;