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
    phrases: [
      { english: "Can I get a latte to go please?", chinese: "我可以點一杯拿鐵外帶嗎？" },
      { english: "Sure, would you like it hot or iced?", chinese: "好的，您要熱的還是冰的？" },
      { english: "Can I get that with oat milk?", chinese: "可以幫我換成燕麥奶嗎？" },
      { english: "No sugar but add an extra shot.", chinese: "不加糖，但幫我加一份濃縮。" },
      { english: "Can you make it less sweet?", chinese: "可以做不那麼甜嗎？" },
      { english: "If possible, make it less ice.", chinese: "如果可以的話，請少冰。" },
      { english: "Could I get a receipt please?", chinese: "可以給我一張收據嗎？" }
    ]
  },
  {
    id: 'shopping',
    title: '購物逛街英文',
    level: '初級 (Beginner)',
    icon: '🛍️',
    description: '練習試穿衣物、詢問尺寸顏色、結帳退貨等購物情境對話。',
    phrases: [
      { english: "Can I try this on?", chinese: "我可以試穿這個嗎？" },
      { english: "Sure, fitting rooms are there.", chinese: "當然，試衣間在那邊。" },
      { english: "Do you have this in medium?", chinese: "這個有中號的嗎？" },
      { english: "I think this is too small.", chinese: "我覺得這個太小了。" },
      { english: "Does this come in black?", chinese: "這個有黑色的嗎？" },
      { english: "Maybe try a size down.", chinese: "或許試試看小一號。" },
      { english: "It feels kind of tight.", chinese: "感覺有點緊。" },
      { english: "Can I return this item?", chinese: "我可以退貨這個商品嗎？" }
    ]
  },
  {
    id: 'restaurant',
    title: '餐廳用餐點餐',
    level: '中級 (Intermediate)',
    icon: '🍽️',
    description: '練習餐廳訂位、點餐、特殊要求及結帳等用餐英文對話。',
    phrases: [
      { english: "Table for two please.", chinese: "請給我兩人的桌位。" },
      { english: "Do you have a reservation?", chinese: "您有預約嗎？" },
      { english: "We're still looking at the menu.", chinese: "我們還在看菜單。" },
      { english: "What would you recommend here?", chinese: "你推薦這裡的什麼菜？" },
      { english: "Can I get that without onions?", chinese: "可以不要加洋蔥嗎？" },
      { english: "Could I have extra sauce?", chinese: "可以多給我一點醬料嗎？" },
      { english: "Could we get the check please?", chinese: "可以幫我們買單嗎？" }
    ]
  },
  {
    id: 'travel',
    title: '旅遊交通英文',
    level: '中級 (Intermediate)',
    icon: '✈️',
    description: '練習問路、搭車、訂房、旅遊等旅行中常用英文對話。',
    phrases: [
      { english: "Excuse me, can you help me find this place?", chinese: "抱歉，你能幫我找到這個地方嗎？" },
      { english: "Is it within walking distance?", chinese: "走路能到嗎？" },
      { english: "Excuse me, does this train go downtown?", chinese: "抱歉，這班火車去市中心嗎？" },
      { english: "Is this the right bus to the airport?", chinese: "這是去機場的正確巴士嗎？" },
      { english: "Where do I transfer exactly?", chinese: "具體要在哪裡換乘？" },
      { english: "Where is the nearest subway station?", chinese: "最近的地鐵站在哪裡？" },
      { english: "How far is it on foot?", chinese: "走路去要多久？" }
    ]
  },
  {
    id: 'phone',
    title: '電話英文',
    level: '中級 (Intermediate)',
    icon: '📞',
    description: '練習打電話預約、客服諮詢、訂位留言等電話常用英文。',
    phrases: [
      { english: "Hi, I'd like to make an appointment.", chinese: "你好，我想預約。" },
      { english: "Do you have openings this week?", chinese: "這週有空檔嗎？" },
      { english: "I'm calling to ask about pricing.", chinese: "我打來是想詢問價格。" },
      { english: "I need to reschedule my appointment.", chinese: "我需要更改我的預約時間。" },
      { english: "Hi, I'd like to make a reservation.", chinese: "你好，我想訂位。" },
      { english: "I'm calling to check on an order.", chinese: "我打來是想查詢訂單。" },
      { english: "Please leave your message after the tone.", chinese: "請在語音提示後留言。" }
    ]
  },
  {
    id: 'workplace',
    title: '職場辦公室英文',
    level: '進階 (Advanced)',
    icon: '💼',
    description: '練習開會簡報、確認進度、請假溝通等職場英文對話。',
    phrases: [
      { english: "I just want to confirm the deadline.", chinese: "我只是想確認一下截止日期。" },
      { english: "How's the presentation coming along?", chinese: "簡報準備得怎麼樣了？" },
      { english: "That approach actually makes a lot of sense.", chinese: "那個方法其實很有道理。" },
      { english: "I'd like to mention one small thing.", chinese: "我想提一件事。" },
      { english: "Do you have any thoughts so far?", chinese: "目前有什麼想法嗎？" },
      { english: "I think I misunderstood the instructions.", chinese: "我想我誤解了指令。" },
      { english: "I'd like to request next Monday off.", chinese: "我想請下週一的假。" }
    ]
  },
  {
    id: 'medical',
    title: '就醫看診英文',
    level: '進階 (Advanced)',
    icon: '🏥',
    description: '練習掛號、描述症狀、拿藥等醫療相關英文對話。',
    phrases: [
      { english: "What seems to be the problem today?", chinese: "今天哪裡不舒服？" },
      { english: "My stomach has been hurting today.", chinese: "我的胃今天一直在痛。" },
      { english: "Is the pain sharp or dull?", chinese: "痛感是尖銳的還是隱隱作痛？" },
      { english: "I'm allergic to penicillin.", chinese: "我對青黴素過敏。" },
      { english: "Are you taking any medication now?", chinese: "你現在有在服用什麼藥物嗎？" },
      { english: "I'm here to pick up a prescription.", chinese: "我來拿處方藥。" },
      { english: "Which medicine would you recommend?", chinese: "你會推薦哪種藥？" }
    ]
  },
  {
    id: 'checkout',
    title: '結帳付款英文',
    level: '初級 (Beginner)',
    icon: '💳',
    description: '練習刷卡付現、分攤帳單、會員集點等結帳流程英文。',
    phrases: [
      { english: "I'm ready to check out now.", chinese: "我準備好要結帳了。" },
      { english: "Will you be paying with card or cash today?", chinese: "您今天要刷卡還是付現？" },
      { english: "You can tap your card on the screen.", chinese: "您可以感應螢幕刷卡。" },
      { english: "Would you like to use Apple Pay today?", chinese: "您今天想使用 Apple Pay 嗎？" },
      { english: "Do you have a rewards account here?", chinese: "您有這裡的會員帳號嗎？" },
      { english: "Can we split the payment for this order?", chinese: "這筆訂單我們可以分開付嗎？" },
      { english: "Would you like email or printed receipt?", chinese: "您想要電子收據還是紙本收據？" }
    ]
  },
  {
    id: 'convenience_store',
    title: '超商便利商店',
    level: '初級 (Beginner)',
    icon: '🏪',
    description: '練習在美國便利商店購物、結帳、加油等常用對話。',
    phrases: [
      { english: "Where can I find the snacks?", chinese: "零食區在哪裡？" },
      { english: "Is there a restroom here?", chinese: "這裡有洗手間嗎？" },
      { english: "I need to pump some gas first.", chinese: "我需要先加油。" },
      { english: "Can I get $20 on pump 5?", chinese: "我要在5號加油槍加20美元。" },
      { english: "Do you sell phone chargers here?", chinese: "你們這裡有賣手機充電器嗎？" },
      { english: "This is on sale, right?", chinese: "這個在打折對吧？" },
      { english: "Can I get a bag for 5 cents?", chinese: "我可以買一個5分的購物袋嗎？" }
    ]
  },
  {
    id: 'social',
    title: '社交聚會英文',
    level: '中級 (Intermediate)',
    icon: '🎉',
    description: '練習派對開場、破冰聊天、邀約朋友等社交場合英文。',
    phrases: [
      { english: "Hi, I don't think we've met. I'm...", chinese: "嗨，我們應該沒見過面，我是..." },
      { english: "So how do you know the host?", chinese: "你怎麼認識主人的？" },
      { english: "Are you having a good time?", chinese: "你玩得開心嗎？" },
      { english: "Would you like something to drink?", chinese: "你想喝點什麼嗎？" },
      { english: "This party is really nice!", chinese: "這個派對真的很棒！" },
      { english: "We should hang out sometime!", chinese: "我們應該找時間聚聚！" },
      { english: "It was great meeting you!", chinese: "很開心認識你！" }
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
