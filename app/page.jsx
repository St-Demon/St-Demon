"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Socials from "/components/Socials";
import Photo from "/components/Photo";
import Stats from "/components/Stats";

import ChatWindow from "/components/ChatWindow";


// 채팅창 기능
export default function Home() {
  const [isChatOpen, setChatOpen] = useState(false); // 상태 관리

  const toggleChat = () => {
    setChatOpen(!isChatOpen); // 채팅창 토글
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">보안 전문가</span>
            <h1 className="text-6xl">
              임동진의 사이버<br/><span className="text-accent">보안으로 안전을 지킵니다.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              저는 사이버 보안 분야에 열정을 가지고 있으며&#44; 시스템 보호와 데이터 안전을 위해 다양한 보안 기술과 도구를 꾸준히 공부하고 있습니다.
            </p>
            {/* SNS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>

      {/* 채팅창 */}
      <div className="fixed bottom-4 right-4 border-2 rounded-lg border-accent">
        {isChatOpen && <ChatWindow />}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          onClick={toggleChat}
        >
          {isChatOpen ? '채팅 닫기' : '채팅 열기'}
        </button>
      </div>
    </section>
  );
}
