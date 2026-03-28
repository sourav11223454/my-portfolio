import { motion } from 'framer-motion'
import React from 'react'

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
})
function Journey() {
  return (
    <>
      <section id='journey' className="container my-5">

        <motion.h1
          {...fadeUp(0.15)}
          className='container about-title text-center mb-3'
        >
          About me
        </motion.h1>

        <div className="about-container">

          <div className='row g-3'>
            <div className='col-12 col-md-8'>
              <motion.div
                {...fadeUp(0.3)}
                className="card big area-big1 bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition duration-300 "
              >
                <span style={{ fontSize: "20px", lineHeight: "1.8" }}>
                  Passionate about building <span className="text-blue-400">modern, responsive web applications</span> using
                  <span className="text-grey-400"> MongoDB, Express.js, React, and Node.js</span>.
                  Currently focused on strengthening <span className="text-green-400">frontend development</span> while exploring backend fundamentals.
                </span>
              </motion.div>
            </div>

            <div className='col-6 col-md-4'>
              <motion.div
                {...fadeUp(0.45)}
                className="card small based-card p-4 bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 area-small1 hover:-translate-y-1 transition duration-300"
              >
                <div className="icon">🌍</div>
                <h5 className="title mt-3 text-white font-semibold tracking-wide">Based in</h5>
                <p className="location mb-0 text-gray-300">India</p>
                <p className="sub-location text-gray-400 text-sm">Calicut</p>
              </motion.div>
            </div>
          </div>

          <div className='row g-3 mt-1'>
            <div className='col-6 col-md-4'>
              <motion.div
                {...fadeUp(0.6)}
                className="card small based-card p-4 bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 area-small2 hover:-translate-y-1 transition duration-300"
              >
                <p className="status-badge text-green-400 font-medium tracking-wide">• Open for projects</p>

                <div className="icons mt-3">

                  <a
                    href="https://github.com/sourav11223454"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: 'white' }}
                  >
                    <i className="icon github fa-brands fa-github hover:text-blue-400 transition"></i>
                  </a>

                  <a
                    href="mailto:souravvs2255@gmail.com"
                    style={{ textDecoration: "none", color: 'white' }}
                  >
                    <i className="icon fa-solid fa-envelope hover:text-green-400 transition"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sourav--vs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: 'white' }}
                  >
                    <i className="icon linkedin fa-brands fa-linkedin hover:text-blue-500 transition"></i>
                  </a>

                </div>
              </motion.div>
            </div>

            <div className='col-12 col-md-8'>
              <motion.div
                {...fadeUp(0.5)}
                className="card big area-big1 bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition duration-300"
              >
                <h5 className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Main Technologies</h5>
                <div className="scroll-container">
                  <div className="scroll-track">
                    <div className="scroll-text text-gray-300 tracking-widest animate-pulse">
                      MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                    </div>
                    <div className="scroll-text text-gray-300 tracking-widest animate-pulse">
                      MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* MOBILE LAYOUT */}

        <div className='mobile-layout'>

          <motion.div {...fadeUp(0.55)} className="card big area-big1">
            <span>
              Passionate about building modern, responsive web applications using MongoDB, Express.js, React, and Node.js. Currently focused on strengthening frontend development while exploring backend fundamentals.
            </span>
          </motion.div>

          <div className='mobile-small-row'>

            <motion.div {...fadeUp(0.65)} className="card small based-card area-small1">
              <div className="icon">🌍</div>
              <h5 className="title mt-3">Based in</h5>
              <p className="location mb-0">India</p>
              <p className="sub-location">Calicut</p>
            </motion.div>

            <motion.div {...fadeUp(0.75)} className="card small based-card area-small2">
              <p className="status-badge">• Open for projects</p>
              <div className="icons mt-3">
                <i className="icon github fa-brands fa-github"></i>
                <i className="icon fa-solid fa-envelope"></i>
                <i className="icon linkedin fa-brands fa-linkedin"></i>
              </div>
            </motion.div>

          </div>

          <motion.div {...fadeUp(0.85)} className="card big area-big2">
            <h5>Main Technologies</h5>
            <div className="scroll-container">
              <div className="scroll-track">
                <div className="scroll-text">
                  MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                </div>
                <div className="scroll-text">
                  MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </section>
    </>
  )
}

export default Journey