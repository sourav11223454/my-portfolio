import { motion } from 'framer-motion'
import React from 'react'

function Journey() {
  return (
    <>
      <div className="container m-5 ">
        <div className="grid-layout">

           <div className="card big">
           <span style={{fontSize:"20px"}}> Passionate about building modern, responsive web applications using MongoDB, Express.js, React, and Node.js. Currently focused on strengthening frontend development while exploring backend fundamentals.</span>
          </div>
          <div className="card small based-card">
            <h3>🌍</h3>
            <h4>Based in</h4>
            <p style={{ margin: "0px" }}>India</p>
            <p>Calicut</p>
          </div>
        </div>
        <div className='grid-layout2'>
          <div className="card small">
            <p style={{border:"1px solid red",width:"50%",borderRadius:"20px",backgroundColor:"green",textAlign:"center"}}>• open for projects</p>
            <a href=""><i style={{ padding: "0px 20px", color: "white" }} class="fa-brands fa-github"></i><i style={{ padding: "0px 20px", color: "white" }} className="fa-brands fa-instagram"></i><i style={{ padding: "0px 20px", color: "white" }} className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="card big">
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