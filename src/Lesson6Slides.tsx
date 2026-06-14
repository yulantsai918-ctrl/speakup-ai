import {
  Bus, Volume2, HelpCircle, Droplet, CheckCircle, Info, Sparkles,
  ArmchairIcon, Utensils, MessageSquare, Bell, Users, BellRing, Lock,
  Cookie
} from 'lucide-react'
import { LESSON_6_SLIDES } from './lessonData'

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}

export function Lesson6Slide({ page, active }: { page: number; active: boolean }) {
  const data = LESSON_6_SLIDES[page - 1]
  return (
    <Slide active={active}>
      <div className="absolute inset-0 bg-[#fcfbf4] text-[#2d2013] rounded-2xl flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto">
        <div className="flex justify-between items-center w-full border-b border-indigo-900/20 pb-3 mb-4 text-xs md:text-sm font-semibold text-indigo-900">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-indigo-950 text-amber-400 uppercase tracking-widest text-[10px] font-bold rounded">
              {data.category}
            </span>
            <span className="text-gray-500">{page === 1 ? '' : data.subtitle}</span>
          </div>
          <div className="text-gray-500 tracking-wider text-[10px]">NotebookLM Studio</div>
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-0">
          {page === 1 && <Slide1Content />}
          {page === 2 && <Slide2Content />}
          {page === 3 && <Slide3Content />}
          {page === 4 && <Slide4Content />}
          {page === 5 && <Slide5Content />}
          {page === 6 && <Slide6Content />}
          {page === 7 && <Slide7Content />}
          {page === 8 && <Slide8Content />}
          {page === 9 && <Slide9Content />}
          {page === 10 && <Slide10Content />}
          {page === 11 && <Slide11Content />}
          {page === 12 && <Slide12Content />}
          {page === 13 && <Slide13Content />}
          {page === 14 && <Slide14Content />}
        </div>

        <div className="flex justify-between items-center w-full pt-3 mt-4 border-t border-indigo-900/20 text-[11px] font-medium text-gray-400">
          <div>© 2026 American Campus Survival Guide</div>
          <div className="flex items-center gap-1 font-bold text-indigo-900">
            Page {page} / 14
          </div>
        </div>
      </div>
    </Slide>
  )
}

