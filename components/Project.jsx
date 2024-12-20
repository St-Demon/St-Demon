"use client"

import React from 'react';
import { motion } from "framer-motion"

const projects = [
  {
    name: '타자게임 코드',
    period: '2024.10',
    summary: [
      'HTML, CSS, JavaScript 학습을 위한 실습 프로젝트로, 타자 속도와 정확도를 향상시키기 위한 게임',
      '웹 개발 기초 기술을 익히고, 사용자 경험 중심의 인터페이스를 설계해보고자 기획',
    ],
    link: 'https://github.com/St-Demon/cicd_test.git',
    techStacks: 'Javascript, HTML, CSS',
  },
  {
    name: 'porfolio',
    period: '2024.11',
    summary: [
      '자신을 효과적으로 소개하고, 기술 스택과 프로젝트 경험을 정리하여 취업 및 네트워킹을 위한 중심 허브 역할',
      '나만의 브랜드를 구축하고, 나의 기술과 역량을 시각적으로 표현하며 잠재적인 고용주나 협업자에게 인상을 남기기 위해 기획',
    ],
    link: 'https://github.com/St-Demon/St-Demon.git',
    techStacks: 'Next.js, Taliwind CSS, , JavaScript (JSX), React, Vercel',
  },
  {
    name: '자기소개 AI 비서',
    period: '2024.11',
    summary: [
      'OpenAI API를 활용해 자연어 처리 기반으로 자신의 프로필과 주요 정보를 대화형 인터페이스로 소개',
      'AI 기술을 실습하고, 취업 과정에서 자기소개를 차별화된 방식으로 제공하기 위해 제작',
    ],
    link: 'https://github.com/St-Demon/St-Demon.git',
    techStacks: 'Python, Flask, , OpenAI API, MongoDB, 서브도메인, AWS EC2',
  },
];

const Archiving = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <h3 className="text-center text-5xl text-black font-bold mb-10">PROJECTS</h3>
        <div className="grid grid-cols-2 justify-items-center gap-[30px]">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-start text-left gap-4 border border-black p-4 rounded-md w-full">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-black">{project.name}</h4>
                <p className="text-sm text-gray-700">{project.period}</p>
                <ul className="text-left list-disc pl-5 text-black">
                  {project.summary.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.link}
                </a>
                <p className="text-sm text-gray-600">{project.techStacks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Archiving;
