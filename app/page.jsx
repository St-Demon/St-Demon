"use client";

import { useState } from "react";

// components
import History from "/components/History";
import ChatWindow from "/components/ChatWindow";
import Aboutme from "/components/Aboutme";
import Homescreen from "/components/Homescreen";
import Project from "/components/Project";
import Archiving from "/components/Archiving";

// 채팅창 기능
export default function Home() {
  const [isChatOpen, setChatOpen] = useState(false); // 상태 관리

  const toggleChat = () => {
    setChatOpen((prevState) => !prevState); // 채팅창 토글
  };

  return (
    <section className="h-full">
      <div id="header" className="container mx-auto">
        <Homescreen toggleChat={toggleChat} />
      </div>
      <div id="socials" className="bg-[#010101] py-12">
        <div className="container mx-auto">
          <Archiving/>
        </div>
      </div>
      <div id="history" className="bg-[#ffffff] py-12">
        <div className="container mx-auto">
          <History />
        </div>
      </div>
      <div id="aboutme" className="bg-[#f9c51d] text-black py-12">
        <div className="container mx-auto">
          <Aboutme />
        </div>
      </div>
      <div id="projects" className="bg-[#ffffff] py-12">
        <div className="container mx-auto">
          <Project />
        </div>
      </div>
      {/* 채팅창 */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end">
        {isChatOpen && (
          <div className="mb-2">
            <ChatWindow />
          </div>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          onClick={toggleChat}
        >
          {isChatOpen ? "채팅 닫기" : "채팅 열기"}
        </button>
      </div>
    </section>
  );
}
