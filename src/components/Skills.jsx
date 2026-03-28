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
    link: "#",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    description: "Styling and layout design",
    link: "#",
    icon: <FaCss3 />,
  },
  {
    title: "Bootstrap",
    description: "Responsive UI framework",
    link: "#",
    icon: <FaBootstrap />,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    link: "#",
    icon: <RiTailwindCssFill />,
  },
  {
    title: "JavaScript",
    description: "Core web programming language",
    link: "#",
    icon: <BsJavascript />,
  },
  {
    title: "React",
    description: "Frontend library for UI",
    link: "#",
    icon: <FaReact />,
  },
  {
    title: "Express.js",
    description: "Backend framework for Node",
    link: "#",
    icon: <SiExpress />,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime",
    link: "#",
    icon: <FaNodeJs />,
  },
  {
    title: "MongoDB",
    description: "NoSQL database",
    link: "#",
    icon: <SiMongodb />,
  },
  {
    title: "Git & Github",
    description: "Version control system",
    link: "#",
    icon: <FaGithub />,
  },
];

function Skills() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8" style={{marginTop:"10rem"}}>
        <h1 className='container about-title text-center'>Skills</h1>
        <HoverEffect items={skillsData} />
      </div>
    </>
  )
}

export default Skills