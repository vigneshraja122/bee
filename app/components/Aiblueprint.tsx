"use client"
import React, { useState, useRef } from 'react';
// import html2canvas from "html2canvas";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { ChevronDown, Download, ArrowLeft, ArrowRight, Check } from 'lucide-react';
// import { MacBookFrame } from "./MacBookFrame";
import BlueprintDiagram from './Blueprintdiagram1';// Types
interface QuestionOption {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: string[];
}

interface Answers {
  [key: string]: string | string[];
}

interface BlueprintInput {
  id: string;
  value: string;
}

interface Blueprint {
  inputs: BlueprintInput[];
  [key: string]: any;
}

type Step = 'select' | 'quiz' | 'generating' | 'complete';

// API Functions
async function fetchBlueprint(service: string, answers: Answers): Promise<Blueprint> {
  const res = await fetch("api/blueprint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ service, answers }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || "Failed to generate blueprint");
  }

  return res.json();
}

// Helper function to convert answers to inputs
function answersToInputs(answers: Answers): BlueprintInput[] {
  const QUIZ_IDS = ["blockchain_type", "use_case", "network", "features", "Ai", "timeline"];

  return QUIZ_IDS.map((id) => {
    const v = answers?.[id];

    // show blank if not answered yet
    if (v == null) return { id, value: "-" };

    // arrays (multi-select) => join
    const value = Array.isArray(v) ? v.join(", ") : String(v);

    return { id, value };
  });
}

const BlueprintGenerator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('select');
  const [selectedService, setSelectedService] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [generatingProgress, setGeneratingProgress] = useState<number>(0);
  
  // Diagram ref (used for PDF capture)
  const diagramRef = useRef<HTMLDivElement>(null);

  const services: string[] = [
    'Blockchain App',
    'Crypto Token',
    'Smart Contract',
    'AI Integrated 2d/3d Game development',
    'Crypto Exchange',
    'NFT Marketplace',
    'Custom AI system',
    'Or a Hybrid solution'
  ];
  
  const serviceQuestions: Record<string, QuestionOption[]> = {
    'Blockchain App': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'Crypto Token': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'Smart Contract': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'AI Integrated 2d/3d Game development': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'Crypto Exchange': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'NFT Marketplace': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'Custom AI system': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ],
    'Or a Hybrid solution': [
      {
        id: 'blockchain_type',
        question: 'What type of Blockchain Solution do you want to build?',
        type: 'single',
        options: ['Crypto Exchange (CEX)', 'Decentralized Exchange (DEX)', 'NFT Marketplace', 'Crypto Wallet (Hot / Cold)', 'Token / Coin Creation', 'Prediction Market Solution', 'Gaming Development', 'DeFi Platform (Staking, Lending, Farming)','Web3 Solution','Enterprise Blockchain Solution','Not sure']
      },
      {
        id: 'use_case',
        question: 'What stage is your blockchain idea in?',
        type: 'single',
        options: ['Just an idea', 'Concept / Wireframe ready', 'MVP already built', 'Live product needing upgrades', 'Enterprise requirement analysis']
      },
      {
        id: 'network',
        question: 'Which blockchain network do you prefer?',
        type: 'single',
        options: ['Ethereum', 'BNB Chain', 'Polygon', 'Solana', 'Avalanche', 'Multi-chain', 'Not sure']
      },
      {
        id: 'features',
        question: 'What core features do you need?',
        type: 'multiple',
        options: ['Smart Contracts', 'Token Standards (ERC-20 / ERC-721 / ERC-1155)', 'Wallet Integration', 'On-chain Transactions', 'Admin Dashboard', 'KYC / AML', 'Liquidity & Swaps', 'Staking / Rewards', 'API Integrations']
      },
      {
        id: 'Ai',
        question: 'Do you want AI integrated into the blockchain solution?',
        type: 'single',
        options: ['No AI required', 'AI Chat / Support Assistant', 'AI Fraud Detection', 'AI Trading / Recommendation Engine', 'AI Analytics & Insights', 'AI Automation (Smart workflows)']
      },
      {
        id: 'timeline',
        question: 'Desired launch timeline?',
        type: 'single',
        options: ['2–4 weeks (Rapid MVP)', '1–3 months', '3–6 months', '6+ months', 'Planning phase only']
      }
    ]
  };

  const currentQuestions = serviceQuestions[selectedService] || [];
  const currentQuestionData = currentQuestions[currentQuestion];

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setShowDropdown(false);
    setCurrentStep('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, answer: string, isMultiple: boolean = false) => {
    if (isMultiple) {
      const current = (answers[questionId] as string[]) || [];
      const updated = current.includes(answer)
        ? current.filter(a => a !== answer)
        : [...current, answer];
      setAnswers({ ...answers, [questionId]: updated });
    } else {
      setAnswers({ ...answers, [questionId]: answer });
    }
  };

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateBlueprint();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateBlueprint = async () => {
    setCurrentStep("generating");
    setGeneratingProgress(10);
  
    try {
      const interval = setInterval(() => {
        setGeneratingProgress((p) => (p < 90 ? p + 2 : p));
      }, 120);
  
      const generated = await fetchBlueprint(selectedService, answers);
      clearInterval(interval);
      setGeneratingProgress(100);
  
      setBlueprint(generated);
      setTimeout(() => setCurrentStep("complete"), 300);
    } catch (e) {
      console.error(e);
      alert("Blueprint generation failed. Check server logs.");
      setCurrentStep("quiz");
      setGeneratingProgress(0);
    }
  };
  
