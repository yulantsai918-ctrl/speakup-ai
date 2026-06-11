import {
  UtensilsCrossed, ShoppingCart, Martini,
  Coffee, Snowflake, Sparkles,
  ChefHat, Store, Sandwich, Flame, CreditCard,
  MessageCircle, ThumbsUp, Frown, CheckCircle
} from 'lucide-react'
import { LESSON_2_SLIDES } from './lessonData'

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}

export function Lesson2Slide({ page, active }: { page: number; active: boolean }) {
  const data = LESSON_2_SLIDES[page - 1]
  return (
    <Slide active={active}>
      <div className="absolute inset-0 bg-[#fcfbf4] text-[#2d2013] rounded-2xl flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto">
        {/* Top Ribbon */}
        <div className="flex justify-between items-center w-full border-b border-[#3c4a3e]/20 pb-3 mb-4 text-xs md:text-sm font-semibold text-[#3c4a3e]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-emerald-800/10 rounded text-emerald-800 uppercase tracking-widest text-[10px]">
              {data.category}
            </span>
            <span className="text-gray-500">{page === 1 ? '' : data.subtitle}</span>
          </div>
          <div className="text-gray-500 tracking-wider text-[10px]">NotebookLM Studio</div>
        </div>

        {/* Slide Content */}
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
          {page === 11 && <Slide11Content data={data} />}
          {page === 12 && <Slide12Content data={data} />}
          {page === 13 && <Slide13Content data={data} />}
          {page === 14 && <Slide14Content data={data} />}
          {page === 15 && <Slide15Content />}
        </div>

        {/* Bottom Branding */}
        <div className="flex justify-between items-center w-full pt-3 mt-4 border-t border-[#3c4a3e]/20 text-[11px] font-medium text-gray-400">
          <div>© 2026 The American Foodie Survival Guide</div>
          <div className="flex items-center gap-1 font-bold text-[#3c4a3e]">
            Page {page} / 15
          </div>
        </div>
      </div>
    </Slide>
  )
}

function Slide1Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-6 flex-1 py-4">
      <div className="flex justify-center space-x-6 text-emerald-700 text-4xl mb-2">
        <ChefHat className="h-10 w-10 hover:text-amber-600 transition" />
        <ShoppingCart className="h-10 w-10 hover:text-emerald-600 transition" />
        <Martini className="h-10 w-10 hover:text-purple-600 transition" />
      </div>
      <div className="space-y-1">
        <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-800 bg-emerald-800/10 px-3 py-1 rounded-full">
          美國生活實境
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#3c4a3e] leading-tight mt-2">
          吃貨必備的<br className="md:hidden" />英文生存指南
        </h2>
        <p className="text-md md:text-lg font-medium text-gray-500 tracking-wide mt-1">The American Foodie Survival Guide</p>
      </div>
      <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed border-t border-amber-900/10 pt-4">
        {data.subtitle}
      </p>
    </div>
  )
}

