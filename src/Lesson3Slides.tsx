import {
  DoorOpen, Scissors, Search, Palette, Ban, Receipt,
  Info, Lightbulb, ShoppingBag,
  Volume2, ArrowDown, ArrowUp, AlertTriangle, Reply,
  CreditCard
} from 'lucide-react'
import { LESSON_3_SLIDES } from './lessonData'

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}

export function Lesson3Slide({ page, active }: { page: number; active: boolean }) {
  const data = LESSON_3_SLIDES[page - 1]
  return (
    <Slide active={active}>
      <div className="w-full h-full bg-[#fcfbf4] text-[#2d2013] rounded-2xl flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto">
        <div className="flex justify-between items-center w-full border-b border-[#3c4a3e]/20 pb-3 mb-4 text-xs md:text-sm font-semibold text-[#3c4a3e]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-800/10 rounded text-amber-800 uppercase tracking-widest text-[10px]">
              {data.category}
            </span>
            <span className="text-gray-500">{page === 1 ? '' : data.subtitle}</span>
          </div>
          <div className="text-gray-500 tracking-wider text-[10px]">NotebookLM Studio</div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {page === 1 && <Slide1Content data={data} />}
          {page === 2 && <Slide2Content data={data} />}
          {page === 3 && <Slide3Content data={data} />}
          {page === 4 && <Slide4Content data={data} />}
          {page === 5 && <Slide5Content data={data} />}
          {page === 6 && <Slide6Content data={data} />}
          {page === 7 && <Slide7Content data={data} />}
          {page === 8 && <Slide8Content data={data} />}
          {page === 9 && <Slide9Content data={data} />}
          {page === 10 && <Slide10Content data={data} />}
          {page === 11 && <Slide11Content />}
        </div>

        <div className="flex justify-between items-center w-full pt-3 mt-4 border-t border-[#3c4a3e]/20 text-[11px] font-medium text-gray-400">
          <div>© 2026 US Retail English Blueprint</div>
          <div className="flex items-center gap-1 font-bold text-[#3c4a3e]">
            Page {page} / 11
          </div>
        </div>
      </div>
    </Slide>
  )
}