//   const downloadPDF = async () => {
//     if (!diagramRef.current) return;
    
//     try {
//       const downloadBtn = document.querySelector('[data-download-btn]') as HTMLButtonElement;
//       if (downloadBtn) {
//         downloadBtn.disabled = true;
//         downloadBtn.innerHTML = 'Generating PDF...';
//       }
      
//       // const canvas = await html2canvas(diagramRef.current, {
//       //   scale: 2,
//       //   backgroundColor: "#ffffff",
//       //   useCORS: true,
//       //   logging: false,
//       //   width: diagramRef.current.scrollWidth,
//       //   height: diagramRef.current.scrollHeight
//       // });
//       const canvas = await html2canvas(diagramRef.current, {
//   scale: 2,
//   backgroundColor: "#ffffff",
//   useCORS: true,
//   logging: false,
//   width: diagramRef.current.scrollWidth,
//   height: diagramRef.current.scrollHeight,
//   onclone: (doc) => {
//     const all = doc.querySelectorAll("*");
//     all.forEach((el) => {
//       const style = (el as HTMLElement).style;
//       style.color = "rgb(0,0,0)";
//       style.backgroundColor = "transparent";
//       style.boxShadow = "none";
//       style.filter = "none";
//       style.backdropFilter = "none";
//     });
//   },
// });

//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       const imgWidth = 210;
//       const pageHeight = 297;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;
//       let position = 0;
      
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
      
//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }
      
//       pdf.save(`${(selectedService || "Blueprint").replace(/\s+/g, "_")}_Blueprint.pdf`);
      
//       if (downloadBtn) {
//         downloadBtn.disabled = false;
//         downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> Download Blueprint';
//       }
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       alert('Failed to generate PDF. Please try again.');
      
