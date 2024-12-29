"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaCalendar, FaSmile, FaSchool } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaSmile />,
    title: "이름",
    description: "임동진",
  },
  {
    icon: <FaCalendar />,
    title: "생년월일",
    description: "99.12.30",
  },
  {
    icon: <FaPhoneAlt />,
    title: "연락처",
    description: "010-1234-1234",
  },
  {
    icon: <FaEnvelope />,
    title: "이메일",
    description: "pos2682@naver.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "위치",
    description: "서울특별시 관악구",
  },
  {
    icon: <FaSchool />,
    title: "학력",
    description: "위덕대학교",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
      opacity: 1,
      transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      
      }}
      className="py-6"
    >
      <div className="container mx-auto py-12">
        <h3 className="text-center text-5xl font-bold mb-16">ABOUT ME</h3>
        <div className="grid grid-cols-1 justify-items-center gap-[30px]">
          {/* info */}
            <ul className="grid grid-cols-3 justify-items-center items-center gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex flex-col items-center text-center gap-4">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-white rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact