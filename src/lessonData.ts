export interface LessonSlide {
  title: string
  subtitle: string
  category: string
  content: string
  phrases: { en: string; zh: string }[]
  practice: string
}

export const LESSON_2_SLIDES: LessonSlide[] = [
  {
    title: '吃貨必備的英文生存指南',
    subtitle: '從咖啡廳、美式餐廳到超商酒吧，點餐結帳不卡關的實戰句型庫。',
    category: 'Morning Boost',
    content: `【美國生活實境: 吃貨必備的英文生存指南 (The American Foodie Survival Guide)】
• 從咖啡廳、美式餐廳到超商酒吧, 點餐結帳不卡關的實戰句型庫。
• 簡報製作: NotebookLM Studio
• 內容涵蓋四大站點: 
  1. 咖啡與手搖飲充電站 (Morning Boost)
  2. 美式餐廳實戰 (Dining Out)
  3. 超市與便利商店尋寶 (Grocery & Convenience)
  4. 微醺與社交 (Nightlife Social)`,
    phrases: [
      { en: 'The American Foodie Survival Guide', zh: '吃貨必備的英文生存指南' },
      { en: 'Could I get a medium iced latte with oat milk?', zh: '我可以要一杯中杯冰拿鐵加燕麥奶嗎？' },
    ],
    practice: '從咖啡廳、美式餐廳到超商酒吧，跟著這份指南點餐結帳不卡關！'
  },
  {
    title: '跟著這條路線，吃透美國日常',
    subtitle: '4 Stops to Master American Food Culture',
    category: 'Morning Boost',
    content: `【跟著這條路線, 吃透美國日常 (4 Stops to Master American Food Culture)】
• Stop 1: 咖啡與手搖飲充電站 (Morning Boost) - 咖啡與茶飲的特調點餐方程式。
• Stop 2: 美式餐廳實戰 (Dining Out) - 體驗美國餐廳用餐完整五步驟、尋求推薦與優雅應對問題。
• Stop 3: 超市與便利商店尋寶 (Grocery & Convenience) - 平面圖搜尋、找庫存、熟食要求加熱、結帳決策樹。
• Stop 4: 微醺與社交 (Nightlife Social) - 酒吧點酒口味象限圖與社交破冰小撇步。`,
    phrases: [
      { en: 'What would you recommend for first-timers?', zh: '第一次來，推薦什麼？' },
      { en: 'Could we split the check?', zh: '我們可以分開付嗎？' },
    ],
    practice: '說說看你今天想吃哪一站的美食？試著用英文回答。'
  },
  {
    title: '特調點餐方程式',
    subtitle: 'The Custom Drink Formula',
    category: 'Morning Boost',
    content: `【特調點餐方程式 (The Custom Drink Formula)】
• 公式架構: [開場白 Opener] + [容量 Size] + [溫度 Temp] + [飲品 Drink] + [奶類/客製化 Customization]
• 實戰例句: Could I get a medium iced latte with oat milk and no sugar?
• 拆解:
  - [開場白 Opener]: Could I get a ...
  - [容量 Size]: medium
  - [溫度 Temp]: iced
  - [飲品 Drink]: latte
  - [客製化 Customization]: with oat milk and no sugar (加燕麥奶、無糖)`,
    phrases: [
      { en: 'Could I get a medium iced latte with oat milk and no sugar?', zh: '我要一杯中杯冰拿鐵加燕麥奶、無糖。' },
      { en: 'I\'ll have a tall cappuccino with an extra shot, please.', zh: '我要一杯小杯卡布奇諾加一份濃縮。' },
      { en: 'Could I get a medium iced latte with oat milk and no sugar? 拆解：Could I get a (開場) + medium (容量) + iced (溫度) + latte (飲品) + with oat milk and no sugar (客製化)', zh: '點餐公式示範' },
    ],
    practice: '套用公式練習：Could I get a [size] [temp] [drink] with [customization]?'
  },
  {
    title: '口味微調儀表板',
    subtitle: 'Customization Dashboard',
    category: 'Morning Boost',
    content: `【口味微調儀表板 (Customization Dashboard)】
• 冰量控制 (Ice Level): Regular ice, Light ice, Less ice, No ice at all (完全去冰)
• 甜度控制 (Sweetness): No sugar added (0%), Less sweet (微糖), Half sweet (半糖), Regular sweet (100%全糖)
• 特殊開關 (Extra Switches): Decaf (低咖啡因), Extra shot (多一份濃縮), Extra hot (特別熱), No whipped cream (去鮮奶油)
• 實用問答: 
  - 「這通常會很甜嗎?」 -> Is it usually very sweet?
  - 「可以幫我做比較不甜嗎?」 -> Can you make it less sweet?`,
    phrases: [
      { en: 'Is it usually very sweet?', zh: '這通常會很甜嗎？' },
      { en: 'Can you make it less sweet?', zh: '可以幫我做比較不甜嗎？' },
      { en: 'No ice at all, please.', zh: '完全去冰，謝謝。' },
    ],
    practice: '練習用英文跟店員說：少冰、半糖、加一份濃縮。'
  },
  {
    title: '餐廳實戰五步驟',
    subtitle: 'The Restaurant Timeline',
    category: 'Dining Out',
    content: `【Dining Out - 餐廳實戰五步驟 (The Restaurant Timeline)】
• 美式餐廳用餐完整生命週期:
  1. Walk-in (進門入座): "Table for two, please." (兩位，謝謝) / "Do you have patio seating?" (有戶外座位嗎?)
  2. Seating (看菜單): "We're still looking at the menu." (我們還在看菜單)
  3. Ordering (正式點餐): "I'll have the chicken sandwich." (我要一份雞肉三明治)
  4. Dining (用餐中途): "Everything is great so far, thanks." (目前一切都很棒，謝謝)
  5. Checkout (結帳): "Could we get the check, please?" (可以幫我們拿帳單嗎?) / "Could we split the check?" (我們可以分開付嗎?)`,
    phrases: [
      { en: 'Table for two, please.', zh: '兩位，謝謝。' },
      { en: 'We\'re still looking at the menu.', zh: '我們還在看菜單。' },
      { en: 'Could we get the check, please?', zh: '可以幫我們拿帳單嗎？' },
      { en: 'Could we split the check?', zh: '我們可以分開付嗎？' },
    ],
    practice: '角色扮演：從進門到結帳，練習餐廳五步驟完整對話。'
  },
  {
    title: '點餐不踩雷：請店員推薦的藝術',
    subtitle: 'Navigating the Menu',
    category: 'Dining Out',
    content: `【點餐不踩雷: 請店員推薦的藝術 (Navigating the Menu)】
• 尋求推薦 (Ask for Recs):
  - 不知從何點起: "What would you recommend for first-timers?" (第一次來，推薦什麼?)
  - 探詢招牌菜: "What's your go-to dish?" (你最愛、常點的菜是什麼?)
• 確認細節 (Confirm Details):
  - 確認份量大小: "Is this a big portion?" / "Is it enough to share?" (份量大嗎/夠分食嗎?)
  - 調整辣度口味: "Is this dish very spicy?" / "Can you make it not too spicy?" (這會很辣嗎/能做不辣一點嗎?)`,
    phrases: [
      { en: 'What would you recommend for first-timers?', zh: '第一次來，推薦什麼？' },
      { en: 'What\'s your go-to dish here?', zh: '你最常點的菜是什麼？' },
      { en: 'Is this enough to share?', zh: '這份夠分食嗎？' },
      { en: 'Can you make it not too spicy?', zh: '可以不要做太辣嗎？' },
    ],
    practice: '跟店員問三件事：推薦菜色、份量大小、辣度調整。'
  },
  {
    title: '優雅解決問題矩陣',
    subtitle: 'Problem Resolution Diagnostic',
    category: 'Dining Out',
    content: `【優雅解決問題矩陣 (Problem Resolution Diagnostic)】
• 在美式餐廳遇到突發狀況時的優雅反應:
  - 狀況A: 上錯菜 (The Problem) -> "Excuse me, I think this isn't what I ordered." (抱歉，這好像不是我點的) -> 預期回覆: "I'm so sorry about that. I'll bring it right out."
  - 狀況B: 漏給配菜 -> "I think we're missing the fries." (我們好像漏了薯條) -> 預期回覆: "Let me grab that for you."
  - 狀況C: 熟度不對 -> "I asked for medium rare, it looks a bit well done." (我點的是三分熟，這看起來有點全熟) -> 預期回覆: "We can remake it for you. / Would it be possible to redo this?"`,
    phrases: [
      { en: 'Excuse me, I think this isn\'t what I ordered.', zh: '不好意思，這好像不是我點的。' },
      { en: 'I think we\'re missing the fries.', zh: '我們好像少了薯條。' },
      { en: 'I asked for medium rare, it looks a bit well done.', zh: '我點的是三分熟，這看起來有點全熟。' },
    ],
    practice: '角色扮演：餐點送錯了或熟度不對，練習優雅地向店員反應。'
  },
  {
    title: '超市與超商尋寶平面圖',
    subtitle: 'The Store Blueprint',
    category: 'Grocery & Convenience',
    content: `【Grocery & Convenience - 超市與便利商店尋寶 (The Store Blueprint)】
• 超市尋寶平面圖實戰對話：
  - Pin 1: 走道區 (Aisles) - 找不到東西 -> 用英文詢問: "Where's the bottled water?" (瓶裝水在哪裡?) -> 店員回覆: "It's on aisle 7." (在第七排走道)
  - Pin 2: 貨架區 (Shelves) - 找尋庫存 -> 用英文詢問: "Do you have any more in stock?" (還有庫存嗎?)
  - Pin 3: 後場門口 (The Back) - 庫存查詢 -> 店員經典回覆: "Let me check the back for you." (我去後台倉庫幫您查查看)`,
    phrases: [
      { en: 'Where\'s the bottled water?', zh: '瓶裝水在哪裡？' },
      { en: 'Do you have any more in stock?', zh: '還有庫存嗎？' },
      { en: 'Let me check the back for you.', zh: '我去後面倉庫幫你查看看。' },
    ],
    practice: '練習用英文問店員：某樣商品在哪個走道、還有沒有庫存。'
  },
  {
    title: '熟食區生存指南',
    subtitle: 'Hot Food & Deli Interactions',
    category: 'Grocery & Convenience',
    content: `【熟食區生存指南 (Hot Food & Deli Interactions)】
• 超市便利商店熟食部互動英文:
  - 要求加熱 (Heating Requests):
    1. "Can you heat this slice up again?" (可以幫我把這片披薩再加熱嗎?)
    2. "Can I microwave this burrito here?" (我可以在這裡微波這個捲餅嗎?)
  - 確認新鮮度 (Checking Freshness):
    1. "Is this sandwich freshly made?" (這三明治是現做的嗎?)
    2. "Is this pizza still hot right now?" (這片披薩現在還是熱的嗎?)`,
    phrases: [
      { en: 'Can you heat this slice up again?', zh: '可以幫我把這片再加熱嗎？' },
      { en: 'Can I microwave this burrito here?', zh: '我可以在這裡微波這個捲餅嗎？' },
      { en: 'Is this sandwich freshly made?', zh: '這三明治是現做的嗎？' },
    ],
    practice: '在超商熟食區，練習要求加熱並確認食物新鮮度。'
  },
  {
    title: '結帳分流決策樹',
    subtitle: 'The Checkout Decision Tree',
    category: 'Grocery & Convenience',
    content: `【結帳分流決策樹 (The Checkout Decision Tree)】
• 包裝 (Bags):
  - 店員問: "Do you need a bag for these?" (需要袋子裝嗎?)
  - 顧客答: "I'll take a paper/plastic bag, please." (我要紙袋/塑膠袋) 或 "I'm good, I brought my own." (不用，我自己有帶)
• 支付方式 (Payment):
  - 店員問: "Will you be paying with card or cash?" (刷卡還是付現?)
  - 顧客答: "Tap, insert, or Apple Pay." (感應、插卡或用 Apple Pay) 或 "I'll pay with cash." (我付現金)
• 收據 (Receipt):
  - 店員問: "Would you like email or printed receipt?" (收據要用 Email 還是列印?)
  - 顧客答: "Email / Printed copy, please." (請寄到信箱/列印紙本收據)
• 自助結帳機的魔咒 (Self-Checkout Trap):
  - 聽到 "Unexpected item in the bagging area" 警報時，請尋求協助: "Excuse me, can you help me with this?"`,
    phrases: [
      { en: 'I\'ll take a paper bag, please.', zh: '我要一個紙袋，謝謝。' },
      { en: 'Apple Pay, please.', zh: '我用 Apple Pay 支付。' },
      { en: 'Excuse me, can you help me with this?', zh: '不好意思，可以幫我處理這個嗎？' },
    ],
    practice: '模擬結帳：練習回答包裝、支付、收據三連問。'
  },
  {
    title: '酒吧點酒口味象限圖',
    subtitle: 'The Drink Spectrum Matrix',
    category: 'Nightlife Social',
    content: `【Nightlife Social - 酒吧點酒口味象限圖 (The Drink Spectrum Matrix)】
• 口味分類象限與點餐句型:
  1. 偏甜 (Sweet): "What's the sweetest drink here?" (這裡最甜的調酒是什麼?)
  2. 清爽果香 (Light / Fruity): "I want something fruity instead." (我想要水果風味的調酒) / "I like something light to drink." (我喜歡清淡好入口的酒)
  3. 偏乾 / 苦 (Dry / Bitter) & 經典濃烈 (Strong / Classic): "Can you make it a bit lighter?" (可以幫我調淡一點嗎?) / "I like it smooth, not strong." (我喜歡滑順、不刺激濃烈的口感)`,
    phrases: [
      { en: 'What\'s the sweetest drink here?', zh: '這裡最甜的調酒是什麼？' },
      { en: 'I want something fruity instead.', zh: '我想要水果風味的。' },
      { en: 'Can you make it a bit lighter?', zh: '可以幫我調淡一點嗎？' },
    ],
    practice: '跟調酒師說你喜歡的口味方向，讓他推薦適合的酒。'
  },
  {
    title: '餐桌上的破冰與接話術',
    subtitle: 'Table Small Talk',
    category: 'Nightlife Social',
    content: `【餐桌上的破冰與接話術 (Table Small Talk)】
• 破冰起手式 (Ice Breakers):
  1. "So, do you come here often?" (你常來這家店嗎?)
  2. "What's your go-to drink?" (你通常來都點什麼酒/飲料?)
  3. "This place has a great vibe." (這家店氣氛超級棒)
• 熱情附和術 (Reactions & Engagement):
  - 驚豔附和: "That's surprisingly smooth actually!" (這喝起來意外地非常滑順!)
  - 同感附和: "Yeah, I get what you mean there." (真的，我懂你的意思)
  - 延續話題: "Oh yeah? What happened then?" (喔是嗎？那後來發生什麼事了?)`,
    phrases: [
      { en: 'So, do you come here often?', zh: '你常來這裡嗎？' },
      { en: 'This place has a great vibe.', zh: '這家店氣氛很棒。' },
      { en: 'That\'s surprisingly smooth actually!', zh: '這喝起來意外地滑順！' },
      { en: 'Oh yeah? What happened then?', zh: '真的嗎？那後來呢？' },
    ],
    practice: '練習三種破冰句 + 三種附和句，在聚會中自然聊天。'
  },
  {
    title: '美式萬用禮貌語氣轉換器',
    subtitle: 'The Polite Modifier Engine',
    category: 'Synthesis & Conclusion',
    content: `【美式萬用禮貌語氣轉換器 (The Polite Modifier Engine)】
• 生硬的要求 (Blunt Request) -> 禮貌的美式表達 (Polite American English):
  - 生硬: "Give me a coffee." -> 轉換: "Could I get a coffee, please?"
  - 生硬: "I want this changed." -> 轉換: "Would it be possible to change this?"
  - 生硬: "I want to ask..." -> 轉換: "I was wondering if you could help me."
• 核心洞察: 美國人點餐與要求服務時，極少使用「祈使句」。只要掌握 "Could I get..." 與 "I was wondering if..." 兩大金鑰，就能瞬間提升英文溝通質感。`,
    phrases: [
      { en: 'Could I get a coffee, please?', zh: '請問我可以要一杯咖啡嗎？' },
      { en: 'Would it be possible to change this?', zh: '請問可以換這個嗎？' },
      { en: 'I was wondering if you could help me.', zh: '我想請問你是否可以幫我一個忙。' },
    ],
    practice: '把三個生硬命令句改寫成禮貌的美式表達。'
  },
  {
    title: '美食生存四大金句矩陣',
    subtitle: 'The Ultimate Foodie Cheat Sheet',
    category: 'Synthesis & Conclusion',
    content: `【美食生存四大金句矩陣 (The Ultimate Foodie Cheat Sheet)】
• 四大日常場景最核心金句整理:
  1. Cafe (咖啡廳): "Could I get a [size] [drink] with [milk choice]?"
  2. Restaurant (餐廳): "We're still looking at the menu." / "Could we split the check?"
  3. Store (超市/超商): "Where can I find [item]?" / "I'll pay with Apple Pay."
  4. Bar (酒吧/社交): "What's your go-to drink?" / "Can you make it a bit lighter?"
• 建議: 截圖保存，下次出國直接用! (Screenshot this for your next trip!)`,
    phrases: [
      { en: 'Could I get a medium latte with oat milk?', zh: '我要一杯中杯拿鐵加燕麥奶。' },
      { en: 'Where can I find bottled water?', zh: '瓶裝水在哪裡？' },
      { en: 'What\'s your go-to drink?', zh: '你通常都點什麼喝？' },
    ],
    practice: '選一個場景（Cafe / Restaurant / Store / Bar），練習說出該場景的金句。'
  },
  {
    title: 'You\'re all set! 準備好自信開口了嗎！',
    subtitle: 'Bon Appétit!',
    category: 'Synthesis & Conclusion',
    content: `【You're all set! 準備好自信開口了嗎！】
• Tagline: Bon Appétit! (祝胃口大開!)
• 總結宣誓: 不再害怕點餐結帳，用最道地的英文，吃遍美國每一個角落。 (Stop stressing over orders. Speak like a local, and enjoy every bite of your American journey.)
• 簡報圓滿結束。`,
    phrases: [
      { en: 'You\'re all set!', zh: '都準備好了！' },
      { en: 'Bon Appétit!', zh: '祝胃口大開！' },
    ],
    practice: '帶著這份指南，自信走進任何一家餐廳或咖啡廳吧！Bon Appétit!'
  },
]

