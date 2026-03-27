import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { SiExpress, SiMongodb } from "react-icons/si";

const isMobile = window.innerWidth < 768;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: isMobile ? 0.6 : 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1]
  },
  viewport: { once: true }
});

function Skills() {
  return (
    <section id='skills' className="container" style={{ marginTop: "10rem" }}>

      <motion.h1
        {...fadeUp(0.1)}
        className='container about-title text-center'
      >
        Skills
      </motion.h1>

      <div className="row g-3">

        {/* CARD 1 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.2)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaHtml5 className='fs-2' />
            <h5 className='mt-2'>HTML</h5>
          </motion.div>
        </div>

        {/* CARD 2 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.3)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaCss3 className='fs-2' />
            <h5 className='mt-2'>CSS</h5>
          </motion.div>
        </div>

        {/* CARD 3 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.4)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaBootstrap className='fs-2' />
            <h5 className='mt-2'>Bootstrap</h5>
          </motion.div>
        </div>

        {/* CARD 4 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.5)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <RiTailwindCssFill className='fs-2' />
            <h5 className='mt-2'>Tailwind CSS</h5>
          </motion.div>
        </div>

        {/* CARD 5 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.6)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <BsJavascript className='fs-2' />
            <h5 className='mt-2'>JavaScript</h5>
          </motion.div>
        </div>

        {/* CARD 6 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.7)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaReact className='fs-2' />
            <h5 className='mt-2'>React</h5>
          </motion.div>
        </div>

        {/* CARD 7 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.8)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <SiExpress className='fs-2' />
            <h5 className='mt-2'>Express.js</h5>
          </motion.div>
        </div>

        {/* CARD 8 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(0.9)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaNodeJs className='fs-2' />
            <h5 className='mt-2'>Node.js</h5>
          </motion.div>
        </div>

        {/* CARD 9 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(1.0)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <SiMongodb className='fs-2' />
            <h5 className='mt-2'>MongoDB</h5>
          </motion.div>
        </div>

        {/* CARD 10 */}
        <div className='col-6 col-md-4 col-lg-3 p-2'>
          <motion.div {...fadeUp(1.1)} className="card w-100 d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaGithub className='fs-2' />
            <h5 className='mt-2'>Git & Github</h5>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Skills