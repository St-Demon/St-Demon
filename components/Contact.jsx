"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+82) 010-1234-1234",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pos2682@naver.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 13579",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-row gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact