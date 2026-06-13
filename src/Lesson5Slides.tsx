import {
  MapPin, Train, Bus, Crosshair, Smartphone, Car,
  AlertTriangle, CreditCard, Navigation, ChevronRight, MessageSquare,
  WifiOff, Zap, CheckCircle, XCircle, Shield, Eye, Handshake,
  Star, Info
} from 'lucide-react'
import { LESSON_5_SLIDES } from './lessonData'

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}

export function Lesson5Slide({ page, active }: { page: number; active: boolean }) {
  const data = LESSON_5_SLIDES[page - 1]
  return (
    <Slide active={active}>
      <div className="absolute inset-0 bg-[#fcfbf4] text-[#2d2013] rounded-2xl flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto">
        <div className="flex justify-between items-center w-full border-b border-[#3c4a3e]/20 pb-3 mb-4 text-xs md:text-sm font-semibold text-[#3c4a3e]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-800/10 text-amber-800 uppercase tracking-widest text-[10px] font-bold rounded">
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
          {page === 9 && <Slide9Content />}
          {page === 10 && <Slide10Content />}
          {page === 11 && <Slide11Content />}
          {page === 12 && <Slide12Content />}
          {page === 13 && <Slide13Content />}
          {page === 14 && <Slide14Content />}
          {page === 15 && <Slide15Content />}
        </div>

        <div className="flex justify-between items-center w-full pt-3 mt-4 border-t border-[#3c4a3e]/20 text-[11px] font-medium text-gray-400">
          <div>© 2026 The Urban Wayfinder</div>
          <div className="flex items-center gap-1 font-bold text-[#3c4a3e]">
            Page {page} / 15
          </div>
        </div>
      </div>
    </Slide>
  )
}

