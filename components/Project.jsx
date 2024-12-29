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
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-center text-5xl font-bold mb-12 text-black">PROJECTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-black">
              <div className="mb-4">
                <div className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-3">
                  {project.name}
                </div>
                <div className="text-gray-600 text-sm mb-2">{project.period}</div>
              </div>
              
              <div className="mb-4">
                <ul className="space-y-2">
                  {project.summary.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm block mb-2"
              >
                {project.link}
              </a>

              <div className="bg-yellow-50 rounded-md p-3">
                <div className="text-sm text-gray-700">{project.techStacks}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Archiving;
