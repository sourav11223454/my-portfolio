import { useEffect } from "react";
import { motion } from "framer-motion";

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }} // cubic-bezier
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="text-center"
      >
        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide flex items-center justify-center gap-1">
          SOURAV

          {/* PULSING DOT */}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-400"
          >
            .
          </motion.span>
        </h1>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="h-[1px] bg-gray-300 mx-auto my-4"
        />

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xs tracking-[0.35em] text-gray-500"
        >
          MERN STACK DEVELOPER
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Loader;