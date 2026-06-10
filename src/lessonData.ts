export interface LessonSlide {
  title: string
  subtitle: string
  content: string
  phrases: { en: string; zh: string }[]
  practice: string
}

export const LESSON_2_SLIDES: LessonSlide[] = [
  {
    title: '吃貨必備的英文生存指南',
    subtitle: 'The American Foodie Survival Guide',
    content: '從咖啡廳、美式餐廳到超商酒吧，點餐結帳不卡關的實戰句型庫。內容涵蓋四大站點：1.咖啡與手搖飲充電站 (Morning Boost) 2.美式餐廳實戰 (Dining Out) 3.超市與便利商店尋寶 (Grocery & Convenience) 4.微醺與社交 (Nightlife Social)。',
    phrases: [
      { en: 'Could I get a medium iced latte with oat milk?', zh: '我可以要一杯中杯冰拿鐵加燕麥奶嗎？' },
      { en: 'Table for two, please.', zh: '兩位，謝謝。' },
    ],
    practice: '跟著這份指南，從咖啡廳到酒吧，完整掌握美食英文！'
  },
  {
    title: '跟著這條路線，吃透美國日常',
    subtitle: '4 Stops to Master American Food Culture',
    content: '四站完全掌握美國飲食文化：Stop 1 咖啡與手搖飲充電站 - 特調點餐方程式。Stop 2 美式餐廳實戰 - 用餐完整五步驟。Stop 3 超市與便利商店尋寶 - 平面圖搜尋與結帳決策樹。Stop 4 微醺與社交 - 酒吧點酒與社交破冰。',
    phrases: [
      { en: 'What would you recommend for first-timers?', zh: '第一次來，你推薦什麼？' },
      { en: 'Could we split the check?', zh: '我們可以分開付嗎？' },
    ],
    practice: '試著用英文說出你今天想吃什麼類型的餐廳。'
  },
  {
    title: '特調點餐方程式',
    subtitle: 'The Custom Drink Formula',
    content: '點餐公式：[開場白 Opener] + [容量 Size] + [溫度 Temp] + [飲品 Drink] + [奶類/客製化 Customization]。實戰例句：Could I get a medium iced latte with oat milk and no sugar? 拆解：Could I get a (開場) + medium (容量) + iced (溫度) + latte (飲品) + with oat milk and no sugar (客製化)。',
    phrases: [
      { en: 'Could I get a medium iced latte with oat milk and no sugar?', zh: '我要一杯中杯冰拿鐵加燕麥奶、無糖。' },
      { en: 'I\'ll have a tall cappuccino with an extra shot, please.', zh: '我要一杯小杯卡布奇諾加一份濃縮。' },
    ],
    practice: '套用公式練習：點一杯大杯熱拿鐵、換燕麥奶、半糖。'
  },
  {
    title: '口味微調儀表板',
    subtitle: 'Customization Dashboard',
    content: '冰量控制：Regular ice (正常冰)、Light ice (少冰)、Less ice (微冰)、No ice at all (去冰)。甜度控制：No sugar (無糖)、Less sweet (微糖)、Half sweet (半糖)、Regular sweet (全糖)。特殊開關：Decaf (低咖啡因)、Extra shot (加濃縮)、Extra hot (特別熱)、No whipped cream (去鮮奶油)。',
    phrases: [
      { en: 'Is it usually very sweet?', zh: '這通常會很甜嗎？' },
      { en: 'Can you make it less sweet?', zh: '可以幫我做比較不甜嗎？' },
      { en: 'No ice at all, please.', zh: '完全去冰，謝謝。' },
    ],
    practice: '用英文跟店員說：我要一杯少冰、半糖的拿鐵。'
  },
  {
    title: '餐廳實戰五步驟',
    subtitle: 'The Restaurant Timeline',
    content: '美式餐廳用餐五步驟：1.Walk-in 進門入座 "Table for two, please." 2.Seating 看菜單 "We\'re still looking at the menu." 3.Ordering 正式點餐 "I\'ll have the chicken sandwich." 4.Dining 用餐中途 "Everything is great so far, thanks." 5.Checkout 結帳 "Could we get the check, please?" 或 "Could we split the check?"',
    phrases: [
      { en: 'Table for two, please.', zh: '兩位，謝謝。' },
      { en: 'We\'re still looking at the menu.', zh: '我們還在看菜單。' },
      { en: 'Could we get the check, please?', zh: '可以幫我們拿帳單嗎？' },
      { en: 'Could we split the check?', zh: '我們可以分開付嗎？' },
    ],
    practice: '角色扮演：從進門到結帳，練習完整五步驟對話。'
  },
  {
    title: '點餐不踩雷：請店員推薦的藝術',
    subtitle: 'Navigating the Menu',
    content: '尋求推薦：不知從何點起問 "What would you recommend for first-timers?" 探詢招牌菜問 "What\'s your go-to dish?" 確認細節：確認份量 "Is this a big portion?"、"Is it enough to share?" 調整口味 "Is this dish very spicy?"、"Can you make it not too spicy?"',
    phrases: [
      { en: 'What would you recommend for first-timers?', zh: '第一次來，你推薦什麼？' },
      { en: 'What\'s your go-to dish here?', zh: '你最常點的菜是什麼？' },
      { en: 'Is this enough to share?', zh: '這份夠分食嗎？' },
      { en: 'Can you make it not too spicy?', zh: '可以不要做太辣嗎？' },
    ],
    practice: '問店員三件事：推薦菜色、份量大小、辣度調整。'
  },
  {
    title: '優雅解決問題矩陣',
    subtitle: 'Problem Resolution Diagnostic',
    content: '上錯菜："Excuse me, I think this isn\'t what I ordered." 店員回： "I\'m so sorry, I\'ll bring it right out." 漏給配菜："I think we\'re missing the fries." 店員回："Let me grab that for you." 熟度不對："I asked for medium rare, it looks a bit well done." 店員回："We can remake it for you."',
    phrases: [
      { en: 'Excuse me, I think this isn\'t what I ordered.', zh: '不好意思，這好像不是我點的。' },
      { en: 'I think we\'re missing the fries.', zh: '我們好像少了薯條。' },
      { en: 'I asked for medium rare, it looks a bit well done.', zh: '我點的是三分熟，這看起來有點全熟。' },
    ],
    practice: '角色扮演：餐點送錯了，練習優雅地向店員反應。'
  },
  {
    title: '超市與超商尋寶平面圖',
    subtitle: 'The Store Blueprint',
    content: '走道區 (Aisles)：找不到東西問 "Where\'s the bottled water?" 店員回 "It\'s on aisle 7." 貨架區 (Shelves)：找庫存問 "Do you have any more in stock?" 後場門口 (The Back)：店員回 "Let me check the back for you." 三大定位點幫助你在超市快速找到商品。',
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
    content: '要求加熱：披薩加熱說 "Can you heat this slice up again?" 借用微波爐說 "Can I microwave this burrito here?" 確認新鮮度：三明治是否現做 "Is this sandwich freshly made?" 披薩是否還熱 "Is this pizza still hot right now?"',
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
    content: '包裝：店員問 "Do you need a bag?" 答 "I\'ll take a paper bag, please." 或 "I\'m good, I brought my own." 支付方式：店員問 "Card or cash?" 答 "Apple Pay, please." 或 "I\'ll pay with cash." 收據：店員問 "Email or printed receipt?" 自助結帳機陷阱："Unexpected item in the bagging area" 時找店員 "Excuse me, can you help me with this?"',
    phrases: [
      { en: 'I\'ll take a paper bag, please.', zh: '我要一個紙袋，謝謝。' },
      { en: 'Apple Pay, please.', zh: '我用 Apple Pay。' },
      { en: 'Excuse me, can you help me with this?', zh: '不好意思，可以幫我處理這個嗎？' },
    ],
    practice: '模擬結帳：練習回答包裝、支付、收據三連問。'
  },
  {
    title: '酒吧點酒口味象限圖',
    subtitle: 'The Drink Spectrum Matrix',
    content: '口味分類：偏甜 (Sweet) 問 "What\'s the sweetest drink here?" 清爽果香 (Fruity) 說 "I want something fruity instead." 偏乾/苦 (Dry/Bitter) 說 "Can you make it a bit lighter?" 經典濃烈 (Strong) 說 "I like it smooth, not strong." 四象限幫你找到最適合的調酒。',
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
    content: '破冰起手式："So, do you come here often?" "What\'s your go-to drink?" "This place has a great vibe." 熱情附和術：驚豔附和 "That\'s surprisingly smooth actually!" 同感附和 "Yeah, I get what you mean." 延續話題 "Oh yeah? What happened then?"',
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
    content: '生硬命令式轉換為禮貌美式表達："Give me a coffee." → "Could I get a coffee, please?" "I want this changed." → "Would it be possible to change this?" "I want to ask..." → "I was wondering if you could help me." 核心洞察：美國人極少使用祈使句，掌握 "Could I get..." 與 "I was wondering if..." 兩大金鑰。',
    phrases: [
      { en: 'Could I get a coffee, please?', zh: '請問我可以要一杯咖啡嗎？' },
      { en: 'Would it be possible to change this?', zh: '請問可以換這個嗎？' },
      { en: 'I was wondering if you could help me.', zh: '我想請問你是否可以幫我一個忙。' },
    ],
    practice: '把三個生硬命令句改寫成禮貌美式表達。'
  },
  {
    title: '美食生存四大金句矩陣',
    subtitle: 'The Ultimate Foodie Cheat Sheet',
    content: '四大日常場景核心金句：Cafe 咖啡廳 "Could I get a [size] [drink] with [milk choice]?" Restaurant 餐廳 "We\'re still looking at the menu."、"Could we split the check?" Store 超市 "Where can I find [item]?"、"I\'ll pay with Apple Pay." Bar 酒吧 "What\'s your go-to drink?"、"Can you make it a bit lighter?" 建議截圖保存，下次出國直接用！',
    phrases: [
      { en: 'Could I get a medium latte with oat milk?', zh: '我要一杯中杯拿鐵加燕麥奶。' },
      { en: 'Where can I find bottled water?', zh: '瓶裝水在哪裡？' },
      { en: 'What\'s your go-to drink?', zh: '你通常都點什麼喝？' },
    ],
    practice: '選一個場景，練習說出該場景的金句。'
  },
  {
    title: 'You\'re all set! 準備好自信開口了嗎！',
    subtitle: 'Bon Appétit!',
    content: '不再害怕點餐結帳，用最道地的英文，吃遍美國每一個角落。Stop stressing over orders. Speak like a local, and enjoy every bite of your American journey. 簡報圓滿結束。Bon Appétit!',
    phrases: [
      { en: 'You\'re all set!', zh: '都準備好了！' },
      { en: 'Bon Appétit!', zh: '祝胃口大開！' },
    ],
    practice: '帶著這份指南，自信地走進任何一家餐廳！'
  },
]
