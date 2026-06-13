import { useState, useEffect, useRef, useCallback } from 'react'
import {
  ChevronLeft, ChevronRight, Mic, MicOff,
  Sparkles, List, Maximize, MessageSquare,
  HelpCircle, BookOpen, Notebook, Shirt, Home, Navigation
} from 'lucide-react'
import { LESSON_2_SLIDES, LESSON_3_SLIDES, LESSON_4_SLIDES, LESSON_5_SLIDES } from './lessonData'
import { Lesson2Slide } from './Lesson2Slides'
import { Lesson3Slide } from './Lesson3Slides'
import { Lesson4Slide } from './Lesson4Slides'
import { Lesson5Slide } from './Lesson5Slides'

const API_KEY = import.meta.env.VITE_GROQ_API_KEY || ''

const SLIDE_CONTENTS_L1: Record<number, string> = {
  1:  '標題頁。主題：破解全英文語境-美國都會生活導航指南。從日常通勤、社交破冰到突發狀況的道地應對模組。',
  2:  '都會生存英語軌道地圖。分成三條線：1.基礎生存線(Commute/通勤、Order/點餐、Checkout/結帳)解決每日剛性需求。2.深度連結線(Small Talk/寒暄、Office/職場、Hangout/聚會)維持雙向溝通自然流暢。3.危機處理線(Phone/電話客服、Clinic/醫療就診、Crisis/尷尬救急)勇敢犯錯與優雅救場。',
  3:  '英文思維的道地校準。教科書英文與街頭道地美語對抗：猶豫不決時：不要說I don\'t know，要說I\'m on the fence/I\'m still deciding right now。點餐購物：不要說I want this，要說Can I get...。嫌太貴：不說It\'s too expensive，說It\'s a little pricey。聽不懂：不說What did you say?，說Sorry, I didn\'t catch that。核心觀念：拋棄命令式直翻，改用保留空間的軟語氣(Softening Tone)。',
  4:  '城市通勤導航。公車與地鐵(Public Transit)：確認路線 Does this train go downtown? 轉乘與支付 Do I tap again when transferring? 共乘(Rideshare/Uber)：上車確認 Are you here for [Name]? 冷氣與路線 Could you turn the AC up? 通勤小寒暄：Traffic was brutal this morning.',
  5:  '模組化客製化點餐公式。公式：開場(Can I get / I\'ll go with) + 基底(a tall cappuccino / a medium iced latte) + 客製調整(with oat milk / half sweet / without onions) + 附加要求(add an extra shot / to go, please)。例如：Can I get a medium iced latte with oat milk, half sweet, and add an extra shot, to go, please.',
  6:  '結帳攻防戰。人工結帳(Cashier)店員連環問：Did you find everything you needed today? / Paper or plastic today?。你的回應：I brought my own bag / I\'ll pay with card。自助結帳機(Self-checkout)語音提示：Please scan your item / Unexpected item in the bagging area。尋求協助金句：This item is not scanning properly.',
  7:  '社交邊界感矩陣。1.週末死黨(Casual × Close Friends)：Yo, you\'re up already? 2.辦公室日常(Professional × Colleagues)：Mondays always hit me hard. 3.派對破冰(Casual × Strangers)：I don\'t think we\'ve met before. 4.初次商務(Professional × Strangers)：Nice to meet you here.',
  8:  '推進迴圈對話策略。三步驟：1.回應與展現態度(Answer) I\'m doing well, thanks for asking. 2.拋回問題延伸(Ask back) What\'s up with you today? 3.情緒價值與共鳴(React) Oh wow, that\'s actually crazy! 跳出對話(Escape Route)：I\'m going to grab a drink real quick.',
  9:  '辦公室溝通。專案進度：How\'s the presentation coming along? 釐清誤會：Could you explain the process again? 提出建議：I actually have another suggestion here. 請假：I\'d like to request next Monday off. 下班宣告：I\'m heading out for tonight.',
  10: '電話恐懼決策樹。起點：Hi, I\'m calling about... 預約(Booking)：...an appointment. Friday morning would be ideal. 更改/取消(Rescheduling)：Is it possible to push it back? 客服查件：It keeps disconnecting every few minutes. 留言語音：Please call me when you\'re available.',
  11: '醫療急診與痛覺。輕/中度 Dull ache(隱隱作痛)。變動頻率 It comes and goes。重度 sharp pain。常見症狀：It hurts when I bend / I feel a little nauseous / I twisted my ankle。領藥：I\'m here to pick up a prescription.',
  12: '尷尬時刻救生圈。1.爭取時間(Buying time)：That\'s a good question, honestly / Let me think for just a second. 2.請求重述澄清：Sorry, I didn\'t catch that / Can you say that one more time? 3.切換話題(Pivoting)：Anyway, what were you saying earlier?',
  13: '溫和且堅定的客訴。1.點出問題：I think this isn\'t what I ordered / It rang up higher than I expected. 2.提出訴求：Would it be possible to redo this? / I\'d like to request a refund. 3.緩和語氣：I\'m sorry to bother you.',
  14: '沉浸式語境底層邏輯。1.情境預期(Anticipation)：用預判取代聽力硬扛。2.掌握模組(Modularity)：將情境視為公式代入。3.勇敢救場(Recovery)：掌握爭取時間句，容許結巴與聽不懂，保持對話流動。',
  15: '結尾頁。語言不是完美的文法考試，而是你在這座城市生存、連結與探索的最佳導航工具。The City is Yours to Explore.'
}

const SLIDE_TITLES_L1 = [
  '都會生活導航起點', '都會生存英語軌道圖', '英文思維的道地校準',
  '城市通勤導航', '模組化點餐公式', '結帳攻防戰',
  '社交邊界感矩陣', '對話推進迴圈', '辦公室專業溝通',
  '克服電話恐懼', '醫療就診與痛覺', '尷尬時刻救生圈',
  '客訴應對三步驟', '沉浸式語境底層邏輯', '終點：自信與勇氣'
]