export const LESSON_4_SLIDES: LessonSlide[] = [
  {
    title: '美式公寓生存指南',
    subtitle: '解鎖日常居家、週末耍廢與突發狀況的道地美語',
    category: 'Title',
    content: `【美式公寓生存指南 (American Apartment Survival Guide)】
• 解鎖日常居家、週末耍廢與突發狀況的道地美語
• 涵蓋兩大極端模式: Chaos Mode (出門混亂/物流延誤/數位災難) 與 Chill Mode (週末耍廢/熬夜惡性循環)
• 簡報製作: SpeakUp AI Presenter`,
    phrases: [
      { en: 'The apartment feels freezing today.', zh: '今天公寓裡感覺冷得要命。' },
      { en: 'Have you seen my apartment keys?', zh: '你有看到我的公寓鑰匙嗎？' },
      { en: "I'm totally out of it today.", zh: '我今天整個人狀況外。' },
      { en: "I'm just going to chill at home.", zh: '我只打算待在家放鬆。' },
    ],
    practice: '用英文說說你今天公寓裡發生了什麼事？'
  },
  {
    title: '美式居家生活的兩種極端模式',
    subtitle: 'Chaos vs Chill',
    category: 'Overview',
    content: `【美式居家生活的兩種極端模式 (Two Modes of Apartment Life)】
• 我們在美式公寓的日常，總是遊走在徹底爆發的崩潰邊緣，與極致慵懶的沙發耍廢之間。
• Chaos Mode: 出門前的混亂、物流延誤、維修人員突襲、斷網與手機沒電
• Chill Mode: 週末耍廢、躺平宅家、熬夜滑手機、睡過頭
• 核心情緒關鍵字: Frustrated (挫折) / Rushed (慌亂) / Annoyed (惱怒) vs Relaxed (放鬆) / Lazy (慵懶) / Unbothered (泰然)`,
    phrases: [
      { en: "Oh crap, I'm running late again.", zh: '糟了，我又快遲到了。' },
      { en: 'Shipping delays are seriously getting ridiculous.', zh: '物流延遲真的越來越扯了。' },
      { en: "I'd rather just stay in and chill.", zh: '我寧願待在家裡放鬆。' },
      { en: 'I locked myself out yesterday again.', zh: '我昨天又把自己鎖在門外了。' },
    ],
    practice: '你今天處於 Chaos Mode 還是 Chill Mode？用英文說說看。'
  },
  {
    title: '出門前的混亂：那些讓你遲到的早晨',
    subtitle: 'Entryway',
    category: 'Chaos',
    content: `【出門前的混亂：那些讓你遲到的早晨 (Morning Commute Chaos)】
• 處理包裹遲到、鎖在門外、路由器當機、或是鑰匙消失的早晨
• 美式公寓冬天暖氣常常運作不良或控溫怪異
• 美國許多公寓仍在使用實體金屬鑰匙，弄丟就意味著數百美元的罰金
• 在慌亂時大腦會自動屏蔽所有擺在眼前的物品
• "Oh crap" 比 "Oh my god" 更加生活化，精準表達挫折與小崩潰
• "out of it" 常用於剛睡醒、宿醉、或是沒睡好時那種靈魂抽離的狀態`,
    phrases: [
      { en: 'The apartment feels freezing today.', zh: '今天公寓裡感覺冷得要命。' },
      { en: 'Have you seen my apartment keys?', zh: '你有看到我的公寓鑰匙嗎？' },
      { en: "I can't find anything this morning.", zh: '我今天早上什麼都找不到。' },
      { en: "I'm totally out of it today.", zh: '我今天整個人狀況外。' },
    ],
    practice: '模擬早上慌亂出門的情境，用英文說出你的狀態。'
  },
  {
    title: '門外的訪客：物流延誤與突發修繕',
    subtitle: 'Outside the Door',
    category: 'Chaos',
    content: `【門外的訪客：物流延誤與突發修繕 (Package Delays & Maintenance)】
• 物流延誤、維修人員突然出現、把自己鎖在門外
• 這些都是美式公寓生活最常見的混沌情境
• 美式公寓的物業維修人員 (Maintenance Staff) 有時效率極低，有時又會在毫無提前通知的情況下直接敲門
• 美式公寓大門多為隨手關上即上鎖的「自動鎖」，全美留學生最怕的惡夢之一（開鎖通常需要 100-200 美元）
• 對物流和公寓物業管理的集體吐槽是美式社群文化的「破冰神藥」`,
    phrases: [
      { en: "Shipping delays are seriously getting ridiculous.", zh: '物流延遲真的越來越扯了。' },
      { en: "I've waited all week already.", zh: '我已經等了一整週了。' },
      { en: 'My apartment maintenance suddenly showed up.', zh: '公寓維修人員突然跑來了。' },
      { en: 'I locked myself out yesterday again.', zh: '我昨天又把自己鎖在門外了。' },
    ],
    practice: '跟朋友抱怨包裹延遲和維修人員突襲，試著用英文說。'
  },
  {
    title: '客廳裡的數位災難：斷網與沒電求生指南',
    subtitle: 'Living Room',
    category: 'Chaos',
    content: `【客廳裡的數位災難：斷網與沒電求生指南 (Digital Disasters)】
• 斷網與手機沒電，在美國高額的行動數據與漫長維修期下無疑是最高級別災難
• 遇到斷網，通常打給 Comcast/Xfinity 客服前，第一句會聽到: "Try restarting your router once." (試著重開一次你的路由器)
• "Do you happen to have a charger?" 帶有「你剛好有...嗎（沒有也沒關係）」的客氣語氣`,
    phrases: [
      { en: "Trouble with my internet. It keeps disconnecting.", zh: '我的網路有問題，它一直斷線。' },
      { en: "My phone's about to completely die.", zh: '我手機快完全沒電了。' },
      { en: "I'm seriously down to 2%.", zh: '真的只剩2%了。' },
      { en: 'Do you happen to have a charger?', zh: '你剛好有充電器嗎？' },
    ],
    practice: '斷網了！用英文跟室友說你的網路一直斷線。'
  },
  {
    title: '週末模式切換器：社交出門 vs. 懶人宅家',
    subtitle: 'Weekend Mode',
    category: 'Chill',
    content: `【週末模式切換器：社交出門 vs. 懶人宅家 (Weekend Mode)）
• 極致放鬆的週末，你選擇當個徹底躺平的 Homebody，還是出門散步喝杯咖啡？
• "Chill" 是一個用途極廣的字: 動詞 (I'm chilling)、形容詞 (He's very chill)、感嘆詞 (Chill out! 冷靜點)
• "grab" 代表快速、隨意地吃喝點什麼
• "scroll on my phone" 直譯在手機上滾動 = 滑手機
• "stay in" 代表待在屋裡、不出門`,
    phrases: [
      { en: "I'm just going to chill at home.", zh: '我只打算待在家放鬆。' },
      { en: "I'm kind of too lazy to cook.", zh: '我有點懶得煮飯。' },
      { en: "I'd rather just stay in and chill.", zh: '我寧願待在家裡放鬆。' },
      { en: 'We could grab food or maybe coffee.', zh: '我們可以去吃點東西，或是喝杯咖啡。' },
    ],
    practice: '朋友約你出門，但你只想宅在家。用英文婉拒他。'
  },
  {
    title: '無法停止的熬夜惡性循環',
    subtitle: 'Bedroom Black Hole',
    category: 'Chill',
    content: `【無法停止的熬夜惡性循環 (The Endless Sleep Cycle)）
• 手機的光亮、亂看廢片的快感、最後迎接的是早上崩潰睡過頭
• Step 1: Scroll - 滑手機看廢片 "I was just watching random stuff online."
• Step 2: Late Night - 不知不覺 "Didn't even realize how late it was."
• Step 3: Oversleep - 睡過頭 "I slept in again today. Didn't even hear my alarm."
• Step 4: Out of It - 精神渙散 "I feel kind of out of it now."
• 然後又回到 Step 1，這就是美式公寓的熬夜黑洞`,
    phrases: [
      { en: 'I was just watching random stuff online.', zh: '我剛只是在網路上亂看廢片。' },
      { en: "Didn't even realize how late it was.", zh: '甚至沒意識到時間已經這麼晚了。' },
      { en: "I slept in again today. Didn't even hear my alarm.", zh: '我又睡過頭了，根本沒聽到鬧鐘響。' },
      { en: 'I feel kind of out of it now.', zh: '我現在覺得整個人狀況外。' },
    ],
    practice: '用英文描述你昨晚熬夜到幾點、為什麼熬夜。'
  },
  {
    title: '解碼美式居家文化',
    subtitle: 'Survival Guide Decoder',
    category: 'Summary',
    content: `【解碼美式居家文化 (Survival Guide Decoder)】
• 最道地的日常美語，往往發生在面對瑣事麻煩的無奈吐槽，以及週末毫無計畫的極致放鬆之間
• 核心句型回顧: 抱怨包裹延遲、手機沒電、找鑰匙、宅在家耍廢
• 帶著這份生存指南，在美式公寓過得自在又自信！`,
    phrases: [
      { en: "Shipping delays are seriously getting ridiculous.", zh: '物流延遲真的越來越扯了。' },
      { en: "My phone's about to completely die.", zh: '我手機快完全沒電了。' },
      { en: 'Have you seen my apartment keys?', zh: '你有看到我的公寓鑰匙嗎？' },
      { en: "I'm just going to chill at home.", zh: '我只打算待在家放鬆。' },
    ],
    practice: '選一個今天學到的金句，用英文大聲說出來！'
  },
]