function Slide1Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full rounded-xl overflow-hidden border border-stone-200">
      <div className="w-full md:w-1/2 bg-[#382013] p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a2a18] rounded-full filter blur-3xl opacity-40 -mr-20 -mt-20" />
        <div className="relative z-10">
          <span className="inline-block bg-[#c28746] text-[#382013] text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">NotebookLM Course</span>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-3 tracking-tight">沉浸式購物英文</h2>
          <h3 className="text-base md:text-lg font-bold text-[#f7edde] mb-2">美國服飾店實戰指南</h3>
          <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mt-4">從「純逛逛」到「試穿結帳」，完全掌握道地美式購物語感。不只學會開口英文，更看懂消費文化中的無形社交心理！</p>
        </div>
        <div className="relative z-10 pt-4 mt-6 border-t border-[#4a2a18] flex justify-between items-center text-[11px] text-[#f7edde]/60">
          <span>© NotebookLM 協作教材</span>
          <span className="bg-[#4a2a18]/80 px-2.5 py-1 rounded-full"><Volume2 className="h-3 w-3 inline mr-1" />點選英文即可朗讀</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-stone-50">
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider flex items-center">
            <span className="w-6 h-1 bg-[#c28746] mr-2 rounded-full" />本指南涵蓋 4 大精華站點
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: DoorOpen, color: 'bg-emerald-50 text-emerald-600', title: '門口：逛街防線', sub: '站點 1' },
              { icon: Scissors, color: 'bg-blue-50 text-blue-600', title: '試衣間：尺寸色系', sub: '站點 2' },
              { icon: Search, color: 'bg-purple-50 text-purple-600', title: '連身鏡：猶豫決策', sub: '站點 3' },
              { icon: CreditCard, color: 'bg-rose-50 text-rose-600', title: '收銀台：退換貨', sub: '站點 4' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center mb-2 text-sm`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] text-stone-400 block font-medium">{item.sub}</span>
                <span className="text-xs font-bold text-stone-800 block mt-0.5">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide2Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">美式服飾店購物地圖</h2>
        <p className="text-stone-500 text-xs">四大購物情境站點，一步步突破心防</p>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { num: 1, icon: DoorOpen, color: 'emerald', title: '站點 1：門口', tag: 'Browsing', desc: '逛街心態設定。店員迎面走來時的「無痛防守」。' },
          { num: 2, icon: Scissors, color: 'blue', title: '站點 2：試衣間', tag: 'Fit & Color', desc: '尺寸與顏色交涉。試穿限制件數、庫存色系要求。' },
          { num: 3, icon: Search, color: 'purple', title: '站點 3：鏡前猶豫', tag: 'Evaluation', desc: '評價與決策。面對店員強烈讚美與冷靜拖延戰術。' },
          { num: 4, icon: CreditCard, color: 'rose', title: '站點 4：收銀台', tag: 'Returns', desc: '退換貨防禦。確認退貨期限與取得商店抵用券。' },
        ].map((s, i) => (
          <div key={i} className={`bg-gradient-to-br from-${s.color}-50/50 to-white border border-${s.color}-100 rounded-xl p-4 shadow-sm`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`bg-${s.color}-600 text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center`}>{s.num}</span>
              <s.icon className={`text-${s.color}-600 h-4 w-4`} />
            </div>
            <h3 className="text-xs md:text-sm font-bold text-stone-800">{s.title}</h3>
            <p className={`text-[9px] font-bold text-${s.color}-800 uppercase tracking-wider mt-0.5`}>{s.tag}</p>
            <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200/50 flex items-start space-x-2.5 text-[11px] text-amber-900 leading-relaxed">
        <Info className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
        <p><strong>教學小提示：</strong>這不是一張死板的圖片！請點選任何一個單元直接跳轉，並在隨後的投影片中<strong>點擊喇叭圖示</strong>播放逼真的原聲朗讀發音吧！</p>
      </div>
    </div>
  )
}

function Slide3Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">店員的熱情突擊 vs. 顧客的完美防守</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-red-100 text-red-800 text-[10px] font-black px-2.5 py-0.5 rounded uppercase">店員高壓突擊</span>
            <span className="text-stone-400 text-[10px]">High Pressure</span>
          </div>
          <p className="text-[11px] text-stone-500 mb-3">美國店員在門口往往非常主動，常常在您一踏入店內就上前包圍與提問：</p>
          {[
            { label: 'QUESTION A', en: '"Looking for something specific?"', zh: '你在找特定、具體的商品嗎？' },
            { label: 'QUESTION B', en: '"What brings you in today?"', zh: '今天是什麼風把你吹來？' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border border-stone-150 shadow-sm mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-stone-400">{item.label}</span>
                <Volume2 className="h-3 w-3 text-[#c28746]" />
              </div>
              <p className="text-stone-800 font-extrabold text-xs md:text-sm">{item.en}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{item.zh}</p>
            </div>
          ))}
          <div className="mt-auto p-2 bg-red-50 text-[10px] text-red-900 border border-red-100 rounded">
            <AlertTriangle className="h-3 w-3 inline mr-1 text-red-600" />
            不需要緊張，美式購物文化非常講求「社交邊界」，你完全可以用下一句優雅化解。
          </div>
        </div>
        <div className="bg-[#fcf8f2]/60 rounded-xl p-4 border border-[#f7edde] flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded uppercase">顧客無壓邊界</span>
            <span className="text-[#c28746] text-[10px]">No Pressure</span>
          </div>
          <p className="text-[11px] text-stone-500 mb-3">只需堅定且保持微笑說出以下「Just Browsing」防線金句：</p>
          {[
            { label: '金牌基礎防守', en: '"I\'m just looking for now."', zh: '我現在先自己看看。' },
            { label: '日常極速解套', en: '"Not really, just browsing today."', zh: '今天只是隨便逛逛。' },
            { label: '地道優雅客氣', en: '"Just taking a look around."', zh: '只是隨意四處看看。' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border border-[#f7edde] shadow-sm mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-emerald-700">{item.label}</span>
                <Volume2 className="h-3 w-3 text-[#c28746]" />
              </div>
              <p className="text-[#382013] font-extrabold text-xs md:text-sm">{item.en}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{item.zh}</p>
            </div>
          ))}
          <div className="mt-auto p-2 bg-[#f7edde] text-[10px] text-[#382013] border border-[#eedcbc] rounded leading-relaxed">
            <Reply className="h-3 w-3 inline mr-1 text-[#c28746]" />
            <strong>店員聽完通常會微笑識趣退讓並回覆：</strong><br />
            <span className="italic font-bold text-[#b47238] text-[11px]">"Take your time, no rush."</span> (慢慢逛，不用急。)
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide4Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">啟動試穿與件數規定</h2>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 space-y-3 flex flex-col justify-center">
          {[
            { num: 1, bg: 'bg-blue-600 text-white', label: '步驟 1：啟動試穿', en: '"Can I try this on?"', zh: '「我可以試穿這件嗎？」' },
            { num: 2, bg: 'bg-stone-300 text-stone-700', label: '步驟 2：店員指引', en: '"Sure, fitting rooms are there."', zh: '「當然可以，更衣室在後面那邊。」' },
            { num: 3, bg: 'bg-blue-600 text-white', label: '步驟 3：確認件數限制', en: '"How many items can I take?"', zh: '「我能一次拿幾件進去？」' },
          ].map((step, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className={`w-6 h-6 rounded-full ${step.bg} flex items-center justify-center text-xs font-bold shrink-0 shadow mt-1`}>{step.num}</div>
              <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100 w-full">
                <span className="text-[10px] font-bold text-blue-900 block mb-0.5">{step.label}</span>
                <p className="font-bold text-stone-800 text-xs md:text-sm">{step.en}</p>
                <p className="text-[10px] text-stone-500 mt-0.5">{step.zh}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-stone-800 text-xs md:text-sm mb-2 flex items-center">
              <Info className="h-4 w-4 text-blue-600 mr-2" />美式試衣間管理文化
            </h4>
            <p className="text-[11px] text-stone-600 leading-relaxed mb-3">
              在美國大型服飾店（如 A&F, ZARA, GAP），試衣區門口通常有店員在管制，避免失竊。他們會為你計算手上的件數，並發給您號碼牌，或是親自帶你到指定的房間。
            </p>
            <div className="p-3 bg-white rounded-lg border border-stone-150">
              <span className="text-[9px] font-bold text-stone-400 block">店員通常會回覆：</span>
              <p className="font-bold text-stone-800 text-xs md:text-sm italic mt-0.5">"You can take up to five."</p>
              <p className="text-[10px] text-stone-500 mt-0.5">「您最多能帶五件衣服進去試穿。」</p>
            </div>
          </div>
          <div className="mt-4 bg-blue-100/60 p-2.5 rounded text-[10px] text-blue-950 border border-blue-200 flex items-center space-x-2">
            <Lightbulb className="h-4 w-4 text-blue-700 shrink-0" />
            <span><strong>貼心口說：</strong>主動在更衣室門口問件數限制，是一個自然融入美式購物的最佳對話契機！</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide5Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  const cards = [
    { color: 'red', icon: ArrowDown, title: '太小 (Too Small)', tag: '要求大一號', phrases: [
      { en: '"I think this is too small."', zh: '我覺得這件衣服太小了。' },
      { en: '"Do you have this in medium?"', zh: '這件有M號的嗎？' },
    ]},
    { color: 'amber', icon: ArrowUp, title: '太大 (Too Big)', tag: '要求小一號', phrases: [
      { en: '"It\'s a bit too big."', zh: '這件好像有點太大了。' },
      { en: '"Do you carry a smaller size?"', zh: '你們有賣更小尺寸的嗎？' },
    ]},
    { color: 'rose', icon: ShrinkIcon, title: '太緊 (Too Tight)', tag: '尋找後場庫存', phrases: [
      { en: '"It feels kind of tight."', zh: '穿起來有點太緊了。' },
      { en: '"Let me check in back."', zh: '讓我去後場庫存查查看。' },
    ]},
  ]
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">尺寸與版型自我診斷卡</h2>
        <p className="text-[11px] text-stone-500 mt-0.5">試穿不合身？透過這份對應診斷卡，向店員流暢開口吧！</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, ci) => (
          <div key={ci} className={`bg-${card.color}-50/20 border border-${card.color}-100 rounded-xl p-4 flex flex-col`}>
            <div className="flex justify-between items-center border-b border-stone-200 pb-2 mb-2">
              <span className={`text-${card.color}-700 font-black text-xs flex items-center`}>
                <card.icon className="h-3 w-3 mr-1.5" />{card.title}
              </span>
              <span className={`text-[9px] text-${card.color}-800 bg-${card.color}-100/50 px-1.5 py-0.5 rounded font-bold`}>{card.tag}</span>
            </div>
            {card.phrases.map((p, pi) => (
              <div key={pi} className="bg-white p-2.5 rounded border border-stone-100 mt-2">
                <p className="font-extrabold text-stone-800 text-xs">{p.en} <Volume2 className="h-3 w-3 inline ml-1 text-stone-400" /></p>
                <p className="text-[10px] text-stone-500 mt-0.5">{p.zh}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function ShrinkIcon(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M4 20L20 4" /><path d="M14 4h6v6" /><path d="M10 20H4v-6" /></svg>
}

function Slide6Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">尋找命定顏色 (The Color Quest)</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#382013] to-[#4a2a18] rounded-xl p-6 text-white relative overflow-hidden shadow-md flex flex-col">
          <span className="bg-[#c28746] text-[#382013] font-black text-[9px] uppercase tracking-widest px-2 py-0.5 rounded mb-3 inline-block w-fit">THE GOLDEN PHRASE</span>
          <h3 className="text-base md:text-lg font-black mb-3">最經典！強勢購物金句</h3>
          {[
            { label: '想找特定的顏色時：', en: '"Does this come in black?"', zh: '這款有黑色的嗎？' },
            { label: '想找偏暗色系時：', en: '"Do you have darker shades?"', zh: '有沒有更深一點的色系？' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 hover:bg-white/15 border border-white/20 p-3.5 rounded-lg mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-[#f7edde] font-semibold tracking-wider">{item.label}</span>
                <Volume2 className="h-3 w-3 text-[#f7edde]/60" />
              </div>
              <p className="text-sm md:text-base font-extrabold">{item.en}</p>
              <p className="text-xs text-stone-300 mt-0.5">{item.zh}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3 flex flex-col justify-center">
          <h4 className="font-bold text-stone-700 text-xs uppercase tracking-wider">店員回覆與庫存情境</h4>
          {[
            { bg: 'bg-stone-50 border-stone-200', icon: Palette, iconBg: 'bg-blue-100 text-blue-700', label: '店員主動推薦', en: '"We also have it in blue."', zh: '我們這款也還有藍色的唷。' },
            { bg: 'bg-rose-50/50 border-rose-100', icon: Ban, iconBg: 'bg-rose-100 text-rose-700', label: '缺貨狀態', en: '"Just these colors right now."', zh: '目前只有架上這幾種顏色喔。' },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} rounded-xl p-3 flex items-start space-x-2.5`}>
              <div className={`${item.iconBg} p-2 rounded-lg mt-0.5`}><item.icon className="h-4 w-4" /></div>
              <div>
                <span className="text-[9px] font-bold text-stone-400 uppercase">{item.label}</span>
                <p className="font-bold text-stone-800 text-xs md:text-sm">{item.en}</p>
                <p className="text-[10px] text-stone-500">{item.zh}</p>
              </div>
            </div>
          ))}
          <div className="p-3 bg-stone-100/60 rounded-xl text-[10px] text-stone-600 border border-stone-200 leading-relaxed">
            <span className="font-bold text-stone-800 block mb-0.5">文化延伸解說：</span>
            在美式購物文化中，衣服的色差叫 <strong>Shades (深淺色度)</strong>，色調叫 <strong>Tones (色調)</strong>。靈活運用 "darker/lighter shades" 是最自然的提問法！
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide7Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">鏡前的社交評價 (The Mirror Moment)</h2>
        <p className="text-xs text-stone-500">在美國購物時，給予熱情客氣的正面評價是其社交習慣。當店員大聲稱讚你時，請優雅應對！</p>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-50/50 to-white border border-purple-100 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Clerk's Praise</span>
            <span className="text-stone-400 text-[9px] uppercase">社交讚美</span>
          </div>
          <p className="text-[11px] text-stone-500 mb-3">店員見你站在連身鏡前，往往會奉上熱情誇讚：</p>
          <div className="bg-white p-3 rounded-lg border border-stone-150 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-black text-purple-700 uppercase">THE PRAISE</span>
              <Volume2 className="h-3 w-3 text-purple-500" />
            </div>
            <p className="font-extrabold text-stone-800 text-xs md:text-sm">"It actually looks really good on you."</p>
            <p className="text-[10px] text-stone-500 mt-0.5">這件穿在您身上真的非常好看！</p>
          </div>
          <div className="mt-auto text-[10px] text-stone-500 bg-stone-50 p-2.5 rounded border border-stone-200 mt-3 leading-relaxed">
            這在美國完全是日常社交禮貌！不要害羞，自信微笑地說聲 <strong>"Thank you!"</strong> 就可以了！
          </div>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">Fit Feedback</span>
            <span className="text-stone-400 text-[9px] uppercase">版型不合</span>
          </div>
          <p className="text-[11px] text-stone-500 mb-3">如果您想以「版型不合」作為不想買的理由，可以說：</p>
          {[
            { label: '肩膀卡住', en: '"It\'s a little tight around the shoulders."', zh: '肩膀這部分感覺稍微有點緊。' },
            { label: '版型取捨', en: '"True, but that fits better."', zh: '確實，但另一件版型更合身。' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-2.5 rounded-lg border border-stone-150 shadow-sm mb-2">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[9px] font-bold text-stone-400">{item.label}</span>
                <Volume2 className="h-3 w-3 text-stone-400" />
              </div>
              <p className="font-bold text-stone-800 text-xs">{item.en}</p>
              <p className="text-[10px] text-stone-500">{item.zh}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">Comparison</span>
            <span className="text-stone-400 text-[9px] uppercase">顏色與價格</span>
          </div>
          <p className="text-[11px] text-stone-500 mb-3">如果是卡在顏色太難搭或預算在權衡中：</p>
          {[
            { label: '預算優勢', en: '"This one is cheaper though."', zh: '不過這件稍微便宜一些。' },
            { label: '色系取勝', en: '"The blue one looks better."', zh: '藍色的那套看起來更好看。' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-2.5 rounded-lg border border-stone-150 shadow-sm mb-2">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[9px] font-bold text-stone-400">{item.label}</span>
                <Volume2 className="h-3 w-3 text-stone-400" />
              </div>
              <p className="font-bold text-stone-800 text-xs">{item.en}</p>
              <p className="text-[10px] text-stone-500">{item.zh}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide8Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">購買決策內心戲 (The Hesitation Decision Tree)</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { letter: 'A', color: 'bg-[#c28746] text-[#382013]', title: '大腦混亂中', tag: 'Evaluation', bg: 'bg-stone-50/50 border-stone-200',
            phrases: [
              { en: '"I\'m not sure yet."', zh: '我現在還不是很確定。' },
              { en: '"I can\'t decide between these."', zh: '我實在做不出決定。' },
              { en: '"It\'s kind of a tough call."', zh: '這真的好難決定。' },
            ]},
          { letter: 'B', color: 'bg-amber-400 text-amber-950', title: '需要冷靜（拖延戰術）', tag: 'Delay', bg: 'bg-amber-50/20 border-amber-100',
            phrases: [
              { en: '"Let me think about it."', zh: '讓我先考慮一下。' },
              { en: '"I might come back later."', zh: '我稍候可能再回來瞧瞧。' },
              { en: '"I need a little more time."', zh: '我可能需要多一點時間。' },
            ]},
          { letter: 'C', color: 'bg-stone-400 text-stone-900', title: '決定放手', tag: 'Walking Away', bg: 'bg-stone-50 border-stone-200',
            phrases: [
              { label: '店員追問：', en: '"Are you ready to check out?"', zh: '準備好去結帳了嗎？' },
              { en: '"Not today, maybe later."', zh: '今天先不用囉，下次有機會再看看。' },
            ]},
        ].map((col, ci) => (
          <div key={ci} className={`${col.bg} rounded-xl p-4 flex flex-col`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`w-5 h-5 rounded-full ${col.color} font-bold flex items-center justify-center text-[10px]`}>{col.letter}</span>
              <h3 className="text-xs md:text-sm font-bold text-stone-800 uppercase tracking-wide">{col.title}</h3>
            </div>
            <div className="space-y-2 flex-1">
              {col.phrases.map((p, pi) => (
                <div key={pi} className="bg-white p-3 rounded border border-stone-150">
                  {p.label && <span className="text-[9px] font-bold text-amber-800 block mb-0.5">{p.label}</span>}
                  <p className="text-xs font-bold text-stone-800">{p.en}</p>
                  <p className="text-[9px] text-stone-500 mt-0.5">{p.zh}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide9Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3">
        <h2 className="text-xl md:text-2xl font-black text-stone-800">最後防線：退換貨交涉 (Returns & Exchanges)</h2>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col font-mono text-stone-700 text-[10px] md:text-xs leading-tight">
          <div className="text-center border-b border-dashed border-stone-300 pb-2 mb-2">
            <h3 className="font-black text-xs uppercase tracking-wider">STORE RECEIPT</h3>
            <p className="text-[9px] text-stone-400 mt-0.5">2581 Mazon St, State #GG0.547</p>
          </div>
          <div className="space-y-1 pb-2 border-b border-dashed border-stone-300">
            {[{ item: 'ITEM A (T-Shirt)', price: '$25.99' }, { item: 'ITEM B (Jeans - Size M)', price: '$42.50', bold: true }, { item: 'ITEM C (Cap)', price: '$15.00' }].map((row, i) => (
              <div key={i} className={`flex justify-between ${row.bold ? 'font-bold text-stone-900' : ''}`}>
                <span>{row.item}</span>
                <span>{row.price}</span>
              </div>
            ))}
          </div>
          <div className="space-y-0.5 py-2 border-b border-stone-300">
            {[{ label: 'SUBTOTAL:', val: '$83.49' }, { label: 'TAX (9%):', val: '$7.51' }, { label: 'TOTAL PAID:', val: '$91.00', bold: true }].map((r, i) => (
              <div key={i} className={`flex justify-between ${r.bold ? 'font-black text-xs md:text-sm text-stone-900' : ''}`}>
                <span>{r.label}</span>
                <span>{r.val}</span>
              </div>
            ))}
          </div>
          <div className="pt-2 text-[9px] text-stone-500 uppercase leading-normal">
            <p className="font-bold text-stone-700">Return Policy:</p>
            <p>• Returns within 30 days with receipt.</p>
            <p>• Exchanges for store credit only on sale items.</p>
          </div>
          <div className="bg-rose-100/50 p-2 rounded border border-rose-200 mt-3 text-[10px] text-rose-950 font-sans leading-relaxed">
            <Receipt className="h-3 w-3 inline mr-1 text-rose-600" />
            美國退換貨關鍵字：<strong>Receipt (收據)</strong> 與 <strong>Return Window (退換貨時間期限)</strong>。
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
          {[
            { label: '1. 提出問題 (Issue)', en: '"I think I got the wrong size. It\'s a bit too small."', zh: '「我好像拿錯尺寸了，這件有點太小。」' },
            { label: '2. 確認期限 (Window)', en: '"Am I within the return window?"', zh: '「我還在退換貨時間窗口內嗎？」' },
            { label: '3. 提出交換 (Exchange)', en: '"Can I switch to another color?"', zh: '「我可以換成別的顏色嗎？」' },
            { label: '4. 要求退款 (Refund)', en: '"If not, I\'d like a refund."', zh: '「如果沒法換，我想申請退款。」' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[9px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">{item.label}</span>
                <Volume2 className="h-3 w-3 text-rose-500" />
              </div>
              <p className="font-bold text-stone-800 text-xs md:text-sm">{item.en}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{item.zh}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide10Content({ data: _data }: { data: typeof LESSON_3_SLIDES[0] }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-3 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-stone-800">美國服飾店最強語錄隨身包</h2>
        </div>
        <p className="text-stone-500 text-[11px] mt-1 md:mt-0">截圖保存，或點擊互動複習！</p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {[
          { tag: '逛街防護罩', color: 'text-emerald-700 bg-emerald-50', en: '"Just browsing today."', zh: '今天只是隨意逛逛。' },
          { tag: '找尺寸神句', color: 'text-blue-700 bg-blue-50', en: '"Does this come in a medium?"', zh: '這套有M號的嗎？' },
          { tag: '找顏色神句', color: 'text-blue-700 bg-blue-50', en: '"Does this come in black?"', zh: '這款有黑色的嗎？' },
          { tag: '選擇困難症', color: 'text-purple-700 bg-purple-50', en: '"It\'s kind of a tough call."', zh: '這真的好難決定。' },
          { tag: '優雅退場法', color: 'text-purple-700 bg-purple-50', en: '"I need a little more time to decide."', zh: '我需要多一點時間考慮。' },
          { tag: '退換貨窗檻', color: 'text-rose-700 bg-rose-50', en: '"Am I within the return window?"', zh: '我還在退換貨時間內嗎？' },
        ].map((item, i) => (
          <div key={i} className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex items-start space-x-3">
            <div className="flex-1">
              <span className={`text-[9px] font-bold ${item.color} px-1.5 py-0.5 rounded uppercase`}>{item.tag}</span>
              <p className="font-extrabold text-stone-800 mt-1 text-xs md:text-sm">{item.en} <Volume2 className="h-3 w-3 inline text-stone-400" /></p>
              <p className="text-[10px] text-stone-500 mt-0.5">{item.zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide11Content() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center relative">
      <div className="absolute w-80 h-80 rounded-full bg-[#fcf8f2] top-[-100px] left-[-100px] -z-10" />
      <div className="absolute w-80 h-80 rounded-full bg-[#f7edde]/50 bottom-[-100px] right-[-100px] -z-10" />
      <div className="max-w-xl mx-auto space-y-4">
        <div className="w-16 h-16 mx-auto bg-[#fcf8f2] text-[#b47238] rounded-full flex items-center justify-center border border-[#f7edde]">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-stone-800">"Go with your gut feeling."</h2>
        <p className="text-[#c28746] font-extrabold tracking-widest text-xs uppercase">直覺消費，自信對話</p>
        <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
          購物不只是單純的金錢交換。在美式購物文化中，這更是與店家建立短暫、友好社交心理與對話的動態過程。<br />
          現在，拿捏好您的專屬「地道語料庫」，在服飾店逛得優雅又毫無溝通壓力吧！
        </p>
      </div>
    </div>
  )
}