function Slide1Content() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full rounded-xl overflow-hidden border border-stone-200">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-stone-900 to-stone-800 p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-10 bg-amber-400" />
            <span className="text-amber-400 tracking-widest text-[10px] font-bold uppercase">The Urban Wayfinder</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-3">
            美國出行完全指南：<br />
            <span className="text-amber-400">零死角交通英文實戰</span>
          </h2>
          <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed">從地鐵轉乘到公路自駕的視覺化生存手冊</p>
        </div>
        <div className="relative z-10 pt-4 mt-4 border-t border-stone-700 flex flex-wrap gap-2">
          <span className="bg-stone-800 border border-stone-700 text-stone-300 px-3 py-1 rounded-full text-[10px] font-semibold"><Train className="h-3 w-3 inline mr-1 text-blue-400" />大眾運輸</span>
          <span className="bg-stone-800 border border-stone-700 text-stone-300 px-3 py-1 rounded-full text-[10px] font-semibold"><Car className="h-3 w-3 inline mr-1 text-amber-400" />公路自駕</span>
          <span className="bg-stone-800 border border-stone-700 text-stone-300 px-3 py-1 rounded-full text-[10px] font-semibold"><MessageSquare className="h-3 w-3 inline mr-1 text-emerald-400" />實戰溝通</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-stone-50">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center">
            <span className="w-6 h-1 bg-amber-400 mr-2 rounded-full" />涵蓋 3 大領域
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: MapPin, color: 'text-blue-600 bg-blue-50', title: '大眾運輸', sub: '地鐵公車轉乘、購票、方向確認' },
              { icon: Car, color: 'text-amber-600 bg-amber-50', title: '公路自駕', sub: '加油、停車、導航、路況應對' },
              { icon: MessageSquare, color: 'text-emerald-600 bg-emerald-50', title: '實戰溝通', sub: '叫車、問路、突發狀況對話' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}><item.icon className="h-4 w-4" /></div>
                <div><span className="text-xs font-bold text-stone-800 block">{item.title}</span><span className="text-[10px] text-stone-400">{item.sub}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide2Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// INTRODUCTION</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">為什麼「行」的英文是生存之本？</h2>
        <p className="text-xs text-stone-500 mt-1">交通不僅是移動的方式，更是一套充滿潛規則的系統。</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 relative overflow-hidden">
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">BEFORE</span>
          <h3 className="text-base font-bold text-red-700 mb-3"><XCircle className="h-4 w-4 inline mr-1" />空間焦慮迷障</h3>
          <div className="space-y-2">
            {['Uptown? Downtown? 方向錯置', 'Prepay Inside? 加油規則混亂', 'Tow Zone / Permit Only? 停車標誌黑洞'].map((s, i) => (
              <div key={i} className="bg-white/80 p-2.5 rounded border border-red-100 flex justify-between items-center text-xs">
                <span className="font-semibold text-stone-700">{s.split('?')[0]}?</span>
                <span className="text-red-500 text-[10px]">{s.split('?')[1] || '困惑'}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 relative overflow-hidden">
          <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">AFTER</span>
          <h3 className="text-base font-bold text-emerald-700 mb-3"><CheckCircle className="h-4 w-4 inline mr-1" />流暢移動自由</h3>
          <div className="space-y-2">
            {['隨心感應乘車 (Tap & Go) 一鍵扣款', '自如應對加油與自駕故障 有條不紊', '解鎖隱藏停車時效潛規則 全身而退'].map((s, i) => (
              <div key={i} className="bg-white/80 p-2.5 rounded border border-emerald-100 flex justify-between items-center text-xs">
                <span className="font-semibold text-stone-700">{s.split(')')[0] + ')'}</span>
                <span className="text-emerald-600 text-[10px]">{s.split(') ')[1] || '掌握'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide3Content() {
  const steps = [
    { num: '01', title: '起始點 (Origin)', en: '"Is it within walking distance?"', zh: '步行能到嗎？', reply: '"It\'s about a 10-minute walk."', color: 'text-amber-600' },
    { num: '02', title: '行進中 (On the Move)', en: '"Go straight for two blocks."', zh: '直走兩個街區。', reply: '', color: 'text-blue-600' },
    { num: '03', title: '轉角處 (At the Corner)', en: '"Turn left at the corner."', zh: '在轉角左轉。', reply: '', color: 'text-emerald-600' },
    { num: '04', title: '目的地 (Destination)', en: '"You\'ll see a bank on your right."', zh: '你會看到右邊有家銀行。', reply: '"It\'s right across from that."', color: 'text-purple-600' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// ACT I</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">步行問路求生圖鑑</h2>
        <p className="text-xs text-stone-500">掌握出發到抵達的四段關鍵空間對白</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
        {steps.map((step, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-300 transition flex flex-col">
            <span className={`text-[10px] font-bold ${step.color} mb-1`}>{step.num}. {step.title}</span>
            <p className="text-xs font-bold text-stone-800 leading-snug">{step.en}</p>
            <p className="text-[10px] text-stone-500 mt-0.5">{step.zh}</p>
            {step.reply && (
              <div className="mt-2 pt-2 border-t border-stone-100 text-[10px] text-blue-600">
                <ChevronRight className="h-3 w-3 inline mr-0.5" />{step.reply}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 bg-amber-50 border-2 border-dashed border-amber-300 rounded-xl p-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">PRO TIP</span>
          <span className="text-[10px] text-stone-600">口頭重複對方指令以防聽錯：</span>
        </div>
        <span className="bg-white px-3 py-1.5 rounded border border-stone-200 text-xs font-bold text-amber-700 font-mono">"Just to make sure, left after the bank?"</span>
      </div>
    </div>
  )
}

function Slide4Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// TRANSIT DIRECTION</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">破解地鐵與公車的方向迷宮</h2>
        <p className="text-xs text-stone-500">不再搭反！掌握美國大眾運輸的空間邏輯與關鍵問話</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between hover:border-blue-300 transition">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">月台確認</span>
              <Train className="h-4 w-4 text-blue-500" />
            </div>
            <h4 className="text-sm font-bold text-stone-800 mb-2">Downtown 還是 Uptown？</h4>
            <p className="text-[10px] text-stone-500 leading-relaxed mb-3">美國大型地鐵常分 Downtown（市中心/南下）與 Uptown（郊區/北上）方向，進錯月台可能無法在地下直接回頭。</p>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-2 text-[10px]">
            <p className="text-amber-700 font-semibold">Q: "Does this train go downtown?"</p>
            <p className="text-emerald-700 font-semibold">A: "Take the downtown bound train."</p>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between hover:border-amber-300 transition">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded">公車確認</span>
              <Bus className="h-4 w-4 text-amber-500" />
            </div>
            <h4 className="text-sm font-bold text-stone-800 mb-2">上車前與司機雙重確認</h4>
            <p className="text-[10px] text-stone-500 leading-relaxed mb-3">公車站牌也有 Downtown方向提示，確保方向最簡單的做法就是親自與司機對口。</p>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-2 text-[10px]">
            <p className="text-amber-700 font-semibold">Q: "Is this the bus to downtown?"</p>
            <p className="text-emerald-700 font-semibold">A: "Yeah, just stay on for three stops."</p>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-300 transition">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">轉乘樞紐</span>
              <Crosshair className="h-4 w-4 text-emerald-500" />
            </div>
            <h4 className="text-sm font-bold text-stone-800 mb-2">複雜樞紐的精準定位</h4>
            <p className="text-[10px] text-stone-500 leading-relaxed mb-3">詢問他人時應多用 "Exactly" 定位關鍵轉接點。</p>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-2 text-[10px]">
            <p className="text-amber-700 font-semibold">Q: "Where do I transfer exactly?"</p>
            <p className="text-emerald-700 font-semibold">A: "At Central Station, last stop."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide5Content() {
  const rules = [
    { num: '1', title: '購票機溝通', color: 'bg-amber-500 text-white', border: 'hover:border-amber-300',
      phrases: [
        { en: '"What kind of passes do you have?"', zh: '你們有賣什麼票種？' },
        { en: '"I\'d like to reload my card."', zh: '我想要儲值我的卡。' },
      ]},
    { num: '2', title: '閘門進站感應', color: 'bg-blue-500 text-white', border: 'hover:border-blue-300',
      phrases: [
        { en: '"You can tap your credit card."', zh: '你可以感應信用卡。' },
        { en: '"Do I need to tap when exiting?"', zh: '出站時需要刷卡嗎？' },
      ]},
    { num: '3', title: '轉乘隱藏省錢機制', color: 'bg-amber-500 text-white', border: 'hover:border-amber-300 highlight',
      phrases: [
        { en: '"Do I tap again when transferring?"', zh: '轉乘時需要再刷一次嗎？' },
        { en: '"No, it counts as one ride."', zh: '不用，這算在同一趟車程內。' },
      ]},
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// GOLDEN RULES</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">購票、進站與轉乘的黃金法則</h2>
        <p className="text-xs text-stone-500">從買票到搭車，美國大眾運輸的完整流程與省錢句型</p>
      </div>
      <div className="flex-1 space-y-3">
        {rules.map((rule, i) => (
          <div key={i} className={`bg-white border ${i === 2 ? 'border-amber-300 border-2' : 'border-stone-200'} rounded-xl p-4 flex flex-col md:flex-row justify-between gap-4 ${rule.border} transition relative overflow-hidden`}>
            {i === 2 && <span className="absolute top-0 right-0 bg-amber-400 text-black font-bold text-[9px] px-2 py-0.5 rounded-bl"><Star className="h-3 w-3 inline mr-0.5" />KEY SAVINGS</span>}
            <div className="flex items-start gap-3">
              <span className={`${rule.color} font-bold px-2.5 py-0.5 rounded text-xs shrink-0`}>{rule.num}</span>
              <div>
                <h4 className="text-sm font-bold text-stone-800">{rule.title}</h4>
                <div className="mt-2 space-y-1.5">
                  {rule.phrases.map((p, j) => (
                    <div key={j} className="flex justify-between text-[10px]"><span className="text-amber-700 font-semibold">{p.en}</span><span className="text-stone-500">{p.zh}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide6Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// RIDE-SHARE</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">叫車服務 (Ride-Share) 溝通術</h2>
        <p className="text-xs text-stone-500">Uber 與 Lyft 的三步乘車實戰對話流程</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { stage: 'Stage 1', title: '尋找彼此 Location', color: 'bg-amber-500', icon: MapPin, q: '"I\'m by the main entrance."', sub: '我在正門口。', q2: '"I might be on the other side."', sub2: '我可能在另一側。' },
          { stage: 'Stage 2', title: '身份驗證 Security', color: 'bg-blue-500', icon: Shield, q: '"Are you here for Lynn?"', sub: '你是來接 Lynn 的嗎？', q2: '"Yes, heading to the airport right?"', sub2: '對，前往機場對吧？' },
          { stage: 'Stage 3', title: '放置行李 Luggage', color: 'bg-stone-500', icon: Car, q: '"Do you mind if I use the trunk?"', sub: '介意我放後車廂嗎？', q2: '"Sure, I can help with your bag."', sub2: '當然，我幫你拿行李。' },
        ].map((card, i) => {
          const Icon = card.icon
          return (
            <div key={i} className="bg-white border border-stone-200 rounded-xl p-5 relative overflow-hidden hover:border-amber-300 transition">
              <span className={`absolute top-0 right-0 ${card.color} text-white text-[9px] font-bold px-2 py-0.5 rounded-bl`}>{card.stage}</span>
              <Icon className="h-5 w-5 text-stone-500 mb-2" />
              <h4 className="text-sm font-bold text-stone-800 mb-3">{card.title}</h4>
              <div className="space-y-2">
                <div className="bg-stone-50 p-2 rounded border border-stone-200">
                  <p className="text-[10px] text-amber-700 font-semibold">{card.q}</p>
                  <p className="text-[9px] text-stone-500">{card.sub}</p>
                </div>
                <div className="bg-stone-50 p-2 rounded border border-stone-200">
                  <p className="text-[10px] text-emerald-700 font-semibold">{card.q2}</p>
                  <p className="text-[9px] text-stone-500">{card.sub2}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Slide7Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// IN-TRANSIT EMERGENCIES</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">乘車突發狀況與路線調整</h2>
        <p className="text-xs text-stone-500">車行途中，如何體面且直接地表達中途停靠、改道或調整舒適度需求</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold text-[10px]">1</span>
            <h4 className="text-sm font-bold text-stone-800">臨時停靠 & 指定下車</h4>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200">
            <p className="text-[10px] text-stone-500 mb-1">途中需要買東西或借廁所：</p>
            <p className="text-xs text-amber-700 font-semibold">"Actually, could we stop at Walgreens briefly?"</p>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200">
            <p className="text-[10px] text-stone-500 mb-1">要求在特定地方安全下車：</p>
            <p className="text-xs text-amber-700 font-semibold">"Would it be possible to drop me here?"</p>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold text-[10px]">2</span>
            <h4 className="text-sm font-bold text-stone-800">路線修正 & 舒適度調整</h4>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200">
            <p className="text-[10px] text-stone-500 mb-1">當司機走錯路或導航不準時：</p>
            <p className="text-xs text-amber-700 font-semibold">"I think we missed the turn back there."</p>
          </div>
          <div className="bg-stone-50 p-3 rounded border border-stone-200">
            <p className="text-[10px] text-stone-500 mb-1">調整車內空調溫度：</p>
            <p className="text-xs text-amber-700 font-semibold">"Could you turn the AC up?"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide8Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// ROAD TRIP</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">自駕實戰：導航與路況應對</h2>
        <p className="text-xs text-stone-500">自駕出遊面臨的突發工事、車載 GPS 異常或副駕對談必備英文</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-5">
          <h4 className="text-xs font-bold text-red-600 uppercase flex items-center gap-1 mb-3"><AlertTriangle className="h-3 w-3" />窗外路況</h4>
          <div className="space-y-2">
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"There's an accident up ahead."</p><p className="text-[9px] text-stone-500">前方有車禍</p></div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"This road is under construction."</p><p className="text-[9px] text-stone-500">這條路在施工</p></div>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-5">
          <h4 className="text-xs font-bold text-blue-600 uppercase flex items-center gap-1 mb-3"><Navigation className="h-3 w-3" />導航機狀況</h4>
          <div className="space-y-2">
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"Recalculating..."</p><p className="text-[9px] text-stone-500">重新計算路線中</p></div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"The GPS just froze on me."</p><p className="text-[9px] text-stone-500">導航突然當機了</p></div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"I'll follow the GPS for now."</p><p className="text-[9px] text-stone-500">我先跟著導航走</p></div>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-5">
          <h4 className="text-xs font-bold text-emerald-600 uppercase flex items-center gap-1 mb-3"><MessageSquare className="h-3 w-3" />車內對話</h4>
          <div className="space-y-2">
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"Wait, was that our turn?"</p><p className="text-[9px] text-stone-500">那是我們要轉彎的地方嗎？</p></div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"I think we just missed the exit."</p><p className="text-[9px] text-stone-500">我們錯過出口了</p></div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200"><p className="text-[10px] text-amber-700 font-semibold">"Can I pull over here for a second?"</p><p className="text-[9px] text-stone-500">可以在這裡靠邊停一下嗎？</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide9Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// GAS STATION</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">美國加油站生存法則</h2>
        <p className="text-xs text-stone-500">了解油箱位置、直接感應加油與面對故障碼時的應對</p>
      </div>
      <div className="bg-stone-100 border border-stone-200 p-3 rounded-xl flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">START HERE</span>
          <span className="text-xs font-bold text-stone-700">租好車出發前的首要確認：</span>
        </div>
        <span className="text-[10px] text-amber-700 font-semibold font-mono">"Which side is my gas tank on?"</span>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-emerald-200 rounded-xl p-5 hover:border-emerald-400 transition relative overflow-hidden">
          <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">Path A: 順利操作</span>
          <h4 className="text-sm font-bold text-emerald-700 mb-3"><CheckCircle className="h-4 w-4 inline mr-1" />加油槍直接刷卡付款</h4>
          <div className="space-y-2 text-[10px]">
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200">
              <p className="text-amber-700 font-semibold">"Do I just pay at the pump?"</p>
              <p className="text-stone-500">(我直接在加油機付款嗎？→ Yes.)</p>
            </div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200">
              <p className="text-amber-700 font-semibold">"Can you fill it up with regular?"</p>
              <p className="text-stone-500">(可以幫我加滿一般無鉛汽油嗎？)</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-red-200 rounded-xl p-5 hover:border-red-400 transition relative overflow-hidden">
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">Path B: 遭遇故障</span>
          <h4 className="text-sm font-bold text-red-700 mb-3"><XCircle className="h-4 w-4 inline mr-1" />刷卡受阻，需進超商預付</h4>
          <div className="space-y-2 text-[10px]">
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200">
              <p className="text-amber-700 font-semibold">"The card reader isn't working."</p>
              <p className="text-stone-500">(刷卡機壞了 / 出現「See Cashier」)</p>
            </div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200">
              <p className="text-amber-700 font-semibold">"Can I pay inside instead?"</p>
              <p className="text-stone-500">(我可以改去裡面付嗎？)</p>
            </div>
            <div className="bg-stone-50 p-2.5 rounded border border-stone-200">
              <p className="text-amber-700 font-semibold">"Prepay inside."</p>
              <p className="text-stone-500">(先在店內預付油錢)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide10Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// PARKING RULES</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">破解美國停車標誌解碼</h2>
        <p className="text-xs text-stone-500">掌握「絕對禁令、條件允許、特權區」的三層過濾邏輯</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: '1. 絕對禁令', sign: 'NO PARKING', sub: 'MORNINGS ONLY', color: 'text-red-600', border: 'border-red-400', signBorder: 'border-red-500', subColor: 'text-red-600', en: '"So evenings should be fine right?"', zh: '所以晚上停應該沒問題吧？', tip: '注意是否有限制時段' },
          { title: '2. 條件允許', sign: '2 HR PARKING', sub: '8 AM - 6 PM', color: 'text-emerald-600', border: 'border-emerald-400', signBorder: 'border-emerald-600', subColor: 'text-emerald-700', en: '"Can I park here after 6?"', zh: '六點之後可以停這裡嗎？', tip: '限制時間內可停，其餘時段可能免費或禁停' },
          { title: '3. 特權區', sign: 'PERMIT', sub: 'ONLY', color: 'text-blue-600', border: 'border-blue-400', signBorder: 'border-blue-500', subColor: 'text-blue-700', en: '"This street looks permit only."', zh: '這條街看起來需要許可證', tip: '只有持有當地許可證的車輛才能停放' },
        ].map((sign, i) => (
          <div key={i} className={`bg-white border ${sign.border} rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition`}>
            <div className="text-center mb-4">
              <div className={`inline-block border-4 ${sign.signBorder} ${sign.color} font-black px-4 py-2 rounded-lg text-base bg-stone-50`}>
                {sign.sign}<br /><span className={`text-[10px] font-bold ${sign.subColor}`}>{sign.sub}</span>
              </div>
            </div>
            <div className="space-y-2 text-[10px]">
              <h4 className={`font-bold ${sign.color} uppercase`}>{sign.title}</h4>
              <p className="text-stone-500">{sign.tip}</p>
              <hr className="border-stone-200" />
              <p className="text-amber-700 font-semibold font-mono">{sign.en}</p>
              <p className="text-stone-500">{sign.zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide11Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// PARKING EMERGENCY</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">停車地雷：繳費、罰單與拖吊應對</h2>
        <p className="text-xs text-stone-500">遇到停車糾紛、吃罰單、或最糟的「車輛消失」時的英文應對</p>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse text-[10px]">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-100">
              <th className="p-2.5 text-amber-700 font-bold">狀況</th>
              <th className="p-2.5 text-amber-700 font-bold">實戰關鍵句</th>
              <th className="p-2.5 text-amber-700 font-bold">解決方案</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {[
              { scenario: '路邊繳費', en1: '"Do I need to pay at the meter?"', en2: '"Do I pay before leaving?"', action: '尋找繳費機，多數需預先付款並將票根放在前擋風玻璃' },
              { scenario: '收到罰單', en1: '"I think I got a parking ticket."', en2: '"Can I appeal this ticket?"', action: '上網繳費或申訴' },
              { scenario: '車被拖吊', en1: '"My car is gone. Was it towed?"', en2: '"Where is the impound lot?"', action: '確認是否停在拖吊區，聯絡保管場付款領車' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-800">{row.scenario}</td>
                <td className="p-2.5">
                  <p className="text-amber-700 font-semibold font-mono">{row.en1}</p>
                  <p className="text-amber-700 font-semibold font-mono">{row.en2}</p>
                </td>
                <td className="p-2.5 text-stone-500">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-stone-100 p-3 rounded-xl text-center text-[10px] text-stone-500">
        <Info className="h-3 w-3 inline mr-1 text-blue-500" />"Okay, it's annoying but manageable." 不用恐慌！
      </div>
    </div>
  )
}

function Slide12Content() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// PAYMENT MATRIX</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">終極比較：美國交通支付大車拚</h2>
        <p className="text-xs text-stone-500">不同交通場域的 APP 付款、信用卡感應與現金接受度對比</p>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse text-[10px]">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-100">
              <th className="p-2.5 text-amber-700 font-bold">支付管道</th>
              <th className="p-2.5 text-blue-700 font-bold">大眾運輸</th>
              <th className="p-2.5 text-amber-700 font-bold">叫車與停車</th>
              <th className="p-2.5 text-emerald-700 font-bold">自駕加油</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr className="hover:bg-stone-50">
              <td className="p-2.5 font-semibold text-stone-800"><Smartphone className="h-3 w-3 inline mr-1" />手機 App</td>
              <td className="p-2.5 text-stone-600">Digital Day Passes</td>
              <td className="p-2.5 font-mono text-[9px]">"Do I pay through the app?"<br />ParkMobile</td>
              <td className="p-2.5 text-stone-400">較少見</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-2.5 font-semibold text-stone-800"><CreditCard className="h-3 w-3 inline mr-1" />感應支付</td>
              <td className="p-2.5 font-mono text-[9px]">You can tap your credit card.</td>
              <td className="p-2.5 text-stone-400">APP內結帳為主</td>
              <td className="p-2.5 font-mono text-[9px] text-emerald-700">Pay at the pump.</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-2.5 font-semibold text-stone-800">現金/預付</td>
              <td className="p-2.5 text-stone-600">售票機購單程票</td>
              <td className="p-2.5 text-red-600 font-semibold text-[9px]">不支援</td>
              <td className="p-2.5 font-mono text-[9px]">Prepay inside / See cashier</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-[10px] text-stone-700">
        <strong className="text-amber-800">關鍵洞察：</strong> 實體現金使用率極低。攜帶感應信用卡或手機 Apple Pay / Google Pay，是解決 90% 交通消費的最優解。
      </div>
    </div>
  )
}

function Slide13Content() {
  const modes = [
    { label: '步行', color: 'bg-amber-500', en: '"I\'m trying to get to Main Street. Am I going the right way?"', zh: '我在找緬街，我走的方向對嗎？' },
    { label: '大眾運輸', color: 'bg-blue-500', en: '"I almost got off early. Does this train go downtown?"', zh: '我差點提早下車。這班車往市區嗎？' },
    { label: '叫車', color: 'bg-emerald-500', en: '"This doesn\'t look like the right address. I think we missed the turn."', zh: '這不像正確地址。我們好像錯過轉彎了。' },
    { label: '自駕', color: 'bg-red-500', en: '"The GPS just froze on me. It keeps saying recalculating."', zh: '導航當機了。一直顯示重新計算中。' },
  ]
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="mb-3">
        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// EMERGENCY ESCAPE</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-800 mt-1">迷航與延誤應急矩陣</h2>
        <p className="text-xs text-stone-500">當情況失去控制時，你該說什麼？</p>
      </div>
      <div className="flex-1 space-y-2">
        {modes.map((mode, i) => (
          <div key={i} className="bg-white border border-stone-200 p-3 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="md:w-1/5 flex items-center gap-2">
              <span className={`${mode.color} text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase`}>{mode.label}</span>
            </div>
            <div className="bg-stone-50 p-2 rounded border border-stone-200 md:w-4/5">
              <p className="text-[10px] text-amber-700 font-semibold font-mono">{mode.en}</p>
              <p className="text-[9px] text-stone-500">{mode.zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide14Content() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-6">
      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// CULTURAL CODES</span>
      <h2 className="text-xl md:text-3xl font-extrabold text-stone-800">總結：美國交通溝通的潛規則</h2>
      <p className="text-xs text-stone-500 max-w-lg">如何兼顧禮貌、效率與規則感知，確保行程暢行無阻</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {[
          { icon: Handshake, color: 'text-amber-600', title: '禮貌 (Politeness)', desc: '永遠以 "Excuse me, can you help me find..." 開頭。結束加 "Have a great rest of your day."' },
          { icon: Crosshair, color: 'text-blue-600', title: '直率 (Directness)', desc: '"Just to make sure..." 直接確認比兜圈子更有效率。' },
          { icon: Eye, color: 'text-emerald-600', title: '情境感知 (Awareness)', desc: '掌握 "It counts as one ride" 與 "Watch the time limit" 等核心原則。' },
        ].map((rule, i) => {
          const Icon = rule.icon
          return (
            <div key={i} className="bg-white border border-stone-200 p-5 rounded-xl hover:border-amber-300 transition">
              <Icon className={`h-6 w-6 ${rule.color} mb-2 mx-auto`} />
              <h4 className="text-sm font-bold text-stone-800 mb-1">{rule.title}</h4>
              <p className="text-[10px] text-stone-500 leading-relaxed">{rule.desc}</p>
            </div>
          )
        })}
      </div>
      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-stone-700 max-w-lg">
        結合禮貌的詢問與精準的確認，就能在任何交通突發狀況中保持冷靜。
      </div>
    </div>
  )
}

function Slide15Content() {
  const items = [
    { tag: '方向迷失', color: 'text-amber-600 bg-amber-50', en: '"Just to make sure, am I going the right way?"', zh: '確認一下，我走的方向對嗎？' },
    { tag: '地鐵轉乘', color: 'text-blue-600 bg-blue-50', en: '"Do I tap again when transferring, or does it count as one ride?"', zh: '轉乘時要再刷一次嗎，還是算同一趟？' },
    { tag: '叫車找人', color: 'text-emerald-600 bg-emerald-50', en: '"I\'m by the main entrance. Heading to the airport, right?"', zh: '我在正門口。前往機場對吧？' },
    { tag: '導航崩潰', color: 'text-red-600 bg-red-50', en: '"The GPS just froze. It keeps saying recalculating."', zh: '導航當機了，一直在重新計算中。' },
    { tag: '停車自救', color: 'text-purple-600 bg-purple-50', en: '"Is this a legal parking spot after 6 PM?"', zh: '晚上 6 點之後這裡可以合法停車嗎？' },
  ]
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-6">
      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">// CHEAT SHEET</span>
      <h2 className="text-xl md:text-3xl font-extrabold text-stone-800">你的專屬出行小抄</h2>
      <p className="text-xs text-stone-500 max-w-md">精選 5 句應急萬用口語，建議截圖保存！</p>
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-5 shadow-lg border border-stone-700">
          <div className="flex justify-between items-center text-[9px] text-stone-400 font-mono mb-3">
            <span>9:41 AM</span>
            <div className="flex items-center gap-1"><WifiOff className="h-3 w-3" /><Zap className="h-3 w-3" /></div>
          </div>
          <div className="border-b border-stone-700 pb-2 mb-3">
            <span className="text-[8px] uppercase tracking-widest text-amber-400 font-bold">Notes App</span>
            <h3 className="text-xs font-bold text-white mt-0.5">The Urban Survival Cheat Sheet</h3>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {items.map((item, i) => (
              <div key={i} className="bg-stone-800/60 p-2 rounded border border-stone-700 text-left">
                <p className={`text-[9px] font-bold ${item.color} px-1.5 py-0.5 rounded inline-block mb-1`}>{i + 1}. {item.tag}</p>
                <p className="text-[10px] text-white font-semibold font-mono leading-snug">{item.en}</p>
                <p className="text-[9px] text-stone-400 mt-0.5">{item.zh}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[10px] text-stone-400">截圖保存，下次出行直接用！</p>
    </div>
  )
}
