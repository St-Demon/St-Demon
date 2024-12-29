"use client";

import { useState, useEffect, useRef } from 'react';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isComposing, setIsComposing] = useState(false); // 한글 입력 중 여부
    const [isTyping, setIsTyping] = useState(false); // 타이핑 중 여부
    const [suggestions_content1, setSuggestions_content] = useState([]); // 후속 질문
    const messageEndRef = useRef(null);

    // 메시지 전송 함수 (서버와 통신)
    const sendMessage = (message) => {
        if (message.trim()) {
            // 전송한 메시지 클라이언트에 추가
            setMessages((prevMessages) => [...prevMessages, { text: message, type: 'outgoing' }]);

            // 서버에 메시지를 보내고 응답을 처리
            setIsTyping(true);  // 서버 응답 기다리는 동안 타이핑 중 표시
            fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setIsTyping(false); // 응답 받으면 타이핑 중 표시 제거
                    if (data.response) {
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            { text: data.response, type: 'incoming' },
                        ]);

                        // 후속 질문 설정
                        if (data.suggestions_content1) {
                            console.log(data);
                            console.log("11111111111111111111111111111111111111");
                            try {
                                const suggestions = JSON.parse(data.suggestions_content1);
                                console.log(suggestions);
                                const questions = suggestions["추천질문"];
                                console.log('Parsed questions:', questions);
                                if (Array.isArray(questions)) {
                                    setSuggestions_content(questions);
                                } else {
                                    console.error("Expected an array but got:", questions);
                                    setSuggestions_content([]);
                                }
                            } catch (err) {
                                console.error("JSON 파싱 오류:", err);
                                setSuggestions_content([]);
                            }
                        } else {
                            setSuggestions_content([]);
                        }

                    } else {
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            { text: 'Error: ' + data.error, type: 'incoming' },
                        ]);
                    }
                })
                .catch((error) => {
                    console.error("서버 요청 중 오류 발생:", error);
                    setFollowupQuestions([]); // 안전하게 초기화
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

    // Function to handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
    };

    return (
        <div className="flex flex-col border-2 border-#ffffff rounded-lg shadow-lg h-[600px] w-[400px]">
            <div className="bg-primary p-4 rounded-t-lg border-b-2 border-#ffffff">
                <h2 className="text-lg font-semibold">임동진에 대해서 물어보세요.</h2>
            </div>
            <div className="flex-grow overflow-y-auto p-4 bg-primary">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.type === 'outgoing' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded-lg ${msg.type === 'outgoing' ? 'bg-blue-500 text-black' : 'bg-gray-300 text-black'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}

                {/* 상대방이 타이핑 중일 때 표시 */}
                {isTyping && (
                    <div className="text-gray-500 mt-2 text-left">
                        <span className="animate-pulse">...</span>
                    </div>
                )}

                {/* 자동 스크롤 */}
                <div ref={messageEndRef} />
            </div>
            {/* 추천 질문 */}
            <div className="p-4 bg-primary flex flex-col justify-end">
                <h3 className="text-sm font-bold mb-2">추천 질문:</h3>
                <div className="flex flex-wrap justify-end gap-2">
                    {suggestions_content1.map((question, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg cursor-pointer"
                            onClick={() => handleSuggestionClick(question)}
                        >
                            {question}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex p-4 rounded-b-lg border-t-2 border-#ffffff bg-primary">
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
