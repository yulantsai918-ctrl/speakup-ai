export interface QuizChoice {
  type: 'choice'
  q: string
  opts: string[]
  ans: number
}

export interface QuizFill {
  type: 'fill'
  q: string
  en: string
  ans: string
}

export type QuizItem = QuizChoice | QuizFill

export interface QuizSection {
  num: number
  title: string
  vocab: [string, string][]
  quizzes: QuizItem[]
}

export const QUIZ_SECTIONS: QuizSection[] = [
  {
    num: 1, title: '交通 Transportation',
    vocab: [['commute', '通勤'], ['transfer', '轉乘'], ['walking distance', '步行距離'], ['reload my card', '儲值卡片'], ['trunk', '後車廂'], ['parking ticket', '罰單'], ['gas tank', '油箱'], ['blocks', '街區']],
    quizzes: [
      { type: 'choice', q: '「轉乘」的英文是？', opts: ['commute', 'transfer', 'reload', 'blocks'], ans: 1 },
      { type: 'choice', q: '「步行距離」的英文是？', opts: ['walking distance', 'blocks away', 'gas tank', 'parking ticket'], ans: 0 },
      { type: 'choice', q: 'Which exit ___ I supposed to take? 空格應填入？', opts: ['am', 'is', 'are', 'do'], ans: 0 },
      { type: 'fill', q: '直走兩個街區，然後在轉角左轉。', en: 'Go straight for two ___ , then turn left at the corner.', ans: 'blocks' },
      { type: 'fill', q: '這是去市中心的巴士嗎？', en: 'Is this the bus to ___ ?', ans: 'downtown' },
    ]
  },
  {
    num: 2, title: '購物 Shopping',
    vocab: [['browsing', '隨便看看'], ['fitting room', '試衣間'], ['size down / size up', '換小一號 / 換大一號'], ['warranty', '保固'], ['refund', '退款'], ['store credit', '商店代金券'], ['on sale', '特價中'], ['return policy', '退貨政策']],
    quizzes: [
      { type: 'choice', q: '「試衣間」的英文是？', opts: ['dressing room', 'fitting room', 'changing room', 'store room'], ans: 1 },
      { type: 'choice', q: "What's your return ___? 空格應填入？", opts: ['time', 'policy', 'price', 'date'], ans: 1 },
      { type: 'choice', q: 'Can I ___ this on? 空格應填入？', opts: ['wear', 'try', 'put', 'take'], ans: 1 },
      { type: 'fill', q: '你們的退貨政策是什麼？', en: "What's your ___ policy?", ans: 'return' },
      { type: 'fill', q: '這個有中號的嗎？', en: 'Do you have this in ___ ?', ans: 'medium' },
    ]
  },
  {
    num: 3, title: '餐飲 Dining',
    vocab: [['reservation', '預約'], ['recommend', '推薦'], ['portion', '份量'], ['refill', '續杯'], ['side dish', '配菜'], ['medium rare', '三分熟'], ['check / bill', '帳單']],
    quizzes: [
      { type: 'choice', q: '「三分熟」的英文是？', opts: ['rare', 'medium rare', 'well done', 'medium'], ans: 1 },
      { type: 'choice', q: '可以不要加洋蔥嗎？正確英文是？', opts: ["No onion please.", "Can I get that without onions?", "I don't like onions.", "No onions for me."], ans: 1 },
      { type: 'choice', q: 'Could I have the ___ , please? 空格應填入？', opts: ['food', 'check', 'menu', 'water'], ans: 1 },
      { type: 'fill', q: '醬料可以另外放嗎？', en: 'Can I get the sauce on the ___ ?', ans: 'side' },
      { type: 'fill', q: '請給我兩人的桌位。', en: '___ for two please.', ans: 'Table' },
    ]
  },
  {
    num: 4, title: '職場 Workplace',
    vocab: [['hectic', '忙亂的'], ['inbox', '收件箱'], ['timeline', '時間表'], ['feedback', '回饋'], ['deadline', '截止日期'], ['presentation', '簡報'], ['request off', '請假']],
    quizzes: [
      { type: 'choice', q: '「截止日期」的英文是？', opts: ['deadline', 'timeline', 'feedback', 'inbox'], ans: 0 },
      { type: 'choice', q: "I'd like to ___ next Monday off. 空格應填入？", opts: ['ask', 'request', 'take', 'have'], ans: 1 },
      { type: 'choice', q: '「忙亂的」是？', opts: ['busy', 'hectic', 'hard', 'tired'], ans: 1 },
      { type: 'fill', q: '我只是想確認一下截止日期。', en: 'I just want to ___ the deadline.', ans: 'confirm' },
      { type: 'fill', q: '簡報準備得怎麼樣了？', en: "How's the ___ coming along?", ans: 'presentation' },
    ]
  },
  {
    num: 5, title: '電話英文 Phone Calls',
    vocab: [['hold on', '請稍候'], ['put through', '轉接'], ['voicemail', '語音信箱'], ['call back', '回電'], ['extension', '分機號碼']],
    quizzes: [
      { type: 'choice', q: '「轉接」的英文是？', opts: ['hold on', 'put through', 'call back', 'hang up'], ans: 1 },
      { type: 'choice', q: 'May I ___ to Mr. Chen? 空格應填入？', opts: ['talk', 'speak', 'tell', 'say'], ans: 1 },
      { type: 'choice', q: 'Can I leave a ___ ?', opts: ['note', 'message', 'word', 'call'], ans: 1 },
      { type: 'fill', q: '請問陳先生在嗎？', en: 'May I ___ to Mr. Chen, please?', ans: 'speak' },
      { type: 'fill', q: '我等一下再打給你。', en: "I'll ___ you back later.", ans: 'call' },
    ]
  },
  {
    num: 6, title: '社交聚會 Social Gatherings',
    vocab: [['icebreaker', '破冰話題'], ['small talk', '閒聊'], ['catch up', '敘舊'], ['hang out', '聚會、出去晃晃'], ['get together', '聚會']],
    quizzes: [
      { type: 'choice', q: '「敘舊」的英文是？', opts: ['small talk', 'catch up', 'hang out', 'icebreaker'], ans: 1 },
      { type: 'choice', q: 'How do you know the ___ ? 空格應填入？', opts: ['party', 'host', 'place', 'time'], ans: 1 },
      { type: 'choice', q: 'What do you do for ___ ?', opts: ['work', 'fun', 'money', 'food'], ans: 1 },
      { type: 'fill', q: '我們改天敘敘舊吧！', en: "Let's ___ up sometime!", ans: 'catch' },
      { type: 'fill', q: '很高興跟你聊天！', en: 'It was really nice ___ to you!', ans: 'talking' },
    ]
  },
  {
    num: 7, title: '便利店 Convenience Store',
    vocab: [['convenience store', '便利商店'], ['gas station', '加油站'], ['receipt', '收據'], ['lotto ticket', '樂透彩券'], ['ale / beer', '啤酒']],
    quizzes: [
      { type: 'choice', q: '「收據」的英文是？', opts: ['recipe', 'receipt', 'ticket', 'paper'], ans: 1 },
      { type: 'choice', q: 'Fill it ___ , please. 空格應填入？', opts: ['in', 'up', 'out', 'over'], ans: 1 },
      { type: 'choice', q: 'Regular or ___ ?（加油時）', opts: ['special', 'premium', 'great', 'super'], ans: 1 },
      { type: 'fill', q: '零食在哪裡？', en: 'Where can I find the ___ ?', ans: 'snacks' },
      { type: 'fill', q: '我可以買一包口香糖嗎？', en: 'Can I get a ___ of gum?', ans: 'pack' },
    ]
  },
  {
    num: 8, title: '城市生活 City Life',
    vocab: [['rush hour', '尖峰時段'], ['street performer', '街頭藝人'], ['public transportation', '大眾運輸'], ['crosswalk', '行人穿越道']],
    quizzes: [
      { type: 'choice', q: '「尖峰時段」的英文是？', opts: ['busy time', 'rush hour', 'peak moment', 'high time'], ans: 1 },
      { type: 'choice', q: "Is there a farmer's ___ nearby? 空格應填入？", opts: ['shop', 'market', 'store', 'stand'], ans: 1 },
      { type: 'choice', q: 'How do you usually ___ to work?', opts: ['go', 'get', 'come', 'drive'], ans: 1 },
      { type: 'fill', q: '我搭地鐵，比開車快。', en: "I take the ___ . It's faster than driving.", ans: 'subway' },
      { type: 'fill', q: '坐紅線到 59 街。', en: 'Take the ___ line to 59th Street.', ans: 'red' },
    ]
  },
  {
    num: 9, title: '休閒娛樂 Leisure & Entertainment',
    vocab: [['hang out', '出遊、閒晃'], ['plan', '計劃'], ['free time', '空閒時間'], ['movie theater', '電影院']],
    quizzes: [
      { type: 'choice', q: '你週末想做什麼？正確英文是？', opts: ["What do you do on weekends?", "What do you want to do this weekend?", "What are you doing?", "Where do you go?"], ans: 1 },
      { type: 'choice', q: 'Sounds like a ___ !', opts: ['plan', 'idea', 'fun', 'good'], ans: 0 },
      { type: 'choice', q: '「空閒時間」的英文是？', opts: ['busy time', 'free time', 'work time', 'good time'], ans: 1 },
      { type: 'fill', q: '我們去看電影吧！', en: "Let's go ___ a movie!", ans: 'see' },
      { type: 'fill', q: '我星期六有空。', en: "I'm ___ on Saturday.", ans: 'free' },
    ]
  },
  {
    num: 10, title: '結帳英文 Checkout',
    vocab: [['total', '總金額'], ['cash or credit', '現金或信用卡'], ['receipt', '收據'], ['bag', '袋子'], ['coupon', '優惠券']],
    quizzes: [
      { type: 'choice', q: '「總金額」的英文是？', opts: ['total', 'sum', 'all', 'count'], ans: 0 },
      { type: 'choice', q: 'How would you like to ___ ? 空格應填入？', opts: ['pay', 'spend', 'cost', 'buy'], ans: 0 },
      { type: 'choice', q: "We'd like to ___ the bill. 正確的動詞是？", opts: ['cut', 'split', 'break', 'share'], ans: 1 },
      { type: 'fill', q: '我用卡片付款。', en: "I'll ___ with a card.", ans: 'pay' },
      { type: 'fill', q: '可以給個袋子嗎？', en: 'Could I have a ___ , please?', ans: 'bag' },
    ]
  },
  {
    num: 11, title: '醫療英文 Medical',
    vocab: [['appointment', '預約掛號'], ['pharmacy', '藥局'], ['prescription', '處方籤'], ['insurance card', '保險卡'], ['symptoms', '症狀']],
    quizzes: [
      { type: 'choice', q: '「症狀」的英文是？', opts: ['signs', 'symptoms', 'feeling', 'illness'], ans: 1 },
      { type: 'choice', q: 'I need to pick ___ a prescription. 空格應填入？', opts: ['in', 'up', 'out', 'off'], ans: 1 },
      { type: 'choice', q: 'Do you have ___ ?（看診時問）', opts: ['money', 'insurance', 'time', 'card'], ans: 1 },
      { type: 'fill', q: '我想預約掛號。', en: "I'd like to make an ___ .", ans: 'appointment' },
      { type: 'fill', q: '我發燒喉嚨痛兩天了。', en: "I've had a fever and a ___ throat for two days.", ans: 'sore' },
    ]
  },
  {
    num: 12, title: '點飲料 Ordering Drinks',
    vocab: [['iced / hot', '冰的 / 熱的'], ['to go / for here', '外帶 / 內用'], ['regular size', '一般尺寸'], ['large size', '大杯'], ['refill', '續杯'], ['straw', '吸管']],
    quizzes: [
      { type: 'choice', q: '「內用」的英文是？', opts: ['for here', 'to go', 'eat in', 'dine in'], ans: 0 },
      { type: 'choice', q: 'Can I get that ___ ?（做成冰的）', opts: ['cold', 'iced', 'cool', 'frozen'], ans: 1 },
      { type: 'choice', q: 'What ___ would you like?（尺寸）', opts: ['size', 'type', 'kind', 'number'], ans: 0 },
      { type: 'fill', q: '我要一杯拿鐵。', en: "I'll ___ a latte, please.", ans: 'have' },
      { type: 'fill', q: '一般尺寸就可以了。', en: '___ is fine.', ans: 'Regular' },
    ]
  },
  {
    num: 13, title: '居家生活 Home & Daily Life',
    vocab: [['landlord', '房東'], ['lease', '租約'], ['repair', '維修'], ['utility bill', '水電帳單'], ['neighbor', '鄰居']],
    quizzes: [
      { type: 'choice', q: '「水槽堵塞了」的英文是？', opts: ['The sink is broken.', 'The sink is clogged.', 'The sink is full.', 'The sink is stuck.'], ans: 1 },
      { type: 'choice', q: 'The AC ___ working. 空格應填入否定？', opts: ["isn't", "don't", "doesn't", "won't"], ans: 0 },
      { type: 'choice', q: '「房東」的英文是？', opts: ['landlord', 'owner', 'landowner', 'house lord'], ans: 0 },
      { type: 'fill', q: '可以派人來修理嗎？', en: 'Can you send someone to ___ it?', ans: 'fix' },
      { type: 'fill', q: '你付水電帳單了嗎？', en: 'Did you pay the ___ bill yet?', ans: 'electric' },
    ]
  },
  {
    num: 14, title: '旅遊英文 Travel',
    vocab: [['check-in', '報到 / 入住'], ['boarding pass', '登機證'], ['luggage / baggage', '行李'], ['passport', '護照'], ['hotel reservation', '飯店預約']],
    quizzes: [
      { type: 'choice', q: '「登機證」的英文是？', opts: ['boarding pass', 'boarding card', 'ticket', 'pass'], ans: 0 },
      { type: 'choice', q: 'What time is ___ ?（退房時間）', opts: ['check-in', 'checkout', 'leaving', 'exit'], ans: 1 },
      { type: 'choice', q: 'Do you have any rooms ___ ?', opts: ['free', 'available', 'empty', 'open'], ans: 1 },
      { type: 'fill', q: '我要辦理入住。', en: "I'd like to ___ in, please.", ans: 'check' },
      { type: 'fill', q: '退房時間是上午 11 點。', en: '___ is at 11 AM.', ans: 'Checkout' },
    ]
  },
  {
    num: 15, title: '聽力訓練技巧',
    vocab: [['shadowing', '跟讀模仿'], ['immersion', '沉浸式'], ['input', '輸入'], ['keyword', '關鍵字'], ['theme-based', '主題式']],
    quizzes: [
      { type: 'choice', q: '「跟讀模仿」的英文是？', opts: ['reading', 'shadowing', 'following', 'repeating'], ans: 1 },
      { type: 'choice', q: '每天至少聽多久的全英文對話？', opts: ['15 分鐘', '30–60 分鐘', '2 小時', '10 分鐘'], ans: 1 },
      { type: 'choice', q: '「沉浸式」的英文是？', opts: ['immersive', 'immersion', 'deep', 'focused'], ans: 1 },
      { type: 'fill', q: '同一主題反覆聽 3–5 次。', en: '___ to the same topic 3-5 times.', ans: 'Listen' },
      { type: 'fill', q: '先掌握情境和關鍵字。', en: 'First grasp the context and ___ words.', ans: 'key' },
    ]
  }
]
