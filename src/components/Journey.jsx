import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

const JounreyData = [
  {
    Year: "2022-2025",
    Title: "BCA & Foundation Phase",
    Description: "Completed Bachelor of Computer Applications (BCA) while building a strong foundation in programming and web development concepts."
  },
  {
    Year: "2025",
    Title: "Started Web Development Seriously",
    Description: `Began focused learning in frontend development.`
  },
  {
    Year: "Present",
    Title: "JavaScript & React Journey",
    Description: "Developing strong skills in JavaScript and building dynamic user interfaces using React."
  }
]

function Journey() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
  return (
    <>
      <div ref={ref} className="container position-relative py-5">

        {/* TITLE */}
        <h1 className="fw-bold text-center mb-5" style={{ fontSize: "50px" }}>
          My Developer Journey
        </h1>

        {/* CENTER LINE */}
        <motion.div className='timeline-line'
          style={{
            position: "absolute",
            height: "90%",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            backgroundColor: "black",
            transformOrigin: "top",
            scaleY: scaleY
          }}

          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}

          transition={{ duration: 1 }}

          viewport={{ once: false }}
        />

        {/* TIMELINE ITEMS */}
        {JounreyData.map((item, index) => {

          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="timeline-row d-flex justify-content-between align-items-center my-5 position-relative"

              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >

              {/* LEFT */}
              <div className='timeline-left' style={{ width: "45%" }}>
                {isLeft && (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      backgroundColor: 'black',
                      color:"white"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{
                      padding: "20px",
                      borderRadius: "12px",
                      backgroundColor: "#f8f9fa",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                  >
                    <h6 style={{ color: "#0d6efd" }}>{item.Year}</h6>
                    <h4>{item.Title}</h4>
                    <p style={{ color: "#6c757d" }}>{item.Description}</p>
                  </motion.div>
                )}
              </div>

              {/* DOT */}
              <div className='timeline-center' style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "black",
                zIndex: 1
              }}></div>

              {/* RIGHT */}
              <div className='timeline-right' style={{ width: "45%" }}>
                {!isLeft && (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      backgroundColor: 'black',
                      color:"white"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{
                      padding: "20px",
                      borderRadius: "12px",
                      backgroundColor: "#f8f9fa",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                  >
                    <h6 style={{ color: "#0d6efd" }}>{item.Year}</h6>
                    <h4>{item.Title}</h4>
                    <p style={{ color: "#6c757d" }}>{item.Description}</p>
                  </motion.div>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>
    </>
  )
}

export default Journey