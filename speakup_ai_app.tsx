import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  Compass, 
  CheckCircle, 
  Award, 
  RefreshCw, 
  VolumeX, 
  ArrowRight, 
  ChevronRight, 
  MessageSquare, 
  HelpCircle,
  Play,
  Bookmark,
  TrendingUp,
  X,
  AlertCircle
} from 'lucide-react';

// 初始化 Firebase / 環境設定
const appId = typeof __app_id !== 'undefined' ? __app_id : 'speakup-ai-demo';
const apiKey = ""; // 執行時會自動由系統代入

// 精選角色扮演場景
const SCENARIOS = [
  {
    id: 'cafe',
    title: '星巴克咖啡廳點餐',
    level: '初級 (Beginner)',
    icon: '☕',
    description: '練習如何向店員點選美式咖啡、客製化牛奶以及結帳。',
    systemPrompt: `You are a friendly Starbucks barista. Keep your responses short (1-2 sentences), natural, and warm. Ask the user what they want to order, offer options (size, milk types, or snacks), and complete the transaction. Speak naturally in standard American English.`,
    initialMessage: "Hi there! Welcome to Starbucks. What can I get started for you today?",
    hints: [
      "I'd like a medium iced latte with oat milk, please.",
      "Can I get a chocolate croissant and a black coffee?",
      "Just a large cold brew, please. To go."
    ]
  },
  {
    id: 'interview',
    title: '科技公司模擬面試',
    level: '進階 (Advanced)',
    icon: '💻',
    description: '模擬一場產品經理或軟體工程師的面試，練習如何有條理地自我介紹。',
    systemPrompt: `You are an interviewer from a top tech company hiring for a tech role. Ask professional, encouraging but challenging questions. Respond to the user's answers, give slight validation, and then ask a follow-up interview question. Keep your responses to 2-3 sentences max.`,
    initialMessage: "Thank you for coming in today. To start, could you please introduce yourself and tell me about a challenging project you've worked on?",
    hints: [
      "Sure. I have over 3 years of experience in software development...",
      "In my last role, I led a team to redesign our core database architecture...",
      "I specialize in React and Node.js, and I enjoy solving complex performance issues."
    ]
  },
  {
    id: 'hotel',
    title: '五星級飯店辦理入住',
    level: '中級 (Intermediate)',
    icon: '🏨',
    description: '抵達飯店櫃檯辦理 check-in，詢問早餐時間及設施。',
    systemPrompt: `You are a polite hotel front desk receptionist at a luxury hotel. Help the customer check in, ask for their ID/name, explain the breakfast hours (7-10 AM) and elevator locations, and hand over the key card. Keep responses professional and within 2 sentences.`,
    initialMessage: "Good evening! Welcome to the Grand Hyatt. Do you have a reservation with us tonight?",
    hints: [
      "Yes, I have a reservation under the name of Smith.",
      "Hello, I'd like to check in please. Here is my passport.",
      "Is breakfast included in my booking? And where is the gym?"
    ]
  },
  {
    id: 'casual_chat',
    title: '週末計畫閒聊',
    level: '自由對話 (Casual)',
    icon: '☀️',
    description: '與好朋友隨意聊聊這週末的安排、美食或是最近看的一部好電影。',
    systemPrompt: `You are Taylor, a very close, enthusiastic college friend. Speak in casual, modern American slang/colloquial English. Use occasional expressions like 'Oh nice!', 'No way!', or 'That sounds awesome!'. Ask questions back to keep the conversation flowing. Keep responses very short (1-2 sentences).`,
    initialMessage: "Hey! So glad we caught up. Do you have anything fun planned for this weekend? I'm thinking of checking out that new art exhibit!",
    hints: [
      "Not much, just planning to catch up on some sleep and watch Netflix.",
      "I'm actually going hiking with some friends on Saturday. Want to join?",
      "I have to study for my exams all weekend, sadly!"
    ]
  }
];