export const LESSON_3_SLIDES: LessonSlide[] = [
  {
    title: '沉浸式購物英文',
    subtitle: '美國服飾店實戰指南',
    category: 'Title',
    content: `【沉浸式購物英文 - 美國服飾店實戰指南】
• 從「純逛逛」到「試穿結帳」，完全掌握道地美式購物語感。
• 不只學會開口英文，更看懂消費文化中的無形社交心理！
• 本指南涵蓋4大精華站點: 門口逛街防線、試衣間尺寸色系、連身鏡猶豫決策、收銀台退換貨`,
    phrases: [
      { en: "I'm just looking for now.", zh: '我現在先自己看看。' },
      { en: "What brings you in today?", zh: '今天是什麼風把你吹來？' },
      { en: "Take your time, no rush.", zh: '慢慢逛，不用急。' },
      { en: "Just taking a look around.", zh: '只是隨意四處看看。' },
    ],
    practice: '用英文回答店員的招呼：Just browsing, thanks!'
  },
  {
    title: '美式服飾店購物地圖',
    subtitle: 'Overview Map',
    category: 'Browsing',
    content: `【美式服飾店購物地圖 (Overview Map)】
• 四大購物情境站點，一步步突破心防
• 站點1: 門口 (Browsing) - 逛街心態設定，店員迎面走來時的「無痛防守」
• 站點2: 試衣間 (Fit & Color) - 尺寸與顏色交涉，試穿限制件數、庫存色系要求
• 站點3: 連身鏡前 (Evaluation) - 評價與決策，面對店員強烈讚美與冷靜拖延戰術
• 站點4: 收銀台 (Returns) - 退換貨防禦，確認退貨期限與取得商店抵用券`,
    phrases: [
      { en: 'Can I try this on?', zh: '我可以試穿這件嗎？' },
      { en: 'How many items can I take?', zh: '我能一次拿幾件進去？' },
      { en: 'Do you have this in medium?', zh: '這個有M號的嗎？' },
      { en: 'Does this come in black?', zh: '這款有黑色的嗎？' },
    ],
    practice: '看著購物地圖，說出你對哪一站最有興趣。'
  },
  {
    title: '店員的熱情突擊 vs. 顧客的完美防守',
    subtitle: 'Browsing Defense',
    category: 'Browsing',
    content: `【店員的熱情突擊 vs. 顧客的完美防守 (Entrance)】
• 店員高壓突擊:
  - "Looking for something specific?" 你在找特定的商品嗎？
  - "What brings you in today?" 今天想逛點什麼？
• 顧客無壓邊界「Just Browsing」防線金句:
  - "I'm just looking for now." 我現在先自己看看。
  - "Not really, just browsing today." 今天只是隨便逛逛。
  - "Just taking a look around." 只是隨意四處看看。
• 店員聽完通常回: "Take your time, no rush." 慢慢逛，不用急。`,
    phrases: [
      { en: "Looking for something specific?", zh: '你在找特定的商品嗎？' },
      { en: "I'm just looking for now.", zh: '我現在先自己看看。' },
      { en: "Not really, just browsing today.", zh: '今天只是隨便逛逛。' },
      { en: "Take your time, no rush.", zh: '慢慢逛，不用急。' },
    ],
    practice: '店員走過來問 "What brings you in today?"，試著用英文回答。'
  },
  {
    title: '啟動試穿與件數規定',
    subtitle: 'Fitting Room Basics',
    category: 'Fit & Color',
    content: `【啟動試穿與件數規定 (Fitting Room Intro)】
• 步驟1: 啟動試穿 - "Can I try this on?" 我可以試穿這件嗎？
• 步驟2: 店員指引 - "Sure, fitting rooms are there." 更衣室在後面那邊。
• 步驟3: 確認件數限制 - "How many items can I take?" 我能一次拿幾件進去？
• 美式試衣間文化: 試衣區門口通常有店員管制，會計算件數並發號碼牌。
• 店員回覆: "You can take up to five." 您最多能帶五件。`,
    phrases: [
      { en: 'Can I try this on?', zh: '我可以試穿這件嗎？' },
      { en: 'How many items can I take?', zh: '我能一次拿幾件進去？' },
      { en: 'You can take up to five.', zh: '您最多能帶五件。' },
    ],
    practice: '在試衣間門口跟店員說你想要試穿，並詢問件數限制。'
  },
  {
    title: '尺寸與版型自我診斷卡',
    subtitle: 'Size & Fit Diagnostic',
    category: 'Fit & Color',
    content: `【尺寸與版型自我診斷卡 (Size & Fit Diagnostic)】
• 太小 (Too Small): "I think this is too small." / "Do you have this in medium?"
• 太大 (Too Big): "It's a bit too big." / "Do you carry a smaller size?"
• 太緊 (Too Tight): "It feels kind of tight." / 店員回: "Let me check in back."
• 核心句型: Do you have / carry this in [size]?`,
    phrases: [
      { en: "I think this is too small.", zh: '我覺得這件太小了。' },
      { en: "It's a bit too big.", zh: '這件有點太大了。' },
      { en: 'Do you have this in medium?', zh: '這個有M號的嗎？' },
      { en: 'Do you carry a smaller size?', zh: '你們有賣更小尺寸的嗎？' },
    ],
    practice: '試穿後覺得尺寸不合，用英文跟店員說要換尺寸。'
  },
  {
    title: '尋找命定顏色',
    subtitle: 'The Color Quest',
    category: 'Fit & Color',
    content: `【尋找命定顏色 (The Color Quest)】
• 最經典金句: "Does this come in black?" 這款有黑色的嗎？
• 想找深色系: "Do you have darker shades?" 有沒有更深一點的色系？
• 店員推薦: "We also have it in blue." 我們這款也還有藍色的。
• 缺貨狀態: "Just these colors right now." 目前只有架上這幾種顏色。
• 文化延伸: Shades(深淺色度)、Tones(色調)、darker/lighter shades`,
    phrases: [
      { en: 'Does this come in black?', zh: '這款有黑色的嗎？' },
      { en: 'Do you have darker shades?', zh: '有沒有更深一點的色系？' },
      { en: 'We also have it in blue.', zh: '我們這款也還有藍色的。' },
      { en: 'Just these colors right now.', zh: '目前只有架上這幾種顏色。' },
    ],
    practice: '用英文問店員某件衣服有沒有黑色的。'
  },
  {
    title: '鏡前的社交評價',
    subtitle: 'The Mirror Moment',
    category: 'Evaluation',
    content: `【鏡前的社交評價 (The Mirror Moment)】
• 店員讚美: "It actually looks really good on you." 這件穿在您身上非常好看！
• 版型不合: "It's a little tight around the shoulders." 肩膀有點緊。
• 版型取捨: "True, but that fits better." 另一件版型更合身。
• 預算權衡: "This one is cheaper though." 這件稍微便宜一些。
• 色系取勝: "The blue one looks better." 藍色那套更好看。`,
    phrases: [
      { en: "It actually looks really good on you.", zh: '這件穿在您身上真的非常好看！' },
      { en: "It's a little tight around the shoulders.", zh: '肩膀這部分稍微有點緊。' },
      { en: 'This one is cheaper though.', zh: '不過這件稍微便宜一些。' },
      { en: 'The blue one looks better.', zh: '藍色的那套看起來更好看。' },
    ],
    practice: '站在鏡子前，用英文說出你對試穿衣服的看法。'
  },
  {
    title: '購買決策內心戲',
    subtitle: 'The Hesitation Decision Tree',
    category: 'Evaluation',
    content: `【購買決策內心戲 (The Hesitation Decision Tree)】
• 大腦混亂中: "I'm not sure yet." / "I can't decide between these." / "It's kind of a tough call."
• 冷靜拖延: "Let me think about it." / "I might come back later." / "I need a little more time."
• 決定放手: 店員問 "Are you ready to check out?" -> 回 "Not today, maybe later."
• 優雅退場金句: "I need a little more time to decide."`,
    phrases: [
      { en: "I'm not sure yet.", zh: '我現在還不是很確定。' },
      { en: "It's kind of a tough call.", zh: '這真的好難決定。' },
      { en: "I need a little more time.", zh: '我可能需要多一點時間。' },
      { en: "Not today, maybe later.", zh: '今天先不用囉，下次再看看。' },
    ],
    practice: '猶豫不決時用英文說出你還在考慮。'
  },
  {
    title: '最後防線：退換貨交涉',
    subtitle: 'Returns & Exchanges',
    category: 'Returns',
    content: `【最後防線：退換貨交涉 (Returns & Exchanges)】
• 提出問題: "I think I got the wrong size. It's a bit too small."
• 確認期限: "Am I within the return window?" 我還在退換貨時間窗口內嗎？
• 提出交換: "Can I switch to another color?" 我可以換成別的顏色嗎？
• 要求退款: "If not, I'd like a refund." 如果沒法換，我想退款。
• 關鍵字: Receipt(收據)、Return Window(退換貨期限)、Store Credit(商店抵用券)`,
    phrases: [
      { en: "I think I got the wrong size.", zh: '我好像拿錯尺寸了。' },
      { en: 'Am I within the return window?', zh: '我還在退換貨時間窗口內嗎？' },
      { en: 'Can I switch to another color?', zh: '我可以換成別的顏色嗎？' },
      { en: "If not, I'd like a refund.", zh: '如果沒法換，我想退款。' },
    ],
    practice: '模擬退貨：說出尺寸不合，並詢問退貨期限。'
  },
  {
    title: '美國服飾店最強語錄隨身包',
    subtitle: 'Ultimate Cheat Sheet',
    category: 'Review',
    content: `【美國服飾店最強語錄隨身包 (Ultimate Cheat Sheet)】
• 逛街防護罩: "Just browsing today." 今天只是隨意逛逛。
• 找尺寸神句: "Does this come in a medium?" 這套有M號的嗎？
• 找顏色神句: "Does this come in black?" 這款有黑色的嗎？
• 選擇困難症: "It's kind of a tough call." 這真的好難決定。
• 優雅退場法: "I need a little more time to decide." 我需要多一點時間考慮。
• 退換貨窗檻: "Am I within the return window?" 我還在退換貨時間內嗎？`,
    phrases: [
      { en: 'Just browsing today.', zh: '今天只是隨意逛逛。' },
      { en: 'Does this come in a medium?', zh: '這套有M號的嗎？' },
      { en: 'Does this come in black?', zh: '這款有黑色的嗎？' },
      { en: 'Am I within the return window?', zh: '我還在退換貨時間內嗎？' },
    ],
    practice: '截圖保存這份清單，下次逛街直接套用！'
  },
  {
    title: "Go with your gut feeling.",
    subtitle: '直覺消費，自信對話',
    category: 'Epilogue',
    content: `【Go with your gut feeling. 直覺消費，自信對話】
• 購物不只是金錢交換，更是與店家建立短暫友好社交的動態過程。
• 拿捏好專屬「地道語料庫」，在服飾店逛得優雅又毫無溝通壓力！
• 總結: 不再害怕購物英文，用最道地的表達，自信走進每一間店。`,
    phrases: [
      { en: "Go with your gut feeling.", zh: '相信你的直覺。' },
      { en: 'You\'re all set!', zh: '都準備好了！' },
    ],
    practice: '帶著這份購物指南，自信走進任何一家服飾店吧！'
  },
]