//       const downloadBtn = document.querySelector('[data-download-btn]') as HTMLButtonElement;
//       if (downloadBtn) {
//         downloadBtn.disabled = false;
//         downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> Download Blueprint';
//       }
//     }
//   };
const downloadPDF = async () => {
  if (!diagramRef.current) return;

  try {
    const dataUrl = await toPng(diagramRef.current, {
      backgroundColor: "#ffffff",
      pixelRatio: 2,
      cacheBust: true,
    });

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (pdf.getImageProperties(dataUrl).height * imgWidth) /
                      pdf.getImageProperties(dataUrl).width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Blueprint.pdf");
  } catch (err) {
    console.error(err);
    alert("PDF generation failed");
  }
};

  const resetGenerator = () => {
    setCurrentStep('select');
    setSelectedService('');
    setCurrentQuestion(0);
    setAnswers({});
    setGeneratingProgress(0);
    setBlueprint(null);
  };

  return (
    <>
    {/* <MacBookFrame> */}
      <div className="relative z-10 mx-auto flex min-h-[600px] w-full flex-col items-center justify-start px-4 py-10">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            EVO AI
          </span>{" "}
          <span className="text-white">Blueprint Generator</span>
        </h1>

        {/* Content */}
        <div className="w-full">
          <div className="rounded-[24px] border border-white/12 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden">
            {/* Inner top bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/25 px-6 py-4">
              <div className="text-sm text-white/35"> </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-white/50">
                  {currentStep === "generating"
                    ? "Generating..."
                    : currentStep === "quiz"
                    ? `Question ${currentQuestion + 1}/${currentQuestions.length}`
                    : "Ready"}
                </span>
                <span className="text-white/25">•</span>
                <span className="text-white/80">{selectedService || "Blockchain App"}</span>
              </div>
            </div>

            {/* Inner content */}
            <div className="px-6 py-12 md:px-16 lg:px-20">
              {/* SERVICE SELECTION */}
              {currentStep === "select" && (
                <>
                  <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12">
                    Select with <span className="text-cyan-300">Seamless</span>{" "}
                    Power <span className="text-cyan-300">✦</span>
                  </h2>

                  {/* Dropdown pill */}
                  <div className="mt-10 flex justify-center">
                    <div className="relative w-full max-w-2xl">
                      <button
                        onClick={() => setShowDropdown((s) => !s)}
                        className="group w-full rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-8 py-5 shadow-[0_12px_40px_-18px_rgba(0,255,255,0.35)] backdrop-blur-md transition hover:border-white/25"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-300 font-semibold text-lg">
                            {selectedService || "Blockchain App"}
                          </span>
                          <span className="flex items-center justify-center rounded-full bg-[#0b1222]/80 px-8 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                            <ChevronDown
                              className={`h-5 w-5 text-white/80 transition ${
                                showDropdown ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </div>
                      </button>

                      {showDropdown && (
                        <div className="absolute left-0 right-0 mt-3 overflow-hidden rounded-2xl border border-white/15 bg-[#0b1222]/90 shadow-2xl backdrop-blur-xl z-10">
                          {services.map((item) => (
                            <button
                              key={item}
                              onClick={() => handleServiceSelect(item)}
                              className="w-full px-6 py-4 text-left text-white/85 hover:bg-white/10 border-b border-white/5 last:border-b-0 text-base"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cards stack */}
                  <div className="mt-12 flex flex-col items-center gap-6">
                    {/* Flowchart card */}
                    <div className="w-full max-w-lg rounded-2xl border border-white/12 bg-white/7 px-7 py-5 backdrop-blur-md shadow-[0_18px_60px_-35px_rgba(255,255,255,0.18)]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="h-3 w-3 rounded-full bg-red-500/90 animate-pulse" />
                          <span className="text-white/90 font-medium text-base">Flowchart</span>
                        </div>
                        <span className="text-white/40 text-sm italic">Processing.....</span>
                      </div>
                    </div>

                    {/* Generating magic card */}
                    <div className="w-full max-w-lg rounded-2xl border border-white/12 bg-white/7 px-10 py-10 backdrop-blur-md shadow-[0_22px_70px_-40px_rgba(0,255,255,0.28)]">
                      <div className="text-center space-y-5">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-300 shadow-lg">
                          <div className="h-10 w-10 rounded-full border-2 border-white/90 relative">
                            <div className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 bg-white/90" />
                            <div className="absolute left-1/2 top-1/2 h-7 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/90" />
                          </div>
                        </div>
                        <p className="text-white/85 font-semibold text-lg">Generating magic...</p>
                        <div className="space-y-2">
                          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-2.5 w-1/3 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" />
                          </div>
                          <p className="text-white/35 text-sm italic">Screen 1/6</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* QUIZ SCREEN */}
              {currentStep === "quiz" && currentQuestionData && (
                <>
                  <div className="text-center mb-10">
                    <div className="inline-block px-6 py-2.5 bg-cyan-400/10 text-cyan-300 rounded-full text-sm mb-8 border border-cyan-400/20 font-medium">
                      Question {currentQuestion + 1} of {currentQuestions.length}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 px-4">
                      {currentQuestionData.question}
                    </h2>
                    <div className="w-full max-w-3xl mx-auto bg-white/10 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-teal-300 h-2.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 max-w-3xl mx-auto mt-10">
                    {currentQuestionData.options.map((option) => {
                      const isSelected =
                        currentQuestionData.type === "multiple"
                          ? ((answers[currentQuestionData.id] as string[]) || []).includes(option)
                          : answers[currentQuestionData.id] === option;

                      return (
                        <button
                          key={option}
                          onClick={() =>
                            handleAnswer(
                              currentQuestionData.id,
                              option,
                              currentQuestionData.type === "multiple"
                            )
                          }
                          className={`px-7 py-5 rounded-2xl text-left transition-all border backdrop-blur-md text-base ${
                            isSelected
                              ? "bg-cyan-400/20 border-cyan-400/50 text-white shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]"
                              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option}</span>
                            {isSelected && (
                              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-400">
                                <Check className="w-4 h-4 text-black" />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-4 justify-center pt-12">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="px-10 py-3.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center gap-2 transition-all border border-white/10 backdrop-blur-md text-base font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={
                        !answers[currentQuestionData.id] ||
                        (currentQuestionData.type === "multiple" &&
                          (answers[currentQuestionData.id] as string[])?.length === 0)
                      }
                      className="px-10 py-3.5 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 disabled:opacity-30 disabled:cursor-not-allowed text-black rounded-full flex items-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-base"
                    >
                      {currentQuestion === currentQuestions.length - 1 ? "Generate Blueprint" : "Next"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {/* GENERATING SCREEN */}
              {currentStep === "generating" && (
                <div className="text-center space-y-10 py-16">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-teal-300 shadow-lg animate-pulse">
                    <div className="text-6xl">⚡</div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white">Generating magic...</h2>
                  <div className="max-w-xl mx-auto space-y-4">
                    <div className="w-full bg-white/10 rounded-full h-3.5">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-teal-300 h-3.5 rounded-full transition-all duration-300"
                        style={{ width: `${generatingProgress}%` }}
                      />
                    </div>
                    <p className="text-white/40 text-base italic">
                      Screen {Math.floor(generatingProgress / 17)}/6
                    </p>
                  </div>
                </div>
              )}

              {/* COMPLETE SCREEN */}
              {currentStep === "complete" && blueprint && (
                <div className="text-center space-y-10 py-16">
                  {/* Blueprint Diagram (used for PDF capture) */}
                  {/* <div ref={diagramRef} className="w-full max-w-6xl mx-auto bg-white rounded-xl p-6">
                    <BlueprintDiagram
                      title={`${selectedService} Blueprint`}
                      blueprint={{
                        ...blueprint,
                        inputs: answersToInputs(answers),
                      }}
                    />
                  </div> */}

                  <div
  ref={diagramRef}
  className="bg-white text-black p-6 rounded-xl"
  style={{
    color: "#000",
    backgroundColor: "#fff",
  }}
>
  <BlueprintDiagram
    title={`${selectedService} Blueprint`}
    blueprint={{
      ...blueprint,
      inputs: answersToInputs(answers),
    }}
  />
</div>

                  
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-green-400 to-emerald-300 shadow-lg">
                    <Check className="w-16 h-16 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                      Blueprint Generated!
                    </h2>
                    <p className="text-white/50 text-lg">Your comprehensive blueprint is ready for download</p>
                  </div>
                  <div className="flex gap-5 justify-center pt-8">
                    <button
                      onClick={resetGenerator}
                      className="px-10 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 backdrop-blur-md font-medium text-base"
                    >
                      Create Another
                    </button>
                    <button
                      onClick={downloadPDF}
                      data-download-btn
                      className="px-10 py-3.5 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 text-black rounded-full flex items-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-base"
                    >
                      <Download className="w-5 h-5" />
                      Download Blueprint
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    {/* </MacBookFrame> */}
    </>
  );
};

export default BlueprintGenerator;