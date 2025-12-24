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

 const Chattest =() =>{
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const generateBlockchainResponse = (question: string): string => {
    const responses: Record<string, string> = {
      default: "I'm an AI assistant specialized in blockchain technology. I can help you understand concepts like smart contracts, DeFi, NFTs, consensus mechanisms, and much more. What would you like to know?",
      smart: "Smart contracts are self-executing contracts with the terms directly written into code. They run on blockchain networks like Ethereum and automatically execute when predetermined conditions are met, eliminating the need for intermediaries.",
      defi: "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without traditional intermediaries like banks. It includes lending, borrowing, trading, and earning interest on crypto assets through decentralized protocols.",
      nft: "NFTs (Non-Fungible Tokens) are unique digital assets stored on a blockchain. Unlike cryptocurrencies, each NFT has distinct properties and cannot be exchanged on a one-to-one basis. They're commonly used for digital art, collectibles, and gaming items.",
      consensus: "Consensus mechanisms are protocols that ensure all nodes in a blockchain network agree on the current state of the ledger. Popular mechanisms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS)."
    };

    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('smart contract')) return responses.smart;
    if (lowerQuestion.includes('defi') || lowerQuestion.includes('decentralized finance')) return responses.defi;
    if (lowerQuestion.includes('nft')) return responses.nft;
    if (lowerQuestion.includes('consensus') || lowerQuestion.includes('proof of')) return responses.consensus;
    return responses.default;
  };

  const loadChat = (chatId: number): void => {
    setActiveChat(chatId);
    setMessages([]);
  };

  return (
    <div className='xl:px-30 lg:px-30 md:px-30 px-2 py-10'>
                                        {/* 🔥 HERO TEXT */}
                <div className="xl:text-center lg:text-center md:text-center sm:text-center text-center pt-16 sm:pt-24 pb-10 sm:pb-16 px-6">
                    <h1 className="md:text-3xl sm:text-xl text-[10px] text-white font-bold mb-2">
                    AI PROJECT FINDER
                    </h1>
                    <p className="md:text-3xl sm:text-xl text-2xl sm:text-4xl md:text-5xl text-[#82888d] font-bold mb-3">
                    Powered by EVO AI
                    </p>
                    <p className="text-white font-bold text-[10px] sm:text-base">
                    Have only a one-line idea? Start here
                    </p>
                </div>

            <div className="flex h-screen bg-gradient-to-br from-[#0f1419] via-[#0a0e14] to-[#0d1b1e]  shadow-[0_0_0px_-10px_rgba(58,220,255,0.6),0_0_100px_-30px_rgba(58,220,255,0.4)]">

                {/* Sidebar */}
                <div className="w-72 bg-black/30 backdrop-blur-md border-r border-white/5 flex-col  lg:flex sm:hidden hidden">
                    <div className="p-5  border-white/5">
                    <h2 className="text-white/90 text-base font-semibold">AI Project Finder</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                    {chatHistory.length === 0 ? (
                        <div className="text-gray-600 text-xs text-center py-12">
                        {/* No recent chats yet */}
                        </div>
                    ) : (
                        <div className="space-y-2">
                        {chatHistory.map(chat => (
                            <button
                            key={chat.id}
                            onClick={() => loadChat(chat.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${
                                activeChat === chat.id
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
                            }`}
                            >
                            <div className="flex items-start gap-3">
                                <MessageSquare size={18} className="mt-0.5 flex-shrink-0 opacity-70" />
                                <span className="text-sm line-clamp-2 leading-relaxed">{chat.title}</span>
                            </div>
                            </button>
                        ))}
                        </div>
                    )}
                    </div>
            {/* 
                    <div className="p-5 border-t border-white/5">
                    <p className="text-gray-600 text-xs text-center">Powered by EVO AI</p>
                    </div> */}
                </div>

                {/* Main Area */}
                <div className="flex-1 flex flex-col bg-black/30">
                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto ">
                    {messages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center px-6">
                            <h2 className="text-white text-xl font-semibold mb-2">
                                Discover the Magic AI
                            </h2>
                            <p className="text-gray-400 text-[10px] max-w-md">
                                Exclusively for designers, developers, product teams & magicians!
                            </p>
                            </div>
                    ) : (
                        <div className="max-w-5xl mx-auto px-6 py-12">
                        <div className="space-y-8">
                            {messages.map(message => (
                            <div
                                key={message.id}
                                className={`flex gap-5 ${
                                message.type === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                {message.type === 'ai' && (
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                </div>
                                )}
                                <div
                                className={`max-w-3xl px-7 py-5 ${
                                    message.type === 'user'
                                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-3xl shadow-xl shadow-cyan-500/25'
                                    : 'bg-black/90 text-gray-100 rounded-3xl shadow-2xl border border-white/5'
                                }`}
                                style={message.type === 'ai' ? { boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' } : {}}
                                >
                                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                </p>
                                </div>
                                {message.type === 'user' && (
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <span className="text-white text-sm font-semibold">U</span>
                                </div>
                                )}
                            </div>
                            ))}
                            {isGenerating && (
                            <div className="flex gap-5">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                </div>
                                <div className="bg-black/90 border border-white/5 px-7 py-5 rounded-3xl shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' }}>
                                <div className="flex gap-2">
                                    <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                        </div>
                    )}
                    </div>

                    {/* Input Area */}
                        {/* Input */}
                        <div className="px-4 sm:px-6 py-4 sm:py-6 ">
                        <div className="w-full flex justify-center">
                            <div className="w-full max-w-3xl">
                            <div
                                className="
                                flex items-center gap-3 sm:gap-4
                                bg-[#2c2c2c]
                                rounded-full
                                px-4 sm:px-6
                                py-2.5 sm:py-3
                                shadow-2xl
                                "
                            >
                                {/* Left Icon */}
                                <button className="text-gray-500">
                                <img
                                    src="/assets/images/Butterfly.gif"
                                    alt=""
                                    className="w-8 sm:w-10 mix-blend-screen"
                                />
                                </button>

                                {/* Input */}
                                <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                placeholder="Select what you want to create..."
                                className="
                                    flex-1 text-center
                                    bg-transparent
                                    text-white placeholder-gray-500
                                    outline-none
                                    text-[10px] sm:text-base
                                "
                                />

                                {/* Button */}
                                <button
                                onClick={handleSubmit}
                                className="
                                    bg-gradient-to-r from-cyan-500 to-teal-500
                                    hover:from-cyan-600 hover:to-teal-600
                                    text-white
                                    px-5 sm:px-7
                                    py-2 sm:py-2.5
                                    rounded-full
                                    shadow-lg shadow-cyan-500/25
                                    flex items-center gap-2
                                    text-[10px] sm:text-base
                                "
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
  );
}
export default Chattest;