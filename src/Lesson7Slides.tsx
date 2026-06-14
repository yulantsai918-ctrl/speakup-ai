import { MapPin, Smile, Music, Trophy, Star, Coffee, Users, Heart, Gamepad2, Map, GlassWater, RefreshCw, DoorOpen, Sparkles, Volume2 } from 'lucide-react'

function Slide({ active, children, className = '' }: { active: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute inset-0 transition-all duration-300 ${active ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-[0.97] pointer-events-none'} ${className}`}>
      <div className="flex items-center justify-center w-full h-full p-4 md:p-8">
        <div className="w-full h-full max-w-6xl flex flex-col justify-center overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Lesson7Slide({ page, active }: { page: number; active: boolean }) {
  switch (page) {
    case 1:
      return (
        <Slide active={active}>
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-2 rounded-full border border-violet-500/30 bg-violet-900/20 text-violet-300 font-semibold tracking-wider text-xs uppercase animate-bounce">
              <Star className="h-3 w-3 inline mr-1" /> MASTER THE VIBE
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">The Weekend</span>
              <br />
              <span className="text-amber-400 font-extrabold drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Playbook</span>
            </h1>
            <p className="text-gray-400 max-w-2xl font-light text-sm md:text-xl">
              掌握電影、音樂、遊戲與夜晚聚會中，最自然、不照劇本走的道地英文。
            </p>
            <div className="text-xs text-gray-500 tracking-wider">
              按鍵盤 → 或點擊下方控制列開始探險
            </div>
          </div>
        </Slide>
      )
    case 2:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-amber-400" /> Textbook English — The Trap
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">脫離教科書公式，學會真正道地的週末社交英文溫度。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { side: '課本的生硬死角', text: '"Would you like to participate in a leisure activity?"', zh: '你想要參加一個休閒活動嗎？', real: '"You down for this?"', realZh: '你加入嗎？', border: 'border-red-500' },
                { side: '課本的生硬死角', text: '"I agree with your previous statement."', zh: '我同意你之前的陳述。', real: '"Yeah, I\'ve definitely been there."', realZh: '是啊，我完全懂你的感受。', border: 'border-red-500' },
                { side: '課本的生硬死角', text: '"I am departing for my residence."', zh: '我正要前往我的住所。', real: '"I\'m about ready to call it."', realZh: '我差不多要走了。', border: 'border-red-500' },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl p-5 bg-slate-900/60 border border-slate-800 flex flex-col justify-between border-l-4 ${item.border} hover:scale-[1.02] transition-transform`}>
                  <div>
                    <span className="text-xs text-red-400 font-bold tracking-widest uppercase">{item.side}</span>
                    <p className="text-sm md:text-lg text-gray-300 mt-2 italic">{item.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.zh}</p>
                  </div>
                  <div className="border-t border-slate-800 my-3" />
                  <div>
                    <span className="text-xs text-emerald-400 font-bold tracking-widest uppercase">真實道地說法</span>
                    <p className="text-lg md:text-xl text-emerald-300 font-bold mt-1">{item.real}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.realZh}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 3:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-cyan-400" /> Testing the Waters & Making Plans
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">如何毫無壓力地約朋友出來？三部曲流程：</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { num: '01', title: '試探水溫', en: 'Testing the Waters', color: 'cyan', phrases: ['"Are you free later today?"', '"Are you doing anything after work?"'] },
                { num: '02', title: '無壓力提案', en: 'The Low-Pressure Pitch', color: 'violet', phrases: ['"Maybe we could grab a coffee..."', '"Let\'s just keep things lowkey."', '"No pressure at all by the way."'] },
                { num: '03', title: '放鬆的回應', en: 'The Chill Response', color: 'amber', phrases: ['"I don\'t really have anything planned."', '"I\'m just taking it easy today."'] },
              ].map((item, i) => {
                const colorClasses: Record<string, string> = { cyan: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30', violet: 'text-violet-500 bg-violet-500/10 border-violet-500/30', amber: 'text-amber-500 bg-amber-500/10 border-amber-500/30' }
                const numColor: Record<string, string> = { cyan: 'text-cyan-500', violet: 'text-violet-500', amber: 'text-amber-500' }
                const subColor: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', amber: 'text-amber-400' }
                return (
                  <div key={i} className={`rounded-2xl p-5 border ${colorClasses[item.color]} bg-slate-900/60 hover:scale-[1.02] transition-transform`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xl md:text-2xl font-black ${numColor[item.color]}`}>{item.num}</span>
                      <h3 className="text-sm md:text-base font-bold text-white">{item.title} <span className={`text-xs ${subColor[item.color]} block font-normal`}>{item.en}</span></h3>
                    </div>
                    <div className="space-y-2">
                      {item.phrases.map((p, j) => (
                        <div key={j} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-xs text-amber-300">{p}</div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Slide>
      )
    case 4:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-violet-400 flex items-center gap-2">
              <span className="text-violet-400 text-2xl">⚡</span> Expressing Your Commitment Level
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">當朋友提出邀約時，如何用英文得體地表達你的參與意願？</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: '意願一般 / 觀望中', en: 'Low Commitment', border: 'border-t-amber-500', textColor: 'text-amber-400', items: [{ en: '"I\'m on the fence."', zh: '我還在猶豫不決。' }, { en: '"I don\'t really want to overdo it."', zh: '我今天不想玩太瘋。' }, { en: '"I\'m not leaning either way."', zh: '我目前無特定傾向。' }] },
                { title: '開放彈性 / 都可以', en: 'Open & Flexible', border: 'border-t-cyan-500', textColor: 'text-cyan-400', items: [{ en: '"I\'m pretty open tonight."', zh: '我今晚的時間很彈性。' }, { en: '"Honestly I\'m good with whatever."', zh: '我怎樣都好。' }, { en: '"We can figure it out later."', zh: '我們待會再說。' }] },
                { title: '熱情參與 / 加一', en: 'High Enthusiasm', border: 'border-t-emerald-500', textColor: 'text-emerald-400', items: [{ en: '"Sure, I\'m down for that."', zh: '好啊，算我一份！' }, { en: '"That sounds pretty chill."', zh: '聽起來超棒。' }, { en: '"Yeah, that works for me too."', zh: '這時間對我也行。' }] },
              ].map((col, i) => (
                <div key={i} className={`rounded-2xl p-5 bg-slate-900/60 border border-slate-800 ${col.border} flex flex-col`}>
                  <h3 className={`text-base font-bold ${col.textColor} mb-3 flex justify-between items-center`}>
                    {col.title} <span className="text-xs font-normal text-gray-400">{col.en}</span>
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="bg-slate-950/40 p-2 rounded-lg">
                        <div className="font-bold text-xs md:text-sm text-gray-200">{item.en}</div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{item.zh}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 5:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-400 flex items-center gap-2">
              <Users className="h-6 w-6 text-emerald-400" /> The Arrival & The Introduction
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">到達現場與陌生人破冰，不用客套，自然切入：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-slate-900/60 border border-cyan-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-900/50 rounded-lg text-cyan-400"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-white">抵達現場</h3>
                    <span className="text-[10px] text-cyan-400 tracking-wider">THE ARRIVAL</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {['"I just got here a minute ago." 我剛到一分鐘而已。', '"I made it inside already." 我已經進到裡面了。', '"Hey, what\'s up with you?" 嘿，最近好嗎？'].map((s, i) => (
                    <div key={i} className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 text-xs md:text-sm font-bold text-gray-200">
                      {s.split('  ')[0]}
                      <span className="block text-xs text-gray-400 font-normal mt-0.5">{s.split('  ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-5 bg-slate-900/60 border border-violet-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-violet-900/50 rounded-lg text-violet-400"><Smile className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-white">破冰介紹</h3>
                    <span className="text-[10px] text-violet-400 tracking-wider">THE INTRODUCTION</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {['"I don\'t think we\'ve met before." 我想我們之前沒見過。', '"I\'m a friend of Mike\'s." 我是 Mike 的朋友。', '"How do you know people here?" 你怎麼認識這裡的人的？'].map((s, i) => (
                    <div key={i} className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 text-xs md:text-sm font-bold text-gray-200">
                      {s.split('  ')[0]}
                      <span className="block text-xs text-gray-400 font-normal mt-0.5">{s.split('  ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )
    case 6:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 flex items-center gap-2">
              <span className="text-amber-400 text-2xl">🎬</span> The Attention Span & Show Reactions
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">觀看電影與追劇時的「專注曲線」實用英語反饋：</p>
            <div className="rounded-2xl p-4 bg-slate-900/60 border border-slate-800">
              <div className="h-36 md:h-48 w-full mb-4 bg-slate-950/40 rounded-xl flex items-center justify-center text-xs text-gray-500">
                <span className="text-center">🎬 專注曲線<br/>High → Pacing Off → Background Noise</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { border: 'border-l-red-500', accent: 'text-red-400', title: '🔥 High Engagement', text: '"I didn\'t see that coming."', zh: '劇情反轉沒料到。' },
                  { border: 'border-l-amber-500', accent: 'text-amber-400', title: '⏳ Pacing Feels Off', text: '"The pacing feels kind of off."', zh: '節奏有點怪。' },
                  { border: 'border-l-gray-600', accent: 'text-gray-400', title: '🎧 Background Noise', text: '"It\'s fine as background noise."', zh: '當成背景聲音聽。' },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl p-4 border-l-4 ${item.border} bg-slate-950/40`}>
                    <span className={`text-xs font-mono tracking-wider uppercase block mb-1 ${item.accent}`}>{item.title}</span>
                    <p className="text-xs font-bold text-gray-200">{item.text}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.zh}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      )
    case 7:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-violet-400 flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-violet-400" /> Games & Sports: The Chill Match
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">打桌遊、電玩、或是球類運動時，不需在乎輸贏的輕鬆對話術：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '🛡️', title: '菜鳥保護傘', en: 'The Rookie', color: 'amber', phrases: ['"I\'ve never played this before."', '"I\'m honestly not very good at this."', '"I\'m really just here for fun."'] },
                { icon: '🎯', title: '隨性競賽家', en: 'Casual Competitor', color: 'cyan', phrases: ['"I don\'t care if I win or lose."', '"We\'re really just messing around."', '"Nothing competitive here."'] },
              ].map((col, i) => (
                <div key={i} className={`rounded-3xl p-5 border border-${col.color}-500/30 bg-gradient-to-br from-${col.color}-950/10 to-transparent bg-slate-900/60`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{col.icon}</span>
                    <div>
                      <h3 className={`text-base font-bold text-${col.color}-400`}>{col.title}</h3>
                      <p className="text-[10px] text-gray-400">({col.en})</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {col.phrases.map((p, j) => (
                      <div key={j} className="bg-black/40 p-2 rounded-xl text-xs font-bold text-gray-200">{p}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 8:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 flex items-center gap-2">
              <Map className="h-6 w-6 text-cyan-400" /> The Social Blueprint: Party Guide
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">派對社交動線：如何自然切入對話、尋求共通點並優雅退出？</p>
            <div className="rounded-3xl p-4 bg-slate-900/60 border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { num: '1', title: 'Path In', subtitle: '切入對話', color: 'amber', phrases: ['"Hey sorry can I jump in here?"', '"Sorry, I just overheard that part."'] },
                  { num: '2', title: 'The Anchor', subtitle: '尋找共通點', color: 'cyan', phrases: ['"Yeah same here, it\'s been crazy."', '"I just moved here a few months ago."'] },
                  { num: '3', title: 'Path Out', subtitle: '優雅退出', color: 'violet', phrases: ['"I\'m gonna grab a drink real quick."', '"I\'m gonna walk around for a bit."'] },
                ].map((item, i) => (
                  <div key={i} className={`rounded-2xl p-4 border border-${item.color}-500/30 bg-${item.color}-950/10`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-5 h-5 rounded-full bg-${item.color}-500 text-black flex items-center justify-center text-xs font-bold`}>{item.num}</span>
                      <h4 className={`text-xs font-bold text-${item.color}-400`}>{item.title}</h4>
                    </div>
                    <p className="text-[10px] text-gray-400 mb-3">{item.subtitle}</p>
                    <div className="space-y-2">
                      {item.phrases.map((p, j) => (
                        <div key={j} className="bg-black/50 p-2 rounded text-[11px] font-mono text-gray-200">{p}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      )
    case 9:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-violet-400 flex items-center gap-2">
              <Heart className="h-6 w-6 text-violet-400" /> The "Me Too" Upgrade Toolkit
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">換掉單調生硬的 "Me too"，學會道地的高級社交認同感：</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { emoji: '🤝', label: '共享經驗 (Shared)', color: 'border-t-emerald-400', text: '"Yeah, I\'ve definitely been there."', zh: '我完全懂你的感受。' },
                { emoji: '😮', label: '驚訝共鳴 (Disbelief)', color: 'border-t-cyan-400', text: '"No way, that actually happened?"', zh: '不會吧！真的嗎？' },
                { emoji: '😆', label: '幽默同感 (Awkward)', color: 'border-t-amber-400', text: '"That\'s hilarious, I\'ve done that too."', zh: '太好笑了，我也做過。' },
                { emoji: '💡', label: '同理理解 (Empathy)', color: 'border-t-pink-400', text: '"Oh okay, I get what you mean now."', zh: '我現在完全理解你。' },
                { emoji: '💭', label: '勾起回憶 (Trigger)', color: 'border-t-violet-400', text: '"That reminds me of something."', zh: '這讓我想起一件事。' },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-4 border-t-2 ${item.color} bg-slate-900/60 border border-slate-800 hover:-translate-y-1 transition-transform flex flex-col justify-between h-36`}>
                  <span className="text-[10px] font-bold mb-1 text-gray-400">{item.label}</span>
                  <p className="text-xs font-bold text-gray-100">{item.text}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{item.zh}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 10:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 flex items-center gap-2">
              <Music className="h-6 w-6 text-amber-400" /> Music & Atmosphere Vibes
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">如何評論聚會的氣氛與音樂？4象限雙軸交叉矩陣：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { emoji: '⚡', title: 'Loving It / High Energy', border: 'border-l-emerald-500', accent: 'text-emerald-400', phrases: ['"This place has a great vibe." 氣氛真棒', '"The music is pretty good tonight." 音樂不賴'] },
                { emoji: '💆', title: 'Lowkey / Chill', border: 'border-l-cyan-500', accent: 'text-cyan-400', phrases: ['"Yeah, it\'s a nice little hangout." 舒服去處', '"It\'s not too crowded right now." 人不多'] },
                { emoji: '💵', title: 'Mixed Feelings', border: 'border-l-amber-500', accent: 'text-amber-400', phrases: ['"Whoa, that\'s stronger than expected." 超乎預期', '"It\'s kind of expensive for what it is." 偏貴'] },
                { emoji: '🥱', title: 'Not Feeling It', border: 'border-l-red-500', accent: 'text-red-400', phrases: ['"It\'s kind of boring not gonna lie." 有點無趣', '"Things been slow for you lately?" 平淡嗎？'] },
              ].map((quad, i) => (
                <div key={i} className={`rounded-2xl p-4 border border-slate-800 border-l-4 ${quad.border} bg-slate-900/60`}>
                  <h3 className={`text-xs font-bold ${quad.accent} mb-2`}>{quad.emoji} {quad.title}</h3>
                  <div className="space-y-2">
                    {quad.phrases.map((p, j) => (
                      <div key={j} className="bg-slate-950/50 p-2 rounded text-xs">
                        <span className="text-gray-200">{p.split('  ')[0]}</span>
                        <span className="text-gray-400 block text-[10px]">{p.split('  ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 11:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-400 flex items-center gap-2">
              <GlassWater className="h-6 w-6 text-emerald-400" /> Interactive Cocktail Menu
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">在酒吧自然地點餐、客製化調整，並優雅品評手上的酒：</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { emoji: '🍻', title: '經典點法 (Ordering)', border: 'border-t-emerald-500', items: ['"Can I get a gin and tonic?" 琴通寧', '"I\'ll have the same as him." 跟他一樣'] },
                { emoji: '🍋', title: '客製微調 (Modifying)', border: 'border-t-amber-500', items: ['"Can you make it a bit lighter?" 淡一點', '"Can you make it less strong?" 不要那麼烈', '"I want something fruity instead." 果香口味'] },
                { emoji: '🍹', title: '品評鑑賞 (Reviewing)', border: 'border-t-violet-500', items: ['"That\'s surprisingly smooth actually." 出乎意料順口', '"You can taste the alcohol right away." 酒味重', '"I\'ll sip this one slowly." 慢慢小口喝'] },
              ].map((col, i) => (
                <div key={i} className={`rounded-2xl p-4 border border-slate-800 border-t-4 ${col.border} bg-slate-900/60 flex flex-col`}>
                  <h3 className="text-xs font-bold text-white mb-2">{col.emoji} {col.title}</h3>
                  <div className="space-y-2">
                    {col.items.map((item, j) => (
                      <div key={j} className="bg-slate-950/40 p-2 rounded-xl text-xs">
                        <span className="font-bold text-gray-200">{item.split('  ')[0]}</span>
                        <span className="text-gray-400 block text-[10px] mt-0.5">{item.split('  ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 12:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-violet-400 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-violet-400" /> The Communication Fixes
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">在社交場合，化解誤聽、尷尬與失誤的救場句：</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { emoji: '👂', title: '沒聽清楚 (I Misheard)', accent: 'text-cyan-400', items: ['"Sorry, I didn\'t catch what you said." 沒聽清', '"Could you say that one more time?" 再說一次'] },
                { emoji: '🤔', title: '沒搞懂意圖 (Wait, what?)', accent: 'text-amber-400', items: ['"Wait, what did you mean by that?" 那是什麼意思？', '"Sorry, just give me a moment." 等我一下'] },
                { emoji: '🤯', title: '自己失誤 (I Messed Up)', accent: 'text-pink-400', items: ['"I said the wrong name out loud." 唸錯名字', '"It was kind of awkward back then." 有點尷尬'] },
              ].map((col, i) => (
                <div key={i} className={`rounded-2xl p-5 border border-slate-800 bg-slate-900/60 hover:border-${col.accent.replace('text-', '')} transition-colors`}>
                  <h3 className={`text-xs font-bold ${col.accent} mb-2`}>{col.emoji} {col.title}</h3>
                  <div className="space-y-2">
                    {col.items.map((item, j) => (
                      <div key={j} className="bg-slate-950/60 p-2 rounded-lg text-xs">
                        <span className="font-bold text-gray-200">{item.split('  ')[0]}</span>
                        <span className="text-gray-400 block text-[10px] mt-0.5">{item.split('  ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 13:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 flex items-center gap-2">
              <DoorOpen className="h-6 w-6 text-cyan-400" /> The Perfect Departure
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">派對完美散場四部曲：從暗示疲倦到安全道別：</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { stage: 'STAGE 01', title: '暗示疲倦 (Hints)', border: 'border-t-gray-600', accent: 'text-gray-400', items: ['"I\'m kind of tired not gonna lie." 有點累了', '"I could use a short break." 需要歇會兒'] },
                { stage: 'STAGE 02', title: '下定決心 (Decision)', border: 'border-t-amber-500', accent: 'text-amber-400', items: ['"I think I\'m about ready to call it." 差不多該走了', '"Yeah, it\'s getting a bit late." 時間有點晚了'] },
                { stage: 'STAGE 03', title: '感性結尾 (Wrap-Up)', border: 'border-t-cyan-500', accent: 'text-cyan-400', items: ['"This was fun though honestly." 今天很好玩', '"Time really flew by." 時間過得真快'] },
                { stage: 'STAGE 04', title: '安全道別 (Exit)', border: 'border-t-emerald-500', accent: 'text-emerald-400', items: ['"Text me when you get home safe." 到家報平安', '"I should probably head home." 該回家了'] },
              ].map((col, i) => (
                <div key={i} className={`rounded-2xl p-4 border border-slate-800 border-t-4 ${col.border} bg-slate-900/60 flex flex-col flex-1`}>
                  <div className={`text-[9px] ${col.accent} font-bold mb-1`}>{col.stage}</div>
                  <h3 className={`text-xs font-bold text-white mb-2`}>{col.title}</h3>
                  <div className="space-y-1.5 text-[11px]">
                    {col.items.map((item, j) => (
                      <div key={j} className="bg-black/40 p-2 rounded text-xs">
                        <span className="font-bold text-gray-200">{item.split('  ')[0]}</span>
                        <span className="text-gray-400 block text-[10px]">{item.split('  ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 14:
      return (
        <Slide active={active}>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-amber-400" /> 週末社交必備字彙卡
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">4象限字彙複習：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Making Plans 聚會', color: 'border-t-cyan-500', accent: 'text-cyan-400', items: ['"I\'m pretty open tonight." 時間彈性', '"I\'m down for that." 算我一份', '"Keep things lowkey." 低調聚聚'] },
                { title: 'Movies & Media 看電影', color: 'border-t-violet-500', accent: 'text-violet-400', items: ['"I didn\'t see that coming." 沒料到', '"Fine as background noise." 白噪音', '"Pacing feels off." 節奏怪'] },
                { title: 'Games & Sports 運動/遊戲', color: 'border-t-amber-500', accent: 'text-amber-400', items: ['"I\'ve never played this before." 沒玩過', '"Just here for fun." 純粹好玩', '"Nothing competitive here." 不競爭'] },
                { title: 'Music & Vibes 音樂/酒吧', color: 'border-t-emerald-500', accent: 'text-emerald-400', items: ['"The vibe is really chill." 氛圍愜意', '"I like this playlist a lot." 喜歡歌單', '"Surprisingly smooth actually." 順口'] },
              ].map((quad, i) => (
                <div key={i} className={`rounded-2xl p-4 border border-slate-800 border-t-4 ${quad.color} bg-slate-900/60`}>
                  <h3 className={`text-xs font-extrabold ${quad.accent} tracking-wider mb-2`}>{quad.title}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {quad.items.map((item, j) => (
                      <div key={j} className="bg-slate-950/60 p-2 rounded text-xs font-bold border border-slate-800 text-left text-gray-200">
                        <span>{item.split('  ')[0]}</span>
                        <span className="text-[10px] text-gray-400 font-normal ml-2">{item.split('  ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      )
    case 15:
      return (
        <Slide active={active}>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-amber-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl md:text-5xl animate-bounce mx-auto">
              <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">
              Step Into the <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">Scene.</span>
            </h2>
            <p className="text-gray-300 max-w-3xl text-sm md:text-xl leading-relaxed">
              "You know the lines. You know the vibe.<br />Now it's time to live the weekend."
            </p>
            <span className="text-xs md:text-base text-gray-500 block">週末愉快，大膽開口說吧！</span>
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full text-white font-extrabold text-xs md:text-base shadow-lg">
                <Volume2 className="h-4 w-4" /> "We should do this again sometime."
              </div>
              <p className="text-xs text-gray-500 mt-2">我們找時間再聚聚！</p>
            </div>
          </div>
        </Slide>
      )
    default:
      return null
  }
}
