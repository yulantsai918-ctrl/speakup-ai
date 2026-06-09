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
    vocab: [['commute', '通勤'], ['transfer', '轉乘'], ['walking distance', '步行距離'], ['reload my card', '儲值卡片'], ['trunk', '後車廂'], ['parking ticket', '罰單'], ['gas tank', '油箱'], ['blocks', '街區'], ['fare', '車資'], ['schedule', '時刻表']],
    quizzes: [
      { type: 'choice', q: '「轉乘」的英文是？', opts: ['commute', 'transfer', 'reload', 'blocks'], ans: 1 },
      { type: 'choice', q: '「步行距離」的英文是？', opts: ['walking distance', 'blocks away', 'gas tank', 'parking ticket'], ans: 0 },
      { type: 'choice', q: 'Which exit ___ I supposed to take? 空格應填入？', opts: ['am', 'is', 'are', 'do'], ans: 0 },
      { type: 'fill', q: '直走兩個街區，然後在轉角左轉。', en: 'Go straight for two ___ , then turn left at the corner.', ans: 'blocks' },
      { type: 'fill', q: '這是去市中心的巴士嗎？', en: 'Is this the bus to ___ ?', ans: 'downtown' },
      { type: 'choice', q: '「通勤」的英文是？', opts: ['commute', 'travel', 'drive', 'ride'], ans: 0 },
      { type: 'choice', q: '哪裡可以儲值卡片？正確英文？', opts: ['Where to fill my card?', 'Where to reload my card?', 'Where to add my card?', 'Where to top my card?'], ans: 1 },
      { type: 'fill', q: '走路去要多久？', en: 'How far is it on ___ ?', ans: 'foot' },
      { type: 'choice', q: '「罰單」的英文是？', opts: ['speeding ticket', 'parking ticket', 'traffic ticket', 'fine ticket'], ans: 1 },
      { type: 'fill', q: '這班火車去市中心嗎？', en: 'Does this train go to ___ ?', ans: 'downtown' },
    ]
  },
  {
    num: 2, title: '購物 Shopping',
    vocab: [['browsing', '隨便看看'], ['fitting room', '試衣間'], ['size down / size up', '換小一號 / 換大一號'], ['warranty', '保固'], ['refund', '退款'], ['store credit', '商店代金券'], ['on sale', '特價中'], ['return policy', '退貨政策'], ['receipt', '收據'], ['try on', '試穿']],
    quizzes: [
      { type: 'choice', q: '「試衣間」的英文是？', opts: ['dressing room', 'fitting room', 'changing room', 'store room'], ans: 1 },
      { type: 'choice', q: "What's your return ___? 空格應填入？", opts: ['time', 'policy', 'price', 'date'], ans: 1 },
      { type: 'choice', q: 'Can I ___ this on? 空格應填入？', opts: ['wear', 'try', 'put', 'take'], ans: 1 },
      { type: 'fill', q: '你們的退貨政策是什麼？', en: "What's your ___ policy?", ans: 'return' },
      { type: 'fill', q: '這個有中號的嗎？', en: 'Do you have this in ___ ?', ans: 'medium' },
      { type: 'choice', q: '「退款」的英文是？', opts: ['refund', 'return', 'reward', 'rebate'], ans: 0 },
      { type: 'choice', q: '可以打折嗎？正確英文是？', opts: ['Can you discount it?', 'Can you give me a discount?', 'Can you cheap it?', 'Can you lower price?'], ans: 1 },
      { type: 'fill', q: '我只是隨便看看。', en: "I'm just ___ .", ans: 'browsing' },
      { type: 'choice', q: '「特價中」的英文是？', opts: ['on discount', 'on sale', 'on cheap', 'on special'], ans: 1 },
      { type: 'fill', q: '這個有大號的嗎？', en: 'Do you have this in a ___ size?', ans: 'larger' },
    ]
  },
  {
    num: 3, title: '餐飲 Dining',
    vocab: [['reservation', '預約'], ['recommend', '推薦'], ['portion', '份量'], ['refill', '續杯'], ['side dish', '配菜'], ['medium rare', '三分熟'], ['check / bill', '帳單'], ['appetizer', '前菜'], ['entree', '主餐'], ['tip', '小費']],
    quizzes: [
      { type: 'choice', q: '「三分熟」的英文是？', opts: ['rare', 'medium rare', 'well done', 'medium'], ans: 1 },
      { type: 'choice', q: '可以不要加洋蔥嗎？正確英文是？', opts: ["No onion please.", "Can I get that without onions?", "I don't like onions.", "No onions for me."], ans: 1 },
      { type: 'choice', q: 'Could I have the ___ , please? 空格應填入？', opts: ['food', 'check', 'menu', 'water'], ans: 1 },
      { type: 'fill', q: '醬料可以另外放嗎？', en: 'Can I get the sauce on the ___ ?', ans: 'side' },
      { type: 'fill', q: '請給我兩人的桌位。', en: '___ for two please.', ans: 'Table' },
      { type: 'choice', q: '「前菜」的英文是？', opts: ['appetizer', 'dessert', 'entree', 'side'], ans: 0 },
      { type: 'choice', q: '你推薦這裡的什麼菜？正確英文是？', opts: ['What do you recommend?', 'What is good?', 'What should I eat?', 'What do you like?'], ans: 0 },
      { type: 'fill', q: '可以幫我打包嗎？', en: 'Can I get this ___ go?', ans: 'to' },
      { type: 'choice', q: '「小費」的英文是？', opts: ['tip', 'fee', 'charge', 'bonus'], ans: 0 },
      { type: 'fill', q: '我們可以分開付嗎？', en: 'Can we have ___ checks?', ans: 'separate' },
    ]
  },
  {
    num: 4, title: '職場 Workplace',
    vocab: [['hectic', '忙亂的'], ['inbox', '收件箱'], ['timeline', '時間表'], ['feedback', '回饋'], ['deadline', '截止日期'], ['presentation', '簡報'], ['request off', '請假'], ['meeting', '會議'], ['task', '任務'], ['colleague', '同事']],
    quizzes: [
      { type: 'choice', q: '「截止日期」的英文是？', opts: ['deadline', 'timeline', 'feedback', 'inbox'], ans: 0 },
      { type: 'choice', q: "I'd like to ___ next Monday off. 空格應填入？", opts: ['ask', 'request', 'take', 'have'], ans: 1 },
      { type: 'choice', q: '「忙亂的」是？', opts: ['busy', 'hectic', 'hard', 'tired'], ans: 1 },
      { type: 'fill', q: '我只是想確認一下截止日期。', en: 'I just want to ___ the deadline.', ans: 'confirm' },
      { type: 'fill', q: '簡報準備得怎麼樣了？', en: "How's the ___ coming along?", ans: 'presentation' },
      { type: 'choice', q: '「任務」的英文是？', opts: ['task', 'work', 'job', 'duty'], ans: 0 },
      { type: 'choice', q: '我們來開個會。正確英文是？', opts: ["Let's have a meeting.", "Let's do a meeting.", "Let's make a meeting.", "Let's go meeting."], ans: 0 },
      { type: 'fill', q: '你能給我一些回饋嗎？', en: 'Can you give me some ___ ?', ans: 'feedback' },
      { type: 'choice', q: '「同事」的英文是？', opts: ['coworker', 'colleague', 'partner', 'fellower'], ans: 1 },
      { type: 'fill', q: '我先把這項任務完成。', en: "Let me ___ this task first.", ans: 'finish' },
    ]
  },
  {
    num: 5, title: '電話英文 Phone Calls',
    vocab: [['hold on', '請稍候'], ['put through', '轉接'], ['voicemail', '語音信箱'], ['call back', '回電'], ['extension', '分機號碼'], ['hang up', '掛斷'], ['dial', '撥號'], ['available', '有空']],
    quizzes: [
      { type: 'choice', q: '「轉接」的英文是？', opts: ['hold on', 'put through', 'call back', 'hang up'], ans: 1 },
      { type: 'choice', q: 'May I ___ to Mr. Chen? 空格應填入？', opts: ['talk', 'speak', 'tell', 'say'], ans: 1 },
      { type: 'choice', q: 'Can I leave a ___ ?', opts: ['note', 'message', 'word', 'call'], ans: 1 },
      { type: 'fill', q: '請問陳先生在嗎？', en: 'May I ___ to Mr. Chen, please?', ans: 'speak' },
      { type: 'fill', q: '我等一下再打給你。', en: "I'll ___ you back later.", ans: 'call' },
      { type: 'choice', q: '「請稍候」的英文是？', opts: ['wait a moment', 'hold on', 'stay there', 'keep waiting'], ans: 1 },
      { type: 'choice', q: '「語音信箱」的英文是？', opts: ['voice mail', 'voice box', 'talk mail', 'phone box'], ans: 0 },
      { type: 'fill', q: '請在嗶聲後留言。', en: 'Please leave a message after the ___ .', ans: 'beep' },
      { type: 'choice', q: '他現在不在位子上。英文是？', opts: ["He's not here.", "He's not available right now.", "He's not at desk.", "He's out of office."], ans: 1 },
      { type: 'fill', q: '我的分機號碼是 123。', en: 'My ___ is 123.', ans: 'extension' },
    ]
  },
  {
    num: 6, title: '社交聚會 Social Gatherings',
    vocab: [['icebreaker', '破冰話題'], ['small talk', '閒聊'], ['catch up', '敘舊'], ['hang out', '聚會、出去晃晃'], ['get together', '聚會'], ['host', '主人'], ['party', '派對'], ['invite', '邀請']],
    quizzes: [
      { type: 'choice', q: '「敘舊」的英文是？', opts: ['small talk', 'catch up', 'hang out', 'icebreaker'], ans: 1 },
      { type: 'choice', q: 'How do you know the ___ ? 空格應填入？', opts: ['party', 'host', 'place', 'time'], ans: 1 },
      { type: 'choice', q: 'What do you do for ___ ?', opts: ['work', 'fun', 'money', 'food'], ans: 1 },
      { type: 'fill', q: '我們改天敘敘舊吧！', en: "Let's ___ up sometime!", ans: 'catch' },
      { type: 'fill', q: '很高興跟你聊天！', en: 'It was really nice ___ to you!', ans: 'talking' },
      { type: 'choice', q: '「破冰話題」的英文是？', opts: ['icebreaker', 'small talk', 'opener', 'starter'], ans: 0 },
      { type: 'choice', q: '你過得怎麼樣？正確英文是？', opts: ['How are you?', "How's it going?", 'How do you do?', 'What are you?'], ans: 1 },
      { type: 'fill', q: '我們找時間聚聚吧！', en: "Let's ___ out sometime!", ans: 'hang' },
      { type: 'choice', q: '「閒聊」的英文是？', opts: ['big talk', 'small talk', 'short talk', 'free talk'], ans: 1 },
      { type: 'fill', q: '你怎麼認識主人的？', en: 'How do you know the ___ ?', ans: 'host' },
    ]
  },
  {
    num: 7, title: '便利店 Convenience Store',
    vocab: [['convenience store', '便利商店'], ['gas station', '加油站'], ['receipt', '收據'], ['lotto ticket', '樂透彩券'], ['ale / beer', '啤酒'], ['gum', '口香糖'], ['snacks', '零食'], ['toiletries', '盥洗用品']],
    quizzes: [
      { type: 'choice', q: '「收據」的英文是？', opts: ['recipe', 'receipt', 'ticket', 'paper'], ans: 1 },
      { type: 'choice', q: 'Fill it ___ , please. 空格應填入？', opts: ['in', 'up', 'out', 'over'], ans: 1 },
      { type: 'choice', q: 'Regular or ___ ?（加油時）', opts: ['special', 'premium', 'great', 'super'], ans: 1 },
      { type: 'fill', q: '零食在哪裡？', en: 'Where can I find the ___ ?', ans: 'snacks' },
      { type: 'fill', q: '我可以買一包口香糖嗎？', en: 'Can I get a ___ of gum?', ans: 'pack' },
      { type: 'choice', q: '這裡有洗手間嗎？正確英文是？', opts: ['Where is toilet?', 'Is there a restroom here?', 'Where can I pee?', 'Is there a bathroom?'], ans: 1 },
      { type: 'choice', q: '「加油站」的英文是？', opts: ['gas stop', 'gas station', 'oil station', 'fuel stop'], ans: 1 },
      { type: 'fill', q: '請問你們有賣香菸嗎？', en: 'Do you sell ___ ?', ans: 'cigarettes' },
      { type: 'choice', q: '我要在 5 號加油槍加 20 美元。', opts: ['Fill it up please.', 'Can I get $20 on pump 5?', '$20 gas on pump 5 please.', 'Give me $20 on 5.'], ans: 1 },
      { type: 'fill', q: '可以給我一個袋子嗎？', en: 'Can I get a ___ for 5 cents?', ans: 'bag' },
    ]
  },
  {
    num: 8, title: '城市生活 City Life',
    vocab: [['rush hour', '尖峰時段'], ['street performer', '街頭藝人'], ['public transportation', '大眾運輸'], ['crosswalk', '行人穿越道'], ['subway', '地鐵'], ['sidewalk', '人行道'], ['intersection', '十字路口']],
    quizzes: [
      { type: 'choice', q: '「尖峰時段」的英文是？', opts: ['busy time', 'rush hour', 'peak moment', 'high time'], ans: 1 },
      { type: 'choice', q: "Is there a farmer's ___ nearby? 空格應填入？", opts: ['shop', 'market', 'store', 'stand'], ans: 1 },
      { type: 'choice', q: 'How do you usually ___ to work?', opts: ['go', 'get', 'come', 'drive'], ans: 1 },
      { type: 'fill', q: '我搭地鐵，比開車快。', en: "I take the ___ . It's faster than driving.", ans: 'subway' },
      { type: 'fill', q: '坐紅線到 59 街。', en: 'Take the ___ line to 59th Street.', ans: 'red' },
      { type: 'choice', q: '「人行道」的英文是？', opts: ['sidewalk', 'roadway', 'walkway', 'footpath'], ans: 0 },
      { type: 'choice', q: '在第二個十字路口右轉。正確英文是？', opts: ['Turn right at second street.', 'Turn right at the second intersection.', 'Right turn at second corner.', 'Turn second right.'], ans: 1 },
      { type: 'fill', q: '最近的地鐵站在哪裡？', en: 'Where is the nearest ___ station?', ans: 'subway' },
      { type: 'choice', q: '單程票多少錢？', opts: ['How much for one-way?', 'How much is a single ticket?', 'How much one ticket?', 'How much for single?'], ans: 0 },
      { type: 'fill', q: '這附近有超市嗎？', en: 'Is there a ___ nearby?', ans: 'supermarket' },
    ]
  },
  {
    num: 9, title: '休閒娛樂 Leisure & Entertainment',
    vocab: [['hang out', '出遊、閒晃'], ['plan', '計劃'], ['free time', '空閒時間'], ['movie theater', '電影院'], ['concert', '演唱會'], ['reservation', '預訂'], ['ticket', '票'], ['weekend', '週末']],
    quizzes: [
      { type: 'choice', q: '你週末想做什麼？正確英文是？', opts: ["What do you do on weekends?", "What do you want to do this weekend?", "What are you doing?", "Where do you go?"], ans: 1 },
      { type: 'choice', q: 'Sounds like a ___ !', opts: ['plan', 'idea', 'fun', 'good'], ans: 0 },
      { type: 'choice', q: '「空閒時間」的英文是？', opts: ['busy time', 'free time', 'work time', 'good time'], ans: 1 },
      { type: 'fill', q: '我們去看電影吧！', en: "Let's go ___ a movie!", ans: 'see' },
      { type: 'fill', q: '我星期六有空。', en: "I'm ___ on Saturday.", ans: 'free' },
      { type: 'choice', q: '「演唱會」的英文是？', opts: ['concert', 'show', 'performance', 'gig'], ans: 0 },
      { type: 'choice', q: '聽起來很好玩！英文是？', opts: ['Sounds fun!', 'Looks great!', 'Hears good!', 'Seems nice!'], ans: 0 },
      { type: 'fill', q: '我們要不要一起出去玩？', en: 'Do you want to ___ out this weekend?', ans: 'hang' },
      { type: 'choice', q: '「預訂」的英文是？', opts: ['reservation', 'booking', 'both A and B', 'ordering'], ans: 2 },
      { type: 'fill', q: '電影幾點開始？', en: 'What time does the ___ start?', ans: 'movie' },
    ]
  },
  {
    num: 10, title: '結帳英文 Checkout',
    vocab: [['total', '總金額'], ['cash or credit', '現金或信用卡'], ['receipt', '收據'], ['bag', '袋子'], ['coupon', '優惠券'], ['discount', '折扣'], ['split the bill', '分攤帳單'], ['change', '零錢']],
    quizzes: [
      { type: 'choice', q: '「總金額」的英文是？', opts: ['total', 'sum', 'all', 'count'], ans: 0 },
      { type: 'choice', q: 'How would you like to ___ ? 空格應填入？', opts: ['pay', 'spend', 'cost', 'buy'], ans: 0 },
      { type: 'choice', q: "We'd like to ___ the bill. 正確的動詞是？", opts: ['cut', 'split', 'break', 'share'], ans: 1 },
      { type: 'fill', q: '我用卡片付款。', en: "I'll ___ with a card.", ans: 'pay' },
      { type: 'fill', q: '可以給個袋子嗎？', en: 'Could I have a ___ , please?', ans: 'bag' },
      { type: 'choice', q: '「折扣」的英文是？', opts: ['discount', 'reduce', 'cheaper', 'sale'], ans: 0 },
      { type: 'choice', q: '我有優惠券。英文是？', opts: ['I have coupon.', 'I have a coupon.', 'I got coupon.', 'I take coupon.'], ans: 1 },
      { type: 'fill', q: '零錢不用找了。', en: 'Keep the ___ .', ans: 'change' },
      { type: 'choice', q: '可以分開付嗎？', opts: ['Can we pay separate?', 'Can we split the payment?', 'Can we pay separately?', 'All correct'], ans: 3 },
      { type: 'fill', q: '可以幫我列印收據嗎？', en: 'Could I get a ___ please?', ans: 'receipt' },
    ]
  },
  {
    num: 11, title: '醫療英文 Medical',
    vocab: [['appointment', '預約掛號'], ['pharmacy', '藥局'], ['prescription', '處方籤'], ['insurance card', '保險卡'], ['symptoms', '症狀'], ['fever', '發燒'], ['cough', '咳嗽'], ['emergency', '急診']],
    quizzes: [
      { type: 'choice', q: '「症狀」的英文是？', opts: ['signs', 'symptoms', 'feeling', 'illness'], ans: 1 },
      { type: 'choice', q: 'I need to pick ___ a prescription. 空格應填入？', opts: ['in', 'up', 'out', 'off'], ans: 1 },
      { type: 'choice', q: 'Do you have ___ ?（看診時問）', opts: ['money', 'insurance', 'time', 'card'], ans: 1 },
      { type: 'fill', q: '我想預約掛號。', en: "I'd like to make an ___ .", ans: 'appointment' },
      { type: 'fill', q: '我發燒喉嚨痛兩天了。', en: "I've had a fever and a ___ throat for two days.", ans: 'sore' },
      { type: 'choice', q: '「藥局」的英文是？', opts: ['drug store', 'pharmacy', 'medicine shop', 'chemist'], ans: 1 },
      { type: 'choice', q: '我對青黴素過敏。英文是？', opts: ["I'm allergic to penicillin.", "I hate penicillin.", "I don't like penicillin.", "I avoid penicillin."], ans: 0 },
      { type: 'fill', q: '哪裡不舒服？', en: "What seems to be the ___ ?", ans: 'problem' },
      { type: 'choice', q: '「急診」的英文是？', opts: ['emergency', 'urgent care', 'ER', 'all correct'], ans: 3 },
      { type: 'fill', q: '我需要看醫生。', en: "I need to ___ a doctor.", ans: 'see' },
    ]
  },
  {
    num: 12, title: '點飲料 Ordering Drinks',
    vocab: [['iced / hot', '冰的 / 熱的'], ['to go / for here', '外帶 / 內用'], ['regular size', '一般尺寸'], ['large size', '大杯'], ['refill', '續杯'], ['straw', '吸管'], ['espresso', '濃縮咖啡'], ['decaf', '低咖啡因']],
    quizzes: [
      { type: 'choice', q: '「內用」的英文是？', opts: ['for here', 'to go', 'eat in', 'dine in'], ans: 0 },
      { type: 'choice', q: 'Can I get that ___ ?（做成冰的）', opts: ['cold', 'iced', 'cool', 'frozen'], ans: 1 },
      { type: 'choice', q: 'What ___ would you like?（尺寸）', opts: ['size', 'type', 'kind', 'number'], ans: 0 },
      { type: 'fill', q: '我要一杯拿鐵。', en: "I'll ___ a latte, please.", ans: 'have' },
      { type: 'fill', q: '一般尺寸就可以了。', en: '___ is fine.', ans: 'Regular' },
      { type: 'choice', q: '「外帶」的英文是？', opts: ['to go', 'take out', 'take away', 'all correct'], ans: 3 },
      { type: 'choice', q: '可以幫我加一份濃縮嗎？', opts: ['Can I add a shot?', 'Can I get extra shot?', 'Add an extra shot please.', 'All correct'], ans: 3 },
      { type: 'fill', q: '我要低咖啡因的。', en: 'Can I get that ___ ?', ans: 'decaf' },
      { type: 'choice', q: '「續杯」的英文是？', opts: ['refill', 'again cup', 'second cup', 'more cup'], ans: 0 },
      { type: 'fill', q: '可以給我一張收據嗎？', en: 'Can I get a ___ please?', ans: 'receipt' },
    ]
  },
  {
    num: 13, title: '居家生活 Home & Daily Life',
    vocab: [['landlord', '房東'], ['lease', '租約'], ['repair', '維修'], ['utility bill', '水電帳單'], ['neighbor', '鄰居'], ['clogged', '堵塞的'], ['AC', '冷氣'], ['wifi', '無線網路']],
    quizzes: [
      { type: 'choice', q: '「水槽堵塞了」的英文是？', opts: ['The sink is broken.', 'The sink is clogged.', 'The sink is full.', 'The sink is stuck.'], ans: 1 },
      { type: 'choice', q: 'The AC ___ working. 空格應填入否定？', opts: ["isn't", "don't", "doesn't", "won't"], ans: 0 },
      { type: 'choice', q: '「房東」的英文是？', opts: ['landlord', 'owner', 'landowner', 'house lord'], ans: 0 },
      { type: 'fill', q: '可以派人來修理嗎？', en: 'Can you send someone to ___ it?', ans: 'fix' },
      { type: 'fill', q: '你付水電帳單了嗎？', en: 'Did you pay the ___ bill yet?', ans: 'electric' },
      { type: 'choice', q: '「租約」的英文是？', opts: ['lease', 'rent', 'contract', 'agreement'], ans: 0 },
      { type: 'choice', q: 'WiFi 密碼是多少？英文是？', opts: ["What's the WiFi?", "What's the WiFi password?", "What's the internet?", "What's the network?"], ans: 1 },
      { type: 'fill', q: '鄰居太吵了。', en: 'The ___ are too loud.', ans: 'neighbors' },
      { type: 'choice', q: '馬桶不通了。英文是？', opts: ['The toilet is broken.', 'The toilet is clogged.', 'The toilet is full.', 'The toilet is bad.'], ans: 1 },
      { type: 'fill', q: '熱水器壞了。', en: 'The ___ heater is broken.', ans: 'water' },
    ]
  },
  {
    num: 14, title: '旅遊英文 Travel',
    vocab: [['check-in', '報到 / 入住'], ['boarding pass', '登機證'], ['luggage / baggage', '行李'], ['passport', '護照'], ['hotel reservation', '飯店預約'], ['gate', '登機門'], ['delay', '延誤'], ['customs', '海關']],
    quizzes: [
      { type: 'choice', q: '「登機證」的英文是？', opts: ['boarding pass', 'boarding card', 'ticket', 'pass'], ans: 0 },
      { type: 'choice', q: 'What time is ___ ?（退房時間）', opts: ['check-in', 'checkout', 'leaving', 'exit'], ans: 1 },
      { type: 'choice', q: 'Do you have any rooms ___ ?', opts: ['free', 'available', 'empty', 'open'], ans: 1 },
      { type: 'fill', q: '我要辦理入住。', en: "I'd like to ___ in, please.", ans: 'check' },
      { type: 'fill', q: '退房時間是上午 11 點。', en: '___ is at 11 AM.', ans: 'Checkout' },
      { type: 'choice', q: '「延誤」的英文是？', opts: ['delay', 'late', 'postpone', 'wait'], ans: 0 },
      { type: 'choice', q: '可以安排早一點的班機嗎？', opts: ['Is there an earlier flight?', 'Can I take early flight?', 'Is there morning flight?', 'Can I go earlier?'], ans: 0 },
      { type: 'fill', q: '我的行李還沒到。', en: "My ___ hasn't arrived yet.", ans: 'luggage' },
      { type: 'choice', q: '「海關」的英文是？', opts: ['custom', 'customs', 'tax', 'security'], ans: 1 },
      { type: 'fill', q: '登機門號碼是多少？', en: 'What is the ___ number?', ans: 'gate' },
    ]
  },
  {
    num: 15, title: '聽力訓練技巧',
    vocab: [['shadowing', '跟讀模仿'], ['immersion', '沉浸式'], ['input', '輸入'], ['keyword', '關鍵字'], ['theme-based', '主題式'], ['pronunciation', '發音'], ['intonation', '語調'], ['fluency', '流利度']],
    quizzes: [
      { type: 'choice', q: '「跟讀模仿」的英文是？', opts: ['reading', 'shadowing', 'following', 'repeating'], ans: 1 },
      { type: 'choice', q: '每天至少聽多久的全英文對話？', opts: ['15 分鐘', '30–60 分鐘', '2 小時', '10 分鐘'], ans: 1 },
      { type: 'choice', q: '「沉浸式」的英文是？', opts: ['immersive', 'immersion', 'deep', 'focused'], ans: 1 },
      { type: 'fill', q: '同一主題反覆聽 3–5 次。', en: '___ to the same topic 3-5 times.', ans: 'Listen' },
      { type: 'fill', q: '先掌握情境和關鍵字。', en: 'First grasp the context and ___ words.', ans: 'key' },
      { type: 'choice', q: '「流利度」的英文是？', opts: ['fluency', 'fluent', 'smooth', 'flow'], ans: 0 },
      { type: 'choice', q: '提升聽力的最好方法是？', opts: ['只閱讀', '多聽多接觸', '只寫作', '只背單字'], ans: 1 },
      { type: 'fill', q: '模仿母語人士的語調。', en: '___ the intonation of native speakers.', ans: 'Imitate' },
      { type: 'choice', q: '「發音」的英文是？', opts: ['pronunciation', 'pronounce', 'speaking', 'phonics'], ans: 0 },
      { type: 'fill', q: '每天聽英文，建立語感。', en: 'Listen to English daily to build ___ .', ans: 'intuition' },
    ]
  },
  {
    num: 16, title: '機場英文 Airport & Flight',
    vocab: [['check-in counter', '報到櫃檯'], ['security screening', '安檢'], ['boarding gate', '登機門'], ['carry-on', '隨身行李'], ['departure lounge', '候機室'], ['weight limit', '重量限制'], ['window seat', '靠窗座位'], ['aisle seat', '走道座位']],
    quizzes: [
      { type: 'choice', q: '「安檢」的英文是？', opts: ['security check', 'security screening', 'safety check', 'baggage check'], ans: 1 },
      { type: 'choice', q: 'Where is the ___ counter?（報到櫃檯）', opts: ['check-in', 'checkout', 'baggage', 'ticket'], ans: 0 },
      { type: 'choice', q: '我可以選靠窗座位嗎？', opts: ['Can I get a window seat?', 'Can I sit window?', 'I want window.', 'Window seat please?'], ans: 0 },
      { type: 'fill', q: '我的行李重量限制是多少？', en: "What's the weight ___ for checked luggage?", ans: 'limit' },
      { type: 'fill', q: '這班航班有延誤嗎？', en: 'Is there any ___ with this flight?', ans: 'delay' },
      { type: 'choice', q: '「登機門」的英文是？', opts: ['boarding gate', 'gate number', 'departure gate', 'all correct'], ans: 3 },
      { type: 'choice', q: '隨身行李的尺寸限制是多少？', opts: ['How big is carry-on?', 'What is the size limit for carry-on?', 'How much carry-on?', 'Carry-on size what?'], ans: 1 },
      { type: 'fill', q: '我的班機被取消了。', en: 'My flight has been ___ .', ans: 'cancelled' },
      { type: 'choice', q: '「候機室」的英文是？', opts: ['waiting room', 'departure lounge', 'boarding area', 'sitting zone'], ans: 1 },
      { type: 'fill', q: '可以幫我貼易碎標籤嗎？', en: 'Can you put a ___ tag on my luggage?', ans: 'fragile' },
    ]
  },
  {
    num: 17, title: '飯店住宿 Hotel Accommodation',
    vocab: [['check-in', '辦理入住'], ['checkout', '退房'], ['room service', '客房服務'], ['late checkout', '延遲退房'], ['lobby', '大廳'], ['complimentary', '免費贈送的'], ['housekeeping', '房務'], ['minibar', '迷你吧']],
    quizzes: [
      { type: 'choice', q: '「辦理入住」的英文是？', opts: ['check-in', 'come in', 'sign in', 'enter'], ans: 0 },
      { type: 'choice', q: 'Do you have any rooms ___ ? 空格應填入？', opts: ['free', 'available', 'empty', 'correct'], ans: 1 },
      { type: 'choice', q: 'What time is checkout? 意思是？', opts: ['退房時間幾點？', '入住時間幾點？', '幾點打掃？', '幾點吃早餐？'], ans: 0 },
      { type: 'fill', q: '我想辦理入住。', en: "I'd like to ___ in, please.", ans: 'check' },
      { type: 'fill', q: '早餐是幾點到幾點？', en: 'What time is ___ served?', ans: 'breakfast' },
      { type: 'choice', q: '「延遲退房」的英文是？', opts: ['late checkout', 'after checkout', 'extra checkout', 'more checkout'], ans: 0 },
      { type: 'choice', q: '房間有問題需要換房。英文是？', opts: ['I want other room.', 'Can I change my room?', 'My room has a problem.', 'I need different room.'], ans: 2 },
      { type: 'fill', q: '可以幫我加一張床嗎？', en: 'Can I get an ___ bed?', ans: 'extra' },
      { type: 'choice', q: '「客房服務」的英文是？', opts: ['room service', 'hotel service', 'bed service', 'door service'], ans: 0 },
      { type: 'fill', q: '請幫我叫計程車。', en: 'Can you call a ___ for me?', ans: 'taxi' },
    ]
  },
  {
    num: 18, title: '外送英文 Food Delivery',
    vocab: [['delivery', '外送'], ['order', '訂單'], ['delivery address', '送餐地址'], ['delivery fee', '外送費'], ['estimated time', '預計時間'], ['rating', '評分'], ['driver', '外送員'], ['substitute', '替代品']],
    quizzes: [
      { type: 'choice', q: '「外送」的英文是？', opts: ['takeout', 'delivery', 'to go', 'carry out'], ans: 1 },
      { type: 'choice', q: 'How long will the ___ take? 空格應填入？', opts: ['food', 'delivery', 'order', 'cook'], ans: 1 },
      { type: 'choice', q: '可以送到這個地址嗎？', opts: ['Can you deliver to this address?', 'Can you send to here?', 'Can you go to this address?', 'Can you bring to here?'], ans: 0 },
      { type: 'fill', q: '外送費是多少？', en: "What's the ___ fee?", ans: 'delivery' },
      { type: 'fill', q: '預計幾分鐘會到？', en: 'What is the ___ delivery time?', ans: 'estimated' },
      { type: 'choice', q: '「訂單」的英文是？', opts: ['order', 'food', 'meal', 'dish'], ans: 0 },
      { type: 'choice', q: '我可以修改訂單嗎？英文是？', opts: ['Can I change my order?', 'Can I fix my order?', 'Can I redo my order?', 'Can I modify?'], ans: 0 },
      { type: 'fill', q: '請幫我取消這筆訂單。', en: 'Please ___ this order.', ans: 'cancel' },
      { type: 'choice', q: '給外送員小費。英文是？', opts: ['Give tip to driver.', 'Leave a tip for the driver.', 'Give the driver a tip.', 'Both B and C'], ans: 3 },
      { type: 'fill', q: '餐點已經送到了嗎？', en: 'Has my ___ arrived yet?', ans: 'food' },
    ]
  },
  {
    num: 19, title: '開車與交通 Driving',
    vocab: [['rent a car', '租車'], ['gas station', '加油站'], ['parking lot', '停車場'], ['speed limit', '速限'], ['GPS / navigation', '導航'], ['flat tire', '爆胎'], ['traffic jam', '塞車'], ['driver license', '駕照']],
    quizzes: [
      { type: 'choice', q: '「租車」的英文是？', opts: ['hire a car', 'rent a car', 'borrow a car', 'take a car'], ans: 1 },
      { type: 'choice', q: 'Fill it up, please. 意思是？', opts: ['加滿油', '填表格', '裝滿行李', '登記入住'], ans: 0 },
      { type: 'choice', q: '最近的加油站在哪裡？', opts: ['Where is a gas station?', 'Where is the nearest gas station?', 'Where gas station?', 'How to gas station?'], ans: 1 },
      { type: 'fill', q: '這裡的速限是多少？', en: "What's the speed ___ here?", ans: 'limit' },
      { type: 'fill', q: '不好意思，我迷路了。', en: "I'm sorry, I'm ___ .", ans: 'lost' },
      { type: 'choice', q: '「塞車」的英文是？', opts: ['traffic jam', 'car jam', 'traffic block', 'road jam'], ans: 0 },
      { type: 'choice', q: '我需要租車三天。英文是？', opts: ['I need a car for three days.', 'I need to rent a car for three days.', 'I want rent car 3 days.', 'I need three days car.'], ans: 1 },
      { type: 'fill', q: '導航說在這裡左轉。', en: 'The GPS says to turn ___ here.', ans: 'left' },
      { type: 'choice', q: '「停車場」的英文是？', opts: ['parking lot', 'car park', 'parking area', 'all correct'], ans: 3 },
      { type: 'fill', q: '你可以幫我設定導航嗎？', en: 'Can you help me ___ the GPS?', ans: 'set' },
    ]
  },
  {
    num: 20, title: '超市購物 Grocery Shopping',
    vocab: [['grocery store', '超市'], ['shopping cart', '購物車'], ['aisle', '走道/貨架區'], ['produce', '生鮮蔬果'], ['dairy', '乳製品'], ['frozen food', '冷凍食品'], ['self-checkout', '自助結帳'], ['loyalty card', '會員卡']],
    quizzes: [
      { type: 'choice', q: '「生鮮蔬果區」的英文是？', opts: ['produce section', 'fresh area', 'vegetable zone', 'fruit aisle'], ans: 0 },
      { type: 'choice', q: 'Which ___ are the snacks in? 空格應填入？', opts: ['row', 'aisle', 'line', 'street'], ans: 1 },
      { type: 'choice', q: 'Do you have a loyalty card? 意思是？', opts: ['你有會員卡嗎？', '你有信用卡嗎？', '你有駕照嗎？', '你有學生證嗎？'], ans: 0 },
      { type: 'fill', q: '這個在哪個走道？', en: 'Which ___ is this in?', ans: 'aisle' },
      { type: 'fill', q: '我今天有帶會員卡。', en: 'I have my ___ card today.', ans: 'loyalty' },
      { type: 'choice', q: '「自助結帳」的英文是？', opts: ['self-checkout', 'self-pay', 'auto checkout', 'self-cashier'], ans: 0 },
      { type: 'choice', q: '這個有在特價嗎？英文是？', opts: ['Is this on sale?', 'Is this cheap?', 'Is this discount?', 'Is this special?'], ans: 0 },
      { type: 'fill', q: '可以幫我秤重嗎？', en: 'Can you ___ this for me?', ans: 'weigh' },
      { type: 'choice', q: '「乳製品」的英文是？', opts: ['dairy', 'milk product', 'cheese section', 'yogurt area'], ans: 0 },
      { type: 'fill', q: '我需要一個購物籃。', en: 'I need a shopping ___ .', ans: 'basket' },
    ]
  }
]
