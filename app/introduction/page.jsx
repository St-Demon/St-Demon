"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

// services data
const services = [
  {
    num: '학력',
    title: '위덕대학교 25.01',
    description: '포항영신고등학교 2019.02',
    href: "#"
  },
  {
    num: '경험/활동',
    title: '아름다운가게 봉사 22.06 -',
    description: '버거킹 알르바이트 22.04 - 23.01',
    href: "#"
  },
  {
    num: '자격/어학',
    title: '',
    description: '',
    href: "#"
  },
  {
    num: '사용언어',
    title: '기술 스택',
    skillList: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
    href: "#"
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center">
                <div className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text group-hover:bg-clip-text">
                  {service.num}
                </div>
              </div>
              {/* Title */}
              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* Description */}
              {service.skillList ? (
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {service.skillList.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex flex-col items-center">
                      <div className="text-5xl text-white">{skill.icon}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{service.description}</p>
              )}
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
