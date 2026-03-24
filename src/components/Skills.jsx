import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
function Skills() {
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <h1 className='container about-title text-center'>Skills</h1>

      <div className="row g-4">

       <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaHtml5 className='fs-2' />
            <h5 className='mt-2'>HTML</h5>
          </div>
       </div>

       <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaCss3 className='fs-2' />
            <h5 className='mt-2'>CSS</h5>
          </div>
       </div>

       <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaBootstrap className='fs-2' />
            <h5 className='mt-2'>BootStrap</h5>
          </div>
       </div>

        <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <RiTailwindCssFill className='fs-2'  />
            <h5 className='mt-2'>Tailwind CSS</h5>
          </div>
        </div>

       <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <BsJavascript className='fs-2' />
            <h5 className='mt-2'>JavaScript</h5>
          </div>
       </div>

        <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaReact className='fs-2' />
            <h5 className='mt-2'>React</h5>
          </div>
        </div>

       <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <SiExpress className='fs-2' />
            <h5 className='mt-2'>Express.js</h5>
          </div>
       </div>

        <div className='col-6 col-md-4 col-lg-3'>
          <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <FaNodeJs className='fs-2'/>
            <h5 className='mt-2'>Node.js</h5>
          </div>
        </div>

         <div className='col-6 col-md-4 col-lg-3'>
           <div className="d-flex align-items-center justify-content-center flex-column mt-5 skill-card">
            <SiMongodb className='fs-2'/>
            <h5 className='mt-2'>MongoDb</h5>
          </div>
         </div>

         <div className='col-6 col-md-4 col-lg-3'>
           <div className="d-flex align-items-center justify-content-center flex-column  mt-5 skill-card">
            <FaGithub  className='fs-2'/>
            <h5 className='mt-2'>Git&Github</h5>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Skills