export const LESSON_6_SLIDES: LessonSlide[] = [
  {
    title: 'American Campus Survival Guide',
    subtitle: '留學生必備的真實情境對話',
    category: 'Campus Guide',
    content: `【留學生校園生存指南 (American Campus Survival Guide)】
• 美式校園指南：從教室、小組報告到日常校園對話的真實情境。
• 簡報製作: NotebookLM Studio
• 內容涵蓋: 校園藍圖、美英俚語、禮貌光譜、早自習、教師潛台詞、小組專案、隨堂考、午餐對話、危機處理、放學道別、校園生存金句`,
    phrases: [
      { en: 'American Campus Survival Guide', zh: '留學生校園生存指南' },
      { en: 'A visual guide to navigating classrooms, group projects, and everyday campus conversations.', zh: '教室、小組報告和日常校園對話的視覺化指南。' },
    ],
    practice: '從校園藍圖到生存金句，跟著這份指南在校園暢行無阻！'
  },
  {
    title: 'CAMPUS BLUEPRINT (校園藍圖)',
    subtitle: 'Key Locations & Vocabulary',
    category: 'Campus Guide',
    content: `【校園藍圖 (Campus Blueprint)】
• 六個關鍵校園地點與詞彙:
  1. Principal's Office (校長室) - Where the person in charge works.
  2. Hallway (走廊) - Where lockers are located and between-class chats happen.
  3. Cafeteria (學生餐廳) - The main hub for lunch and small talk.
  4. Restroom (洗手間) - 美國專用: Uniquely American term for bathroom.
  5. Auditorium (禮堂) - Used for school-wide assemblies and performances.
  6. Gym (體育館) - For physical exercise and pep rallies.`,
    phrases: [
      { en: "Principal's Office", zh: '校長室' },
      { en: 'Hallway', zh: '走廊' },
      { en: 'Cafeteria', zh: '學生餐廳' },
      { en: 'Restroom', zh: '洗手間（美式用語）' },
    ],
    practice: '說出校園六個關鍵地點的英文名稱。'
  },
  {
    title: 'US vs. UK Campus Lingo',
    subtitle: '美式 vs 英式校園用語差別',
    category: 'Campus Guide',
    content: `【US vs. UK Campus Lingo (美式 vs 英式校園用語)】
• 下課/休息: US=Recess vs UK=Break
• 洗手間: US=Restroom vs UK=Washroom/Loo
• 年級: US=Grade (e.g., 9th grade) vs UK=Class/Year
• 數學: US=Math vs UK=Maths
• 作業本: US=Workbook vs UK=Exercise book
• 電梯: US=Elevator vs UK=Lift`,
    phrases: [
      { en: 'Recess (US) vs Break (UK)', zh: '下課/休息' },
      { en: 'Restroom (US) vs Washroom (UK)', zh: '洗手間' },
      { en: 'Grade (US) vs Year (UK)', zh: '年級' },
      { en: 'Math (US) vs Maths (UK)', zh: '數學' },
    ],
    practice: '說出三個美式校園用語及其對應的英式用語。'
  },
  {
    title: 'THE POLITENESS SPECTRUM (禮貌光譜)',
    subtitle: 'Can vs Could vs May',
    category: 'Campus Guide',
    content: `【禮貌光譜 (The Politeness Spectrum)】
• Casual/同儕: "Can I borrow a pencil?" (我可以借一支鉛筆嗎？) - 用於非正式請求與表達能力
• Polite/禮貌: "Could you explain this, please?" (可以請您解釋一下這個嗎？) - 比 Can 更柔和、尊重
• Formal/正式許可: "May I go to the restroom?" (我可以去洗手間嗎？) - 極度正式，用於向掌權者尋求許可
• 魔法咒語: 在 Could 或 May 的句子結尾加上 "please"，是美式禮貌的黃金法則！`,
    phrases: [
      { en: 'Can I borrow a pencil?', zh: '我可以借一支鉛筆嗎？' },
      { en: 'Could you explain this, please?', zh: '可以請您解釋一下這個嗎？' },
      { en: 'May I go to the restroom?', zh: '我可以去洗手間嗎？' },
    ],
    practice: '練習三種禮貌層級的提問：Can / Could / May。'
  },
  {
    title: 'Morning Homeroom: Navigating the Classroom',
    subtitle: '早自習與課堂情境',
    category: 'Classroom',
    content: `【早自習與課堂情境 (Morning Homeroom)】
• Section 1: Entering Late (遲到進教室) - "Excuse me, may I come in?" / "I'm sorry I'm late. I missed my bus."
• Section 2: Roll Call (點名) - 老師: "It's time for roll call. Say 'here' when I say your name." / 學生: "Here!"
• Section 3: Greetings (早安問候) - 老師: "Good morning, how are you today?" / 學生: "I'm doing well, thank you. And you?"`,
    phrases: [
      { en: 'Excuse me, may I come in?', zh: '不好意思，我可以進來嗎？' },
      { en: "I'm sorry I'm late. I missed my bus.", zh: '抱歉我遲到了，我沒趕上公車。' },
      { en: "Here!", zh: '有！/ 到！' },
      { en: "I'm doing well, thank you. And you?", zh: '我很好，謝謝您。您好嗎？' },
    ],
    practice: '模擬早自習情境：遲到進教室、點名回應、早安問候。'
  },
  {
    title: 'Decoding Teacher Speak (聽懂老師的潛台詞)',
    subtitle: '老師表面說的話 vs 真實含意',
    category: 'Classroom',
    content: `【聽懂老師的潛台詞 (Decoding Teacher Speak)】
• "Pay attention!" → REAL MEANING: Listen carefully, this will be on the test! (專心聽講！這題一定會考！)
• "Turn in your homework." → REAL MEANING: Hand your assignments to the front. (把作業往前傳交上來。)
• "Stop talking in class." → REAL MEANING: Quiet down immediately. (安靜！上課別說話。)
• "Pack your things away." → REAL MEANING: The lesson is over, clear your desks. (下課了，把桌面東西收好。)
• "Can someone come to the board and solve this?" → REAL MEANING: Looking for a brave volunteer. (有人能當個勇者上台解這道題嗎？)`,
    phrases: [
      { en: 'Pay attention!', zh: '專心聽講（這題一定會考！）' },
      { en: 'Turn in your homework.', zh: '把作業往前傳交上來。' },
      { en: 'Pack your things away.', zh: '下課了，把東西收好。' },
      { en: 'Can someone come to the board and solve this?', zh: '有人能上台解這道題嗎？' },
    ],
    practice: '老師說 "Pay attention!"，你知道真正的意思是什麼嗎？'
  },
  {
    title: 'Polite Interruptions: Using Could & May',
    subtitle: '如何禮貌地打斷老師提問',
    category: 'Classroom',
    content: `【禮貌插話 (Polite Interruptions)】
• Asking for Clarification (提問與確認):
  - "Excuse me, could you repeat that last point, please?" (可以請您重複最後一點嗎？)
  - "I didn't quite catch that. Can you say it again?" (我剛沒聽清楚，可以再說一次嗎？)
• Bathroom Breaks (去洗手間):
  - 學生: "Excuse me, could I go to the bathroom, please?" (請問我可以去洗手間嗎？)
  - 老師: "Yes, of course. Just don't take too long."
  - 返回: "Excuse me, I'm back." (極佳習慣)`,
    phrases: [
      { en: 'Excuse me, could you repeat that last point, please?', zh: '可以請您重複最後一點嗎？' },
      { en: "I didn't quite catch that. Can you say it again?", zh: '我剛沒聽清楚，可以再說一次嗎？' },
      { en: 'Excuse me, could I go to the bathroom, please?', zh: '請問我可以去洗手間嗎？' },
    ],
    practice: '練習用英文禮貌地打斷老師提問或請求去洗手間。'
  },
  {
    title: 'The Assignment Lifecycle (作業的生命週期)',
    subtitle: '從大綱到出作業到截止日',
    category: 'Classroom',
    content: `【作業的生命週期 (The Assignment Lifecycle)】
• Step 1: The Syllabus (課程大綱) - Your course map. 規劃你學期進度的一張地圖。
  - "I should check the syllabus later and catch up." (我晚點應該看一下課程大綱補上進度。)
• Step 2: The Assignment (出作業) - The task given by the teacher. 老師指派的具體課業任務。
  - "What's the homework assignment for today?" (今天的作業是什麼？)
• Step 3: The Due Date (截止日期) - When it must be finished. 最重要的關鍵字：死線。
  - "Do you remember when the science project is due?" (你記得科學報告什麼時候交嗎？)`,
    phrases: [
      { en: "I should check the syllabus later and catch up.", zh: '我晚點應該看一下課程大綱補上進度。' },
      { en: "What's the homework assignment for today?", zh: '今天的作業是什麼？' },
      { en: 'Do you remember when the science project is due?', zh: '你記得科學報告什麼時候交嗎？' },
    ],
    practice: '練習詢問作業內容和截止日期的英文句型。'
  },
  {
    title: 'Arranging a Group Project (小組專案討論)',
    subtitle: '如何用最自然的方式邀請同學',
    category: 'Group Project',
    content: `【小組專案討論 (Arranging a Group Project)】
• Sam: "Want to work on it together after school?" (放學後要不要一起做？)
  - Pro Tip: 省略 "Do you" 顯得更自然、口語化
• Alex: "Yeah, that would be awesome. It's always faster with two people." (好啊，太棒了。兩個人做總是比較快。)
• Sam: "Why don't we meet in the library tomorrow after class?" (我們明天放學後在圖書館見如何？)
• Alex: "Sounds perfect. Library at 3:30. Don't be late." (太完美了。3:30圖書館見，別遲到。)
• Campus Pro-Tip: "Science is always better with snacks." (有零食配著讀理科總是比較好。)`,
    phrases: [
      { en: 'Want to work on it together after school?', zh: '放學後要不要一起做？' },
      { en: "Yeah, that would be awesome.", zh: '好啊，太棒了。' },
      { en: "Why don't we meet in the library tomorrow after class?", zh: '我們明天放學後在圖書館見如何？' },
      { en: "Sounds perfect. Library at 3:30. Don't be late.", zh: '太完美了。3:30圖書館見，別遲到。' },
    ],
    practice: '模擬邀請同學一起做小組報告的英文對話。'
  },
  {
    title: 'Pop Quiz Panic Meter (隨堂考恐慌量表)',
    subtitle: '不同恐慌級別下的課堂心聲',
    category: 'Group Project',
    content: `【隨堂考恐慌量表 (Pop Quiz Panic Meter)】
• Green Level (安穩狀態): "Did you finish the math homework assignment?" (你寫完數學作業了嗎？)
• Yellow Level (突發狀況警告): "Did you hear about the pop quiz in history class this morning?" (你有聽說今天早上歷史課的隨堂考嗎？)
• Red Level (完蛋崩潰): "The questions were brutal. I stared at it for 10 minutes. Let's just say I totally guessed on half of it." (題目超難。我盯著它看了十分鐘。只能說我有一半都是用猜的。)
• 單字補充: "Pop Quiz" = 沒提前通知、老師突然發下的「隨堂考/突擊測驗」。`,
    phrases: [
      { en: 'Did you hear about the pop quiz in history class?', zh: '你有聽說歷史課的隨堂考嗎？' },
      { en: 'The questions were brutal.', zh: '題目超難。' },
      { en: "I totally guessed on half of it.", zh: '我有一半都是用猜的。' },
    ],
    practice: '用英文表達你對隨堂考的恐慌程度。'
  },
  {
    title: 'Lunchtime & Small Talk Scripts (學生餐廳日常對話)',
    subtitle: '餐廳是用餐與社交破冰的最佳場合',
    category: 'Lunch & Social',
    content: `【學生餐廳日常對話 (Lunchtime & Small Talk)】
• Finding a Seat (找位置): "Hey. Is anyone sitting here?" / "No, you can sit here if you want."
• Food Talk (聊午餐): "What did you have at lunch today?" / "I brought a sandwich from home."
• Making Small Talk (閒聊破冰): "Which grade are you in?" / "How do you get to school?"`,
    phrases: [
      { en: 'Hey. Is anyone sitting here?', zh: '嘿，這裡有人坐嗎？' },
      { en: 'What did you have at lunch today?', zh: '你今天午餐吃什麼？' },
      { en: 'Which grade are you in?', zh: '你讀幾年級？' },
      { en: 'How do you get to school?', zh: '你平常怎麼來學校？' },
    ],
    practice: '模擬在學生餐廳找座位並與同學閒聊。'
  },
  {
    title: 'Crisis Management: What Went Wrong? (危機處理大考驗)',
    subtitle: '選取突發危機，查看對應口語',
    category: 'Lunch & Social',
    content: `【危機處理大考驗 (Crisis Management)】
• CRISIS 1: You Missed Class (缺課) - "I wasn't there. I was absent yesterday." / Excuse: "I had a dentist appointment."
• CRISIS 2: You Feel Sick (生病) - "I'm feeling under the weather." / Request: "May I please go to the nurse's office?"
• CRISIS 3: You Forgot Homework (忘記帶作業) - "I didn't manage to complete it." / Excuse: "I left it at home. I'll turn it in as soon as I can."`,
    phrases: [
      { en: "I wasn't there. I was absent yesterday.", zh: '我昨天沒來，我請假了。' },
      { en: "I'm feeling under the weather.", zh: '我不太舒服。' },
      { en: 'May I please go to the nurse\'s office?', zh: '請問我可以去保健室嗎？' },
      { en: "I left it at home. I'll turn it in as soon as I can.", zh: '我放在家了。我會盡快補交。' },
    ],
    practice: '模擬三種校園危機情境，練習用英文解釋。'
  },
  {
    title: 'The End of the School Day (放學時刻)',
    subtitle: '下課鐘聲響起，老師與同學的道別句型',
    category: 'Lunch & Social',
    content: `【放學時刻 (The End of the School Day)】
• Teacher Dismissals (老師宣佈下課):
  - "There's the bell. It's time to stop." (鐘響了。準備下課。)
  - "That's all for today. Pack up your books." (今天就上到這裡。把書收好。)
• Peer Goodbyes (同學道別):
  - "See you tomorrow afternoon." (明天下午見。)
  - "I'll see you then. Bye!" (到時見，掰！)
• Teacher Reminders (老師的最後提醒):
  - "Don't forget to bring your textbook tomorrow!" (明天別忘了帶課本！)`,
    phrases: [
      { en: "There's the bell. It's time to stop.", zh: '鐘響了。準備下課。' },
      { en: "That's all for today. Pack up your books.", zh: '今天就上到這裡。把書收好。' },
      { en: 'See you tomorrow afternoon.', zh: '明天下午見。' },
      { en: "Don't forget to bring your textbook tomorrow!", zh: '明天別忘了帶課本！' },
    ],
    practice: '練習老師宣佈下課和同學道別的英文句型。'
  },
  {
    title: 'The 5 Golden Campus Phrases (校園生存 5 大金句)',
    subtitle: '背熟這五句，校園對話暢行無阻',
    category: 'Summary',
    content: `【校園生存 5 大金句 (The 5 Golden Campus Phrases)】
• 1. For Permissions (尋求許可): "Excuse me, could I go to the bathroom, please?"
• 2. For Clarification (尋求澄清): "I didn't quite catch that. Can you repeat it?"
• 3. For Collaboration (小組協作): "Want to work on it together after school?"
• 4. For Deadlines (確認日期): "When is the project due?"
• 5. For Absences (請假與病退): "I was absent yesterday. I was feeling under the weather."`,
    phrases: [
      { en: 'Excuse me, could I go to the bathroom, please?', zh: '請問我可以去洗手間嗎？' },
      { en: "I didn't quite catch that. Can you repeat it?", zh: '我沒聽清楚，可以再說一次嗎？' },
      { en: 'Want to work on it together after school?', zh: '放學後要不要一起做？' },
      { en: 'When is the project due?', zh: '報告什麼時候交？' },
    ],
    practice: '背熟五句校園生存金句，自信開口說英文！'
  },
]

