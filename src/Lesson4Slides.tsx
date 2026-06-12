import { useState } from 'react'
import {
  Zap, Coffee, AlertTriangle, Thermometer, Key, Search,
  Clock, Brain, Package, Truck, Hourglass, Wrench, Lock,
  WifiOff, BatteryWarning, Plug, Monitor, Smartphone,
  Sofa, Footprints, Moon, BellOff, Ghost, Languages,
  Quote, MapPin, Sparkles, ArrowRight, Home, Volume2
} from 'lucide-react'
import { LESSON_4_SLIDES } from './lessonData'

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}

export function Lesson4Slide({ page, active }: { page: number; active: boolean }) {
  const data = LESSON_4_SLIDES[page - 1]
  return (
    <Slide active={active}>
      <div className="absolute inset-0 bg-[#fcfbf4] text-[#2d2013] rounded-2xl flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto">
        <div className="flex justify-between items-center w-full border-b border-[#3c4a3e]/20 pb-3 mb-4 text-xs md:text-sm font-semibold text-[#3c4a3e]">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded uppercase tracking-widest text-[10px] font-bold ${
              data.category === 'Chaos' ? 'bg-red-100 text-red-700' :
              data.category === 'Chill' ? 'bg-emerald-100 text-emerald-700' :
              'bg-indigo-100 text-indigo-700'
            }`}>
              {data.category}
            </span>
            <span className="text-gray-500">{page === 1 ? '' : data.subtitle}</span>
          </div>
          <div className="text-gray-500 tracking-wider text-[10px]">SpeakUp AI Presenter</div>
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
        </div>

        <div className="flex justify-between items-center w-full pt-3 mt-4 border-t border-[#3c4a3e]/20 text-[11px] font-medium text-gray-400">
          <div>© 2026 American Apartment Survival Guide</div>
          <div className="flex items-center gap-1 font-bold text-[#3c4a3e]">
            Page {page} / 8
          </div>
        </div>
      </div>
    </Slide>
  )
}

function Slide1Content() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full rounded-xl overflow-hidden border border-stone-200">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-900 to-slate-900 p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10">
          <span className="inline-block bg-gradient-to-r from-red-500 to-emerald-500 text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">Survival Guide</span>
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-3">
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              美式公寓<br/>生存指南
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-200 font-medium mb-6">解鎖日常居家、週末耍廢與突發狀況的道地美語</p>
        </div>
        <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-400">
          <span>Map Scale: 100% Real American Life</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-full"><Volume2 className="h-3 w-3 inline mr-1" />點選英文朗讀</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-stone-50">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
              <Zap className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <span className="text-xs font-bold text-red-700">Chaos Mode</span>
              <p className="text-[10px] text-stone-500 mt-1">出門混亂／物流延誤</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
              <Coffee className="h-6 w-6 mx-auto mb-2 text-emerald-500" />
              <span className="text-xs font-bold text-emerald-700">Chill Mode</span>
              <p className="text-[10px] text-stone-500 mt-1">週末耍廢／居家放鬆</p>
            </div>
          </div>
          <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-600 leading-relaxed">
            <MapPin className="h-3 w-3 inline mr-1 text-indigo-500" />
            Entryway / 玄關 — Daily life begins right here.
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide2Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800">美式居家生活的兩種極端模式</h2>
        <p className="text-xs text-stone-500 mt-1">我們在美式公寓的日常，總是遊走在徹底爆發的崩潰邊緣，與極致慵懶的沙發耍廢之間。</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50/80 border border-red-200 rounded-2xl p-5 flex flex-col justify-between hover:border-red-400/50 transition">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-100 px-2.5 py-0.5 rounded"><Zap className="h-3 w-3 inline mr-1" />Chaos Mode</span>
              <span className="text-[10px] text-stone-400 font-bold"><AlertTriangle className="h-3 w-3 inline mr-1 text-red-400" />日常麻煩</span>
            </div>
            <h3 className="text-lg font-bold text-stone-800">出門前的混亂 & 突發狀況</h3>
            <p className="text-xs text-stone-500 leading-relaxed">處理包裹遲到、鎖在門外、路由器當機、或是鑰匙消失的早晨。</p>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-stone-600">核心情緒：</span>
              <div className="flex flex-wrap gap-1.5">
                {['Frustrated', 'Rushed', 'Annoyed'].map((s, i) => (
                  <span key={i} className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-400/50 transition">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded"><Coffee className="h-3 w-3 inline mr-1" />Chill Mode</span>
              <span className="text-[10px] text-stone-400 font-bold"><Coffee className="h-3 w-3 inline mr-1 text-emerald-400" />居家放鬆</span>
            </div>
            <h3 className="text-lg font-bold text-stone-800">週末放鬆 & 耍廢時光</h3>
            <p className="text-xs text-stone-500 leading-relaxed">睡過頭、滑手機、泡咖啡、不想煮飯叫外送、或是在沙發上逃避所有家務事。</p>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-stone-600">核心情緒：</span>
              <div className="flex flex-wrap gap-1.5">
                {['Relaxed', 'Lazy', 'Unbothered'].map((s, i) => (
                  <span key={i} className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FlipCard({ front, back, tag, icon: Icon }: { front: string; back: string; tag: string; icon: React.ElementType }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="perspective h-44 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className={`relative w-full h-full duration-500 ${flipped ? '' : ''}`}>
        <div className={`absolute w-full h-full bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between shadow-sm transition-all duration-500 ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-start">
            <span className="text-[10px] text-red-500 font-bold flex items-center gap-1"><Icon className="h-3 w-3" />{tag}</span>
            <Volume2 className="h-3 w-3 text-stone-300" />
          </div>
          <p className="text-sm font-bold text-stone-800 leading-snug">{front}</p>
          <span className="text-[9px] text-stone-400 uppercase self-end">點擊翻面對照</span>
        </div>
        <div className={`absolute w-full h-full bg-stone-100 border border-stone-300 rounded-xl p-4 flex flex-col justify-between shadow-inner transition-all duration-500 ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <span className="text-[10px] font-bold text-stone-500">中文口語意譯</span>
          <p className="text-sm text-amber-700 font-medium">{back}</p>
          <span className="text-[9px] text-stone-400">點擊返回</span>
        </div>
      </div>
    </div>
  )
}

function Slide3Content() {
  const cards = [
    { icon: Thermometer, tag: 'Temperature', front: '"The apartment feels freezing today."', back: '「今天公寓裡感覺冷得要命。」美式公寓冬天暖氣常常運作不良。' },
    { icon: Key, tag: 'Keys', front: '"Have you seen my apartment keys?"', back: '「你有看到我的公寓鑰匙嗎？」弄丟實體鑰匙意味著數百美元罰金。' },
    { icon: Search, tag: 'Lost', front: '"I can\'t find anything this morning."', back: '「我今天早上什麼都找不到。」慌亂時大腦會自動屏蔽所有物品。' },
    { icon: Clock, tag: 'Running Late', front: '"Oh crap, I\'m running late again."', back: '「糟了，我又快遲到了。」"Oh crap" 比 "Oh my god" 更加生活化。' },
    { icon: Brain, tag: 'Mental State', front: '"I\'m totally out of it today."', back: '「我今天整個人狀況外。」"out of it" 常用於剛睡醒、宿醉或沒睡好的狀態。' },
    { icon: AlertTriangle, tag: 'Tip', front: '', back: '' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest"><Zap className="h-3 w-3 inline mr-1" />Entryway / 玄關</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">出門前的混亂：那些讓你遲到的早晨</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.slice(0, 5).map((card, i) => (
          <FlipCard key={i} {...card} />
        ))}
        <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-xl p-4 flex flex-col justify-between h-44">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest"><AlertTriangle className="h-3 w-3 inline mr-1" />文化小貼士</span>
            <p className="text-[11px] text-stone-600 leading-relaxed">在美國解釋遲到時，常用「I'm out of it」或「running late」來禮貌地向同事或室友打預防針。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide4Content() {
  const cards = [
    { icon: Truck, tag: 'Shipping', front: '"Shipping delays are seriously getting ridiculous."', back: '「物流延遲真的越來越扯了。」網購包裹卡在轉運站時最常用的抱怨句。' },
    { icon: Hourglass, tag: 'Waiting', front: '"I\'ve waited all week already."', back: '「我已經等了一整週了。」帶有強烈的無奈與憤怒感。' },
    { icon: Wrench, tag: 'Maintenance', front: '"My apartment maintenance suddenly showed up."', back: '「公寓維修人員突然跑來了。」美式物業有時在無通知的情況下直接敲門。' },
    { icon: Lock, tag: 'Locked Out', front: '"I locked myself out yesterday again."', back: '「我昨天又把自己鎖在門外了。」美式公寓自動鎖，開鎖需100-200美元。' },
    { icon: Package, tag: 'Delay Alert', front: '"Your package has been delayed again."', back: '「您的包裹又延遲了。」USPS / FedEx 日常通知。' },
    { icon: AlertTriangle, tag: 'Tip', front: '', back: '' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest"><Package className="h-3 w-3 inline mr-1" />Outside the Door / 門外</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">門外的訪客：物流延誤與突發修繕</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.slice(0, 5).map((card, i) => (
          <FlipCard key={i} {...card} />
        ))}
        <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-4 flex flex-col justify-between h-44">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest"><Brain className="h-3 w-3 inline mr-1" />小智慧</span>
            <p className="text-[11px] text-stone-600 leading-relaxed">對物流和物業管理的集體吐槽是美式社群文化的「破冰神藥」。抱怨包裹不見是跟鄰居打開話匣子的最佳切入點。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide5Content() {
  const [showInternetTip, setShowInternetTip] = useState(false)
  const [showBatteryTip, setShowBatteryTip] = useState(false)
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest"><Monitor className="h-3 w-3 inline mr-1" />Living Room / 客廳</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">客廳裡的數位災難：斷網與沒電求生指南</h2>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/5 flex flex-col items-center space-y-4">
          <div className="w-full bg-white border border-stone-200 p-5 rounded-2xl flex flex-col items-center space-y-3 shadow-sm">
            <div className="w-full h-24 bg-stone-100 rounded-xl flex items-center justify-center relative overflow-hidden border border-stone-200">
              <div className="absolute inset-0 bg-red-100/50 animate-pulse" />
              <div className="flex items-end space-x-2">
                <div className="w-1.5 h-8 bg-stone-300 rounded-full" />
                <div className="w-1.5 h-10 bg-stone-300 rounded-full" />
                <div className="w-16 h-3 bg-stone-300 rounded relative flex items-center justify-center">
                  <span className="absolute -top-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <span className="absolute -top-1 w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <div className="w-1.5 h-10 bg-stone-300 rounded-full" />
                <div className="w-1.5 h-8 bg-stone-300 rounded-full" />
              </div>
              <WifiOff className="absolute top-3 text-red-400 h-5 w-5 animate-bounce" />
            </div>
            <div className="text-center">
              <p className="text-[10px] text-stone-400">Router Alert / 路由器報警</p>
              <p className="text-xs font-bold text-stone-800">"Trouble with my internet."</p>
              <p className="text-[10px] text-red-500">Disconnected / 已斷線</p>
            </div>
            <div className="w-full flex items-center justify-between p-2.5 bg-red-50 border border-red-100 rounded-xl">
              <div className="flex items-center space-x-2">
                <BatteryWarning className="h-4 w-4 text-red-500 animate-pulse" />
                <div>
                  <p className="text-[10px] font-bold text-stone-700">Phone Battery</p>
                  <p className="text-[9px] text-stone-400">Down to 2%</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-red-500">2%</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 space-y-3">
          <div className="bg-white border border-stone-200 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] font-extrabold bg-red-100 text-red-700 px-2 py-0.5 rounded">WiFi Crisis</span>
                  <span className="text-[10px] text-stone-400">「我的網路有問題，它一直斷線。」</span>
                </div>
                <p className="text-sm font-bold text-stone-800">"Trouble with my internet. It keeps disconnecting."</p>
              </div>
              <button onClick={() => setShowInternetTip(!showInternetTip)}
                className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition shrink-0">看解法</button>
            </div>
            {showInternetTip && (
              <div className="mt-3 p-3 bg-stone-50 border border-stone-200 rounded-xl text-[10px] text-stone-600 space-y-1">
                <span className="font-bold text-amber-700"><Wrench className="h-3 w-3 inline mr-1" />美式標準求生流程：</span>
                <p>遇到斷網，打給 Comcast/Xfinity 客服前，第一句會聽到：<span className="text-emerald-600 font-bold">"Try restarting your router once."</span> 這能解決 90% 的小狀況。</p>
              </div>
            )}
          </div>
          <div className="bg-white border border-stone-200 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] font-extrabold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Battery Crisis</span>
                  <span className="text-[10px] text-stone-400">「我手機快完全沒電了。」</span>
                </div>
                <p className="text-sm font-bold text-stone-800">"My phone's about to completely die. I'm seriously down to 2%."</p>
              </div>
              <button onClick={() => setShowBatteryTip(!showBatteryTip)}
                className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition shrink-0">借充電器</button>
            </div>
            {showBatteryTip && (
              <div className="mt-3 p-3 bg-stone-50 border border-stone-200 rounded-xl text-[10px] text-stone-600 space-y-1">
                <span className="font-bold text-amber-700"><Plug className="h-3 w-3 inline mr-1" />如何跟室友/同事借充電器？</span>
                <p>客氣地問：<span className="text-emerald-600 font-bold">"Do you happen to have a charger?"</span> (你剛好有充電器嗎？) "Do you happen to..." 帶有「沒有也沒關係」的客氣語氣。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide6Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3 text-center">
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest"><Coffee className="h-3 w-3 inline mr-1" />Weekend Mode / 週末模式</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">週末模式切換器：社交出門 vs. 懶人宅家</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-emerald-200 rounded-2xl p-5 space-y-3 hover:border-emerald-400 transition">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sofa className="h-5 w-5 text-emerald-500" />
              <h3 className="text-base font-bold text-stone-800">Chill at Home</h3>
            </div>
            <span className="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded-full">Homebody</span>
          </div>
          <div className="space-y-2">
            {[
              { en: '"I\'m just going to chill at home."', zh: '「我只打算待在家放鬆。」chill 是口語放鬆最常用的詞' },
              { en: '"I\'m kind of too lazy to cook."', zh: '「我有點懶得煮飯。」kind of 帶有慵懶的無奈' },
              { en: '"I\'d rather just stay in and chill."', zh: '「我寧願待在家裡放鬆。」stay in 代表待在屋裡不出門' },
              { en: '"Honestly, I got nothing planned."', zh: '「老實說，我沒什麼計畫。」隨心所欲正是 Chill Mode 的精髓' },
            ].map((s, i) => (
              <div key={i} className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-stone-800">{s.en}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">{s.zh}</p>
                </div>
                <Volume2 className="h-3 w-3 text-stone-300 shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-3 hover:border-emerald-300 transition">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Footprints className="h-5 w-5 text-indigo-500" />
              <h3 className="text-base font-bold text-stone-800">Going Out</h3>
            </div>
            <span className="bg-indigo-100 text-indigo-700 text-[9px] font-bold px-2 py-0.5 rounded-full">Social Out</span>
          </div>
          <div className="space-y-2">
            {[
              { en: '"We could grab food or maybe coffee."', zh: '「我們可以去吃點東西，或是喝杯咖啡。」grab 代表快速隨意吃喝' },
              { en: '"Go for a short walk outside."', zh: '「去外面散散步。」美國人週末常掛在嘴邊的戶外日常' },
              { en: '"I might scroll on my phone."', zh: '「我可能會滑滑手機。」scroll on my phone = 滑手機' },
            ].map((s, i) => (
              <div key={i} className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-stone-800">{s.en}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">{s.zh}</p>
                </div>
                <Volume2 className="h-3 w-3 text-stone-300 shrink-0 mt-1" />
              </div>
            ))}
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] text-stone-600 leading-relaxed mt-auto">
            <span className="font-bold text-emerald-700"><Sparkles className="h-3 w-3 inline mr-1" />週末美式口語指南</span><br />
            「Chill」用途極廣：動詞 (I'm chilling)、形容詞 (He's very chill)、感嘆詞 (Chill out!)。它是拒絕繁複社交的最佳代名詞。
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide7Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3 text-center">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest"><Moon className="h-3 w-3 inline mr-1" />Bedroom Black Hole / 臥室黑洞</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">無法停止的熬夜惡性循環</h2>
        <p className="text-[11px] text-stone-500">手機的光亮、亂看廢片的快感、最後迎接的是早上崩潰睡過頭。</p>
      </div>
      <div className="flex-1 relative flex items-center justify-center py-4">
        <div className="relative w-full max-w-lg mx-auto h-[320px] flex items-center justify-center">
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-dashed border-indigo-200 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute z-10 w-24 h-24 bg-white border-2 border-indigo-200 rounded-full flex flex-col items-center justify-center shadow-md text-center p-2">
            <Moon className="h-5 w-5 text-indigo-500 mb-0.5 animate-pulse" />
            <span className="text-[8px] text-stone-400 font-bold">Midnight Bed</span>
            <span className="text-[7px] text-stone-300">Zzz...</span>
          </div>
          <div className="absolute top-0 -translate-y-3 bg-white border border-stone-200 p-2.5 rounded-xl shadow-sm w-48 text-center z-20">
            <div className="flex items-center justify-center space-x-1 text-[10px] text-indigo-600 font-bold mb-1">
              <Smartphone className="h-3 w-3" />
              <span>Step 1: Scroll</span>
            </div>
            <p className="text-[10px] font-semibold text-stone-700">"I was just watching random stuff online."</p>
          </div>
          <div className="absolute right-0 translate-x-2 bg-white border border-stone-200 p-2.5 rounded-xl shadow-sm w-48 text-center z-20">
            <div className="flex items-center justify-center space-x-1 text-[10px] text-indigo-600 font-bold mb-1">
              <Clock className="h-3 w-3" />
              <span>Step 2: Late Night</span>
            </div>
            <p className="text-[10px] font-semibold text-stone-700">"Didn't even realize how late it was."</p>
          </div>
          <div className="absolute bottom-0 translate-y-3 bg-white border border-stone-200 p-2.5 rounded-xl shadow-sm w-48 text-center z-20">
            <div className="flex items-center justify-center space-x-1 text-[10px] text-indigo-600 font-bold mb-1">
              <BellOff className="h-3 w-3" />
              <span>Step 3: Oversleep</span>
            </div>
            <p className="text-[10px] font-semibold text-stone-700">"I slept in again today. Didn't even hear my alarm."</p>
          </div>
          <div className="absolute left-0 -translate-x-2 bg-white border border-stone-200 p-2.5 rounded-xl shadow-sm w-48 text-center z-20">
            <div className="flex items-center justify-center space-x-1 text-[10px] text-indigo-600 font-bold mb-1">
              <Ghost className="h-3 w-3" />
              <span>Step 4: Out of It</span>
            </div>
            <p className="text-[10px] font-semibold text-stone-700">"I feel kind of out of it now."</p>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <ArrowRight className="absolute top-[22%] right-[22%] h-4 w-4 text-stone-300 rotate-[45deg]" />
            <ArrowRight className="absolute bottom-[22%] right-[22%] h-4 w-4 text-stone-300 rotate-[135deg]" />
            <ArrowRight className="absolute bottom-[22%] left-[22%] h-4 w-4 text-stone-300 rotate-[225deg]" />
            <ArrowRight className="absolute top-[22%] left-[22%] h-4 w-4 text-stone-300 rotate-[315deg]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide8Content() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-6">
      <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest"><Languages className="h-3 w-3 inline mr-1" />Survival Guide Decoder / 文化解碼</span>
      <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800">解碼美式居家文化</h2>
      <p className="text-xs text-stone-500 max-w-lg">最道地的日常美語，往往發生在面對瑣事麻煩的無奈吐槽，以及週末毫無計畫的極致放鬆之間。</p>
      <div className="relative w-full max-w-lg bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-100 border border-stone-200 w-8 h-8 rounded-full flex items-center justify-center text-indigo-500">
          <Quote className="h-4 w-4" />
        </div>
        <p className="text-stone-600 italic text-xs md:text-sm leading-relaxed pt-2">
          "The most authentic everyday English happens between the helpless complaints about daily chores and the ultimate relaxation of a plan-free weekend."
        </p>
        <p className="text-[10px] font-semibold text-stone-400 mt-2">—— 摘自《美式公寓生存指南》</p>
      </div>
      <div className="w-full max-w-lg text-center space-y-2">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400">核心句型回顧</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { text: 'Shipping delays...', color: 'bg-red-50 text-red-600 border-red-200' },
            { text: 'My phone is about to die...', color: 'bg-red-50 text-red-600 border-red-200' },
            { text: 'Seen my keys?', color: 'bg-red-50 text-red-600 border-red-200' },
            { text: 'Chill at home...', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
            { text: 'Stay in and chill...', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
          ].map((item, i) => (
            <span key={i} className={`${item.color} border px-2.5 py-1 rounded-full text-[10px] font-bold transition flex items-center space-x-1`}>
              <span>{item.text}</span>
              <Volume2 className="h-2.5 w-2.5" />
            </span>
          ))}
        </div>
      </div>
      <div className="text-[10px] text-stone-400">
        <Home className="h-3 w-3 inline mr-1" />
        帶著這份生存指南，在美式公寓過得自在又自信！
      </div>
    </div>
  )
}
