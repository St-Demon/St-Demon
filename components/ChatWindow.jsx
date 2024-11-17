"use client";

import { useState, useEffect, useRef } from 'react';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isComposing, setIsComposing] = useState(false); // 한글 입력 중 여부
    const messageEndRef = useRef(null);

    // 메시지 전송 함수 (서버와 통신)
    const sendMessage = (message) => {
        if (message.trim()) {
            // 전송한 메시지 클라이언트에 추가
            setMessages((prevMessages) => [...prevMessages, { text: message, type: 'outgoing' }]);

            // 서버에 메시지를 보내고 응답을 처리
            fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: message // 'message'로 보내는 것 확인
                }), // 메시지 전달
            })
                .then((response) => response.json())
                .then((data) => {
                    // 서버로부터 받은 응답을 클라이언트에 추가
                    if (data.response) {
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            { text: data.response, type: 'incoming' },
                        ]);
                    } else {
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            { text: 'Error: ' + data.error, type: 'incoming' },  // 서버 오류 메시지 표시
                        ]);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching response:', error);
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: '서버와의 연결에 실패했습니다. 다시 시도해주세요.', type: 'incoming' },
                    ]);
                });

            return true;
        }
        return false;
    };

    // Enter 키 눌렀을 때 메시지 전송
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !isComposing) { // 한글 입력 중이 아닐 때만 실행
            e.preventDefault();
            const currentInput = input.trim();
            if (sendMessage(currentInput)) {
                setInput('');
            }
        }
    };

    // 한글 입력 시작
    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    // 한글 입력 끝
    const handleCompositionEnd = () => {
        setIsComposing(false);
    };

    // 버튼 클릭 시 메시지 전송
    const handleButtonClick = () => {
        const currentInput = input.trim();
        if (sendMessage(currentInput)) {
            setInput('');
        }
    };

    // 메시지가 업데이트될 때마다 자동으로 스크롤을 하단으로 이동
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
                    onCompositionStart={handleCompositionStart} // 한글 조합 시작
                    onCompositionEnd={handleCompositionEnd} // 한글 조합 끝
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
