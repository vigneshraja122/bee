'use client';

import { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Chat {
  id: number;
  title: string;
  timestamp: Date;
}

export default function BlockchainChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (!input.trim() || isGenerating) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    if (!activeChat) {
      const newChat: Chat = {
        id: Date.now(),
        title: input.slice(0, 50) + (input.length > 50 ? '...' : ''),
        timestamp: new Date()
      };
      setChatHistory(prev => [newChat, ...prev]);
      setActiveChat(newChat.id);
    }

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateBlockchainResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 1500);
  };

  const generateBlockchainResponse = (question: string): string => {
    return "I'm an AI assistant here to help you shape your idea.";
  };

  const loadChat = (chatId: number): void => {
    setActiveChat(chatId);
    setMessages([]);
  };

  return (
    <div className="w-full  min-h-screen">

      {/* 🔥 HERO TEXT ABOVE CHATBOT */}
      <div className="text-center pt-24 pb-16 px-6">
        <h1 className="text-xl  md:text-3xl  text-white font-bold mb-2">
          AI PROJECT FINDER
        </h1>
        <p className="text-4xl md:text-5xl text-[#82888d] font-bold mb-3">
          Powered by EVO AI
        </p>
        <p className="text-white  font-bold">
          Have only a one-line idea? Start here
        </p>
      </div>

      {/* 💬 CHATBOT CONTAINER */}
      <div className="w-full flex justify-center px-6">
        <div className="flex bg-black/40 backdrop-blur-xl 
          w-full max-w-6xl h-[520px] rounded-3xl overflow-hidden shadow-[0_0_0px_-10px_rgba(58,220,255,0.6),0_0_100px_-30px_rgba(58,220,255,0.4)]
">

       

          {/* Main Area */}
          <div className="flex-1 flex flex-col">
                 <div>
                   <h2 className="text-white text-md font-semibold mb-2 mt-5 ml-20">
                    AI Project Finder
                  </h2>
                 </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
              
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-white text-xl font-semibold mb-2">
                    Discover the Magic AI
                  </h2>
                  <p className="text-gray-400 text-sm max-w-md">
                    Exclusively for designers, developers, product teams & magicians!
                  </p>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex gap-5 ${
                        message.type === 'user'
                          ? 'justify-end'
                          : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-3xl px-7 py-5 rounded-3xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                            : 'bg-black/90 text-gray-100'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="px-6 py-6 bg-black/20 backdrop-blur-sm">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl">
              <div
                className="flex items-center gap-4 
                bg-[#2c2c2c] 
                rounded-full px-6 py-3 shadow-2xl"
              >
                {/* Left Icon */}
                <button className="text-gray-500">
                  <img src="/assets/images/Butterfly.gif" alt="" className='w-10 mix-blend-screen'/>
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Select what you want to create..."
                  className="flex-1 text-center bg-transparent text-white placeholder-gray-500 outline-none text-sm"
                />

                {/* Generate Button */}
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 
                  hover:from-cyan-600 hover:to-teal-600 
                  text-white px-7 py-2.5 rounded-full shadow-lg 
                  shadow-cyan-500/25 flex items-center gap-2"
                >
                  <Send size={16} />
                  Generate
                </button>
              </div>
            </div>
          </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
}