function Slide2Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Coffee, title: '咖啡與手搖飲', sub: 'Morning Boost', color: 'amber', bg: 'bg-amber-100' },
          { icon: UtensilsCrossed, title: '美式餐廳實戰', sub: 'Dining Out', color: 'emerald', bg: 'bg-emerald-100' },
          { icon: Store, title: '超市與超商尋寶', sub: 'Grocery & Convenience', color: 'sky', bg: 'bg-sky-100' },
          { icon: Martini, title: '微醺與社交', sub: 'Nightlife Social', color: 'purple', bg: 'bg-purple-100' },
        ].map((stop, i) => {
          const Icon = stop.icon
          return (
            <div key={i} className={`${stop.bg} p-4 rounded-2xl border border-${stop.color}-800/20 text-center hover:shadow-md transition`}>
              <span className={`text-xs font-bold text-${stop.color}-800 bg-${stop.color}-800/10 px-2 py-0.5 rounded`}>Stop {i + 1}</span>
              <Icon className={`h-8 w-8 mx-auto my-2 text-${stop.color}-700`} />
              <h3 className="font-bold text-sm text-[#3c4a3e]">{stop.title}</h3>
              <p className="text-[10px] text-gray-500 mt-1">{stop.sub}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Slide3Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  const blocks = [
    { title: '開場白', text: 'Could I get a', color: 'bg-amber-100 border-amber-300', textColor: 'text-amber-700' },
    { title: '容量', text: '[medium]', color: 'bg-orange-100 border-orange-300', textColor: 'text-orange-700' },
    { title: '溫度', text: '[iced]', color: 'bg-blue-100 border-blue-300', textColor: 'text-blue-700' },
    { title: '飲品', text: '[latte]', color: 'bg-yellow-100 border-yellow-300', textColor: 'text-yellow-700' },
    { title: '客製化', text: '[with oat milk...]', color: 'bg-emerald-100 border-emerald-300', textColor: 'text-emerald-700' },
  ]
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-5 gap-1.5 md:gap-3 text-center my-3">
        {blocks.map((b, i) => (
          <div key={i} className={`${b.color} border p-2 rounded-xl`}>
            <span className={`block text-[10px] font-bold ${b.textColor}`}>{b.title}</span>
            <p className="text-[11px] md:text-xs font-semibold">{b.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/80 p-4 rounded-2xl border border-amber-900/10 text-center shadow-inner">
        <p className="text-xs text-amber-700 font-bold mb-1">💡 實戰金句示範</p>
        <p className="text-sm md:text-base font-bold text-[#3c4a3e] italic">
          "Could I get a <span className="text-orange-600">medium</span> <span className="text-blue-600">iced</span> <span className="text-amber-600">latte</span> with <span className="text-emerald-700">oat milk and no sugar</span>?"
        </p>
      </div>
    </div>
  )
}

function Slide4Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
        <div className="bg-white/60 p-3 rounded-2xl border border-[#3c4a3e]/20 text-center">
          <span className="text-xs font-bold text-blue-700"><Snowflake className="h-3 w-3 inline mr-1" />冰量 (Ice)</span>
          <div className="mt-2 space-y-1.5 text-left text-xs">
            {['正常冰 Regular Ice', '少冰 Light Ice', '微冰 Less Ice', '去冰 No ice at all'].map((s, i) => (
              <div key={i} className={`flex justify-between hover:bg-amber-100 p-1 rounded transition ${i === 3 ? 'text-red-700 font-bold' : ''}`}>
                <span>{s.split(' ')[0]}</span><span className="font-mono text-gray-500">{s.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/60 p-3 rounded-2xl border border-[#3c4a3e]/20 text-center">
          <span className="text-xs font-bold text-amber-600"><Sparkles className="h-3 w-3 inline mr-1" />甜度 (Sweetness)</span>
          <div className="mt-2 space-y-1.5 text-left text-xs">
            {['無糖 (0%) No sugar added', '微糖 Less sweet', '半糖 (50%) Half sweet', '正常糖 (100%) Regular sweet'].map((s, i) => (
              <div key={i} className={`flex justify-between hover:bg-amber-100 p-1 rounded transition ${i === 0 ? 'text-red-700 font-bold' : ''}`}>
                <span>{s.split(' ')[0]}</span><span className="font-mono text-gray-500">{s.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/60 p-3 rounded-2xl border border-[#3c4a3e]/20 text-center">
          <span className="text-xs font-bold text-purple-700"><Flame className="h-3 w-3 inline mr-1" />加料加價 (Extra)</span>
          <div className="mt-2 space-y-1.5 text-left text-xs">
            {['低咖啡因 Decaf', '加一份濃縮 Extra shot', '特別熱 Extra hot', '不加鮮奶油 No whipped cream'].map((s, i) => (
              <div key={i} className="flex justify-between hover:bg-amber-100 p-1 rounded transition">
                <span>{s.split(' ')[0]}</span><span className="font-mono text-gray-500">{s.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yellow-500/10 p-2 rounded-xl text-xs text-center border border-yellow-500/20 italic">
        💡 不確定多甜時可以問：<span className="font-bold">&quot;Is it usually very sweet?&quot;</span> | <span className="font-bold">&quot;Can you make it less sweet?&quot;</span>
      </div>
    </div>
  )
}

function Slide5Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-3">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="relative flex justify-between items-center max-w-2xl mx-auto w-full my-4">
        <div className="absolute left-0 right-0 h-1 bg-amber-900/10 z-0" />
        {['Walk-in', 'Seating', 'Ordering', 'Dining', 'Checkout'].map((step, i) => (
          <div key={i} className="z-10 text-center flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center shadow text-xs">{i + 1}</div>
            <span className="text-[10px] font-bold mt-1">{step}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-white/55 p-3 rounded-2xl border border-[#3c4a3e]/20">
        <div className="space-y-1">
          <p className="font-bold text-emerald-700"><ChefHat className="h-3 w-3 inline mr-1" />進門與點餐 (1-3):</p>
          <p className="italic text-gray-700">&quot;Table for two, please.&quot;</p>
          <p className="italic text-gray-700">&quot;We&apos;re still looking at the menu.&quot;</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold text-emerald-700"><CreditCard className="h-3 w-3 inline mr-1" />用餐與結帳 (4-5):</p>
          <p className="italic text-gray-700">&quot;Everything is great so far, thanks.&quot;</p>
          <p className="italic text-red-700 font-semibold">&quot;Could we split the check?&quot;</p>
        </div>
      </div>
    </div>
  )
}

function Slide6Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-2xl">
          <div className="flex items-center space-x-2 text-amber-700 font-bold mb-2">
            <ThumbsUp className="h-4 w-4" /><span>尋求推薦 (Ask for Recs)</span>
          </div>
          <div className="space-y-3 text-xs">
            <div><p className="text-gray-500 font-semibold">不知從何點起時：</p><p className="font-bold text-slate-800 italic text-sm mt-0.5">&quot;What would you recommend for first-timers?&quot;</p></div>
            <div className="border-t border-[#3c4a3e]/20 pt-2"><p className="text-gray-500 font-semibold">探詢內行招牌菜：</p><p className="font-bold text-slate-800 italic text-sm mt-0.5">&quot;What&apos;s your go-to dish?&quot;</p></div>
          </div>
        </div>
        <div className="bg-emerald-800/5 border border-emerald-800/20 p-4 rounded-2xl">
          <div className="flex items-center space-x-2 text-emerald-700 font-bold mb-2">
            <MessageCircle className="h-4 w-4" /><span>確認細節 (Confirm Details)</span>
          </div>
          <div className="space-y-3 text-xs">
            <div><p className="text-gray-500 font-semibold">確認份量大小與分食：</p><p className="font-bold text-slate-800 italic text-sm mt-0.5">&quot;Is this enough to share?&quot;</p></div>
            <div className="border-t border-[#3c4a3e]/20 pt-2"><p className="text-gray-500 font-semibold">調整辣度口味：</p><p className="font-bold text-slate-800 italic text-sm mt-0.5">&quot;Can you make it not too spicy?&quot;</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide7Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-[#3c4a3e]/20 bg-white/80">
        <table className="w-full text-left text-xs">
          <thead className="bg-amber-900/10 text-amber-900 font-bold uppercase">
            <tr><th className="p-3">突發狀況 (Problem)</th><th className="p-3">優雅反應 (Polite Reaction)</th><th className="p-3">預期回覆 (Response)</th></tr>
          </thead>
          <tbody className="divide-y border-[#3c4a3e]/20">
            {[
              { prob: '狀況A: 上錯菜', react: '"Excuse me, I think this isn\'t what I ordered."', resp: '"I\'m sorry, I\'ll bring it right out."' },
              { prob: '狀況B: 漏給配餐', react: '"I think we\'re missing the fries."', resp: '"Let me grab that for you."' },
              { prob: '狀況C: 熟度不對', react: '"I asked for medium rare, it looks a bit well done."', resp: '"We can remake it for you."' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-amber-100/50">
                <td className="p-3 font-bold text-red-700">{row.prob}</td>
                <td className="p-3 italic">{row.react}</td>
                <td className="p-3 text-gray-500">{row.resp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Slide8Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="bg-emerald-900/10 p-4 rounded-3xl border border-emerald-900/15 flex flex-col items-center relative min-h-[160px] justify-center">
          <span className="absolute top-2 left-3 text-[10px] uppercase font-bold text-emerald-800">Store Layout Draft</span>
          <div className="grid grid-cols-3 gap-3 w-full text-center text-xs mt-3">
            {[
              { label: '走道 Aisles', pin: 1 },
              { label: '貨架 Shelves', pin: 2 },
              { label: '後倉庫 The Back', pin: 3 },
            ].map((p, i) => (
              <div key={i} className="bg-white/80 p-3 rounded-xl border shadow-sm relative">
                <span className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-[10px]">{p.pin}</span>
                {p.label}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-emerald-900/60 mt-4 italic"><Store className="h-3 w-3 inline mr-1" />超市內的定位是找東西的關鍵</p>
        </div>
        <div className="space-y-2.5 text-xs">
          <div className="bg-white/90 p-2.5 rounded-xl border shadow-sm">
            <p className="font-bold text-blue-700">📌 Pin 1: 走道區 (找不到東西)</p>
            <p className="italic mt-0.5 font-semibold text-slate-800">&quot;Where&apos;s the bottled water?&quot; / &quot;It&apos;s on aisle 7.&quot;</p>
          </div>
          <div className="bg-white/90 p-2.5 rounded-xl border shadow-sm">
            <p className="font-bold text-amber-600">📌 Pin 2: 貨架區 (詢問補貨)</p>
            <p className="italic mt-0.5 font-semibold text-slate-800">&quot;Do you have any more in stock?&quot;</p>
          </div>
          <div className="bg-white/90 p-2.5 rounded-xl border shadow-sm">
            <p className="font-bold text-emerald-700">📌 Pin 3: 後倉庫 (店員核對)</p>
            <p className="italic mt-0.5 font-semibold text-slate-800">&quot;Let me check the back for you.&quot;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide9Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="bg-orange-500/5 border border-orange-500/10 p-4 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3 text-xs">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-orange-500/10">
            <div className="flex items-center space-x-2 text-orange-600 font-bold mb-1"><Flame className="h-3 w-3" /><span>要求加熱</span></div>
            <p className="italic font-bold text-slate-800 text-sm">&quot;Can you heat this slice up again?&quot;</p>
            <p className="text-gray-500 mt-1">「可以再幫我加熱這片披薩嗎？」</p>
            <p className="italic font-bold text-slate-800 text-sm border-t border-[#3c4a3e]/20 mt-2 pt-2">&quot;Can I microwave this burrito here?&quot;</p>
            <p className="text-gray-500 mt-1">「我可以在這裡微波這個捲餅嗎？」</p>
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-emerald-500/10">
            <div className="flex items-center space-x-2 text-emerald-700 font-bold mb-1"><Sandwich className="h-3 w-3" /><span>確認新鮮度</span></div>
            <p className="italic font-bold text-slate-800 text-sm">&quot;Is this sandwich freshly made?&quot;</p>
            <p className="text-gray-500 mt-1">「這三明治是現烤現做的嗎？」</p>
            <p className="italic font-bold text-slate-800 text-sm border-t border-[#3c4a3e]/20 mt-2 pt-2">&quot;Is this pizza still hot right now?&quot;</p>
            <p className="text-gray-500 mt-1">「這披薩現在還是熱的嗎？」</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide10Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-3">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { icon: ShoppingCart, title: '1. 包裝 (Bags)', q: '"Do you need a bag?"', a1: '"I\'ll take a paper bag, please."', a2: '"I\'m good, I brought my own."', color: 'text-amber-700', bg: 'bg-amber-50' },
          { icon: CreditCard, title: '2. 支付 (Payment)', q: '"Card or cash?"', a1: '"Apple Pay, please."', a2: '"I\'ll pay with cash."', color: 'text-blue-700', bg: 'bg-blue-50' },
          { icon: MessageCircle, title: '3. 收據 (Receipt)', q: '"Email or printed?"', a1: '"Printed copy, please."', a2: '"Email is fine."', color: 'text-emerald-700', bg: 'bg-emerald-50' },
        ].map((col, i) => {
          const Icon = col.icon
          return (
            <div key={i} className="bg-white/80 p-3 rounded-2xl border border-[#3c4a3e]/20 text-xs">
              <span className={`font-bold ${col.color}`}><Icon className="h-3 w-3 inline mr-1" />{col.title}</span>
              <p className="text-gray-500 italic mt-1">{col.q}</p>
              <div className={`mt-2 space-y-1 ${col.bg} p-1.5 rounded-xl`}>
                <p className="font-bold">{col.a1}</p>
                <p className="font-semibold text-gray-500">{col.a2}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-2.5 text-xs flex items-center space-x-2">
        <Flame className="h-4 w-4 text-red-600 animate-pulse shrink-0" />
        <div>
          <span className="font-bold text-red-800">自助結帳機魔咒：</span>
          聽到 <span className="italic font-bold">&quot;Unexpected item...&quot;</span> 時請找店員：<span className="font-bold italic text-slate-800">&quot;Excuse me, can you help me with this?&quot;</span>
        </div>
      </div>
    </div>
  )
}

function Slide11Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-3">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="bg-purple-900/5 p-4 rounded-3xl border border-purple-900/10 relative min-h-[200px] flex items-center justify-center">
        <div className="absolute w-full h-0.5 bg-purple-900/20 top-1/2 left-0" />
        <div className="absolute h-full w-0.5 bg-purple-900/20 left-1/2 top-0" />
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-purple-700 uppercase bg-white px-2 py-0.5 rounded-full shadow-sm">偏甜 (Sweet)</span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-purple-700 uppercase bg-white px-2 py-0.5 rounded-full shadow-sm">偏乾/苦 (Dry/Bitter)</span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-purple-700 uppercase bg-white px-2 py-0.5 rounded-full shadow-sm">清爽果香 (Fruity)</span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-purple-700 uppercase bg-white px-2 py-0.5 rounded-full shadow-sm">經典濃烈 (Strong)</span>
        <div className="absolute top-8 left-14 bg-white/90 p-2 rounded-xl text-[9px] shadow-sm max-w-[100px] border border-purple-200">
          <p className="font-semibold italic">&quot;Fruity and light, please!&quot;</p>
        </div>
        <div className="absolute bottom-8 right-14 bg-white/90 p-2 rounded-xl text-[9px] shadow-sm max-w-[100px] border border-purple-200">
          <p className="font-semibold italic">&quot;Can you make it a bit lighter?&quot;</p>
        </div>
      </div>
    </div>
  )
}

function Slide12Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-purple-900/5 p-4 rounded-3xl border border-purple-900/15">
          <span className="text-xs font-bold text-purple-800"><MessageCircle className="h-3 w-3 inline mr-1" />破冰起手式 (Ice Breakers)</span>
          <div className="mt-2.5 space-y-2 text-xs">
            {['"So, do you come here often?" 「你常來這家店嗎？」', '"This place has a great vibe." 「這家店氣氛真的很棒。」'].map((s, i) => (
              <div key={i} className="bg-white p-2 rounded-xl hover:shadow-md transition">
                <p className="font-bold text-slate-800">{s.split('「')[0]}</p>
                <p className="text-gray-500">「{s.split('「')[1]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-emerald-900/5 p-4 rounded-3xl border border-emerald-900/15">
          <span className="text-xs font-bold text-emerald-800"><ThumbsUp className="h-3 w-3 inline mr-1" />熱情附和術 (Reactions)</span>
          <div className="mt-2.5 space-y-2 text-xs">
            {['"That\'s surprisingly smooth actually!" 「這喝起來意外地滑順！」', '"Oh yeah? What happened then?" 「真的嗎？那後來怎麼樣了？」'].map((s, i) => (
              <div key={i} className="bg-white p-2 rounded-xl hover:shadow-md transition">
                <p className="font-bold text-emerald-900">{s.split('「')[0]}</p>
                <p className="text-gray-500">「{s.split('「')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide13Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-3">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        <div className="bg-red-500/5 p-3 rounded-2xl border border-red-500/10 text-xs">
          <span className="font-bold text-red-700"><Frown className="h-3 w-3 inline mr-1" />生硬命令式 (Blunt)</span>
          <div className="mt-2 space-y-2">
            {['"Give me a coffee."', '"I want this changed."'].map((s, i) => (
              <p key={i} className="bg-white p-1.5 rounded-xl text-gray-600 italic">{s}</p>
            ))}
          </div>
        </div>
        <div className="bg-green-500/5 p-3 rounded-2xl border border-green-500/10 text-xs">
          <span className="font-bold text-green-700"><CheckCircle className="h-3 w-3 inline mr-1" />高EQ美式表達 (Polite)</span>
          <div className="mt-2 space-y-2">
            {['"Could I get a coffee, please?"', '"Would it be possible to change this?"'].map((s, i) => (
              <p key={i} className="bg-white p-1.5 rounded-xl text-slate-800 font-bold italic">{s}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-amber-100 p-3 rounded-2xl text-xs border border-amber-200">
        <span className="font-bold text-amber-800">💡 核心洞察：</span>
        美國人極少使用祈使句。精準善用 <span className="font-bold text-emerald-800">&quot;Could I get...&quot;</span> 與 <span className="font-bold text-emerald-800">&quot;I was wondering if...&quot;</span>，溝通質感瞬間加分。
      </div>
    </div>
  )
}

function Slide14Content({ data }: { data: typeof LESSON_2_SLIDES[0] }) {
  return (
    <div className="flex flex-col flex-1 justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#3c4a3e]">{data.title}</h2>
        <p className="text-xs text-gray-500">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-[11px] md:text-xs">
        {[
          { icon: Coffee, title: 'Cafe 咖啡廳', text: '"Could I get a [size] [drink] with [milk choice]?"', color: 'text-amber-700' },
          { icon: UtensilsCrossed, title: 'Restaurant 餐廳', text: '"We\'re still looking..." / "Could we split the check?"', color: 'text-emerald-700' },
          { icon: ShoppingCart, title: 'Store 超市/超商', text: '"Where can I find [item]?" / "Apple Pay, please."', color: 'text-blue-700' },
          { icon: Martini, title: 'Bar 酒吧/社交', text: '"What\'s your go-to drink?" / "Make it a bit lighter?"', color: 'text-purple-700' },
        ].map((card, i) => {
          const Icon = card.icon
          return (
            <div key={i} className="bg-white p-3 rounded-2xl border border-[#3c4a3e]/20">
              <span className={`font-extrabold ${card.color}`}><Icon className="h-3 w-3 inline mr-1" />{card.title}</span>
              <p className="mt-1 font-bold text-slate-800">{card.text}</p>
            </div>
          )
        })}
      </div>
      <div className="text-center text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
        📸 截圖保存，下次出國點餐直接用！
      </div>
    </div>
  )
}

function Slide15Content() {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-5 flex-1 py-4">
      <div className="w-16 h-16 rounded-full bg-emerald-800/10 text-emerald-800 flex items-center justify-center text-3xl border border-emerald-800/20">
        <CheckCircle className="h-8 w-8" />
      </div>
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#3c4a3e]">You&apos;re all set!</h2>
        <p className="text-md font-bold text-amber-600 tracking-wide">準備好自信開口了嗎！</p>
      </div>
      <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed border-t border-amber-900/10 pt-4">
        不再害怕點餐結帳，用最道地的英文，吃遍美國每一個角落。<br />
        <span className="text-xs text-gray-400 block mt-2">(Speak like a local, and enjoy every bite of your American journey.)</span>
      </p>
      <span className="text-xs font-bold text-emerald-800 bg-emerald-800/10 px-4 py-1 rounded-full uppercase tracking-widest mt-2">Bon Appétit!</span>
    </div>
  )
}