export default function App() {
  // 基礎 App 狀態
  const [currentTab, setCurrentTab] = useState('explore'); // 'explore' | 'chat' | 'stats'
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: SCENARIOS[0].initialMessage, translated: "嗨，你好！歡迎光臨星巴克。今天想來點什麼呢？" }
  ]);
  
  // 語音與對話輸入狀態
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // 每日數據狀態 (在記憶體中模擬，可增加趣味性)
  const [streak, setStreak] = useState(5); // 連續學習天數
  const [wordsSpoken, setWordsSpoken] = useState(1420);
  const [pronunciationScore, setPronunciationScore] = useState(88);
  const [savedPhrases, setSavedPhrases] = useState([
    { english: "I'd like to make a reservation, please.", chinese: "我想預訂，謝謝。", scenario: "五星級飯店辦理入住" },
    { english: "Could you tell me where the gym is located?", chinese: "能告訴我健身房在哪裡嗎？", scenario: "五星級飯店辦理入住" }
  ]);

  // 音訊與語音合成設置
  const [isMuted, setIsMuted] = useState(false);
  const recognitionRef = useRef(null);

  // 初始化 Web Speech API (語音辨識)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US'; // 鎖定口說為英文

      rec.onstart = () => {
        setIsRecording(true);
        setErrorMessage('');
      };

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };

      rec.onerror = (event) => {
        console.error('Speech Recognition Error', event.error);
        if (event.error === 'no-speech') {
          setErrorMessage('未偵測到聲音，請再試一次。');
        } else if (event.error === 'not-allowed') {
          setErrorMessage('麥克風權限被拒絕，請開啟權限。');
        } else {
          setErrorMessage(`語音辨識出錯: ${event.error}`);
        }
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
    } else {
      console.warn('此瀏覽器不支援 Web Speech API。');
    }
  }, []);

  // 切換場景時重新初始化對話
  const handleSelectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setChatHistory([
      { role: 'ai', text: scenario.initialMessage, translated: "" }
    ]);
    setInputText('');
    setErrorMessage('');
    setCurrentTab('chat');
    
    // 自動播放初始歡迎詞
    setTimeout(() => {
      speakText(scenario.initialMessage);
    }, 500);
  };

  // 文字轉語音播放 (TTS)
  const speakText = (text) => {
    if (isMuted || !('speechSynthesis' in window)) return;
    
    // 先停止正在播放的
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    // 試圖尋找美式英文女聲或男聲
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('Google') || v.name.includes('Natural')));
    if (usVoice) {
      utterance.voice = usVoice;
    }
    utterance.rate = 0.95; // 稍微放慢速度，友善學習者
    window.speechSynthesis.speak(utterance);
  };

  // 錄音按鈕觸發
  const toggleRecording = () => {
    if (!recognitionRef.current) {
      setErrorMessage('您的瀏覽器不支援語音辨識。請直接用鍵盤輸入！');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      setInputText('');
      setErrorMessage('');
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error(err);
      }
    }
  };

  // 核心：使用 Gemini API 解析並生成口說教練的回饋
  const submitSpeech = async (overrideText = '') => {
    const textToSubmit = overrideText || inputText;
    if (!textToSubmit.trim()) return;

    // 1. 先將用戶講的話塞入對話歷史
    const userMsgIndex = chatHistory.length;
    const newHistory = [
      ...chatHistory,
      { 
        role: 'user', 
        text: textToSubmit,
        // 以下三個欄位會在 AI 分析完後填入
        grammarCorrected: null, 
        suggestions: null,
        loadingFeedback: true
      }
    ];
    setChatHistory(newHistory);
    setInputText('');
    setIsAiLoading(true);

    // 2. 準備給 Gemini 的 Prompt (要求回傳 JSON 以進行完美的 UI 著色與分析)
    const systemInstruction = `
      You are an elite, encouraging AI English Coach and conversational partner.
      Your goal is to sustain a realistic roleplay while providing high-quality, practical feedback on the user's English.
      
      The current scenario is: "${selectedScenario.title}" (Level: ${selectedScenario.level}).
      Your persona: ${selectedScenario.systemPrompt}
      
      For the user's input: "${textToSubmit}"
      
      You MUST respond with a JSON object. Do not include any markdown format around the JSON, just raw JSON.
      JSON Schema format:
      {
        "aiReply": "your next roleplay conversational response in English. Keep it lively, engaging, and 1-2 sentences.",
        "aiReplyTranslation": "Traditional Chinese translation of your aiReply.",
        "userTextGrammarFix": "Provide any grammar corrections or better phrasing for what the user just said. If they spoke perfectly, write 'Looks perfect! Keep it up!'. Limit to 1 clear, helpful sentence in Traditional Chinese or bilingual.",
        "betterSayings": [
          {
            "english": "Polished/more native alternative sentence 1",
            "chinese": "Chinese translation of alternative 1"
          },
          {
            "english": "Polished/more native alternative sentence 2",
            "chinese": "Chinese translation of alternative 2"
          }
        ],
        "estimatedScore": 85 (an estimated naturalness score from 50 to 100 based on their input)
      }
    `;

    // 建立完整的對話上下文給 API
    // 為了讓 API 有上下文記憶，我們把過去幾輪的對話也包進去
    const apiContents = [
      {
        role: "user",
        parts: [{ text: `Let's start the roleplay. You are the AI. Remember to output ONLY the valid JSON structure matching the schema.` }]
      }
    ];

    // 加入最近幾筆歷史紀錄（排除 feedback 屬性，保持乾淨）
    chatHistory.slice(-4).forEach(msg => {
      apiContents.push({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      });
    });

    // 加入最新這一次的發言與指令
    apiContents.push({
      role: 'user',
      parts: [{ text: `User said: "${textToSubmit}". Remember, system context: "${systemInstruction}". Give feedback and next response.` }]
    });

    // 進行 API 呼叫（含指數型退避重試）
    let retries = 5;
    let delay = 1000;
    let success = false;
    let resultJson = null;

    while (retries > 0 && !success) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: apiContents,
            generationConfig: {
              responseMimeType: "application/json"
            }
          })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (rawText) {
          resultJson = JSON.parse(rawText.trim());
          success = true;
        } else {
          throw new Error('回傳結構為空');
        }
      } catch (err) {
        retries--;
        if (retries === 0) {
          console.error("API Call failed after retries:", err);
          setErrorMessage("連線超時或 AI 暫無回應，請再試一次。");
          setIsAiLoading(false);
          // 移除 loading 狀態
          setChatHistory(prev => {
            const copy = [...prev];
            if (copy[userMsgIndex]) copy[userMsgIndex].loadingFeedback = false;
            return copy;
          });
          return;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }

    if (success && resultJson) {
      // 3. 更新用戶剛剛說的那句話的 Feedback 資訊
      setChatHistory(prev => {
        const updated = [...prev];
        if (updated[userMsgIndex]) {
          updated[userMsgIndex] = {
            ...updated[userMsgIndex],
            grammarCorrected: resultJson.userTextGrammarFix,
            suggestions: resultJson.betterSayings || [],
            score: resultJson.estimatedScore || 85,
            loadingFeedback: false
          };
        }
        // 4. 新增 AI 的回應
        updated.push({
          role: 'ai',
          text: resultJson.aiReply,
          translated: resultJson.aiReplyTranslation
        });
        return updated;
      });

      // 5. 更新口說數據，模擬遊戲化成就
      const wordCount = textToSubmit.split(/\s+/).filter(Boolean).length;
      setWordsSpoken(prev => prev + wordCount);
      if (resultJson.estimatedScore) {
        setPronunciationScore(prev => Math.round((prev * 9 + resultJson.estimatedScore) / 10));
      }

      setIsAiLoading(false);

      // 6. 自動朗讀 AI 的下一句回應
      setTimeout(() => {
        speakText(resultJson.aiReply);
      }, 300);
    }
  };

  // 儲存常用句子至「我的筆記」
  const handleSavePhrase = (english, chinese) => {
    if (savedPhrases.some(p => p.english === english)) return; // 避免重複
    setSavedPhrases(prev => [
      ...prev,
      { english, chinese, scenario: selectedScenario.title }
    ]);
  };

  // 移除儲存的句子
  const handleRemovePhrase = (english) => {
    setSavedPhrases(prev => prev.filter(p => p.english !== english));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* 頂部導覽列 */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wider bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              SpeakUp AI
            </h1>
            <p className="text-xs text-indigo-400 font-medium">仿 Speak 即時英文口說教練</p>
          </div>
        </div>

        {/* 快捷統計 */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
            <span className="text-amber-500">🔥</span>
            <span className="font-semibold text-amber-400">{streak} 天連續學習</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
            <Award className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300">平均口說分：<strong className="text-emerald-400">{pronunciationScore}</strong></span>
          </div>
        </div>

        {/* 靜音切換與資訊 */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2.5 rounded-lg transition-all duration-200 ${isMuted ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            title={isMuted ? "已靜音" : "語音播放中"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* 主體內容 */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 flex flex-col md:flex-row gap-6 overflow-hidden">
        
        {/* 左側欄：選單導覽與場景選擇 */}
        <div className="w-full md:w-80 flex flex-col space-y-4 shrink-0">
          
          {/* 主分頁切換 */}
          <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setCurrentTab('explore')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex flex-col items-center gap-1 ${currentTab === 'explore' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              <Compass className="h-4 w-4" />
              探索情境
            </button>
            <button
              onClick={() => setCurrentTab('chat')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex flex-col items-center gap-1 ${currentTab === 'chat' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              <MessageSquare className="h-4 w-4" />
              AI 口說室
            </button>
            <button
              onClick={() => setCurrentTab('stats')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex flex-col items-center gap-1 ${currentTab === 'stats' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              <TrendingUp className="h-4 w-4" />
              學習進度
            </button>
          </div>

          {/* 快捷儀表板 (Mobile 顯示) */}
          <div className="md:hidden grid grid-cols-2 gap-2">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">🔥 連續學習</span>
              <span className="font-bold text-amber-500">{streak} 天</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">🎤 已說字數</span>
              <span className="font-bold text-indigo-400">{wordsSpoken} 字</span>
            </div>
          </div>

          {/* 情境選擇選單 - 在 Explore 頁籤或大螢幕左側常駐 */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col space-y-3 flex-1 overflow-y-auto max-h-[500px] md:max-h-[calc(100vh-210px)]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-sm font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                精選口說情境
              </span>
              <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full font-semibold">
                Speak 特色
              </span>
            </div>

            <div className="space-y-2.5 overflow-y-auto">
              {SCENARIOS.map((sc) => {
                const isSelected = selectedScenario.id === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => handleSelectScenario(sc)}
                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-start space-x-3 group relative overflow-hidden ${
                      isSelected 
                        ? 'bg-gradient-to-r from-indigo-950 to-slate-900 border-indigo-500/50 shadow-md shadow-indigo-500/5' 
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    )}
                    <span className="text-2xl mt-0.5 shrink-0 select-none">{sc.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="font-bold text-sm text-slate-100 group-hover:text-indigo-300 transition-colors">
                          {sc.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {sc.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          sc.level.includes('Beginner') || sc.level.includes('初級') 
                            ? 'bg-emerald-500/10 text-emerald-400' 
                            : sc.level.includes('Intermediate') || sc.level.includes('中級')
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-rose-500/10 text-rose-400'
                        }`}>
                          {sc.level}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-600 shrink-0 self-center ml-auto group-hover:text-slate-400 transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 右側欄：核心工作區 */}
        <div className="flex-1 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col overflow-hidden min-h-[480px]">
          
          {/* 1. 探索情境導覽頁籤 */}
          {currentTab === 'explore' && (
            <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    Welcome to SpeakUp AI
                  </span>
                  <h2 className="text-2xl font-black text-slate-100">
                    隨時隨地，開口說道地美式英語
                  </h2>
                  <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                    本系統完美對照知名軟體 <strong>Speak</strong> 的學習邏輯。AI 口說教練能為您營造零壓力的練習環境，每次說話皆可獲得專屬的文法修正意見、自然美式造句替換、與發音回饋。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Mic className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-200">免設定！一鍵口說</h3>
                    <p className="text-xs text-slate-400">
                      使用 Chrome 等現代瀏覽器直接點擊麥克風即可講話，完全不需要額外的語意 API 金鑰。
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-200">即時糾錯與道地美語</h3>
                    <p className="text-xs text-slate-400">
                      基於最新 Gemini 模型，精準挑出你的文法盲點，並提供 2-3 個「美國人會這樣說」的建議。
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Volume2 className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-200">AI 語音朗讀輔助</h3>
                    <p className="text-xs text-slate-400">
                      整合 TTS 語音朗讀。無論是 AI 的回覆還是更道地的建議，點擊一下喇叭即可聆聽純正發音。
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="h-8 w-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                      <Bookmark className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-200">客製化筆記本</h3>
                    <p className="text-xs text-slate-400">
                      遇到好句子？一鍵點擊儲存，隨時在「學習進度」頁籤複習，打造你專屬的英文生字本。
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-950 to-slate-900 p-4 rounded-xl border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">目前選定情境</div>
                    <div className="font-bold text-slate-200 flex items-center gap-1.5">
                      <span>{selectedScenario.icon}</span>
                      <span>{selectedScenario.title} ({selectedScenario.level})</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSelectScenario(selectedScenario)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 shrink-0"
                  >
                    進入練習
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="text-center text-xs text-slate-500 border-t border-slate-900 pt-4 mt-6">
                SpeakUp AI 2026. Made with Google Gemini 2.5 Flash.
              </div>
            </div>
          )}

          {/* 2. AI 口說對話室頁籤 (主要功能區) */}
          {currentTab === 'chat' && (
            <div className="flex-1 flex flex-col h-full relative overflow-hidden">
              
              {/* 目前情境小橫條 */}
              <div className="bg-slate-900/80 border-b border-slate-850 px-4 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2.5">
                  <span className="text-xl select-none">{selectedScenario.icon}</span>
                  <div>
                    <h3 className="text-sm font-black text-slate-100 flex items-center gap-1.5">
                      {selectedScenario.title}
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-normal bg-slate-800 text-slate-300 border border-slate-700">
                        {selectedScenario.level}
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{selectedScenario.description}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectScenario(selectedScenario)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                  title="重置對話"
                >
                  <RefreshCw className="h-3 w-3" />
                  重開對話
                </button>
              </div>

              {/* 對話訊息捲動區 */}
              <div className="flex-1 overflow-y-auto p-4 space-y-5 flex flex-col">
                {chatHistory.map((msg, index) => {
                  const isAi = msg.role === 'ai';
                  
                  if (isAi) {
                    return (
                      <div key={index} className="flex items-start space-x-3 max-w-[85%] self-start">
                        <div className="h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          AI
                        </div>
                        <div className="space-y-1.5">
                          <div className="bg-slate-900 text-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-800 relative group">
                            <p className="text-sm leading-relaxed font-medium select-text">{msg.text}</p>
                            
                            {/* 音訊播放按鈕與翻譯 */}
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
                              <span className="text-xs text-slate-400 italic">
                                {msg.translated || "(點擊語音播放自動顯示翻譯)"}
                              </span>
                              <button
                                onClick={() => {
                                  speakText(msg.text);
                                  // 如果尚未載入翻譯，在這裡提供簡單提示
                                  if (!msg.translated) {
                                    // 可以在此更新顯示
                                  }
                                }}
                                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                                title="播放語音"
                              >
                                <Volume2 className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    // 用戶的對話氣泡（含 Speak 特色文法修正與道地度分析卡片）
                    return (
                      <div key={index} className="flex flex-col items-end space-y-2 max-w-[90%] self-end">
                        
                        {/* 語音原句 */}
                        <div className="flex items-start space-x-2 flex-row-reverse">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                            ME
                          </div>
                          <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-md">
                            <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                          </div>
                        </div>

                        {/* AI 評語與優化建議卡片 (這是 Speak 的核心強項) */}
                        {msg.loadingFeedback ? (
                          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 w-full max-w-md mr-10 flex items-center justify-center space-x-2 text-xs text-slate-400 py-4">
                            <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-indigo-500 border-t-transparent" />
                            <span>AI 即時分析語法與道地說法中...</span>
                          </div>
                        ) : (
                          msg.grammarCorrected && (
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 w-full max-w-md mr-10 space-y-3 shadow-lg">
                              
                              {/* 評分與標題 */}
                              <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                                  <Sparkles className="h-3 w-3 text-amber-400" />
                                  口說診斷與道地建議
                                </span>
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-[10px] text-slate-400">自然度得分:</span>
                                  <span className={`text-xs font-black ${
                                    msg.score >= 90 ? 'text-emerald-400' : msg.score >= 75 ? 'text-indigo-400' : 'text-amber-400'
                                  }`}>
                                    {msg.score}/100
                                  </span>
                                </div>
                              </div>

                              {/* 文法修剪意見 */}
                              <div className="space-y-1 bg-slate-950 p-2.5 rounded-lg border border-slate-850/60">
                                <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3" />
                                  句型修正建議
                                </div>
                                <p className="text-xs text-slate-200 leading-relaxed">
                                  {msg.grammarCorrected}
                                </p>
                              </div>

                              {/* 更道地的 2 種說法 */}
                              {msg.suggestions && msg.suggestions.length > 0 && (
                                <div className="space-y-2">
                                  <div className="text-[11px] font-bold text-emerald-400">
                                    💡 更好的美式道地講法 (Polished Version)
                                  </div>
                                  <div className="space-y-2">
                                    {msg.suggestions.map((sug, sIdx) => (
                                      <div key={sIdx} className="bg-indigo-950/20 hover:bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-500/10 flex items-start justify-between gap-2 group transition-all">
                                        <div className="space-y-1 min-w-0">
                                          <p className="text-xs font-bold text-indigo-200 leading-normal">{sug.english}</p>
                                          <p className="text-[10px] text-slate-400">{sug.chinese}</p>
                                        </div>
                                        <div className="flex items-center space-x-1.5 shrink-0">
                                          {/* 播放按鈕 */}
                                          <button
                                            onClick={() => speakText(sug.english)}
                                            className="p-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
                                            title="聽發音"
                                          >
                                            <Volume2 className="h-3 w-3" />
                                          </button>
                                          {/* 儲存按鈕 */}
                                          <button
                                            onClick={() => handleSavePhrase(sug.english, sug.chinese)}
                                            className="p-1 rounded bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-400 transition-all"
                                            title="加入筆記"
                                          >
                                            <Bookmark className="h-3 w-3" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    );
                  }
                })}

                {/* AI 思考中 */}
                {isAiLoading && (
                  <div className="flex items-center space-x-2 text-slate-400 text-xs self-start bg-slate-900/40 py-2 px-3 rounded-xl border border-slate-850 animate-pulse">
                    <div className="flex space-x-1">
                      <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span>教練正在組織回覆...</span>
                  </div>
                )}
              </div>

              {/* 錯誤警告區 */}
              {errorMessage && (
                <div className="mx-4 mb-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 對話提示字卡 (Hints) */}
              <div className="px-4 py-2 border-t border-slate-850 bg-slate-900/40 flex flex-col space-y-1.5 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-semibold">
                    <HelpCircle className="h-3 w-3 text-indigo-400" />
                    不知道要說什麼？試試這些提示字卡 (點擊直接代入)：
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 overflow-x-auto py-1">
                  {selectedScenario.hints.map((hint, index) => (
                    <button
                      key={index}
                      onClick={() => setInputText(hint)}
                      className="text-xs bg-slate-800/80 hover:bg-slate-750 text-indigo-200 border border-slate-700/60 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap text-left"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>

              {/* 最底部輸入框與麥克風 */}
              <div className="p-4 border-t border-slate-850 bg-slate-900/90 flex items-center space-x-3 shrink-0">
                {/* 錄音按鈕 */}
                <button
                  onClick={toggleRecording}
                  className={`h-12 w-12 rounded-full flex items-center justify-center transition-all shadow-md shrink-0 relative ${
                    isRecording 
                      ? 'bg-red-500 text-white animate-pulse shadow-red-500/20' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/20'
                  }`}
                  title={isRecording ? "正在錄音，點擊停止" : "點擊麥克風開始口說英文"}
                >
                  {isRecording ? (
                    <MicOff className="h-5 w-5" />
                  ) : (
                    <Mic className="h-5 w-5" />
                  )}
                  {isRecording && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  )}
                </button>

                {/* 輸入文字框 */}
                <div className="flex-1 relative flex items-center">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') submitSpeech();
                    }}
                    placeholder={isRecording ? "正在聆聽您的英文口說...說完點擊下方或麥克風即可" : "輸入您的口說英文，或使用麥克風錄製..."}
                    className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all pr-12"
                  />
                  {inputText && (
                    <button 
                      onClick={() => setInputText('')}
                      className="absolute right-3 text-slate-500 hover:text-slate-300"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* 發送按鈕 */}
                <button
                  onClick={() => submitSpeech()}
                  disabled={!inputText.trim() || isAiLoading}
                  className={`h-11 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-150 flex items-center space-x-1.5 shrink-0 ${
                    inputText.trim() && !isAiLoading
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>發送</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* 3. 學習進度與生字筆記本頁籤 */}
          {currentTab === 'stats' && (
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              
              {/* 整體數據儀表板 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-2xl">
                    🔥
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">連續學習天數</div>
                    <div className="text-2xl font-black text-slate-100">{streak} 天</div>
                    <p className="text-[10px] text-slate-500">明日口說可獲得雙倍獎勵！</p>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">累計口說字數</div>
                    <div className="text-2xl font-black text-slate-100">{wordsSpoken} 字</div>
                    <p className="text-[10px] text-slate-500">相當於約 12 篇長對話</p>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">口說道地度</div>
                    <div className="text-2xl font-black text-slate-100">{pronunciationScore}%</div>
                    <p className="text-[10px] text-slate-500">領先同等級 89% 的學習者</p>
                  </div>
                </div>
              </div>

              {/* 每日挑戰進度 */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    本日每日任務進度
                  </h3>
                  <span className="text-[10px] text-indigo-400 font-bold">2/3 已完成</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-850 text-xs">
                    <div className="flex items-center space-x-2.5">
                      <span className="h-5 w-5 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                      <div>
                        <p className="font-bold text-slate-200">開啟至少一個角色扮演場景</p>
                        <p className="text-[10px] text-slate-500">星巴克咖啡廳點餐已完成</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-semibold">+50 積分</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-850 text-xs">
                    <div className="flex items-center space-x-2.5">
                      <span className="h-5 w-5 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                      <div>
                        <p className="font-bold text-slate-200">說出至少 15 個英文單字</p>
                        <p className="text-[10px] text-slate-500">今日已累計發音字數</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-semibold">+100 積分</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-850 text-xs">
                    <div className="flex items-center space-x-2.5">
                      <span className="h-5 w-5 bg-slate-800 text-slate-500 rounded-full flex items-center justify-center text-[10px] font-bold">-</span>
                      <div>
                        <p className="font-bold text-slate-300">儲存 3 個道地佳句至學習筆記</p>
                        <p className="text-[10px] text-slate-500">目前已儲存 {savedPhrases.length}/3 個</p>
                      </div>
                    </div>
                    <span className="text-slate-500 font-semibold">+150 積分</span>
                  </div>
                </div>
              </div>

              {/* 生字佳句筆記本 */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                    <Bookmark className="h-4 w-4 text-indigo-400" />
                    我的道地英文筆記本 ({savedPhrases.length})
                  </h3>
                  <span className="text-xs text-slate-400">點擊喇叭發音、點擊 X 移除</span>
                </div>

                {savedPhrases.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 text-xs space-y-2">
                    <p>筆記本裡空空如也 📓</p>
                    <p className="text-[10px]">在 AI 口說室點選「更好的美式道地講法」右側的書籤按鈕，即可將實用句子保存在這喔！</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {savedPhrases.map((phrase, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-850 rounded-xl p-3 flex flex-col justify-between space-y-2 group">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded font-semibold">
                              {phrase.scenario}
                            </span>
                            <button
                              onClick={() => handleRemovePhrase(phrase.english)}
                              className="text-slate-500 hover:text-rose-400 p-0.5 rounded transition-colors"
                              title="移除記錄"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-xs font-bold text-slate-100">{phrase.english}</p>
                          <p className="text-[11px] text-slate-400">{phrase.chinese}</p>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-900 pt-2 mt-1">
                          <span className="text-[10px] text-slate-500">標準美式發音</span>
                          <button
                            onClick={() => speakText(phrase.english)}
                            className="p-1.5 rounded-lg bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white transition-all flex items-center gap-1 text-[10px] font-bold"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            播放語音
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}