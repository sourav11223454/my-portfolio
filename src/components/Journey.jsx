import { motion } from 'framer-motion'
import React from 'react'

function Journey() {
  return (
    <>
      <div className="container my-5 ">
        <h1 className='container about-title text-center mb-3'>About me</h1>
        <div className="about-container">

          <div className='row g-3'>
            <div className='col-12 col-md-8'>
              <div className="card big delay-1 area-big1">
                <span style={{ fontSize: "20px" }}> Passionate about building modern, responsive web applications using MongoDB, Express.js, React, and Node.js. Currently focused on strengthening frontend development while exploring backend fundamentals.</span>
              </div>
            </div>

            <div className='col-6 col-md-4'>
              <div className="card small based-card p-4 delay-2 area-small1">
                <div className="icon">🌍</div>
                <h5 className="title mt-3">Based in</h5>
                <p className="location mb-0">India</p>
                <p className="sub-location">Calicut</p>
              </div>
            </div>
          </div>

          <div className='row g-3 mt-1'>
            <div className='col-6 col-md-4'>
              <div className="card small based-card p-4 delay-3 area-small2"><p className=" status-badge">• Open for projects</p>
                <div className="icons mt-3">
                  <i className="icon github fa-brands fa-github"></i>
                  <i className="icon insta fa-brands fa-instagram"></i>
                  <i className="icon linkedin fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-8'>
              <div className="card big delay-4 area-big2">
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
              </div>
            </div>
          </div>

        </div>

        <div className='mobile-layout'>

          <div className="card big delay-1 area-big1">
            <span style={{ fontSize: "20px" }}> Passionate about building modern, responsive web applications using MongoDB, Express.js, React, and Node.js. Currently focused on strengthening frontend development while exploring backend fundamentals.</span>
          </div>

          <div className='mobile-small-row'>
            <div className="card small based-card p-4 delay-2 area-small1">
              <div className="icon">🌍</div>
              <h5 className="title mt-3">Based in</h5>
              <p className="location mb-0">India</p>
              <p className="sub-location">Calicut</p>
            </div>
            <div className="card small based-card p-4 delay-3 area-small2"><p className=" status-badge">• Open for projects</p>
              <div className="icons mt-3">
                <i className="icon github fa-brands fa-github"></i>
                <i className="icon insta fa-brands fa-instagram"></i>
                <i className="icon linkedin fa-brands fa-linkedin"></i>
              </div>
            </div>

          </div>

           <div className="card big delay-4 area-big2">
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
              </div>

        </div>
      </div>
    </>
  )
}

export default Journey