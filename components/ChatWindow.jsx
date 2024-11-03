"use client"

import { useState, useEffect, useRef } from 'react';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messageEndRef = useRef(null);

    const sendMessage = (message) => {
        if (message.trim()) {
            setMessages((prevMessages) => [...prevMessages, { text: message, type: 'outgoing' }]);
            return true;
        }
        return false;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const currentInput = input.trim();
            // console.log("Sending message:", currentInput);
            if (sendMessage(currentInput)) {
                setInput('');
            }
        }
    };

    const handleButtonClick = () => {
        const currentInput = input.trim();
        if (sendMessage(currentInput)) {
            setInput('');
        }
    };

    // 자동 스크롤
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="flex flex-col border border-primary rounded-lg shadow-lg h-[600px] w-[400px]">
            <div className="bg-primary p-4 rounded-t-lg">
                <h2 className="text-lg font-semibold">자기소개</h2>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-primary">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.type === 'outgoing' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded-lg ${msg.type === 'outgoing' ? 'bg-blue-500 text-black' : 'bg-gray-300 text-black'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
                {/* 자동 스크롤 */}
                <div ref={messageEndRef} />
            </div>
            <div className="flex p-4 border-t border-primary">
                <input 
                    type="text" 
                    className="flex-grow p-2 border rounded-lg mr-2 text-accent bg-primary" 
                    placeholder="메시지를 입력하세요..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg" 
                    onClick={handleButtonClick}
                >
                    전송
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;
