import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
    <footer className='container d-flex align-items-center justify-content-between p-2'>
      <p>© 2026 Sourav. All rights reserved.</p>
      <div className='social-icons'>
        <a href='https://github.com/sourav11223454' target='_blank'><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/sourav--vs'target='_blank'><i className="fa-brands fa-linkedin ftr-icon"></i></a>
        <a href='mailto:souravvs2255@gmail.com'><i className="fa-solid fa-envelope"></i></a>
      </div>
    </footer>
    </>
  )
}

export default Footer