function SlidePainSlider() {
  const [val, setVal] = useState(1)
  const info = val <= 4
    ? { title: '輕/中度 (Dull Ache)', desc: '"It feels more like a dull ache." (隱隱作痛)', cls: 'border-l-emerald-500' }
    : val <= 7
    ? { title: '變動頻率 (Fluctuation)', desc: '"It comes and goes." (一陣一陣的)', cls: 'border-l-amber-500' }
    : { title: '重度痛覺 (Severe Sharp Pain)', desc: '"The pain has been constant today." (持續劇痛)', cls: 'border-l-rose-500' }
  return (
    <div className="space-y-3">
      <label className="text-xs text-slate-400 flex justify-between">
        <span>拖動滑桿模擬嚴重程度：</span>
        <span className="text-amber-400 font-bold">{val} ({val <= 4 ? '輕度' : val <= 7 ? '中度' : '重度'})</span>
      </label>
      <input type="range" min={1} max={10} value={val} onChange={e => setVal(Number(e.target.value))}
        className="w-full accent-amber-500 h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer" />
      <div className={`p-3 bg-slate-950/60 rounded-xl border border-slate-800 border-l-4 ${info.cls}`}>
        <span className="font-bold text-emerald-400 block text-xs">{info.title}</span>
        <p className="text-slate-300 font-mono text-xs mt-1">{info.desc}</p>
      </div>
    </div>
  )
}

