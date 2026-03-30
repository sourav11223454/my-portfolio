import React from 'react'
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { SiExpress, SiMongodb } from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect.jsx";

export const skillsData = [
  {
    title: "HTML",
    description: "Markup language for web structure",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    description: "Styling and layout design",
    icon: <FaCss3 />,
  },
  {
    title: "Bootstrap",
    description: "Responsive UI framework",
    icon: <FaBootstrap />,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: <RiTailwindCssFill />,
  },
  {
    title: "JavaScript",
    description: "Core web programming language",
    icon: <BsJavascript />,
  },
  {
    title: "React",
    description: "Frontend library for UI",
    icon: <FaReact />,
  },
  {
    title: "Express.js",
    description: "Backend framework for Node",
    icon: <SiExpress />,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime",
    icon: <FaNodeJs />,
  },
  {
    title: "MongoDB",
    description: "NoSQL database",
    icon: <SiMongodb />,
  },
  {
    title: "Git & Github",
    description: "Version control system",
    icon: <FaGithub />,
  },
];

function Skills() {
  return (
    <>
      <div id='skills' className="max-w-5xl mx-auto px-8" style={{marginTop:"10rem"}}>
        <h1 className='container about-title text-center'>Skills</h1>
        <HoverEffect items={skillsData} />
      </div>
    </>
  )
}

export default Skills