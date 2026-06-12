import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyClM_7W3UXlIJzbunmktHRfgVC0eHLFJv0',
  authDomain: 'speakup-ai-english.firebaseapp.com',
  projectId: 'speakup-ai-english',
  storageBucket: 'speakup-ai-english.firebasestorage.app',
  messagingSenderId: '645218512607',
  appId: '1:645218512607:web:7f62196aedf145a3e6c36a'
}

const app = initializeApp(FIREBASE_CONFIG)
const db = getFirestore(app)
const auth = getAuth(app)

const vocab = (pairs) => pairs.map(([en, zh]) => ({ en, zh }))

const quizData = [
  {
    num: 1, title: '交通 Transportation',
    vocab: vocab([['commute', '通勤'], ['transfer', '轉乘'], ['walking distance', '步行距離'], ['reload my card', '儲值卡片'], ['trunk', '後車廂'], ['parking ticket', '罰單'], ['gas tank', '油箱'], ['blocks', '街區'], ['fare', '車資'], ['schedule', '時刻表']]),
    quizzes: [
      { type: 'choice', q: '「轉乘」的英文是？', opts: ['commute', 'transfer', 'reload', 'blocks'], ans: 1 },
      { type: 'choice', q: '「步行距離」的英文是？', opts: ['walking distance', 'blocks away', 'gas tank', 'parking ticket'], ans: 0 },
      { type: 'choice', q: '「後車廂」的英文是？', opts: ['trunk', 'truck', 'trump', 'track'], ans: 0 },
      { type: 'choice', q: '「加油」最道地的說法是？', opts: ['load oil', 'gas up the car', 'fill the oil', 'fuel up the car'], ans: 1 },
      { type: 'fill', q: '「這班公車有到市中心嗎？」', en: 'Does this bus go downtown?', ans: 'Does this bus go downtown?' },
      { type: 'choice', q: '「三個街區外」的英文是？', opts: ['three blocks away', 'three streets far', 'three block far', 'three turns away'], ans: 0 },
      { type: 'fill', q: '「這裡是去機場的巴士嗎？」', en: 'Is this the right bus to the airport?', ans: 'Is this the right bus to the airport?' },
      { type: 'choice', q: 'Where do I transfer? 的中文意思是？', opts: ['我該在哪裡下車？', '我該在哪裡換乘？', '我該在哪裡買票？', '我該在哪裡等車？'], ans: 1 },
      { type: 'choice', q: '「車資」的英文是？', opts: ['fee', 'fare', 'fair', 'far'], ans: 1 },
      { type: 'fill', q: '走路到那裡要多久？', en: 'How long does it take to get there on foot?', ans: 'How long does it take to get there on foot?' },
    ]
  },
  {
    num: 2, title: '購物 Shopping',
    vocab: vocab([['try on', '試穿'], ['fitting room', '試衣間'], ['on sale', '打折'], ['receipt', '收據'], ['return', '退貨'], ['exchange', '換貨'], ['price tag', '標籤/價格牌'], ['one size', '單一尺寸'], ['checkout', '結帳'], ['gift receipt', '禮物收據']]),
    quizzes: [
      { type: 'choice', q: '「試穿」的英文是？', opts: ['try out', 'try on', 'wear it', 'put on'], ans: 1 },
      { type: 'choice', q: '「試衣間」的英文是？', opts: ['dressing room', 'fitting room', 'changing room', '以上皆可'], ans: 3 },
      { type: 'fill', q: '「這件有中號的嗎？」', en: 'Do you have this in medium?', ans: 'Do you have this in medium?' },
      { type: 'choice', q: '哪個是「打折」的正確用法？', opts: ['on sale', 'in sale', 'at sale', 'for sale'], ans: 0 },
      { type: 'choice', q: '「收據」的英文是？', opts: ['recipe', 'receipt', 'receive', 'reception'], ans: 1 },
      { type: 'choice', q: '哪句是要「退貨」？', opts: ['I want to return this.', 'I want to exchange this.', 'I want a discount.', 'I want to try this.'], ans: 0 },
      { type: 'fill', q: '「這件有點太小了。」', en: 'I think this is too small.', ans: 'I think this is too small.' },
      { type: 'choice', q: '「價格牌」的英文是？', opts: ['price tag', 'price label', 'price card', 'price sign'], ans: 0 },
      { type: 'choice', q: '「禮物收據」的英文是？', opts: ['present receipt', 'gift receipt', 'gift card', 'return receipt'], ans: 1 },
      { type: 'fill', q: '「我只是隨意看看。」', en: "I'm just browsing.", ans: "I'm just browsing." },
    ]
  },
  {
    num: 3, title: '餐飲 Dining',
    vocab: vocab([['reservation', '預約'], ['appetizer', '開胃菜'], ['main course', '主餐'], ['dessert', '甜點'], ['check / bill', '帳單'], ['tip', '小費'], ['to-go box', '外帶盒'], ['recommend', '推薦'], ['split the check', '分開付'], ['leftovers', '剩菜']]),
    quizzes: [
      { type: 'choice', q: '「預約」的英文是？', opts: ['reservation', 'preservation', 'observation', 'conservation'], ans: 0 },
      { type: 'choice', q: '「我想外帶」怎麼說？', opts: ["I'd like to eat here.", "I'd like that to go.", "I'd like to sit down.", "I'd like a receipt."], ans: 1 },
      { type: 'fill', q: '「你推薦這裡的什麼菜？」', en: "What do you recommend here?", ans: "What do you recommend here?" },
      { type: 'choice', q: '「開胃菜」的英文是？', opts: ['appetizer', 'main course', 'dessert', 'beverage'], ans: 0 },
      { type: 'fill', q: '「我們可以分開付嗎？」', en: 'Could we split the check?', ans: 'Could we split the check?' },
      { type: 'choice', q: '美國餐廳通常給多少小費？', opts: ['5-10%', '10-15%', '15-20%', '20-25%'], ans: 2 },
      { type: 'choice', q: '「外帶盒」的英文是？', opts: ['doggy bag', 'to-go box', 'takeout box', '以上皆可'], ans: 3 },
      { type: 'fill', q: '「可以幫我們買單嗎？」', en: 'Could we get the check, please?', ans: 'Could we get the check, please?' },
      { type: 'choice', q: '「甜點」的英文是？', opts: ['desert', 'dessert', 'dissent', 'decent'], ans: 1 },
      { type: 'choice', q: '服務生問「How is everything?」該怎麼回？', opts: ['Fine, thank you.', "Everything's great, thanks!", 'I like it.', 'Good.'], ans: 1 },
    ]
  },
  {
    num: 4, title: '職場 Workplace',
    vocab: vocab([['deadline', '截止日'], ['meeting', '會議'], ['colleague', '同事'], ['project', '專案'], ['presentation', '簡報'], ['request off', '請假'], ['schedule', '行程'], ['task', '任務'], ['review', '審查'], ['feedback', '回饋']]),
    quizzes: [
      { type: 'choice', q: '「截止日」的英文是？', opts: ['deadline', 'dateline', 'headline', 'outline'], ans: 0 },
      { type: 'fill', q: '「簡報準備得怎麼樣了？」', en: "How's the presentation coming along?", ans: "How's the presentation coming along?" },
      { type: 'choice', q: '「我想請下週一的假」怎麼說？', opts: ["I'd like to request next Monday off.", "I want to take next Monday.", "I need next Monday.", "I'm off next Monday."], ans: 0 },
      { type: 'choice', q: '「同事」的英文是？', opts: ['colleague', 'college', 'collage', 'coworker'], ans: 0 },
      { type: 'fill', q: '「我只是想確認一下截止日期。」', en: 'I just want to confirm the deadline.', ans: 'I just want to confirm the deadline.' },
      { type: 'choice', q: '「專案」的英文是？', opts: ['project', 'object', 'subject', 'reject'], ans: 0 },
      { type: 'choice', q: '老外說「Let\'s circle back」是什麼意思？', opts: ['繞路走', '之後再討論', '回去開會', '重新開始'], ans: 1 },
      { type: 'fill', q: '「請在今天結束前寄給我。」', en: 'Please send it to me by the end of today.', ans: 'Please send it to me by the end of today.' },
      { type: 'choice', q: '「feedback」的中文是？', opts: ['回饋', '前饋', '反饋', '以上皆可'], ans: 2 },
      { type: 'choice', q: 'I\'ll follow up with you. 的中文是？', opts: ['我會隨後找你', '我會跟著你', '我會跟你合作', '我會請教你'], ans: 0 },
    ]
  },
  {
    num: 5, title: '電話 Phone',
    vocab: vocab([['hold', '等候'], ['transfer', '轉接'], ['voicemail', '語音信箱'], ['extension', '分機'], ['available', '有空/可接聽'], ['call back', '回電'], ['message', '留言'], ['appointment', '預約'], ['schedule', '安排行程'], ['customer service', '客服']]),
    quizzes: [
      { type: 'choice', q: '客服說「Please hold」是什麼意思？', opts: ['請拿著', '請稍等', '請掛斷', '請回電'], ans: 1 },
      { type: 'fill', q: '「我想預約這週。」', en: "I'd like to make an appointment this week.", ans: "I'd like to make an appointment this week." },
      { type: 'choice', q: '「語音信箱」的英文是？', opts: ['voicemail', 'voicebox', 'speakermail', 'mailbox'], ans: 0 },
      { type: 'choice', q: 'Can I take a message? 的意思是？', opts: ['我可以留言嗎？', '我可以幫您留言嗎？', '我可以收訊息嗎？', '我可以打電話嗎？'], ans: 1 },
      { type: 'fill', q: '「我打來是想詢問價格。」', en: "I'm calling to ask about pricing.", ans: "I'm calling to ask about pricing." },
      { type: 'choice', q: '「分機號碼」的英文是？', opts: ['extension', 'extra number', 'internal line', 'branch'], ans: 0 },
      { type: 'choice', q: 'I\'ll transfer you. 的意思是？', opts: ['我幫你轉學', '我幫你轉接', '我幫你轉讓', '我幫你轉職'], ans: 1 },
      { type: 'fill', q: '「請在語音提示後留言。」', en: 'Please leave your message after the tone.', ans: 'Please leave your message after the tone.' },
      { type: 'choice', q: '「回電」的英文是？', opts: ['call back', 'callback', 'call again', 'return call'], ans: 0 },
      { type: 'choice', q: 'Are you available? 的意思是？', opts: ['你現在方便說話嗎？', '你現在有空嗎？', '你可以接聽嗎？', '以上皆是'], ans: 3 },
    ]
  },
  {
    num: 6, title: '社交 Social',
    vocab: vocab([['small talk', '閒聊寒暄'], ['common', '共同的'], ['hobby', '嗜好'], ['host', '主人'], ['party', '派對'], ['vibe', '氣氛'], ['grab a drink', '去喝一杯'], ['catch up', '敘舊'], ['hang out', '出去玩'], ['introduce', '自我介紹']]),
    quizzes: [
      { type: 'choice', q: '「閒聊」的英文是？', opts: ['big talk', 'small talk', 'tall talk', 'short talk'], ans: 1 },
      { type: 'choice', q: '破冰最適合說哪句？', opts: ["I don't think we've met.", "I don't know you.", 'Who are you?', 'What is your name?'], ans: 0 },
      { type: 'fill', q: '「你怎麼認識主人的？」', en: 'How do you know the host?', ans: 'How do you know the host?' },
      { type: 'choice', q: '「氣氛」的英文是？', opts: ['vibe', 'vibrate', 'vivid', 'vocal'], ans: 0 },
      { type: 'choice', q: '「敘舊」的英文是？', opts: ['catch up', 'catch out', 'catch in', 'catch down'], ans: 0 },
      { type: 'fill', q: '「我們應該找時間聚聚！」', en: 'We should hang out sometime!', ans: 'We should hang out sometime!' },
      { type: 'choice', q: 'We should do this again! 的意思是？', opts: ['我們應該再來一次！', '我們應該再約一次！', '我們應該再做一次！', '我們應該再辦一次！'], ans: 1 },
      { type: 'choice', q: '「去喝一杯」的英文是？', opts: ['drink one', 'grab a drink', 'take a drink', 'have a drink'], ans: 1 },
      { type: 'choice', q: 'I had a great time! 的意思是？', opts: ['我有一個偉大的時間', '我玩得很開心', '我有足夠的時間', '我度過了很長的時間'], ans: 1 },
      { type: 'fill', q: '「這個派對真的很棒！」', en: 'This party is really nice!', ans: 'This party is really nice!' },
    ]
  },
  {
    num: 7, title: '便利商店 Convenience Store',
    vocab: vocab([['aisle', '走道'], ['snacks', '零食'], ['restroom', '洗手間'], ['in stock', '有庫存'], ['lottery ticket', '樂透彩券'], ['microwave', '微波爐'], ['receipt', '收據'], ['change', '零錢'], ['ATM', '提款機'], ['lotto', '樂透']]),
    quizzes: [
      { type: 'choice', q: '「走道」的英文是？', opts: ['aisle', 'isle', "I'll", 'all'], ans: 0 },
      { type: 'choice', q: '「有庫存嗎？」的英文是？', opts: ['Is it in stock?', 'Do you have more?', 'Is it available?', '以上皆可'], ans: 3 },
      { type: 'fill', q: '「洗手間在哪裡？」', en: 'Where is the restroom?', ans: 'Where is the restroom?' },
      { type: 'choice', q: '「微波爐加熱」怎麼說？', opts: ['heat it in the microwave', 'cook it', 'warm it up', 'microwave it'], ans: 0 },
      { type: 'choice', q: '「零錢」的英文是？', opts: ['change', 'coin', 'cash', 'bill'], ans: 0 },
      { type: 'choice', q: 'Can I get a bag? 的中文是？', opts: ['我可以拿一個袋子嗎？', '我可以買一個包包嗎？', '我可以要一個背包嗎？', '我可以寄行李嗎？'], ans: 0 },
      { type: 'fill', q: '「這瓶水多少錢？」', en: 'How much is this bottle of water?', ans: 'How much is this bottle of water?' },
      { type: 'choice', q: '「收據」的英文是？', opts: ['recipe', 'receipt', 'record', 'reception'], ans: 1 },
      { type: 'choice', q: '「樂透彩券」的英文是？', opts: ['lottery ticket', 'lucky ticket', 'lottery paper', 'lottery card'], ans: 0 },
      { type: 'fill', q: '「這裡有洗手間嗎？」', en: 'Is there a restroom here?', ans: 'Is there a restroom here?' },
    ]
  },
  {
    num: 8, title: '城市生活 City Life',
    vocab: vocab([['bus stop', '公車站'], ['subway station', '地鐵站'], ['downtown', '市中心'], ['neighborhood', '社區/街區'], ['landmark', '地標'], ['rush hour', '尖峰時段'], ['one-way', '單程'], ['round trip', '來回'], ['traffic', '交通'], ['sidewalk', '人行道']]),
    quizzes: [
      { type: 'choice', q: '「公車站」的英文是？', opts: ['bus stop', 'bus station', 'bus port', 'bus bay'], ans: 0 },
      { type: 'choice', q: '「尖峰時段」的英文是？', opts: ['rush hour', 'busy hour', 'peak hour', 'heavy hour'], ans: 0 },
      { type: 'fill', q: '「這班火車去市中心嗎？」', en: 'Does this train go downtown?', ans: 'Does this train go downtown?' },
      { type: 'choice', q: '「來回票」的英文是？', opts: ['double ticket', 'return ticket', 'round trip', 'two-way'], ans: 2 },
      { type: 'choice', q: '「地標」的英文是？', opts: ['landmark', 'landlord', 'landscape', 'landing'], ans: 0 },
      { type: 'fill', q: '「走路能到嗎？」', en: 'Is it within walking distance?', ans: 'Is it within walking distance?' },
      { type: 'choice', q: '「人行道」的英文是？', opts: ['sidewalk', 'highway', 'driveway', 'pathway'], ans: 0 },
      { type: 'choice', q: 'Traffic was brutal. 的中文是？', opts: ['交通很殘暴', '交通糟透了', '交通很恐怖', '交通很野蠻'], ans: 1 },
      { type: 'fill', q: '「到那裡要多久？」', en: 'How long does it take to get there?', ans: 'How long does it take to get there?' },
      { type: 'choice', q: '「街區」的英文是？', opts: ['block', 'street', 'road', 'lane'], ans: 0 },
    ]
  },
  {
    num: 9, title: '休閒娛樂 Leisure',
    vocab: vocab([['ticket', '門票'], ['showtime', '放映時間'], ['book', '預訂'], ['availability', '空位'], ['concession', '販賣部'], ['popcorn', '爆米花'], ['cancel', '取消'], ['refund', '退款'], ['box office', '售票口'], ['trailer', '預告片']]),
    quizzes: [
      { type: 'choice', q: '「門票」的英文是？', opts: ['ticket', 'token', 'card', 'coupon'], ans: 0 },
      { type: 'fill', q: '「我想訂兩張票。」', en: "I'd like to book two tickets.", ans: "I'd like to book two tickets." },
      { type: 'choice', q: '「放映時間」的英文是？', opts: ['showtime', 'screening time', 'playtime', 'movie time'], ans: 0 },
      { type: 'choice', q: '「售票口」的英文是？', opts: ['ticket box', 'box office', 'ticket office', 'booking desk'], ans: 1 },
      { type: 'fill', q: '「今晚還有空位嗎？」', en: 'Are there seats available for tonight?', ans: 'Are there seats available for tonight?' },
      { type: 'choice', q: '「取消」的英文是？', opts: ['cancel', 'council', 'conceal', 'concept'], ans: 0 },
      { type: 'choice', q: '「退款」的英文是？', opts: ['return', 'refund', 'rebound', 'renew'], ans: 1 },
      { type: 'choice', q: '「販賣部」的英文是？', opts: ['concession', 'confession', 'conception', 'conclusion'], ans: 0 },
      { type: 'fill', q: '「要來點爆米花嗎？」', en: 'Would you like some popcorn?', ans: 'Would you like some popcorn?' },
      { type: 'choice', q: '「預告片」的英文是？', opts: ['trailer', 'teaser', 'preview', '以上皆是'], ans: 3 },
    ]
  },
  {
    num: 10, title: '結帳 Checkout',
    vocab: vocab([['cash', '現金'], ['credit card', '信用卡'], ['debit card', '簽帳卡'], ['change', '零錢'], ['total', '總金額'], ['discount', '折扣'], ['coupon', '優惠券'], ['receipt', '收據'], ['tax', '稅金'], ['Apple Pay', 'Apple Pay']]),
    quizzes: [
      { type: 'choice', q: '「現金」的英文是？', opts: ['cash', 'card', 'coin', 'credit'], ans: 0 },
      { type: 'fill', q: '「可以用信用卡嗎？」', en: 'Can I pay with credit card?', ans: 'Can I pay with credit card?' },
      { type: 'choice', q: '店員問「Paper or plastic?」是什麼意思？', opts: ['紙袋還是塑膠袋', '紙張還是塑膠', '現金還是刷卡', '列印還是不列印'], ans: 0 },
      { type: 'choice', q: '「總金額」的英文是？', opts: ['total', 'sum', 'amount', 'count'], ans: 0 },
      { type: 'choice', q: '「折扣」的英文是？', opts: ['discount', 'discord', 'discus', 'disco'], ans: 0 },
      { type: 'fill', q: '「我可以使用Apple Pay嗎？」', en: 'Can I use Apple Pay here?', ans: 'Can I use Apple Pay here?' },
      { type: 'choice', q: 'I\'ll pay with card. 的意思是？', opts: ['我要付卡片', '我要刷卡', '我要付卡費', '我要帶卡'], ans: 1 },
      { type: 'choice', q: '「優惠券」的英文是？', opts: ['coupon', 'cooper', 'coup', 'cobalt'], ans: 0 },
      { type: 'fill', q: '「你需要袋子嗎？」', en: 'Do you need a bag?', ans: 'Do you need a bag?' },
      { type: 'choice', q: '「稅金」的英文是？', opts: ['tax', 'tab', 'tap', 'tag'], ans: 0 },
    ]
  },
  {
    num: 11, title: '醫療 Medical',
    vocab: vocab([['symptom', '症狀'], ['prescription', '處方籤'], ['pharmacy', '藥局'], ['allergy', '過敏'], ['insurance', '保險'], ['emergency', '急診'], ['appointment', '預約'], ['fever', '發燒'], ['cough', '咳嗽'], ['pain', '疼痛']]),
    quizzes: [
      { type: 'choice', q: '「症狀」的英文是？', opts: ['symptom', 'syndrome', 'symphony', 'sympathy'], ans: 0 },
      { type: 'fill', q: '「我今天胃不舒服。」', en: 'My stomach is hurting today.', ans: 'My stomach is hurting today.' },
      { type: 'choice', q: '「處方籤」的英文是？', opts: ['prescription', 'description', 'subscription', 'preservation'], ans: 0 },
      { type: 'choice', q: '「我對青黴素過敏」怎麼說？', opts: ["I'm allergic to penicillin.", "I'm against penicillin.", "I don't like penicillin.", "I fear penicillin."], ans: 0 },
      { type: 'fill', q: '「我來拿處方藥。」', en: "I'm here to pick up a prescription.", ans: "I'm here to pick up a prescription." },
      { type: 'choice', q: 'ER 在醫院是指什麼？', opts: ['急診室', '電療室', '手術室', '恢復室'], ans: 0 },
      { type: 'choice', q: '「藥局」的英文是？', opts: ['pharmacy', 'drugstore', 'chemist', '以上皆可'], ans: 3 },
      { type: 'fill', q: '「我發燒了。」', en: 'I have a fever.', ans: 'I have a fever.' },
      { type: 'choice', q: '「保險」的英文是？', opts: ['insurance', 'assurance', 'insure', 'ensure'], ans: 0 },
      { type: 'choice', q: '「咳嗽」的英文是？', opts: ['cough', 'cuff', 'coffee', 'coach'], ans: 0 },
    ]
  },
  {
    num: 12, title: '點飲料 Ordering Drinks',
    vocab: vocab([['latte', '拿鐵'], ['cappuccino', '卡布奇諾'], ['oat milk', '燕麥奶'], ['almond milk', '杏仁奶'], ['extra shot', '加一份濃縮'], ['decaf', '低咖啡因'], ['sugar-free', '無糖'], ['whipped cream', '鮮奶油'], ['light ice', '少冰'], ['to-go cup', '外帶杯']]),
    quizzes: [
      { type: 'choice', q: '「燕麥奶」的英文是？', opts: ['oat milk', 'oatmeal milk', 'oak milk', 'oats milk'], ans: 0 },
      { type: 'choice', q: '「少冰」的英文是？', opts: ['light ice', 'little ice', 'less ice', 'small ice'], ans: 0 },
      { type: 'fill', q: '「我要一杯中杯冰拿鐵。」', en: "I'll have a medium iced latte.", ans: "I'll have a medium iced latte." },
      { type: 'choice', q: '「低咖啡因」的英文是？', opts: ['decaf', 'de-caf', 'caf-free', 'low-caf'], ans: 0 },
      { type: 'fill', q: '「可以幫我做比較不甜嗎？」', en: 'Can you make it less sweet?', ans: 'Can you make it less sweet?' },
      { type: 'choice', q: '「外帶杯」的英文是？', opts: ['to-go cup', 'take-out cup', 'paper cup', 'carry cup'], ans: 0 },
      { type: 'choice', q: '「鮮奶油」的英文是？', opts: ['whipped cream', 'whip cream', 'creamy', 'milk cream'], ans: 0 },
      { type: 'choice', q: 'For here or to go? 的中文是？', opts: ['這裡還是那裡？', '內用還是外帶？', '現在還是等會兒？', '你還是他？'], ans: 1 },
      { type: 'fill', q: '「要加一份濃縮嗎？」', en: 'Would you like an extra shot?', ans: 'Would you like an extra shot?' },
      { type: 'choice', q: 'Can I get that with oat milk? 的中文是？', opts: ['可以加燕麥奶嗎？', '那是燕麥奶嗎？', '有燕麥奶嗎？', '這是燕麥奶嗎？'], ans: 0 },
    ]
  },
  {
    num: 13, title: '居家生活 Home Life',
    vocab: vocab([['landlord', '房東'], ['lease', '租約'], ['utility', '水電瓦斯'], ['maintenance', '維修'], ['deposit', '押金'], ['neighbor', '鄰居'], ['furnished', '附家具'], ['parking spot', '停車位'], ['laundry', '洗衣間'], ['garbage', '垃圾']]),
    quizzes: [
      { type: 'choice', q: '「房東」的英文是？', opts: ['landlord', 'landowner', 'house owner', 'renter'], ans: 0 },
      { type: 'fill', q: '「熱水器壞了。」', en: 'The water heater is broken.', ans: 'The water heater is broken.' },
      { type: 'choice', q: '「押金」的英文是？', opts: ['deposit', 'despot', 'depot', 'depute'], ans: 0 },
      { type: 'choice', q: '「租約」的英文是？', opts: ['lease', 'least', 'leash', 'leave'], ans: 0 },
      { type: 'choice', q: '「水電瓦斯」的英文是？', opts: ['utility', 'facility', 'necessity', 'amenity'], ans: 0 },
      { type: 'fill', q: '「馬桶堵住了。」', en: 'The toilet is clogged.', ans: 'The toilet is clogged.' },
      { type: 'choice', q: '「維修」的英文是？', opts: ['maintenance', 'maintain', 'management', 'manpower'], ans: 0 },
      { type: 'choice', q: '「附家具」的英文是？', opts: ['furnished', 'furniture', 'furnish', 'fitting'], ans: 0 },
      { type: 'choice', q: '「洗衣間」的英文是？', opts: ['laundry', 'launder', 'lawn', 'landry'], ans: 0 },
      { type: 'fill', q: '「我明天需要找人來維修。」', en: 'I need to schedule a maintenance visit for tomorrow.', ans: 'I need to schedule a maintenance visit for tomorrow.' },
    ]
  },
  {
    num: 14, title: '旅遊 Travel',
    vocab: vocab([['passport', '護照'], ['boarding pass', '登機證'], ['luggage', '行李'], ['carry-on', '隨身行李'], ['departure', '出發/出境'], ['arrival', '抵達'], ['gate', '登機門'], ['delay', '延誤'], ['customs', '海關'], ['duty-free', '免稅']]),
    quizzes: [
      { type: 'choice', q: '「登機證」的英文是？', opts: ['boarding pass', 'boarding card', 'boarding ticket', 'boarding permit'], ans: 0 },
      { type: 'fill', q: '「請問登機門在哪裡？」', en: 'Where is the boarding gate?', ans: 'Where is the boarding gate?' },
      { type: 'choice', q: '「隨身行李」的英文是？', opts: ['carry-on', 'hand luggage', 'cabin bag', '以上皆可'], ans: 3 },
      { type: 'choice', q: '「延誤」的英文是？', opts: ['delay', 'cancel', 'detour', 'depart'], ans: 0 },
      { type: 'fill', q: '「我需要申報這個嗎？」', en: 'Do I need to declare this?', ans: 'Do I need to declare this?' },
      { type: 'choice', q: '「出發/出境」的英文是？', opts: ['departure', 'arrival', 'destination', 'deposit'], ans: 0 },
      { type: 'choice', q: '「海關」的英文是？', opts: ['customs', 'costume', 'custom', 'customer'], ans: 0 },
      { type: 'choice', q: '「免稅店」的英文是？', opts: ['duty-free', 'tax-free', 'free shop', 'customs-free'], ans: 0 },
      { type: 'fill', q: '「這班飛機會準時起飛嗎？」', en: 'Is this flight on time?', ans: 'Is this flight on time?' },
      { type: 'fill', q: '「我的行李沒有出來。」', en: 'My luggage did not arrive.', ans: 'My luggage did not arrive.' },
    ]
  },
  {
    num: 15, title: '機場 Airport',
    vocab: vocab([['check-in', '報到'], ['security check', '安全檢查'], ['terminal', '航廈'], ['layover', '轉機停留'], ['connecting flight', '轉機航班'], ['window seat', '靠窗座位'], ['aisle seat', '靠走道座位'], ['overhead bin', '頭頂行李艙'], ['turbulence', '亂流'], ['runway', '跑道']]),
    quizzes: [
      { type: 'choice', q: '「報到」的英文是？', opts: ['check-in', 'check-out', 'check-up', 'check-off'], ans: 0 },
      { type: 'fill', q: '「我可以選靠窗的座位嗎？」', en: 'Can I have a window seat?', ans: 'Can I have a window seat?' },
      { type: 'choice', q: '「航廈」的英文是？', opts: ['terminal', 'terminus', 'terminator', 'term'], ans: 0 },
      { type: 'choice', q: '「轉機」的英文是？', opts: ['layover', 'connecting flight', 'transfer', '以上皆可'], ans: 3 },
      { type: 'choice', q: '「安全檢查」的英文是？', opts: ['security check', 'safety check', 'secure check', 'safe check'], ans: 0 },
      { type: 'fill', q: '「我的班機取消了。」', en: 'My flight has been cancelled.', ans: 'My flight has been cancelled.' },
      { type: 'choice', q: '「頭頂行李艙」的英文是？', opts: ['overhead bin', 'overhead compartment', 'cabin luggage', 'carry-on'], ans: 0 },
      { type: 'choice', q: '「亂流」的英文是？', opts: ['turbulence', 'trouble', 'traffic', 'tunnel'], ans: 0 },
      { type: 'choice', q: '「跑道」的英文是？', opts: ['runway', 'roadway', 'raceway', 'railway'], ans: 0 },
      { type: 'fill', q: '「我在找第三航廈。」', en: "I'm looking for Terminal 3.", ans: "I'm looking for Terminal 3." },
    ]
  },
  {
    num: 16, title: '飯店 Hotel',
    vocab: vocab([['reservation', '訂房'], ['check-in', '入住'], ['check-out', '退房'], ['lobby', '大廳'], ['room service', '客房服務'], ['housekeeping', '房務'], ['vacancy', '空房'], ['amenities', '設施'], ['complimentary', '免費招待的'], ['valet parking', '代客泊車']]),
    quizzes: [
      { type: 'choice', q: '「入住」的英文是？', opts: ['check-in', 'check-out', 'check-up', 'check-off'], ans: 0 },
      { type: 'fill', q: '「我用這個名字訂了房。」', en: 'I have a reservation under this name.', ans: 'I have a reservation under this name.' },
      { type: 'choice', q: '「退房時間是幾點？」的正確說法是？', opts: ['What time is check-out?', 'When to leave?', 'What time I go?', 'Check-out when?'], ans: 0 },
      { type: 'choice', q: '「空房」的英文是？', opts: ['vacancy', 'vacation', 'vacuum', 'vaccine'], ans: 0 },
      { type: 'fill', q: '「有免費Wi-Fi嗎？」', en: 'Is there complimentary Wi-Fi?', ans: 'Is there complimentary Wi-Fi?' },
      { type: 'choice', q: '「大廳」的英文是？', opts: ['lobby', 'lounge', 'liver', 'lobbyist'], ans: 0 },
      { type: 'choice', q: '「客房服務」的英文是？', opts: ['room service', 'house service', 'bed service', 'hotel service'], ans: 0 },
      { type: 'choice', q: '「代客泊車」的英文是？', opts: ['valet parking', 'self parking', 'valley parking', 'valid parking'], ans: 0 },
      { type: 'fill', q: '「我需要多一條毛巾。」', en: 'I need an extra towel.', ans: 'I need an extra towel.' },
      { type: 'choice', q: '「設施」的英文是？', opts: ['amenities', 'amenity', 'ammunition', 'amendment'], ans: 0 },
    ]
  },
  {
    num: 17, title: '外送 Delivery',
    vocab: vocab([['delivery', '外送'], ['takeout', '外帶'], ['delivery fee', '外送費'], ['estimated time', '預計時間'], ['tip', '小費'], ['address', '地址'], ['special instructions', '備註'], ['contactless', '無接觸'], ['rate', '評分'], ['track', '追蹤']]),
    quizzes: [
      { type: 'choice', q: '「外送」的英文是？', opts: ['delivery', 'deliver', 'takeout', 'takeaway'], ans: 0 },
      { type: 'fill', q: '「請問預計送達時間是？」', en: 'What is the estimated delivery time?', ans: 'What is the estimated delivery time?' },
      { type: 'choice', q: '「無接觸配送」的英文是？', opts: ['contactless', 'no touch', 'zero contact', 'safe delivery'], ans: 0 },
      { type: 'fill', q: '「請放在門口。」', en: 'Please leave it at the door.', ans: 'Please leave it at the door.' },
      { type: 'choice', q: '「外送費」的英文是？', opts: ['delivery fee', 'delivery charge', 'shipping fee', 'service fee'], ans: 0 },
      { type: 'choice', q: '「備註」的英文是？', opts: ['special instructions', 'special notes', 'special request', '以上皆是'], ans: 3 },
      { type: 'choice', q: '「追蹤訂單」的英文是？', opts: ['track my order', 'trace my order', 'watch my order', 'follow my order'], ans: 0 },
      { type: 'fill', q: '「我可以在這裡等嗎？」', en: 'Can I wait here for my order?', ans: 'Can I wait here for my order?' },
      { type: 'choice', q: '「評分」的英文是？', opts: ['rate', 'ratio', 'rating', 'ration'], ans: 0 },
      { type: 'fill', q: '「我要給司機小費。」', en: 'I want to tip the driver.', ans: 'I want to tip the driver.' },
    ]
  },
  {
    num: 18, title: '開車 Driving',
    vocab: vocab([['GPS', '導航'], ['highway', '高速公路'], ['exit', '出口'], ['toll road', '收費道路'], ['rest area', '休息站'], ['gas station', '加油站'], ['speed limit', '速限'], ['parking lot', '停車場'], ['parallel parking', '路邊停車'], ['rearview mirror', '後照鏡']]),
    quizzes: [
      { type: 'choice', q: '「高速公路」的英文是？', opts: ['highway', 'high road', 'high street', 'high path'], ans: 0 },
      { type: 'fill', q: '「GPS在導航我。」', en: 'The GPS is guiding me.', ans: 'The GPS is guiding me.' },
      { type: 'choice', q: '「速限」的英文是？', opts: ['speed limit', 'speed max', 'speed restriction', 'speed control'], ans: 0 },
      { type: 'fill', q: '「下一個出口下交流道。」', en: 'Take the next exit.', ans: 'Take the next exit.' },
      { type: 'choice', q: '「收費道路」的英文是？', opts: ['toll road', 'charge road', 'fee road', 'pay road'], ans: 0 },
      { type: 'choice', q: '「停車場」的英文是？', opts: ['parking lot', 'parking garage', 'parking area', '以上皆可'], ans: 3 },
      { type: 'choice', q: '「路邊停車」的英文是？', opts: ['parallel parking', 'street parking', 'side parking', 'curb parking'], ans: 0 },
      { type: 'fill', q: '「最近的加油站在哪裡？」', en: 'Where is the nearest gas station?', ans: 'Where is the nearest gas station?' },
      { type: 'choice', q: '「休息站」的英文是？', opts: ['rest area', 'restroom', 'restaurant', 'rest house'], ans: 0 },
      { type: 'choice', q: '「後照鏡」的英文是？', opts: ['rearview mirror', 'back mirror', 'side mirror', 'behind mirror'], ans: 0 },
    ]
  },
  {
    num: 19, title: '超市購物 Grocery',
    vocab: vocab([['grocery store', '超市'], ['shopping cart', '購物車'], ['aisle', '走道'], ['dairy', '乳製品'], ['produce', '生鮮蔬果'], ['frozen food', '冷凍食品'], ['expiration date', '有效期限'], ['bulk', '散裝'], ['organic', '有機的'], ['loyalty card', '會員卡']]),
    quizzes: [
      { type: 'choice', q: '「超市」的英文是？', opts: ['grocery store', 'department store', 'supermarket', '以上皆可'], ans: 2 },
      { type: 'fill', q: '「瓶裝水在哪裡？」', en: 'Where is the bottled water?', ans: 'Where is the bottled water?' },
      { type: 'choice', q: '「有效期限」的英文是？', opts: ['expiration date', 'expiry date', 'best before', '以上皆可'], ans: 3 },
      { type: 'choice', q: '「生鮮蔬果」的英文是？', opts: ['produce', 'product', 'production', 'productive'], ans: 0 },
      { type: 'choice', q: '「會員卡」的英文是？', opts: ['loyalty card', 'member card', 'points card', 'rewards card'], ans: 0 },
      { type: 'fill', q: '「這個有機的嗎？」', en: 'Is this organic?', ans: 'Is this organic?' },
      { type: 'choice', q: '「散裝」的英文是？', opts: ['bulk', 'bulky', 'bulletin', 'bulldog'], ans: 0 },
      { type: 'choice', q: '「購物車」的英文是？', opts: ['shopping cart', 'shopping basket', 'shopping bag', 'shopping trolley'], ans: 0 },
      { type: 'fill', q: '「這個有在打折嗎？」', en: 'Is this on sale?', ans: 'Is this on sale?' },
      { type: 'choice', q: '「乳製品」的英文是？', opts: ['dairy', 'diary', 'daily', 'dainty'], ans: 0 },
    ]
  },
]

async function seed() {
  const cred = await signInAnonymously(auth)
  const uid = cred.user.uid
  console.log('✅ Authenticated as:', uid)

  for (const section of quizData) {
    const ref = doc(db, 'quiz_sections', `section-${section.num}`)
    await setDoc(ref, section)
    console.log(`  ✅ Saved quiz section: ${section.title} (section-${section.num})`)
    await new Promise(r => setTimeout(r, 500))
  }

  console.log(`\n🎉 All ${quizData.length} quiz sections saved to Firestore!`)
  process.exit(0)
}

seed().catch(err => {
  console.error('❌ Error:', err)
  process.exit(1)
})