export default function Presentation() {
  const [lessonMode, setLessonMode] = useState<'lesson1' | 'lesson2' | 'lesson3' | 'lesson4' | 'lesson5'>('lesson1')
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isListening, setIsListening] = useState(false)
  const [transcripts, setTranscripts] = useState<{ role: 'user' | 'system'; text: string }[]>([])
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const SLIDE_CONTENTS = lessonMode === 'lesson1' ? SLIDE_CONTENTS_L1
    : lessonMode === 'lesson2' ? Object.fromEntries(LESSON_2_SLIDES.map((s, i) => [i + 1, `${s.title}。${s.content}`]))
    : lessonMode === 'lesson3' ? Object.fromEntries(LESSON_3_SLIDES.map((s, i) => [i + 1, `${s.title}。${s.content}`]))
    : lessonMode === 'lesson4' ? Object.fromEntries(LESSON_4_SLIDES.map((s, i) => [i + 1, `${s.title}。${s.content}`]))
    : Object.fromEntries(LESSON_5_SLIDES.map((s, i) => [i + 1, `${s.title}。${s.content}`]))
  const SLIDE_TITLES = lessonMode === 'lesson1' ? SLIDE_TITLES_L1
    : lessonMode === 'lesson2' ? LESSON_2_SLIDES.map(s => s.title)
    : lessonMode === 'lesson3' ? LESSON_3_SLIDES.map(s => s.title)
    : lessonMode === 'lesson4' ? LESSON_4_SLIDES.map(s => s.title)
    : LESSON_5_SLIDES.map(s => s.title)
  const totalSlides = lessonMode === 'lesson1' ? 15
    : lessonMode === 'lesson2' ? LESSON_2_SLIDES.length
    : lessonMode === 'lesson3' ? LESSON_3_SLIDES.length
    : lessonMode === 'lesson4' ? LESSON_4_SLIDES.length
    : LESSON_5_SLIDES.length

  const switchLesson = (mode: 'lesson1' | 'lesson2' | 'lesson3' | 'lesson4' | 'lesson5') => {
    setLessonMode(mode)
    setCurrentSlide(1)
  }

  const recognitionRef = useRef<{ start: () => void; stop: () => void } | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement | null>(null)
  const currentSlideRef = useRef(currentSlide)
  currentSlideRef.current = currentSlide
  const isListeningRef = useRef(isListening)
  isListeningRef.current = isListening

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [transcripts])

  const speakText = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-TW'
    utterance.rate = 1.1
    window.speechSynthesis.speak(utterance)
  }, [])

  const addTranscript = useCallback((role: 'user' | 'system', text: string) => {
    setTranscripts(prev => {
      if (role === 'user') return [{ role, text }]
      const lastUser = prev.find(t => t.role === 'user')
      return lastUser ? [lastUser, { role, text }] : [{ role, text }]
    })
  }, [])

  const goSlide = useCallback((num: number) => {
    if (num < 1 || num > totalSlides) return
    setCurrentSlide(num)
  }, [totalSlides])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goSlide(currentSlide + 1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goSlide(currentSlide - 1) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentSlide, goSlide])

  const getLocalAnswer = useCallback((query: string): string | null => {
    if (lessonMode === 'lesson1') {
      const pairs: [RegExp, number, string][] = [
        [/生存線|生存/, 2, '第2頁展示了「基礎生存線」，包含通勤、點餐、結帳等剛性需求。'],
        [/點餐|拿鐵|公式/, 5, '為您導航到第5頁的「點餐公式」：Can I get a medium iced latte with oat milk, half sweet, to go, please.'],
        [/通勤|地鐵|公車|搭車/, 4, '第4頁：在美國搭大眾運輸，確認路線說 Does this train go downtown?'],
        [/危機|痛|醫療|看病/, 11, '第11頁痛覺描述：輕度 dull ache，變動 It comes and goes，劇痛 sharp pain。'],
        [/結帳|袋子|塑膠袋/, 6, '第6頁「結帳攻防戰」：店員問 Paper or plastic? 帶自己的袋子說 I brought my own bag.'],
        [/客訴|抱怨|送錯/, 13, '第13頁客訴三步驟：1.點出問題 2.提出訴求 3.緩和語氣。'],
        [/尷尬|腦袋空白|聽不懂/, 12, '第12頁「救生圈」：聽不懂說 Sorry, I didn\'t catch that。爭取時間說 Let me think for just a second.'],
        [/邊界|社交/, 7, '第7頁社交矩陣：Casual vs Professional 四象限語氣。'],
      ]
      for (const [regex, slide, reply] of pairs) {
        if (regex.test(query)) {
          goSlide(slide)
          return reply
        }
      }
    } else if (lessonMode === 'lesson2') {
      const pairs: [RegExp, number, string][] = [
        [/點餐|咖啡|飲料|拿鐵|公式/, 3, '第3頁「特調點餐方程式」：公式為 [開場] + [容量] + [溫度] + [飲品] + [客製化]。例句：Could I get a medium iced latte with oat milk?'],
        [/口味|冰量|甜度|微調|去冰|無糖/, 4, '第4頁「口味微調儀表板」：去冰說 No ice at all. 微糖說 Less sweet. 不確定甜度問 Is it usually very sweet?'],
        [/餐廳|用餐|五步驟|入座|看菜單/, 5, '第5頁「餐廳實戰五步驟」：入座說 Table for two. 看菜單說 We\'re still looking. 結帳說 Could we get the check?'],
        [/推薦|招牌|踩雷|菜單/, 6, '第6頁「點餐不踩雷」：問推薦說 What would you recommend for first-timers? 問招牌說 What\'s your go-to dish?'],
        [/上錯|漏給|客訴|熟度|抱怨/, 7, '第7頁「優雅解決問題矩陣」：上錯菜說 I think this isn\'t what I ordered. 熟度不對說 I asked for medium rare.'],
        [/超市|超商|走道|貨架|庫存/, 8, '第8頁「超市尋寶平面圖」：問位置說 Where\'s the bottled water? 問庫存說 Do you have any more in stock?'],
        [/熟食|加熱|微波|新鮮|披薩/, 9, '第9頁「熟食區生存指南」：加熱說 Can you heat this slice up? 問新鮮說 Is this sandwich freshly made?'],
        [/結帳|付款|刷卡|收據|自助/, 10, '第10頁「結帳決策樹」：要袋子說 I\'ll take a paper bag. 付款說 Apple Pay please. 自助機求救說 Can you help me with this?'],
        [/酒吧|調酒|點酒|口味|微醺/, 11, '第11頁「酒吧點酒象限圖」：偏甜問 What\'s the sweetest drink here? 清淡說 I want something fruity.'],
        [/破冰|接話|社交|聊天|附和/, 12, '第12頁「餐桌破冰術」：破冰說 So, do you come here often? 附和說 That\'s surprisingly smooth!'],
        [/禮貌|語氣|轉換|Could I get|祈使/, 13, '第13頁「禮貌語氣轉換器」：把 Give me a coffee 改為 Could I get a coffee please? 關鍵句 I was wondering if you could help me.'],
        [/金句|矩陣| cheat sheet/, 14, '第14頁「四大金句矩陣」：咖啡廳、餐廳、超市、酒吧各場景一句核心金句整理。'],
      ]
      for (const [regex, slide, reply] of pairs) {
        if (regex.test(query)) {
          goSlide(slide)
          return reply
        }
      }
    } else if (lessonMode === 'lesson5') {
      const pairs: [RegExp, number, string][] = [
        [/問路|步行|方向|迷路/, 3, '第3頁「步行問路求生圖鑑」：問距離說 Is it within walking distance? 直走說 Go straight for two blocks. 確認說 Just to make sure, left after the bank?'],
        [/地鐵|公車|月台|方向|uptown|downtown/, 4, '第4頁「破解方向迷宮」：地鐵問 Does this train go downtown? 公車問 Is this the bus to downtown? 轉乘問 Where do I transfer exactly?'],
        [/購票|進站|轉乘|票|tap|感應/, 5, '第5頁「購票轉乘黃金法則」：問票種 What kind of passes do you have? 儲值 I\'d like to reload my card. 轉乘問 Do I tap again when transferring?'],
        [/叫車|Uber|Lyft|司機|上車/, 6, '第6頁「叫車服務溝通術」：定位說 I\'m by the main entrance. 驗證說 Are you here for Lynn? 行李說 Do you mind if I use the trunk?'],
        [/臨時|停靠|下車|冷氣|路線/, 7, '第7頁「乘車突發狀況」：臨停說 Could we stop at Walgreens briefly? 下車說 Drop me here? 路線說 We missed the turn. 冷氣說 Turn the AC up?'],
        [/自駕|導航|路況|GPS|車禍|施工/, 8, '第8頁「自駕實戰」：車禍說 There\'s an accident up ahead. 施工說 This road is under construction. 導航當機說 The GPS just froze.'],
        [/加油|加油站|汽油|油錢/, 9, '第9頁「加油站生存法則」：油箱哪側說 Which side is my gas tank on? 加油機付說 Do I just pay at the pump? 加滿說 Fill it up with regular?'],
        [/停車|停車標誌|罰單|拖吊/, 10, '第10-11頁「停車解碼」：晚上停說 So evenings should be fine right? 許可證說 This street looks permit only. 拖吊說 My car is gone. Was it towed?'],
        [/支付|付款|現金|信用卡/, 12, '第12頁「支付大車拚」：感應說 You can tap your credit card. 加油機付說 Pay at the pump. 關鍵：攜帶感應信用卡解決90%交通消費。'],
        [/迷航|延誤|搭錯|錯過/, 13, '第13頁「迷航應急矩陣」：走錯路說 Am I going the right way? 搭錯車說 I almost got off early. 導航當機說 The GPS just froze.'],
        [/金句|小抄| cheat sheet/, 15, '第15頁「專屬出行小抄」：5句應急金句整理，建議截圖保存！'],
      ]
      for (const [regex, slide, reply] of pairs) {
        if (regex.test(query)) {
          goSlide(slide)
          return reply
        }
      }
    } else if (lessonMode === 'lesson4') {
      const pairs: [RegExp, number, string][] = [
        [/混亂|出門|玄關|遲到|鑰匙/, 3, '第3頁「出門前的混亂」：公寓冷說 The apartment feels freezing today. 找鑰匙說 Have you seen my apartment keys? 快遲到說 Oh crap, I\'m running late again. 狀況外說 I\'m totally out of it today.'],
        [/物流|包裹|延遲|修繕|維修|門外/, 4, '第4頁「物流延誤與修繕」：包裹延遲說 Shipping delays are seriously getting ridiculous. 等太久說 I\'ve waited all week already. 鎖在門外說 I locked myself out yesterday again.'],
        [/斷網|沒電|WiFi|網路|充電|客廳/, 5, '第5頁「數位災難」：斷網說 Trouble with my internet. It keeps disconnecting. 手機沒電說 My phone\'s about to completely die. 借充電器說 Do you happen to have a charger?'],
        [/週末|宅|耍廢|懶|出門|社交|chill/, 6, '第6頁「週末模式」：宅家說 I\'m just going to chill at home. 懶得煮說 I\'m kind of too lazy to cook. 約出門說 We could grab food or maybe coffee.'],
        [/熬夜|睡過頭|臥室|手機|滑|循環/, 7, '第7頁「熬夜惡性循環」：滑手機說 I was just watching random stuff online. 沒意識時間說 Didn\'t even realize how late it was. 睡過頭說 I slept in again today.'],
        [/解碼|文化|金句|回顧/, 8, '第8頁「解碼美式居家文化」：最道地的日常美語發生在無奈吐槽與極致放鬆之間。帶著生存指南自信生活！'],
      ]
      for (const [regex, slide, reply] of pairs) {
        if (regex.test(query)) {
          goSlide(slide)
          return reply
        }
      }
    } else {
      const pairs: [RegExp, number, string][] = [
        [/逛逛|看看|瀏覽|just browsing/, 3, '第3頁「門口逛街防線」：店員問Looking for something specific? 回I\'m just looking for now. 或Just browsing today.'],
        [/試穿|試衣|fitting/, 4, '第4頁「啟動試穿」：說Can I try this on? 問件數How many items can I take? 店員回You can take up to five.'],
        [/尺寸|太小|太大|太緊|不合身/, 5, '第5頁「尺寸診斷卡」：太小說I think this is too small. 太大了說It\'s a bit too big. 找尺寸問Do you have this in medium?'],
        [/顏色|色系|黑色|藍色|命定/, 6, '第6頁「尋找命定顏色」：問Does this come in black? 深色問Do you have darker shades?'],
        [/鏡子|連身鏡|評價|稱讚|讚美/, 7, '第7頁「鏡前社交評價」：店員說It looks really good on you. 版型不合說It\'s a little tight around the shoulders.'],
        [/猶豫|決定|難選|考慮|放手/, 8, '第8頁「購買決策內心戲」：猶豫說I\'m not sure yet. 拖延說Let me think about it. 退場說Not today, maybe later.'],
        [/退貨|退款|換貨|交換|收據|receipt/, 9, '第9頁「退換貨交涉」：確認期限說Am I within the return window? 換色說Can I switch to another color? 退款說I\'d like a refund.'],
        [/金句|語錄|隨身包|cheat sheet/, 10, '第10頁「最強語錄隨身包」：6大金句整理，截圖保存下次逛街直接用！'],
      ]
      for (const [regex, slide, reply] of pairs) {
        if (regex.test(query)) {
          goSlide(slide)
          return reply
        }
      }
    }
    return null
  }, [goSlide, lessonMode])

  const handleVoiceCommand = useCallback(async (text: string) => {
    addTranscript('user', text)
    const clean = text.replace(/[.,/#!$%^&*;:{}=\-_`~()？。，]/g, '').trim()

    if (/下一頁|下一張|往後|前進|Next/i.test(clean)) {
      if (currentSlideRef.current < totalSlides) {
        goSlide(currentSlideRef.current + 1)
        addTranscript('system', '好的，已為您切換至下一頁。')
        speakText('好的，已切換。')
      } else {
        addTranscript('system', '這已經是最後一頁了。')
        speakText('這已經是最後一頁囉。')
      }
      return
    }

    if (/上一頁|上一張|往前|後退|Prev/i.test(clean)) {
      if (currentSlideRef.current > 1) {
        goSlide(currentSlideRef.current - 1)
        addTranscript('system', '好的，已為您返回上一頁。')
        speakText('好的，已返回。')
      } else {
        addTranscript('system', '這已經是第一頁了。')
        speakText('這已經是第一頁囉。')
      }
      return
    }

    const numMap: Record<string, number> = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 十一: 11, 十二: 12, 十三: 13, 十四: 14, 十五: 15 }
    for (let i = 1; i <= totalSlides; i++) numMap[String(i)] = i

    for (const word of Object.keys(numMap)) {
      if (new RegExp(`第\\s*${word}\\s*頁`).test(clean) || new RegExp(`跳到\\s*${word}\\s*頁`).test(clean)) {
        goSlide(numMap[word])
        addTranscript('system', `已為您切換到第 ${numMap[word]} 頁。`)
        speakText(`已切換到第${numMap[word]}頁。`)
        return
      }
    }

    const fallback = getLocalAnswer(clean)
    if (fallback) {
      addTranscript('system', fallback)
      speakText(fallback)
      return
    }

    setIsAiLoading(true)
    if (!API_KEY) {
      addTranscript('system', `您當前在第 ${currentSlideRef.current} 頁。${SLIDE_CONTENTS[currentSlideRef.current]}`)
      setIsAiLoading(false)
      return
    }

    try {
      const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `你是這份簡報「破解全英文語境：美國都會生活導航指南」的智慧助手。
所有投影片內容：${JSON.stringify(SLIDE_CONTENTS)}
              使用者目前在投影片第 ${currentSlideRef.current} 頁。
請回答使用者的問題，簡潔2-3句，使用繁體中文，直接根據投影片內容回答。`
            },
            { role: 'user', content: text }
          ],
          temperature: 0.7,
          max_tokens: 256
        })
      })
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      const data = await resp.json()
      const reply = data.choices?.[0]?.message?.content || '無法取得回應'
      addTranscript('system', reply)
      speakText(reply)
    } catch {
      addTranscript('system', 'AI 連線失敗，請稍後再試。')
    }
    setIsAiLoading(false)
  }, [addTranscript, speakText, goSlide, getLocalAnswer])

  useEffect(() => {
    const SpeechRecAPI = (window as unknown as Record<string, unknown>).SpeechRecognition || (window as unknown as Record<string, unknown>).webkitSpeechRecognition
    if (SpeechRecAPI) {
      const rec = new (SpeechRecAPI as new () => EventTarget)() as EventTarget & {
        continuous: boolean; interimResults: boolean; lang: string
        start: () => void; stop: () => void
        onstart: (() => void) | null; onend: (() => void) | null
        onresult: ((event: { resultIndex: number; results: { [index: number]: { [index: number]: { transcript: string } }; length: number } }) => void) | null
      }
      rec.continuous = true
      rec.interimResults = false
      rec.lang = 'zh-TW'

      rec.onstart = () => setIsListening(true)
      rec.onend = () => { if (isListeningRef.current) rec.start() }

      rec.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.trim()
        handleVoiceCommand(transcript)
      }
      recognitionRef.current = rec
    }
  }, [isListening, handleVoiceCommand])

  const simulateVoice = (cmd: string) => handleVoiceCommand(cmd)

  const toggleListening = () => {
    if (!recognitionRef.current) {
      addTranscript('system', '您的瀏覽器不支援語音輸入，請點選指令晶片。')
      return
    }
    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      speakText('語音聆聽已開啟。')
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const progressPercent = (currentSlide / totalSlides) * 100

  return (
    <div className="flex flex-col md:flex-row w-full flex-1 min-h-0">
      {/* Left sidebar: Voice transcript */}
      <aside className="w-full md:w-72 lg:w-80 bg-slate-900 border-r border-slate-800 flex flex-col h-1/3 md:h-full shrink-0 min-h-0">
        <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-slate-950" />
            </div>
            <div>
              <h2 className="font-bold text-xs text-slate-100">GROQ VOICE</h2>
              <p className="text-[10px] text-amber-400">簡報智慧聲控助手</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            語音就緒
          </span>
        </div>

        <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-950/20 min-h-0">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 text-xs space-y-2">
            <p className="text-amber-400 font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> 您好！我是簡報智慧助手。
            </p>
            <p className="text-slate-300 text-[11px]">我能用語音控制簡報，同時解答內容：</p>
            <div className="grid grid-cols-2 gap-1.5">
              {(lessonMode === 'lesson1'
                ? ['下一頁', '上一頁', '跳到第五頁', '生存線說什麼']
                : lessonMode === 'lesson2'
                ? ['下一頁', '上一頁', '跳到第八頁', '購物英文查詢']
                : lessonMode === 'lesson3'
                ? ['下一頁', '上一頁', '跳到第三頁', '試穿英文查詢']
                : lessonMode === 'lesson4'
                ? ['下一頁', '上一頁', '跳到第五頁', '斷網怎麼說']
                : ['下一頁', '上一頁', '跳到第十頁', '叫車英文查詢']
              ).map((cmd) => (
                <button key={cmd} onClick={() => simulateVoice(cmd)}
                  className="bg-slate-900 px-2 py-1 rounded text-slate-400 font-mono text-[9px] hover:text-amber-300 transition text-left">
                  「{cmd}」
                </button>
              ))}
            </div>
          </div>
          {transcripts.slice(-2).map((t, i) => (
            <div key={i} className={`flex ${t.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] rounded-xl px-3 py-2 text-xs border ${
                t.role === 'user'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                  : 'bg-slate-800/80 text-slate-100 border-slate-700/60'
              }`}>
                <span className="block text-[9px] text-amber-400 font-bold mb-0.5">
                  {t.role === 'user' ? 'YOU' : 'GROQ AI'}
                </span>
                {t.text}
              </div>
            </div>
          ))}
          {isAiLoading && (
            <div className="flex items-center space-x-2 text-slate-400 text-xs">
              <div className="animate-spin w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full" />
              <span>AI 思考中...</span>
            </div>
          )}
          <div ref={transcriptEndRef} />
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <button onClick={toggleListening}
            className={`relative overflow-hidden w-full py-2.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all text-xs ${
              isListening
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950'
            }`}>
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            <span>{isListening ? '暫停語音聆聽' : '啟用 AI 語音聆聽'}</span>
          </button>
        </div>
      </aside>

      {/* Main slide area */}
      <main className="flex-1 bg-slate-950 flex flex-col relative h-2/3 md:h-full overflow-hidden min-h-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 z-20">
          <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
            style={{ width: `${progressPercent}%` }} />
        </div>

        {/* Lesson Switcher */}
        <div className="absolute top-2 right-4 z-10 flex space-x-1">
          <button onClick={() => switchLesson('lesson1')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1 ${
              lessonMode === 'lesson1'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/60'
            }`}>
            <BookOpen className="h-3 w-3" /> Lesson 1
          </button>
          <button onClick={() => switchLesson('lesson2')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1 ${
              lessonMode === 'lesson2'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/60'
            }`}>
            <Notebook className="h-3 w-3" /> Lesson 2
          </button>
          <button onClick={() => switchLesson('lesson3')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1 ${
              lessonMode === 'lesson3'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/60'
            }`}>
            <Shirt className="h-3 w-3" /> Lesson 3
          </button>
          <button onClick={() => switchLesson('lesson4')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1 ${
              lessonMode === 'lesson4'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/60'
            }`}>
            <Home className="h-3 w-3" /> Lesson 4
          </button>
          <button onClick={() => switchLesson('lesson5')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1 ${
              lessonMode === 'lesson5'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/60'
            }`}>
            <Navigation className="h-3 w-3" /> Lesson 5
          </button>
        </div>

        <div className="flex-1 relative overflow-hidden p-4 md:p-8">
          {lessonMode === 'lesson2' && (
            <>
              {Array.from({ length: totalSlides }, (_, i) => (
                <Lesson2Slide key={`l2-${i + 1}`} page={i + 1} active={currentSlide === i + 1} />
              ))}
            </>
          )}
          {lessonMode === 'lesson3' && (
            <>
              {Array.from({ length: totalSlides }, (_, i) => (
                <Lesson3Slide key={`l3-${i + 1}`} page={i + 1} active={currentSlide === i + 1} />
              ))}
            </>
          )}
          {lessonMode === 'lesson4' && (
            <>
              {Array.from({ length: totalSlides }, (_, i) => (
                <Lesson4Slide key={`l4-${i + 1}`} page={i + 1} active={currentSlide === i + 1} />
              ))}
            </>
          )}
          {lessonMode === 'lesson5' && (
            <>
              {Array.from({ length: totalSlides }, (_, i) => (
                <Lesson5Slide key={`l5-${i + 1}`} page={i + 1} active={currentSlide === i + 1} />
              ))}
            </>
          )}
          {lessonMode === 'lesson1' && (
          <div className="absolute inset-0 overflow-y-auto"> {/***/}
          <>
          {/* Slide 1 */}
          <Slide active={currentSlide === 1}>
            <div className="space-y-4 text-center">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wider">Page 1 • STATION 00: START</span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                破解全英文語境
              </h1>
              <p className="text-xl md:text-3xl font-light text-amber-400">美國都會生活導航指南</p>
              <div className="h-0.5 w-24 bg-gradient-to-r from-amber-500 to-transparent mx-auto" />
              <p className="text-slate-400 text-sm max-w-xl mx-auto">從日常通勤、社交破冰到突發狀況的道地應對模組，用最自然的聲線融入城市生活。</p>
            </div>
          </Slide>

          {/* Slide 2 */}
          <Slide active={currentSlide === 2}>
            <div className="space-y-4 w-full max-w-5xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 2 • SYSTEM MAP</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">都會生存英語軌道圖</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="space-y-3 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  <div className="p-3 bg-slate-950/50 rounded-xl border-l-4 border-amber-500">
                    <h3 className="font-bold text-amber-400 mb-1">■ 基礎生存線</h3>
                    <p className="text-slate-400">通勤/點餐/結帳 — 解決每日剛性需求。</p>
                  </div>
                  <div className="p-3 bg-slate-950/50 rounded-xl border-l-4 border-emerald-500">
                    <h3 className="font-bold text-emerald-400 mb-1">■ 深度連結線</h3>
                    <p className="text-slate-400">寒暄/職場/聚會 — 維持雙向溝通流暢。</p>
                  </div>
                  <div className="p-3 bg-slate-950/50 rounded-xl border-l-4 border-rose-500">
                    <h3 className="font-bold text-rose-400 mb-1">■ 危機處理線</h3>
                    <p className="text-slate-400">電話/醫療/救急 — 勇敢犯錯優雅救場。</p>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-slate-900/40 rounded-2xl border border-slate-800/80 flex items-center justify-center p-4 h-72 md:h-96">
                  <svg viewBox="0 0 800 500" className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <path d="M 50 150 Q 150 150 250 250 T 450 350 H 650" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 150 350 Q 250 350 350 250 T 550 150 H 750" fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 100 450 L 300 250 L 500 450 L 700 350" fill="none" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
                    {[
                      { x: 150, y: 150, label: '通勤', color: '#f59e0b' },
                      { x: 300, y: 250, label: '點餐', color: '#f59e0b' },
                      { x: 600, y: 350, label: '結帳', color: '#f59e0b' },
                      { x: 250, y: 350, label: '寒暄', color: '#10b981' },
                      { x: 480, y: 220, label: '職場', color: '#10b981' },
                      { x: 680, y: 150, label: '聚會', color: '#10b981' },
                      { x: 180, y: 370, label: '客服', color: '#f43f5e' },
                      { x: 500, y: 450, label: '醫療', color: '#f43f5e' },
                      { x: 650, y: 375, label: '救急', color: '#f43f5e' },
                    ].map((n, i) => (
                      <g key={i} transform={`translate(${n.x},${n.y})`} className="cursor-pointer" onClick={() => goSlide(i <= 2 ? 4 : i <= 5 ? 7 : 10)}>
                        <circle r="16" fill="#0f172a" stroke={n.color} strokeWidth="4" />
                        <circle r="8" fill={n.color} />
                        <text y={n.y < 250 ? 32 : -25} textAnchor="middle" fill={n.color} fontSize="14" fontWeight="bold">{n.label}</text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 3 */}
          <Slide active={currentSlide === 3}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 3 • PRE-TRIP CALIBRATION</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">英文思維的「道地校準」</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/60 rounded-2xl border border-rose-950/30 p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-rose-400 font-semibold text-sm"><HelpCircle className="h-4 w-4" /><span>教科書直翻</span></div>
                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    {['猶豫不決： I don\'t know', '點餐購物： I want this', '嫌太貴： It\'s too expensive', '聽不懂： What did you say?'].map((s, i) => (
                      <div key={i} className="bg-slate-950/60 p-3 rounded-lg"><span className="text-rose-400">{s.split('：')[0]}：</span>{s.split('：')[1]}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/60 rounded-2xl border border-emerald-950/30 p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm"><MessageSquare className="h-4 w-4" /><span>道地美語</span></div>
                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    {['猶豫不決： I\'m on the fence', '點餐購物： Can I get... ', '嫌太貴： It\'s a little pricey', '聽不懂： Sorry, I didn\'t catch that'].map((s, i) => (
                      <div key={i} className="bg-emerald-950/20 border border-emerald-500/10 p-3 rounded-lg"><span className="text-emerald-400">道地：</span>{s.split('：')[1]}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 4 */}
          <Slide active={currentSlide === 4}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 4 • TRANSIT & COMMUTE</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">城市通勤導航</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="font-bold text-amber-400 flex items-center gap-2">🚇 公共運輸</h3>
                  <div className="space-y-2 font-mono">
                    {['"Does this train go downtown?"', '"Do I tap again when transferring?"', '"Is this the right bus to the airport?"'].map((s, i) => (
                      <div key={i} className="bg-slate-950/50 p-3 rounded-lg border-l-2 border-slate-700">{s}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="font-bold text-emerald-400 flex items-center gap-2">🚗 共享搭乘</h3>
                  <div className="space-y-2 font-mono">
                    {['"Are you here for [Name]?"', '"Could you turn the AC up?"', <span key="3"><span className="text-amber-400">寒暄：</span>"Traffic was brutal this morning."</span>]}
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 5 */}
          <Slide active={currentSlide === 5}>
            <div className="space-y-6 w-full max-w-5xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 5 • ORDERING FORMULA</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">模組化點餐公式</h2>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { title: '1. 開場 (Ask)', items: ['Can I get...', 'I\'ll go with...', 'I\'ll take...'] },
                    { title: '2. 基底 (Base)', items: ['iced latte', 'cappuccino', 'chicken bowl'] },
                    { title: '3. 客製 (Customs)', items: ['with oat milk', 'half sweet', 'without onions'] },
                    { title: '4. 附加 (Extras)', items: ['add extra shot', 'sauce on side', 'to go, please'] },
                  ].map((col, i) => (
                    <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-amber-400 text-[10px] font-bold">{col.title}</span>
                      {col.items.map((item, j) => (
                        <div key={j} className="text-xs font-mono text-slate-300 p-1 hover:bg-slate-800 rounded cursor-default">{item}</div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl">
                  <span className="text-xs text-amber-400 font-bold">實戰金句：</span>
                  <p className="font-mono text-sm md:text-lg text-slate-100 font-bold mt-1">
                    "Can I get a medium iced latte with oat milk, half sweet, and add an extra shot, to go, please."
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 6 */}
          <Slide active={currentSlide === 6}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 6 • CHECKOUT BATTLE</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">結帳攻防戰</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="font-bold text-amber-400 flex items-center gap-2">👔 人工結帳</h3>
                  <p className="text-slate-400">店員起手式：</p>
                  <ul className="list-disc list-inside font-mono text-slate-300 space-y-1">
                    <li>"Did you find everything you needed today?"</li>
                    <li>"Paper or plastic today?"</li>
                    <li>"Will you be paying with card or cash?"</li>
                  </ul>
                  <p className="text-emerald-400 mt-2">你的回應：</p>
                  <ul className="list-disc list-inside font-mono text-emerald-300 space-y-1">
                    <li>"I brought my own bag. I'll pay with card."</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="font-bold text-emerald-400 flex items-center gap-2">🖥 自助結帳</h3>
                  <p className="text-slate-400">機台語音提示：</p>
                  <ul className="list-disc list-inside font-mono text-slate-300 space-y-1">
                    <li>"Please scan your item."</li>
                    <li>"Unexpected item in the bagging area."</li>
                  </ul>
                  <p className="text-amber-400 mt-2">尋求協助：</p>
                  <ul className="list-disc list-inside font-mono text-amber-300 space-y-1">
                    <li>"This item is not scanning properly."</li>
                    <li>"It rang up higher than I expected."</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 7 */}
          <Slide active={currentSlide === 7}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 7 • SOCIAL BOUNDARY</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">社交邊界感矩陣</h2>
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: '週末死黨', sub: 'Casual × Close', cls: 'border-amber-500/30 bg-amber-500/5', example: '"Yo, you\'re up already?"', color: 'text-amber-400' },
                    { title: '辦公室日常', sub: 'Professional × Colleagues', cls: 'border-emerald-500/30 bg-emerald-500/5', example: '"Mondays always hit me hard."', color: 'text-emerald-400' },
                    { title: '派對破冰', sub: 'Casual × Strangers', cls: 'border-indigo-500/30 bg-indigo-500/5', example: '"I don\'t think we\'ve met before."', color: 'text-indigo-400' },
                    { title: '初次商務', sub: 'Professional × Strangers', cls: 'border-rose-500/30 bg-rose-500/5', example: '"Nice to meet you here."', color: 'text-rose-400' },
                  ].map((q, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${q.cls} transition flex flex-col justify-between`}>
                      <span className={`text-xs font-bold ${q.color}`}>{q.title}</span>
                      <span className="text-[10px] text-slate-400 mb-2">{q.sub}</span>
                      <p className="font-mono text-xs text-slate-300">{q.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 8 */}
          <Slide active={currentSlide === 8}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 8 • CONVERSATION LOOP</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">對話推進迴圈</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {[
                  { step: 'Step 1', title: '回應展現態度', desc: '"I\'m doing well, thanks for asking."', color: 'text-amber-400' },
                  { step: 'Step 2', title: '拋回問題延伸', desc: '"What\'s up with you today?"', color: 'text-emerald-400' },
                  { step: 'Step 3', title: '情緒價值共鳴', desc: '"Oh wow, that\'s actually crazy!"', color: 'text-indigo-400' },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <span className={`text-xs font-bold ${s.color}`}>{s.step}</span>
                    <h3 className="font-bold text-slate-100">{s.title}</h3>
                    <p className="text-slate-400 font-mono">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-rose-950/20 border border-rose-500/20 p-3 rounded-xl text-xs flex justify-between items-center">
                <span><strong className="text-rose-400">跳出迴圈：</strong><span className="font-mono text-slate-200">"I'm going to grab a drink real quick."</span></span>
              </div>
            </div>
          </Slide>

          {/* Slide 9 */}
          <Slide active={currentSlide === 9}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 9 • OFFICE NAVIGATION</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">辦公室專業溝通</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="font-bold text-amber-400">📋 專案進度</h3>
                  <div className="space-y-2 font-mono text-slate-300">
                    {['"How\'s the presentation coming along?"', '"Could you explain the process again?"', '"I have another suggestion here."'].map((s, i) => (
                      <div key={i} className="bg-slate-950/50 p-3 rounded-lg">{s}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="font-bold text-emerald-400">🏖 請假與下班</h3>
                  <div className="space-y-2 font-mono text-slate-300">
                    {['"I\'d like to request next Monday off."', '"Would leaving early today be possible?"', '"I\'m heading out for tonight."'].map((s, i) => (
                      <div key={i} className="bg-slate-950/50 p-3 rounded-lg">{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 10 */}
          <Slide active={currentSlide === 10}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 10 • PHONE FEAR</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">克服電話恐懼</h2>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-6">
                <div className="flex justify-center">
                  <div className="bg-amber-500 text-slate-950 px-4 py-2 rounded-xl font-bold font-mono text-xs text-center">
                    起點<br />"Hi, I'm calling about..."
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: '預約', desc: '"...an appointment."', sub: 'Friday morning would be ideal.', color: 'text-indigo-400' },
                    { title: '更改/取消', desc: '"...rescheduling."', sub: 'Is it possible to push it back?', color: 'text-emerald-400' },
                    { title: '客服查件', desc: '"...my account."', sub: 'It keeps disconnecting.', color: 'text-rose-400' },
                  ].map((b, i) => (
                    <div key={i} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-center">
                      <span className={`text-[10px] font-bold ${b.color}`}>{b.title}</span>
                      <p className="font-mono text-xs text-slate-300">{b.desc}</p>
                      <p className="text-slate-400 text-[11px]">{b.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center text-xs text-slate-400 font-mono">
                  <span className="text-amber-400 font-bold">留言語音：</span>
                  "Please call me when you're available. You can reach me at [Number]."
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 11 */}
          <Slide active={currentSlide === 11}>
            <div className="space-y-6 w-full max-w-5xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 11 • PHARMACY & CLINIC</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">醫療急診救援</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                  <h3 className="font-bold text-amber-400 text-sm mb-3">痛覺等級描述</h3>
                  <SlidePainSlider />
                </div>
                <div className="lg:col-span-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 space-y-2">
                      <h4 className="font-bold text-amber-400">常見症狀描述</h4>
                      <ul className="list-disc list-inside font-mono text-slate-300 space-y-1">
                        <li>"It hurts when I bend / chew."</li>
                        <li>"I feel a little nauseous."</li>
                        <li>"I twisted my ankle."</li>
                      </ul>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 space-y-2">
                      <h4 className="font-bold text-emerald-400">藥局領藥</h4>
                      <p className="font-mono text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800 mt-1">
                        "I'm here to pick up a prescription. It's under the name [Name]."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 12 */}
          <Slide active={currentSlide === 12}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 12 • EMERGENCY COPE</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">尷尬時刻救生圈</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {[
                  { title: '1. 爭取時間', items: ['"That\'s a good question."', '"Let me think for a second."', '"I\'m not totally sure."'], color: 'text-amber-400' },
                  { title: '2. 請求重述', items: ['"Sorry, I didn\'t catch that."', '"Wait, what did you mean?"', '"Can you say that again?"'], color: 'text-emerald-400' },
                  { title: '3. 切換話題', items: ['"Anyway, what were you saying?"', '"By the way, did you see..."'], color: 'text-indigo-400' },
                ].map((p, i) => (
                  <div key={i} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <span className={`text-xs font-bold ${p.color}`}>{p.title}</span>
                    <ul className="list-disc list-inside font-mono text-slate-300 space-y-1">
                      {p.items.map((item, j) => (<li key={j} className="text-xs">{item}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Slide>

          {/* Slide 13 */}
          <Slide active={currentSlide === 13}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 13 • SERVICE RECOVERY</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">客訴應對三步驟</h2>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: '1. 點出問題', items: ['"I think this isn\'t what I ordered."', '"It rang up higher than expected."'], color: 'text-amber-400' },
                    { title: '2. 提出訴求', items: ['"Would it be possible to redo this?"', '"I\'d like to request a refund."'], color: 'text-emerald-400' },
                    { title: '3. 緩和語氣', items: ['"I\'m sorry to bother you."', '"Not at all, I understand."'], color: 'text-indigo-400' },
                  ].map((s, i) => (
                    <div key={i} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                      <span className={`text-xs font-bold ${s.color}`}>{s.title}</span>
                      <ul className="list-disc list-inside font-mono text-xs text-slate-300 space-y-1">
                        {s.items.map((item, j) => (<li key={j}>{item}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Slide>

          {/* Slide 14 */}
          <Slide active={currentSlide === 14}>
            <div className="space-y-6 w-full max-w-4xl">
              <span className="text-xs text-amber-400 font-semibold tracking-wider">Page 14 • THE ALGORITHM</span>
              <h2 className="text-2xl md:text-4xl font-extrabold">沉浸式語境的底層邏輯</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                {[
                  { icon: '📡', title: '1. 情境預期', desc: '用預判取代聽力硬扛。在結帳前已預期對方會問 Paper or plastic / Insert or tap。' },
                  { icon: '🧊', title: '2. 掌握模組', desc: '不要每次都重新造句。將點餐、寒暄、客訴視為「公式」，臨場只需抽換關鍵字。' },
                  { icon: '💊', title: '3. 勇敢救場', desc: '母語人士也會結巴。掌握填充句，允許自己犯錯，讓對話持續流動。' },
                ].map((p, i) => (
                  <div key={i} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="font-bold text-slate-100">{p.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Slide>

          {/* Slide 15 */}
          <Slide active={currentSlide === 15}>
            <div className="space-y-6 text-center">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-xs font-semibold uppercase tracking-wider">Page 15 • DESTINATION REACHED</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                The City is Yours to Explore.
              </h2>
              <div className="h-0.5 w-32 bg-gradient-to-r from-amber-500 to-transparent mx-auto" />
              <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto font-light">
                語言不是完美的文法考試，而是你在這座城市生存、連結與探索的最佳導航工具。<br />
                帶著這份地圖，勇敢開啟你的全英文沉浸體驗。
              </p>
              <div className="text-xs text-slate-500 pt-4">
                <span className="font-bold tracking-widest uppercase">SpeakUp AI Presenter</span>
                <span className="mx-2">•</span>
                <span>終端抵達：自信與勇氣</span>
              </div>
            </div>
          </Slide>
          </>
          </div>
          )}
        </div>

        {/* Nav bar */}
        <footer className="bg-slate-950 border-t border-slate-800 py-3 px-4 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2">
            <button onClick={() => goSlide(currentSlide - 1)} className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
              {String(currentSlide).padStart(2, '0')} / {totalSlides}
            </span>
            <button onClick={() => goSlide(currentSlide + 1)} className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button key={i} onClick={() => goSlide(i + 1)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i + 1 === currentSlide ? 'bg-amber-400 w-3' : 'bg-slate-700 hover:bg-slate-500'}`} />
              ))}
            </div>
            <button onClick={() => setShowMenu(!showMenu)}
              className="text-xs font-bold text-slate-400 hover:text-amber-400 transition flex items-center gap-1 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80">
              <List className="h-3 w-3" /> 大綱
            </button>
            <button onClick={toggleFullscreen} className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white">
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </footer>

        {/* Quick Menu */}
        {showMenu && (
          <div className="absolute bottom-14 right-4 w-64 bg-slate-900/95 backdrop-blur border border-slate-800 rounded-xl p-3 shadow-2xl z-30 max-h-80 overflow-y-auto">
            <span className="text-[10px] text-amber-400 font-bold tracking-wider block border-b border-slate-800 pb-1.5 mb-2 px-1">快速導覽</span>
            {SLIDE_TITLES.map((title, i) => (
              <button key={i} onClick={() => { goSlide(i + 1); setShowMenu(false) }}
                className={`w-full text-left text-xs py-1.5 px-2 rounded transition flex justify-between ${
                  i + 1 === currentSlide ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
                }`}>
                <span>Page {i + 1}. {title}</span>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function Slide({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
      active ? 'opacity-100 translate-x-0 scale-100 absolute inset-0' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute inset-0'
    }`}>
      {children}
    </div>
  )
}