export const LESSON_5_SLIDES: LessonSlide[] = [
  {
    title: '美國出行完全指南：零死角交通英文實戰',
    subtitle: '從地鐵轉乘到公路自駕的視覺化生存手冊',
    category: 'Title',
    content: `【美國出行完全指南：零死角交通英文實戰】
• 從地鐵轉乘到公路自駕的視覺化生存手冊
• 涵蓋三大領域: 大眾運輸、公路自駕、實戰溝通
• 簡報製作: SpeakUp AI Presenter`,
    phrases: [
      { en: "Does this train go downtown?", zh: '這班車往市區嗎？' },
      { en: "Is this the bus to downtown?", zh: '這是往市區的公車嗎？' },
      { en: "Where do I transfer exactly?", zh: '我確切該在哪裡轉車？' },
      { en: "Do I tap again when transferring?", zh: '轉乘時需要再刷一次嗎？' },
    ],
    practice: '用英文問路：確認這班車是否往市中心。'
  },
  {
    title: '為什麼「行」的英文是生存之本？',
    subtitle: 'Before vs After',
    category: 'Introduction',
    content: `【為什麼「行」的英文是生存之本？ (Why Travel English Matters)】
• Before: 空間焦慮迷障 - Uptown/Downtown方向錯置、加油規則混亂、停車標誌黑洞
• After: 流暢移動自由 - 隨心感應乘車、自如應對加油與自駕故障、解鎖隱藏停車時效潛規則`,
    phrases: [
      { en: "Uptown? Downtown?", zh: '上城區還是下城區？' },
      { en: "Prepay inside?", zh: '要先進去店內付錢嗎？' },
      { en: "Is this a tow zone?", zh: '這裡是拖吊區嗎？' },
      { en: "Tap and go.", zh: '感應一下就通過了。' },
    ],
    practice: '說說你在美國交通上遇過最大的困惑是什麼。'
  },
  {
    title: '步行問路求生圖鑑',
    subtitle: 'Act I: Walking Directions',
    category: 'Walking',
    content: `【步行問路求生圖鑑 (Walking Directions)】
• 四段關鍵空間對白:
• 01. 起始點 (Origin): "Is it within walking distance?" (步行能到嗎?) → "It's about a 10-minute walk."
• 02. 行進中 (On the Move): "Go straight for two blocks." (直走兩個街區)
• 03. 轉角處 (At the Corner): "Turn left at the corner." (在轉角左轉)
• 04. 目的地 (Destination): "You'll see a bank on your right... it's right across from that."
• Pro Tip: 口頭重複對方指令以防聽錯: "Just to make sure, left after the bank?"`,
    phrases: [
      { en: "Is it within walking distance?", zh: '步行能到嗎？' },
      { en: "Go straight for two blocks.", zh: '直走兩個街區。' },
      { en: "Turn left at the corner.", zh: '在轉角左轉。' },
      { en: "Just to make sure, left after the bank?", zh: '確認一下，過了銀行左轉對嗎？' },
    ],
    practice: '問路人怎麼走到最近的捷運站。'
  },
  {
    title: '破解地鐵與公車的方向迷宮',
    subtitle: 'Transit Direction',
    category: 'Transit',
    content: `【破解地鐵與公車的方向迷宮 (Subway & Bus Direction)）
• 月台確認: 美國大型地鐵常分 Downtown (市中心/南下) 與 Uptown (郊區/北上)
• 公車確認: 上車前與司機雙重確認 "Is this the bus to downtown?"
• 轉乘樞紐: "Where do I transfer exactly?" 詢問確切轉乘點`,
    phrases: [
      { en: "Does this train go downtown?", zh: '這班車往市區嗎？' },
      { en: "Is this the bus to downtown?", zh: '這是往市區的公車嗎？' },
      { en: "Take the downtown bound train.", zh: '搭往市中心的車。' },
      { en: "Where do I transfer exactly?", zh: '我確切該在哪裡轉車？' },
    ],
    practice: '在月台上問路人這班車是否往市區方向。'
  },
  {
    title: '購票、進站與轉乘的黃金法則',
    subtitle: 'Golden Rules',
    category: 'Transit',
    content: `【購票、進站與轉乘的黃金法則 (Ticket & Transfer Rules)）
• 購票機溝通: "What kind of passes do you have?" / "I'd like to reload my card."
• 閘門進站: "You can tap your credit card." / "Do I need to tap when exiting?"
• 轉乘規則: 大部分城市提供地鐵公車互轉2小時內免費。"Do I tap again when transferring?" → "No, it counts as one ride."`,
    phrases: [
      { en: "What kind of passes do you have?", zh: '你們有賣什麼票種？' },
      { en: "I'd like to reload my card.", zh: '我想要儲值我的卡。' },
      { en: "Do I tap again when transferring?", zh: '轉乘時需要再刷一次嗎？' },
      { en: "It counts as one ride.", zh: '這算在同一趟車程內。' },
    ],
    practice: '在售票機前問有哪些票種可以選擇。'
  },
  {
    title: '叫車服務溝通術',
    subtitle: 'Ride-Share',
    category: 'Ride-Share',
    content: `【叫車服務 (Ride-Share) 溝通術 (Uber & Lyft Communication)）
• Stage 1 尋找彼此 (Location): "I'm by the main entrance." / "I might be on the other side."
• Stage 2 身份驗證 (Security): "Are you here for Lynn?" / "Yes, heading to the airport right?"
• Stage 3 放置行李 (Luggage): "Do you mind if I use the trunk?" / "Sure, I can help with your bag."`,
    phrases: [
      { en: "I'm by the main entrance.", zh: '我在正門口。' },
      { en: "Are you here for Lynn?", zh: '你是來接 Lynn 的嗎？' },
      { en: "Do you mind if I use the trunk?", zh: '介意我放後車廂嗎？' },
      { en: "Sure, I can help with your bag.", zh: '當然，我幫你拿行李。' },
    ],
    practice: '模擬叫車：告訴司機你在正門口，並確認目的地。'
  },
  {
    title: '乘車突發狀況與路線調整',
    subtitle: 'In-Transit Emergencies',
    category: 'Ride-Share',
    content: `【乘車突發狀況與路線調整 (In-Transit Emergencies)】
• 臨時停靠: "Actually, could we stop at Walgreens briefly?" (可以短暫停一下Walgreens嗎?)
• 指定下車: "Would it be possible to drop me here?" (可以在這裡讓我下車嗎?)
• 路線修正: "I think we missed the turn back there." (我想我們剛錯過轉彎了)
• 舒適調整: "Could you turn the AC up?" (可以把冷氣開強一點嗎?)`,
    phrases: [
      { en: "Actually, could we stop at Walgreens briefly?", zh: '可以短暫停一下 Walgreens 嗎？' },
      { en: "Would it be possible to drop me here?", zh: '可以在這裡讓我下車嗎？' },
      { en: "I think we missed the turn back there.", zh: '我想我們剛剛錯過轉彎處了。' },
      { en: "Could you turn the AC up?", zh: '可以把冷氣開強一點嗎？' },
    ],
    practice: '用英文跟司機說想在路邊的超市短暫停一下。'
  },
  {
    title: '自駕實戰：導航與路況應對',
    subtitle: 'Road Trip',
    category: 'Driving',
    content: `【自駕實戰：導航與路況應對 (Road Trip)）
• 窗外路況: "There's an accident up ahead." (前方有車禍) / "This road is under construction." (施工中)
• 導航狀況: "Recalculating..." / "The GPS just froze on me." (導航當機)
• 車內對話: "Wait, was that our turn?" / "I think we just missed the exit."`,
    phrases: [
      { en: "There's an accident up ahead.", zh: '前方有車禍。' },
      { en: "This road is under construction.", zh: '這條路在施工。' },
      { en: "The GPS just froze on me.", zh: '導航突然當機了。' },
      { en: "I think we just missed the exit.", zh: '我想我們錯過出口了。' },
    ],
    practice: '用英文跟副駕說前方有車禍，需要改道。'
  },
  {
    title: '美國加油站生存法則',
    subtitle: 'Gas Station',
    category: 'Driving',
    content: `【美國加油站生存法則 (Gas Station Survival)】
• 首要確認: "Which side is my gas tank on?" (油箱在哪一側？)
• Path A 順利操作: "Do I just pay at the pump?" / "Can you fill it up with regular?"
• Path B 遭遇故障: "The card reader isn't working." (刷卡機壞了) / "Can I pay inside instead?" (改去裡面付) / "Prepay inside." (先預付油錢)`,
    phrases: [
      { en: "Which side is my gas tank on?", zh: '我的油箱在哪一側？' },
      { en: "Do I just pay at the pump?", zh: '我直接在加油機付款嗎？' },
      { en: "Can you fill it up with regular?", zh: '可以幫我加滿一般無鉛汽油嗎？' },
      { en: "Can I pay inside instead?", zh: '我可以改去裡面付嗎？' },
    ],
    practice: '到加油站發現刷卡機壞了，用英文問能不能進去付錢。'
  },
  {
    title: '破解美國停車標誌解碼',
    subtitle: 'Parking Rules',
    category: 'Driving',
    content: `【破解美國停車標誌解碼 (Parking Sign Decoder)】
• 三層過濾邏輯:
• 1. 絕對禁令 (Sweeping Rule): NO PARKING MORNINGS ONLY → "So evenings should be fine right?"
• 2. 條件允許 (Conditional Rule): 2 HR PARKING 8AM-6PM → "Can I park here after 6?"
• 3. 特權區 (The Exception): PERMIT ONLY → "This street looks permit only." / "Is this a legal parking spot?"`,
    phrases: [
      { en: "So evenings should be fine right?", zh: '所以晚上停應該沒問題對吧？' },
      { en: "Can I park here after 6?", zh: '六點之後可以停這裡嗎？' },
      { en: "This street looks permit only.", zh: '這條街看起來需要停車許可證。' },
      { en: "Is this a legal parking spot?", zh: '這是合法的停車位嗎？' },
    ],
    practice: '看到路邊停車標誌，用英文確認晚上是否可以停車。'
  },
  {
    title: '停車地雷：繳費、罰單與拖吊應對',
    subtitle: 'Parking Emergency',
    category: 'Driving',
    content: `【停車地雷：繳費、罰單與拖吊應對 (Parking Emergencies)】
• 路邊繳費: "Do I need to pay at the meter?" / "Do I pay before leaving?"
• 收到罰單: "I think I got a parking ticket." / "Where can I pay the fine?" / "Can I appeal this parking ticket?"
• 車被拖吊: "My car is gone. Was it towed?" (最糟情境)`,
    phrases: [
      { en: "Do I need to pay at the meter?", zh: '我需要在那個繳費機付費嗎？' },
      { en: "I think I got a parking ticket.", zh: '我想我被開了一張停車罰單。' },
      { en: "Can I appeal this parking ticket?", zh: '我可以申訴這張罰單嗎？' },
      { en: "My car is gone. Was it towed?", zh: '我的車不見了，是被拖走了嗎？' },
    ],
    practice: '發現車被拖走了，用英文打電話詢問拖吊保管場。'
  },
  {
    title: '終極比較：美國交通支付大車拚',
    subtitle: 'Payment Matrix',
    category: 'Reference',
    content: `【終極比較：美國交通支付大車拚 (Payment Matrix)】
• 手機App: 地鐵官方APP電子票證、ParkMobile停車、叫車APP內結帳
• 感應支付 (Tap-to-Pay): 地鐵進站感應信用卡、加油機直接感應
• 現金/預付: 售票機購單程票、加油站進店內預付
• 關鍵洞察: 實體現金使用率極低。攜帶感應信用卡或手機Apple Pay解決90%交通消費`,
    phrases: [
      { en: "You can tap your credit card.", zh: '你可以感應信用卡。' },
      { en: "Do I pay through the app?", zh: '我透過APP付款嗎？' },
      { en: "Pay at the pump.", zh: '在加油機直接付款。' },
      { en: "Prepay inside.", zh: '先進店內預付。' },
    ],
    practice: '用英文問地鐵站務員是否可以直接感應信用卡進站。'
  },
  {
    title: '迷航與延誤應急矩陣',
    subtitle: 'Emergency Escape',
    category: 'Reference',
    content: `【迷航與延誤應急矩陣 (Lost & Delay Emergencies)】
• 步行: "I'm trying to get to Main Street. Am I going the right way?"
• 大眾運輸: "I almost got off early. Does this train go downtown?"
• 叫車: "This doesn't look like the right address. I think we missed the turn."
• 自駕: "The GPS just froze on me. It keeps saying recalculating."`,
    phrases: [
      { en: "Am I going the right way?", zh: '我走的方向對嗎？' },
      { en: "I almost got off early.", zh: '我差點提早下車。' },
      { en: "This doesn't look like the right address.", zh: '這不像正確地址。' },
      { en: "It keeps saying recalculating.", zh: '它一直顯示重新計算中。' },
    ],
    practice: '發現走錯路了，用英文問路人你走的方向是否正確。'
  },
  {
    title: '總結：美國交通溝通的潛規則',
    subtitle: 'Cultural Codes',
    category: 'Summary',
    content: `【總結：美國交通溝通的潛規則 (Cultural Codes)】
• 禮貌 (Politeness): 永遠以 "Excuse me, can you help me find..." 開頭，結束加 "Have a great rest of your day."
• 直率 (Directness): "Just to make sure..." 直接確認比兜圈子更有效率
• 情境感知 (Awareness): 掌握 "It counts as one ride" 與 "Watch the time limit" 等核心原則`,
    phrases: [
      { en: "Excuse me, can you help me find...", zh: '不好意思，可以幫我找一下…' },
      { en: "Just to make sure...", zh: '只是想確認一下…' },
      { en: "Have a great rest of your day.", zh: '祝您今天愉快。' },
      { en: "Watch the time limit.", zh: '注意時限。' },
    ],
    practice: '綜合練習：用禮貌、直接且敏銳的方式問路。'
  },
  {
    title: '你的專屬出行小抄',
    subtitle: 'Cheat Sheet',
    category: 'Summary',
    content: `【你的專屬出行小抄 (Urban Survival Cheat Sheet)】
• 1. 方向迷失時: "Just to make sure, am I going the right way?"
• 2. 地鐵轉乘時: "Do I tap again when transferring, or does it count as one ride?"
• 3. 叫車找人時: "I'm by the main entrance. Heading to the airport, right?"
• 4. 導航崩潰時: "The GPS just froze. It keeps saying recalculating."
• 5. 停車自救時: "Is this a legal parking spot after 6 PM?"
• 截圖保存這張卡片，下次出行直接用！`,
    phrases: [
      { en: "Just to make sure, am I going the right way?", zh: '確認一下，我走的方向對嗎？' },
      { en: "Do I tap again when transferring?", zh: '轉乘時要再刷一次嗎？' },
      { en: "I'm by the main entrance. Heading to the airport, right?", zh: '我在正門口，前往機場對吧？' },
      { en: "Is this a legal parking spot after 6 PM?", zh: '晚上六點之後這裡可以合法停車嗎？' },
    ],
    practice: '截圖保存這5句應急金句，下次出行直接用！'
  },
]
