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

const scenariosData = [
  {
    id: 'cafe',
    title: '星巴克咖啡廳點餐',
    level: '初級 (Beginner)',
    icon: '☕',
    description: '練習如何向店員點選美式咖啡、客製化牛奶以及結帳。',
    systemPrompt: `You are a friendly Starbucks barista. Keep your responses short (1-2 sentences), natural, and warm. Ask the user what they want to order, offer options (size, milk types, or snacks), and complete the transaction. Speak naturally in standard American English.`,
    initialMessage: "Hi there! Welcome to Starbucks. What can I get started for you today?",
    hints: [
      "I'd like a medium iced latte with oat milk, please.",
      "Can I get a chocolate croissant and a black coffee?",
      "Just a large cold brew, please. To go."
    ],
    phrases: [
      { english: "Can I get a latte to go please?", chinese: "我可以點一杯拿鐵外帶嗎？" },
      { english: "Sure, would you like it hot or iced?", chinese: "好的，您要熱的還是冰的？" },
      { english: "Can I get that with oat milk?", chinese: "可以幫我換成燕麥奶嗎？" },
      { english: "No sugar but add an extra shot.", chinese: "不加糖，但幫我加一份濃縮。" },
      { english: "Can you make it less sweet?", chinese: "可以做不那麼甜嗎？" },
      { english: "If possible, make it less ice.", chinese: "如果可以的話，請少冰。" },
      { english: "Could I get a receipt please?", chinese: "可以給我一張收據嗎？" },
      { english: "What size would you like?", chinese: "您想要什麼尺寸？" },
      { english: "I'll have a medium iced latte with oat milk.", chinese: "我要一杯中杯冰拿鐵加燕麥奶。" },
      { english: "Can I get a cup of water too?", chinese: "可以再給我一杯水嗎？" },
      { english: "Is there a restroom I can use?", chinese: "請問有洗手間可以使用嗎？" },
      { english: "Do you have any discounts for students?", chinese: "學生有折扣嗎？" },
      { english: "Can I use Apple Pay here?", chinese: "這裡可以使用 Apple Pay 嗎？" },
    ]
  },
  {
    id: 'shopping',
    title: '購物逛街英文',
    level: '初級 (Beginner)',
    icon: '🛍️',
    description: '練習試穿衣物、詢問尺寸顏色、結帳退貨等購物情境對話。',
    systemPrompt: `You are a friendly sales associate at a clothing store. Help the customer find what they need, suggest sizes and colors, and assist with checkout. Keep responses short (1-2 sentences) and warm.`,
    initialMessage: "Welcome to the store! Let me know if you need any help finding something.",
    hints: [
      "Can I try this on? Where are the fitting rooms?",
      "Do you have this in a smaller size?",
      "How much is this? Is it on sale?"
    ],
    phrases: [
      { english: "Can I try this on?", chinese: "我可以試穿這個嗎？" },
      { english: "Sure, fitting rooms are there.", chinese: "當然，試衣間在那邊。" },
      { english: "Do you have this in medium?", chinese: "這個有中號的嗎？" },
      { english: "I think this is too small.", chinese: "我覺得這個太小了。" },
      { english: "Does this come in black?", chinese: "這個有黑色的嗎？" },
      { english: "Maybe try a size down.", chinese: "或許試試看小一號。" },
      { english: "It feels kind of tight.", chinese: "感覺有點緊。" },
      { english: "Can I return this item?", chinese: "我可以退貨這個商品嗎？" },
      { english: "How much is this?", chinese: "這個多少錢？" },
      { english: "Is there a sale going on right now?", chinese: "現在有在打折嗎？" },
      { english: "Can I get a gift receipt?", chinese: "可以給我禮物收據嗎？" },
      { english: "Do you have a rewards program?", chinese: "你們有會員獎勵計畫嗎？" },
      { english: "I'm just looking, thanks.", chinese: "我只是看看，謝謝。" },
    ]
  },
  {
    id: 'restaurant',
    title: '餐廳用餐點餐',
    level: '中級 (Intermediate)',
    icon: '🍽️',
    description: '練習餐廳訂位、點餐、特殊要求及結帳等用餐英文對話。',
    systemPrompt: `You are a friendly waiter at a nice restaurant. Greet guests, take orders, answer questions about the menu, and handle the bill. Keep responses short (1-2 sentences) and professional.`,
    initialMessage: "Good evening! Welcome to our restaurant. How many guests will be dining with us tonight?",
    hints: [
      "Table for two, please.",
      "What would you recommend here?",
      "Could we get the check, please?"
    ],
    phrases: [
      { english: "Table for two please.", chinese: "請給我兩人的桌位。" },
      { english: "Do you have a reservation?", chinese: "您有預約嗎？" },
      { english: "We're still looking at the menu.", chinese: "我們還在看菜單。" },
      { english: "What would you recommend here?", chinese: "你推薦這裡的什麼菜？" },
      { english: "Can I get that without onions?", chinese: "可以不要加洋蔥嗎？" },
      { english: "Could I have extra sauce?", chinese: "可以多給我一點醬料嗎？" },
      { english: "Could we get the check please?", chinese: "可以幫我們買單嗎？" },
      { english: "Can I get a to-go box?", chinese: "可以給我外帶盒嗎？" },
      { english: "This isn't what I ordered.", chinese: "這不是我點的。" },
      { english: "Can we sit by the window?", chinese: "可以坐窗邊嗎？" },
      { english: "I'd like a glass of water, please.", chinese: "請給我一杯水。" },
      { english: "Can I have the dessert menu?", chinese: "可以看看甜點菜單嗎？" },
    ]
  },
  {
    id: 'travel',
    title: '旅遊交通英文',
    level: '中級 (Intermediate)',
    icon: '✈️',
    description: '練習問路、搭車、訂房、旅遊等旅行中常用英文對話。',
    systemPrompt: `You are a helpful local resident in a tourist city. Give friendly directions and tips about public transportation, attractions, and walking routes. Keep responses short (1-2 sentences) and clear.`,
    initialMessage: "Hello there! Do you need some help finding a place or getting around the city?",
    hints: [
      "Excuse me, can you help me find this place?",
      "Is this the right bus to the airport?",
      "Where is the nearest subway station?"
    ],
    phrases: [
      { english: "Excuse me, can you help me find this place?", chinese: "抱歉，你能幫我找到這個地方嗎？" },
      { english: "Is it within walking distance?", chinese: "走路能到嗎？" },
      { english: "Excuse me, does this train go downtown?", chinese: "抱歉，這班火車去市中心嗎？" },
      { english: "Is this the right bus to the airport?", chinese: "這是去機場的正確巴士嗎？" },
      { english: "Where do I transfer exactly?", chinese: "具體要在哪裡換乘？" },
      { english: "Where is the nearest subway station?", chinese: "最近的地鐵站在哪裡？" },
      { english: "How far is it on foot?", chinese: "走路去要多久？" },
      { english: "Can you show me on the map?", chinese: "可以在地圖上幫我標示嗎？" },
      { english: "How much is a one-way ticket?", chinese: "單程票多少錢？" },
      { english: "Does this bus go to the airport?", chinese: "這班公車有到機場嗎？" },
      { english: "How long does it take to get there?", chinese: "到那裡要多久？" },
    ]
  },
  {
    id: 'phone',
    title: '電話英文',
    level: '中級 (Intermediate)',
    icon: '📞',
    description: '練習打電話預約、客服諮詢、訂位留言等電話常用英文。',
    systemPrompt: `You are a polite customer service representative answering phone calls. Help the caller with appointments, reservations, orders, or general inquiries. Keep responses short (1-2 sentences) and professional.`,
    initialMessage: "Thank you for calling. How can I help you today?",
    hints: [
      "Hi, I'd like to make an appointment for this week.",
      "I'm calling to ask about your pricing.",
      "I need to reschedule my appointment, please."
    ],
    phrases: [
      { english: "Hi, I'd like to make an appointment.", chinese: "你好，我想預約。" },
      { english: "Do you have openings this week?", chinese: "這週有空檔嗎？" },
      { english: "I'm calling to ask about pricing.", chinese: "我打來是想詢問價格。" },
      { english: "I need to reschedule my appointment.", chinese: "我需要更改我的預約時間。" },
      { english: "Hi, I'd like to make a reservation.", chinese: "你好，我想訂位。" },
      { english: "I'm calling to check on an order.", chinese: "我打來是想查詢訂單。" },
      { english: "Please leave your message after the tone.", chinese: "請在語音提示後留言。" },
      { english: "Can you please hold for a moment?", chinese: "可以請您稍等一下嗎？" },
      { english: "I'll transfer you to the right department.", chinese: "我幫您轉接到相關部門。" },
      { english: "Can I take a message?", chinese: "我可以幫您留言嗎？" },
    ]
  },
  {
    id: 'workplace',
    title: '職場辦公室英文',
    level: '進階 (Advanced)',
    icon: '💼',
    description: '練習開會簡報、確認進度、請假溝通等職場英文對話。',
    systemPrompt: `You are a helpful colleague in a modern office. Discuss work tasks, deadlines, presentations, and team coordination. Keep responses short (1-2 sentences), professional but friendly.`,
    initialMessage: "Hey! Glad you're online. Just wanted to check in — how's that project coming along?",
    hints: [
      "I just want to confirm the deadline for this project.",
      "How's the presentation coming along?",
      "I'd like to request next Monday off."
    ],
    phrases: [
      { english: "I just want to confirm the deadline.", chinese: "我只是想確認一下截止日期。" },
      { english: "How's the presentation coming along?", chinese: "簡報準備得怎麼樣了？" },
      { english: "That approach actually makes a lot of sense.", chinese: "那個方法其實很有道理。" },
      { english: "I'd like to mention one small thing.", chinese: "我想提一件事。" },
      { english: "Do you have any thoughts so far?", chinese: "目前有什麼想法嗎？" },
      { english: "I think I misunderstood the instructions.", chinese: "我想我誤解了指令。" },
      { english: "I'd like to request next Monday off.", chinese: "我想請下週一的假。" },
      { english: "Let's schedule a meeting for tomorrow.", chinese: "我們明天開個會吧。" },
      { english: "I'll send you the updated file by email.", chinese: "我會把更新後的檔案寄給你。" },
      { english: "Can you review my draft before I submit?", chinese: "在我提交之前，你能幫我看一下草稿嗎？" },
    ]
  },
  {
    id: 'medical',
    title: '就醫看診英文',
    level: '進階 (Advanced)',
    icon: '🏥',
    description: '練習掛號、描述症狀、拿藥等醫療相關英文對話。',
    systemPrompt: `You are a friendly doctor at a clinic. Ask about symptoms, medical history, and give advice. Keep responses short (1-2 sentences), professional and reassuring.`,
    initialMessage: "Hello! Please come in. What seems to be bothering you today?",
    hints: [
      "My stomach has been hurting since yesterday.",
      "I'm allergic to penicillin. Are there alternatives?",
      "I'm here to pick up a prescription."
    ],
    phrases: [
      { english: "What seems to be the problem today?", chinese: "今天哪裡不舒服？" },
      { english: "My stomach has been hurting today.", chinese: "我的胃今天一直在痛。" },
      { english: "Is the pain sharp or dull?", chinese: "痛感是尖銳的還是隱隱作痛？" },
      { english: "I'm allergic to penicillin.", chinese: "我對青黴素過敏。" },
      { english: "Are you taking any medication now?", chinese: "你現在有在服用什麼藥物嗎？" },
      { english: "I'm here to pick up a prescription.", chinese: "我來拿處方藥。" },
      { english: "Which medicine would you recommend?", chinese: "你會推薦哪種藥？" },
      { english: "I've been feeling dizzy since this morning.", chinese: "我從早上開始就一直頭暈。" },
      { english: "Do I need to come back for a follow-up?", chinese: "我需要回來複診嗎？" },
      { english: "How many times a day should I take this?", chinese: "這個藥一天吃幾次？" },
    ]
  },
  {
    id: 'checkout',
    title: '結帳付款英文',
    level: '初級 (Beginner)',
    icon: '💳',
    description: '練習刷卡付現、分攤帳單、會員集點等結帳流程英文。',
    systemPrompt: `You are a friendly cashier at a store. Help customers with the checkout process, offer payment options, and ask about receipts. Keep responses short (1-2 sentences) and warm.`,
    initialMessage: "Hi there! Are you ready to check out today?",
    hints: [
      "I'm ready to check out now.",
      "Can I pay with credit card?",
      "Can we split the bill, please?"
    ],
    phrases: [
      { english: "I'm ready to check out now.", chinese: "我準備好要結帳了。" },
      { english: "Will you be paying with card or cash today?", chinese: "您今天要刷卡還是付現？" },
      { english: "You can tap your card on the screen.", chinese: "您可以感應螢幕刷卡。" },
      { english: "Would you like to use Apple Pay today?", chinese: "您今天想使用 Apple Pay 嗎？" },
      { english: "Do you have a rewards account here?", chinese: "您有這裡的會員帳號嗎？" },
      { english: "Can we split the payment for this order?", chinese: "這筆訂單我們可以分開付嗎？" },
      { english: "Would you like email or printed receipt?", chinese: "您想要電子收據還是紙本收據？" },
      { english: "Can I use this coupon?", chinese: "我可以用這個優惠券嗎？" },
      { english: "Do you offer a military discount?", chinese: "你們有軍人折扣嗎？" },
      { english: "I think the change is incorrect.", chinese: "我覺得找零不對。" },
    ]
  },
  {
    id: 'convenience_store',
    title: '超商便利商店',
    level: '初級 (Beginner)',
    icon: '🏪',
    description: '練習在美國便利商店購物、結帳、加油等常用對話。',
    systemPrompt: `You are a friendly convenience store clerk. Help customers find items, process purchases, and answer questions. Keep responses short (1-2 sentences) and helpful.`,
    initialMessage: "Welcome! Let me know if you need help finding anything.",
    hints: [
      "Where can I find the snacks aisle?",
      "Is there a restroom here?",
      "Do you sell phone chargers here?"
    ],
    phrases: [
      { english: "Where can I find the snacks?", chinese: "零食區在哪裡？" },
      { english: "Is there a restroom here?", chinese: "這裡有洗手間嗎？" },
      { english: "I need to pump some gas first.", chinese: "我需要先加油。" },
      { english: "Can I get $20 on pump 5?", chinese: "我要在5號加油槍加20美元。" },
      { english: "Do you sell phone chargers here?", chinese: "你們這裡有賣手機充電器嗎？" },
      { english: "This is on sale, right?", chinese: "這個在打折對吧？" },
      { english: "Can I get a bag for 5 cents?", chinese: "我可以買一個5分的購物袋嗎？" },
      { english: "Where can I find the restroom?", chinese: "洗手間在哪裡？" },
      { english: "How much is this bottle of water?", chinese: "這瓶水多少錢？" },
      { english: "Can I warm this up in the microwave?", chinese: "可以用微波爐加熱嗎？" },
    ]
  },
  {
    id: 'social',
    title: '社交聚會英文',
    level: '中級 (Intermediate)',
    icon: '🎉',
    description: '練習派對開場、破冰聊天、邀約朋友等社交場合英文。',
    systemPrompt: `You are a friendly person at a casual social gathering or party. Make small talk, introduce yourself, and keep the conversation light and fun. Use casual English. Keep responses short (1-2 sentences).`,
    initialMessage: "Hey there! Great party, right? I don't think we've met — I'm Alex. What's your name?",
    hints: [
      "Hi, I don't think we've met. I'm...",
      "So how do you know the host?",
      "It was great meeting you! Let's hang out sometime."
    ],
    phrases: [
      { english: "Hi, I don't think we've met. I'm...", chinese: "嗨，我們應該沒見過面，我是..." },
      { english: "So how do you know the host?", chinese: "你怎麼認識主人的？" },
      { english: "Are you having a good time?", chinese: "你玩得開心嗎？" },
      { english: "Would you like something to drink?", chinese: "你想喝點什麼嗎？" },
      { english: "This party is really nice!", chinese: "這個派對真的很棒！" },
      { english: "We should hang out sometime!", chinese: "我們應該找時間聚聚！" },
      { english: "It was great meeting you!", chinese: "很開心認識你！" },
      { english: "Would you like something to drink?", chinese: "你想喝點什麼嗎？" },
      { english: "Are you having a good time?", chinese: "你玩得開心嗎？" },
      { english: "We should do this again sometime!", chinese: "我們應該找時間再聚一次！" },
      { english: "Do you want to join us for dinner?", chinese: "你想跟我們一起吃晚餐嗎？" },
    ]
  }
]

async function seed() {
  const cred = await signInAnonymously(auth)
  const uid = cred.user.uid
  console.log('✅ Authenticated as:', uid)

  for (const sc of scenariosData) {
    const ref = doc(db, 'scenarios', sc.id)
    await setDoc(ref, sc)
    console.log(`  ✅ Saved scenario: ${sc.title} (${sc.id})`)
  }

  console.log('\n🎉 All scenarios saved to Firestore!')
  process.exit(0)
}

seed().catch(err => {
  console.error('❌ Error:', err)
  process.exit(1)
})
