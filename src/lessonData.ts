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
