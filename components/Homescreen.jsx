"use client"

import React from "react";
import Socials from "/components/Socials";
import Photo from "/components/Photo";
import { motion } from "framer-motion"

const Homescreen = ({ toggleChat }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">-임동진-</span>
          <h1 className="text-6xl">
            보안 전문가 포트폴리오
            <br />
            <span className="text-accent"></span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            안녕하세요 본질에 집중하는 보안전문가 임동진입니다.
          </p>
          {/* SNS */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
              onClick={toggleChat} // 제대로 전달된 함수 사용
            >
              동진의 AI 친구
            </button>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </motion.section>
  );
};

export default Homescreen;