function Slide1Content() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-[10px] font-semibold">
          <span>🇺🇸 美式校園指南</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-950 leading-tight">
          American Campus <br /><span className="text-amber-500">Survival Guide</span>
        </h2>
        <p className="text-xl font-bold text-slate-700">
          留學生必備的真實情境對話
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          A visual guide to navigating classrooms, group projects, and everyday campus conversations.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute w-52 h-52 bg-indigo-50 rounded-full animate-pulse" />
          <svg className="w-32 h-32 drop-shadow-lg" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="15" width="50" height="70" rx="10" fill="#1e1b4b" />
            <rect x="15" y="25" width="20" height="50" rx="5" fill="#facc15" />
            <rect x="65" y="25" width="20" height="50" rx="5" fill="#facc15" />
            <circle cx="50" cy="40" r="12" fill="#475569" opacity="0.2" />
            <path d="M45 48L50 35L55 48" stroke="#facc15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M47 43H53" stroke="#facc15" strokeWidth="4" />
            <rect x="35" y="80" width="30" height="5" fill="#94a3b8" rx="2" />
          </svg>
          <div className="absolute bottom-2 right-2 bg-amber-400 p-3 rounded-2xl shadow-lg border-2 border-white rotate-12">
            <Bus className="w-8 h-8 text-indigo-950" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide2Content() {
  const locations = [
    { num: 1, title: "Principal's Office", zh: '校長室', desc: 'Where the person in charge works.' },
    { num: 2, title: 'Hallway', zh: '走廊', desc: 'Where lockers are located and between-class chats happen.' },
    { num: 3, title: 'Cafeteria', zh: '學生餐廳', desc: 'The main hub for lunch and small talk.' },
    { num: 4, title: 'Restroom', zh: '洗手間', desc: '🇺🇸 Uniquely American term for bathroom.', tag: '美國專用' },
    { num: 5, title: 'Auditorium', zh: '禮堂', desc: 'Used for school-wide assemblies and performances.' },
    { num: 6, title: 'Gym', zh: '體育館', desc: 'For physical exercise and pep rallies.' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// CAMPUS BLUEPRINT</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">CAMPUS BLUEPRINT (校園藍圖)</h2>
      <p className="text-xs text-slate-500 mt-1">Key Locations & Vocabulary (關鍵地點與詞彙)</p>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {locations.map((loc) => (
          <div key={loc.num} className="border border-slate-200 p-4 rounded-2xl hover:shadow-md hover:border-indigo-200 transition bg-indigo-50/20">
            <div className="flex items-center space-x-2 text-indigo-900 font-bold mb-1">
              <span className="bg-indigo-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">{loc.num}</span>
              <h4 className="text-sm">{loc.title}</h4>
            </div>
            <p className="text-amber-600 font-bold text-[10px]">{loc.zh}</p>
            <p className="text-[10px] text-slate-500 mt-1">
              {loc.tag && <span className="bg-amber-100 text-amber-800 px-1 py-0.5 rounded text-[9px] font-bold mr-1">{loc.tag}</span>}
              {loc.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide3Content() {
  const items = [
    { zh: '下課/休息', us: 'Recess', uk: 'Break' },
    { zh: '洗手間', us: 'Restroom', uk: 'Washroom / Loo' },
    { zh: '年級', us: 'Grade (9th grade)', uk: 'Class / Year' },
    { zh: '數學', us: 'Math', uk: 'Maths' },
    { zh: '作業本', us: 'Workbook', uk: 'Exercise book' },
    { zh: '電梯', us: 'Elevator', uk: 'Lift' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// US vs UK</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">US vs. UK Campus Lingo</h2>
      <p className="text-xs text-slate-500 mt-1">美式、英式用語差別，快速適應不同語境！</p>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {items.map((item, i) => (
          <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all text-center">
            <span className="text-[10px] font-bold text-slate-400">{item.zh}</span>
            <div className="mt-1 text-base font-bold text-indigo-950">{item.us}</div>
            <div className="text-slate-400 text-[10px] my-1">vs</div>
            <div className="text-base font-bold text-amber-600">{item.uk}</div>
            <div className="text-[9px] text-indigo-950 bg-indigo-50 py-1 px-2 rounded-full mt-2 inline-block font-semibold">美式 (US) vs 英式 (UK)</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide4Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// POLITENESS SPECTRUM</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">THE POLITENESS SPECTRUM (禮貌光譜)</h2>
      <p className="text-xs text-slate-500 mt-1">在不同場景該如何禮貌提問：</p>
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100 mt-3">
          {[
            { label: 'Casual/同儕', word: 'Can', en: '"Can I borrow a pencil?"', zh: '我可以借一支鉛筆嗎？', desc: '用於非正式請求與表達能力（同儕或熟人之間）。', color: 'bg-indigo-600 text-white' },
            { label: 'Polite/禮貌', word: 'Could', en: '"Could you explain this, please?"', zh: '可以請您解釋一下這個嗎？', desc: '比 Can 更為柔和、尊重。在向老師請教問題時最適合。', color: 'border border-slate-300 text-slate-600' },
            { label: 'Formal/正式許可', word: 'May', en: '"May I go to the restroom?"', zh: '我可以去洗手間嗎？', desc: '極度正式，專門用於向長輩、教授「尋求許可」。', color: 'border border-slate-300 text-slate-600' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-3">
              <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
              <h4 className="text-base font-extrabold text-indigo-950 mt-2">
                <span className="text-xl font-black mr-1">{item.word}</span>
                {item.en.replace(item.word, '')}
              </h4>
              <p className="text-slate-600 text-[11px] mt-0.5">{item.zh}</p>
              <p className="text-[10px] text-slate-400 border-t pt-2 mt-2">{item.desc}</p>
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl flex items-start space-x-2 text-[10px]">
            <Sparkles className="w-3.5 h-3.5 mt-0.5 text-amber-500 shrink-0" />
            <p><strong>魔法咒語：</strong>在 Could 或 May 的句子結尾加上 <strong>"please"</strong>，是美式禮貌的黃金法則！</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide5Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// MORNING HOMEROOM</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Morning Homeroom: Navigating the Classroom</h2>
      <p className="text-xs text-slate-500 mt-1">早自習與課堂情境：如何應對遲到、點名和問候</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-red-50 text-red-700 px-2 py-1 rounded text-[10px] font-bold w-max mb-3">Section 1: Entering Late (進教室)</div>
            <div className="space-y-2 text-[11px]">
              <div className="bg-slate-50 p-2 rounded">
                <p className="font-bold text-indigo-950">Excuse me, may I come in?</p>
                <p className="text-slate-500 text-[10px]">(不好意思，我可以進來嗎？)</p>
              </div>
              <div className="bg-slate-50 p-2 rounded">
                <p className="font-bold text-indigo-950">{"I'm sorry I'm late. I missed my bus."}</p>
                <p className="text-slate-500 text-[10px]">(抱歉我遲到了，我沒趕上公車。)</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-[10px] text-red-500 font-semibold flex items-center space-x-1">
            <Info className="w-3 h-3" />
            <span>遲到務必使用 May 來禮貌詢問！</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold w-max mb-3">Section 2: Roll Call (點名)</div>
            <div className="space-y-2 text-[11px]">
              <div className="bg-indigo-950 text-white p-2.5 rounded">
                <span className="text-[9px] text-amber-400 block font-bold uppercase">Teacher:</span>
                <p className="font-medium">{"It's time for roll call. Say 'here' when I say your name."}</p>
                <p className="text-[9px] text-slate-300">(現在開始點名。叫到名字請說「有」。)</p>
              </div>
              <div className="bg-amber-100 text-amber-950 p-2.5 rounded">
                <span className="text-[9px] text-amber-800 block font-bold uppercase">You:</span>
                <p className="font-bold">Here!</p>
                <p className="text-[9px] text-amber-800">(有！/ 到！)</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-[10px] text-indigo-600 font-semibold flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>點名說 'Here!' 即可，簡單直接。</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-[10px] font-bold w-max mb-3">Section 3: Greetings (早安問候)</div>
            <div className="space-y-2 text-[11px]">
              <div className="bg-slate-50 p-2 rounded">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Teacher:</span>
                <p className="font-bold text-indigo-950">Good morning, how are you today?</p>
              </div>
              <div className="bg-slate-50 p-2 rounded">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">You:</span>
                <p className="font-bold text-indigo-950">{"I'm doing well, thank you. And you?"}</p>
                <p className="text-slate-500 text-[9px]">(我很好，謝謝您。您好嗎？)</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-[10px] text-green-600 font-semibold flex items-center space-x-1">
            <span role="img" aria-label="smile">😊</span>
            <span>And you? 可以展現雙向社交禮貌。</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide6Content() {
  const cards = [
    { en: '"Pay attention!"', meaning: 'Listen carefully, this will be on the test!', zh: '專心聽講！這題一定會考！' },
    { en: '"Turn in your homework."', meaning: 'Hand your assignments to the front.', zh: '把作業往前傳交上來。' },
    { en: '"Stop talking in class."', meaning: 'Quiet down immediately.', zh: '安靜！上課別說話。' },
    { en: '"Pack your things away."', meaning: 'The lesson is over, clear your desks.', zh: '下課了，把桌面東西收好。' },
    { en: '"Can someone come to the board and solve this?"', meaning: 'Looking for a brave volunteer.', zh: '有人能當個勇者上台解這道題嗎？' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// TEACHER SPEAK</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Decoding Teacher Speak (聽懂老師的潛台詞)</h2>
      <p className="text-xs text-slate-500 mt-1">點擊卡片解鎖隱藏含意！</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {cards.slice(0, 5).map((card, i) => (
          <div key={i} className="bg-indigo-950 text-white p-4 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition transform">
            <div className="opacity-30 group-hover:opacity-100 transition absolute right-3 top-3"><Lock className="w-3.5 h-3.5" /></div>
            <span className="text-[9px] text-amber-400 font-bold">What the Teacher Says</span>
            <h4 className="text-sm font-bold mt-1">{card.en}</h4>
            <div className="mt-3 pt-2 border-t border-indigo-900">
              <span className="text-[9px] text-green-400 font-bold block">REAL MEANING</span>
              <p className="text-[11px] font-semibold">{card.meaning}</p>
              <p className="text-[9px] text-slate-300 mt-0.5">{card.zh}</p>
            </div>
          </div>
        ))}
        <div className="bg-amber-100 text-amber-950 p-4 rounded-2xl border-2 border-dashed border-amber-300 flex flex-col justify-center items-center text-center">
          <Sparkles className="w-5 h-5 text-amber-500 mb-1" />
          <p className="font-bold text-xs">小提示</p>
          <p className="text-[10px] text-amber-800 mt-1">點擊上方深藍色卡片，即可揭曉老師的真實想法！</p>
        </div>
      </div>
    </div>
  )
}

function Slide7Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// POLITE INTERRUPTIONS</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Polite Interruptions: Using Could & May</h2>
      <p className="text-xs text-slate-500 mt-1">如何禮貌地打斷老師提問，或是提出生理需求</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
          <div className="flex items-center space-x-2 font-bold text-indigo-950 mb-3">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-sm">Asking for Clarification (提問與確認)</span>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="font-bold text-slate-800">"Excuse me, could you repeat that last point, please?"</p>
              <p className="text-[10px] text-slate-500 mt-0.5">(不好意思，可以請您重複最後一點嗎？)</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="font-bold text-slate-800">{"I didn't quite catch that. Can you say it again?"}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">(我剛沒聽清楚，可以再說一次嗎？)</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
          <div className="flex items-center space-x-2 font-bold text-amber-950 mb-3">
            <Droplet className="w-4 h-4 text-amber-600" />
            <span className="text-sm">Bathroom Breaks (去洗手間)</span>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <span className="text-[9px] font-bold text-amber-600">YOU:</span>
              <p className="font-bold text-slate-800">"Excuse me, could I go to the bathroom, please?"</p>
              <p className="text-[10px] text-slate-500 mt-0.5">(不好意思，請問我可以去洗手間嗎？)</p>
            </div>
            <div className="bg-indigo-950 text-white p-3 rounded-xl shadow-sm">
              <span className="text-[9px] font-bold text-amber-400">TEACHER:</span>
              <p className="font-medium">"Yes, of course. Just don't take too long."</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border-2 border-dashed border-green-200">
              <span className="text-[9px] font-bold text-green-600">YOU (RETURNING):</span>
              <p className="font-bold text-slate-800">"Excuse me, I'm back." <span className="bg-green-100 text-green-800 text-[9px] px-1 py-0.5 rounded font-bold">極佳習慣</span></p>
              <p className="text-[10px] text-slate-500 mt-0.5">(不好意思，我回來了。)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide8Content() {
  const steps = [
    { num: 1, title: 'Step 1: The Syllabus', subtitle: '課程大綱', desc: 'Your course map. 規劃學期進度的一張地圖。', en: '"I should check the syllabus later and catch up."', zh: '我晚點應該看一下課程大綱補上進度。' },
    { num: 2, title: 'Step 2: The Assignment', subtitle: '出作業', desc: 'The task given by the teacher. 老師指派的具體課業任務。', en: '"What\'s the homework assignment for today?"', zh: '今天的作業是什麼？' },
    { num: 3, title: 'Step 3: The Due Date', subtitle: '截止日期', desc: 'When it must be finished. 最重要的關鍵字：死線。', en: '"Do you remember when the science project is due?"', zh: '你記得科學報告什麼時候交嗎？' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// ASSIGNMENT LIFECYCLE</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">The Assignment Lifecycle (作業的生命週期)</h2>
      <p className="text-xs text-slate-500 mt-1">掌握作業從「大綱」到「出作業」及「截止日」的三部曲</p>
      <div className="flex-1 flex flex-col md:flex-row justify-between items-stretch gap-4 mt-3">
        {steps.map((step) => (
          <div key={step.num} className="flex-1 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm relative flex flex-col justify-between hover:border-indigo-400 transition">
            <div>
              <span className="absolute -top-3 left-4 bg-indigo-900 text-white font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow-lg text-xs">{step.num}</span>
              <h4 className="font-bold text-indigo-950 text-sm mt-1">{step.title}</h4>
              <span className="text-[10px] text-slate-400">({step.subtitle})</span>
              <p className="text-[10px] text-slate-500 mt-2 bg-slate-50 p-2 rounded"><strong>{step.desc}</strong></p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 text-[10px]">
              <p className="font-bold text-indigo-950 bg-indigo-50 p-2 rounded">{step.en}</p>
              <p className="text-slate-500 mt-0.5">{step.zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide9Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// GROUP PROJECT</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Arranging a Group Project (小組專案討論)</h2>
      <p className="text-xs text-slate-500 mt-1">如何用最自然的方式邀請同學一起做報告</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        <div className="md:col-span-2 space-y-2 bg-slate-50 p-4 rounded-3xl border border-slate-100 max-h-72 overflow-y-auto">
          <div className="flex items-start space-x-2">
            <div className="w-7 h-7 rounded-full bg-indigo-900 text-white font-bold flex items-center justify-center text-[10px]">S</div>
            <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
              <span className="text-[9px] text-slate-400 block font-bold">Sam</span>
              <p className="text-xs font-bold text-indigo-950">"Want to work on it together after school?"</p>
              <span className="text-[9px] text-slate-400">(放學後要不要一起做？)</span>
            </div>
          </div>
          <div className="flex items-start space-x-2 justify-end">
            <div className="bg-indigo-950 text-white p-2.5 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-right">
              <span className="text-[9px] text-amber-400 block font-bold">Alex</span>
              <p className="text-xs font-semibold">"Yeah, that would be awesome. It's always faster with two people."</p>
              <span className="text-[9px] text-slate-300">(好啊，太棒了。兩個人做總是比較快。)</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-amber-400 text-indigo-950 font-bold flex items-center justify-center text-[10px]">A</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-7 h-7 rounded-full bg-indigo-900 text-white font-bold flex items-center justify-center text-[10px]">S</div>
            <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
              <span className="text-[9px] text-slate-400 block font-bold">Sam</span>
              <p className="text-xs font-bold text-indigo-950">"Why don't we meet in the library tomorrow after class?"</p>
              <span className="text-[9px] text-slate-400">(我們明天放學後在圖書館見如何？)</span>
            </div>
          </div>
          <div className="flex items-start space-x-2 justify-end">
            <div className="bg-indigo-950 text-white p-2.5 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-right">
              <span className="text-[9px] text-amber-400 block font-bold">Alex</span>
              <p className="text-xs font-semibold">"Sounds perfect. Library at 3:30. Don't be late."</p>
              <span className="text-[9px] text-slate-300">(太完美了。3:30圖書館見，別遲到。)</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-amber-400 text-indigo-950 font-bold flex items-center justify-center text-[10px]">A</div>
          </div>
        </div>
        <div className="bg-amber-100 p-4 rounded-3xl border border-amber-200 flex flex-col justify-between">
          <div>
            <h4 className="font-extrabold text-amber-950 text-sm flex items-center space-x-1">
              <Cookie className="w-4 h-4 text-amber-700" />
              <span>Campus Pro-Tip</span>
            </h4>
            <p className="text-xs font-bold text-slate-800 mt-2 italic">"Science is always better with snacks."</p>
            <p className="text-[10px] text-amber-900 mt-1">(有零食配著讀理科總是比較好。)</p>
          </div>
          <p className="text-[10px] text-amber-700 mt-3 leading-relaxed">這是一句非常美式、口語化的表達，能快速拉近與組員的距離！</p>
        </div>
      </div>
    </div>
  )
}

function Slide10Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// POP QUIZ</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Pop Quiz Panic Meter (隨堂考恐慌量表)</h2>
      <p className="text-xs text-slate-500 mt-1">不同恐慌級別下的課堂真實心聲與口語表達：</p>
      <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-2">
        {[
          { level: 'Green (正常)', sub: 'Calm/Checking In', en: '"Did you finish the math homework assignment?"', chi: '(你寫完數學作業了嗎？)', desc: '正常情況，確認平日作業進度。', border: 'border-l-green-600', badge: 'bg-green-100 text-green-800' },
          { level: 'Yellow (小驚慌)', sub: 'Stressed/Warning', en: '"Did you hear about the pop quiz in history class this morning?"', chi: '(你有聽說今天早上歷史課的隨堂考嗎？)', desc: '「突襲測驗」往往是不講武德的，趕快向隔壁同學打聽測驗範圍！', border: 'border-l-yellow-500', badge: 'bg-yellow-100 text-yellow-800' },
          { level: 'Red (完蛋/崩潰)', sub: 'Panic/Defeat', en: '"The questions were brutal. I stared at it for 10 minutes. Let\'s just say I totally guessed on half of it."', chi: '(題目超難。我盯著它看了十分鐘。只能說我有一半都是用猜的。)', desc: '大勢已去。美式口語中表達自己毫無頭緒與完全用猜的標準崩潰語境。', border: 'border-l-red-600', badge: 'bg-red-100 text-red-800' },
        ].map((item, i) => (
          <div key={i} className={`bg-white p-4 rounded-xl shadow-sm border-l-8 ${item.border} mb-3`}>
            <span className={`${item.badge} px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider`}>{item.level}</span>
            <h4 className="text-sm font-bold text-indigo-950 mt-2">{item.en}</h4>
            <p className="text-slate-600 text-[10px] mt-0.5">{item.chi}</p>
            <p className="text-[10px] text-slate-400 border-t pt-2 mt-2">{item.desc}</p>
          </div>
        ))}
        <div className="bg-indigo-50 border border-indigo-100 text-indigo-900 p-3 rounded-xl flex items-start space-x-2 text-[10px]">
          <Info className="w-3.5 h-3.5 mt-0.5 text-indigo-600 shrink-0" />
          <p><strong>單字補充：</strong>"Pop Quiz" = 沒提前通知、老師突然發下的「隨堂考 / 突擊測驗」。</p>
        </div>
      </div>
    </div>
  )
}

function Slide11Content() {
  const cards = [
    { icon: ArmchairIcon, title: 'Finding a Seat (找位置)', sentences: ['"Hey. Is anyone sitting here?"', '"No, you can sit here if you want."'], tip: '經典餐飲破冰句型第一步！' },
    { icon: Utensils, title: 'Food Talk (聊午餐)', sentences: ['"What did you have at lunch today?"', '"I brought a sandwich from home."'], tip: '討論食物是永遠不尷尬的對話。' },
    { icon: MessageSquare, title: 'Making Small Talk (閒聊破冰)', sentences: ['"Which grade are you in?"', '"How do you get to school?"'], tip: '關於學年與通勤的小閒聊。' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// LUNCHTIME</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Lunchtime & Small Talk Scripts (學生餐廳日常對話)</h2>
      <p className="text-xs text-slate-500 mt-1">餐廳是用餐與社交破冰的最佳場合。這裡有三種經典腳本：</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {cards.map((card, i) => {
          const Icon = card.icon
          return (
            <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:border-indigo-400 transition">
              <div>
                <div className="flex items-center space-x-1 text-indigo-950 font-bold mb-3">
                  <Icon className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs">{card.title}</span>
                </div>
                <div className="space-y-2 text-[11px]">
                  {card.sentences.map((s, j) => (
                    <div key={j} className="bg-slate-50 p-2 rounded">
                      <p className="font-bold text-indigo-950">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[9px] text-slate-400 mt-3 block">{card.tip}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Slide12Content() {
  const crises = [
    { tag: 'CRISIS 1', title: 'You Missed Class (缺課)', node: '"I wasn\'t there. I was absent yesterday."', nodeZh: '我昨天沒來，我請假。', excuse: '"I had a dentist appointment."', excuseZh: '我去看了牙醫。' },
    { tag: 'CRISIS 2', title: 'You Feel Sick (生病)', node: '"I\'m feeling under the weather."', nodeZh: '我不太舒服。', excuse: '"May I please go to the nurse\'s office?"', excuseZh: '請問我可以去保健室嗎？', tip: '💡 "under the weather" 代表微恙/感冒。' },
    { tag: 'CRISIS 3', title: 'You Forgot Homework (忘記帶作業)', node: '"I didn\'t manage to complete it."', nodeZh: '我未能完成', excuse: '"I left it at home. I\'ll turn it in as soon as I can."', excuseZh: '我放在家了。我會盡快補交。' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// CRISIS MANAGEMENT</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">Crisis Management: What Went Wrong? (危機處理大考驗)</h2>
      <p className="text-xs text-slate-500 mt-1">選取你在學校發生的突發危機，查看對應口語與合理解釋：</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {crises.map((crisis, i) => (
          <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:border-indigo-400 transition flex flex-col justify-between">
            <div>
              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-[9px] font-bold">{crisis.tag}</span>
              <h4 className="font-bold text-indigo-950 text-sm mt-2">{crisis.title}</h4>
              <div className="mt-3 space-y-2 text-[11px]">
                <div className="bg-slate-50 p-2 rounded">
                  <strong className="text-indigo-900 text-[10px]">核心說明</strong>
                  <p className="font-bold text-slate-700 mt-0.5">{crisis.node}</p>
                  <p className="text-slate-400 text-[9px]">({crisis.nodeZh})</p>
                </div>
                <div className="bg-indigo-50 p-2 rounded">
                  <strong className="text-amber-700 text-[10px]">合理解釋</strong>
                  <p className="font-bold text-indigo-950 mt-0.5">{crisis.excuse}</p>
                  <p className="text-slate-500 text-[9px]">({crisis.excuseZh})</p>
                </div>
              </div>
            </div>
            {crisis.tip && <p className="text-[9px] text-amber-600 mt-2 font-bold">{crisis.tip}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide13Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// END OF DAY</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">The End of the School Day (放學時刻)</h2>
      <p className="text-xs text-slate-500 mt-1">當下課鐘聲響起，老師與同學之間常見的放學道別句型</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="bg-indigo-950 text-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-2 text-amber-400 font-bold mb-3">
            <Bell className="w-4 h-4" />
            <span className="text-xs">Teacher Dismissals (老師宣佈下課)</span>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="bg-indigo-900 p-2.5 rounded">
              <p className="font-bold text-white">{"There's the bell. It's time to stop."}</p>
              <p className="text-slate-300 text-[10px] mt-0.5">(鐘響了。準備下課。)</p>
            </div>
            <div className="bg-indigo-900 p-2.5 rounded">
              <p className="font-bold text-white">{"That's all for today. Pack up your books."}</p>
              <p className="text-slate-300 text-[10px] mt-0.5">(今天就上到這裡。把書收好。)</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 flex flex-col justify-between">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
            <div className="flex items-center space-x-2 text-amber-900 font-bold mb-2">
              <Users className="w-4 h-4 text-amber-600" />
              <span className="text-xs">Peer Goodbyes (同學道別)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white p-2 rounded border border-amber-100">
                <p className="font-bold text-slate-800">"See you tomorrow afternoon."</p>
                <p className="text-slate-400 text-[10px] mt-0.5">(明天下午見。)</p>
              </div>
              <div className="bg-white p-2 rounded border border-amber-100">
                <p className="font-bold text-slate-800">"I'll see you then. Bye!"</p>
                <p className="text-slate-400 text-[10px] mt-0.5">(到時見，掰！)</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl flex items-start space-x-3">
            <BellRing className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div className="text-[11px]">
              <span className="font-bold text-indigo-950 block">Teacher Reminders (老師的最後提醒)</span>
              <p className="text-slate-700 mt-0.5">"Don't forget to bring your textbook tomorrow!"</p>
              <p className="text-slate-400 text-[10px]">(明天別忘了帶課本！)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide14Content() {
  const phrases = [
    { num: 1, title: 'For Permissions (尋求許可):', en: '"Excuse me, could I go to the bathroom, please?"', zh: '請問我可以去洗手間嗎？' },
    { num: 2, title: 'For Clarification (尋求澄清):', en: '"I didn\'t quite catch that. Can you repeat it?"', zh: '我沒聽清楚，可以再說一次嗎？' },
    { num: 3, title: 'For Collaboration (小組協作):', en: '"Want to work on it together after school?"', zh: '放學後要不要一起做？' },
    { num: 4, title: 'For Deadlines (確認日期):', en: '"When is the project due?"', zh: '報告什麼時候交？' },
    { num: 5, title: 'For Absences (請假與病退):', en: '"I was absent yesterday. I was feeling under the weather."', zh: '我昨天請假，我身體不太舒服。' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">// GOLDEN PHRASES</span>
      <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 mt-1">The 5 Golden Campus Phrases (校園生存 5 大金句)</h2>
      <p className="text-xs text-slate-500 mt-1">背熟這五句，基本校園對話、疑難雜症暢行無阻！</p>
      <div className="flex-1 space-y-2 mt-3">
        {phrases.map((item) => (
          <div key={item.num} className="bg-indigo-50/40 p-3 rounded-xl border border-indigo-100 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <span className="bg-indigo-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">{item.num}</span>
              <div className="text-[11px]">
                <span className="font-bold text-indigo-950 block">{item.title}</span>
                <p className="font-medium text-slate-700">{item.en} <span className="text-slate-400 font-normal">({item.zh})</span></p>
              </div>
            </div>
            <button className="p-1.5 bg-white rounded-full shadow hover:bg-indigo-50 transition text-indigo-600 shrink-0">
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
