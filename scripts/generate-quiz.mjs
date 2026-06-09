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

const GROQ_API_KEY = process.env.VITE_GROQ_API_KEY || ''
if (!GROQ_API_KEY) {
  console.error('❌ VITE_GROQ_API_KEY not set')
  process.exit(1)
}

const SYSTEM_PROMPT = `You are a quiz generator for an English learning app. Given a video title and description, generate quiz content.
Output ONLY valid JSON matching this TypeScript structure, no other text:

{
  "title": "中文主題 | English Title",
  "vocab": [["english_word", "中文翻譯"], ...],
  "quizzes": [
    { "type": "choice", "q": "中文題目", "opts": ["選項A", "選項B", "選項C", "選項D"], "ans": 0 },
    { "type": "fill", "q": "中文提示", "en": "English sentence with ___ blank", "ans": "answer" }
  ]
}

Rules:
- 5 vocab words, 3 choice questions, 2 fill-in questions (total 10 items)
- Use real, natural English from the video content
- Fill answers should be single words or short phrases
- Choice questions should have 4 options with 1 correct answer (0-indexed)
- All questions in Chinese, English examples are accurate`

const videoTopics = [
  {
    title: '美國機場飛機英文全攻略',
    desc: '聽懂航班廣播、高頻飛行情境對話。Check-in, boarding pass, security screening, gate number, carry-on, luggage, delay, cancellation, immigration.'
  },
  {
    title: '美國飯店住宿英文',
    desc: '飯店 check-in, 要求高樓層、房間問題換房、退房、加床、延遲退房、room service、設施詢問。'
  },
  {
    title: '美國外送英文 Food Delivery',
    desc: '外送平台點餐、修改訂單、送餐地址、付款、評分、聯絡外送員。'
  },
  {
    title: '開車與交通英文 Driving & Transportation',
    desc: '租車手續、加油、停車、罰單、導航、路況詢問、加油站對話。'
  },
  {
    title: '超市購物 Grocery Shopping',
    desc: '超市找東西、結帳、會員卡、折價券、生鮮食品稱重、自助結帳。'
  }
]

async function callGroq(prompt) {
  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' }
    })
  })
  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Groq API error ${resp.status}: ${text}`)
  }
  const data = await resp.json()
  const content = data.choices[0].message.content
  return JSON.parse(content)
}

async function generateAll() {
  const cred = await signInAnonymously(auth)
  console.log('✅ Authenticated as:', cred.user.uid)
  console.log('')

  const allSections = []

  for (const topic of videoTopics) {
    console.log(`  🤖 Generating quiz for: ${topic.title}...`)
    try {
      const result = await callGroq(`Video title: ${topic.title}\nVideo description: ${topic.desc}\n\nGenerate quiz content.`)
      allSections.push(result)

      // Save to Firestore
      const ref = doc(db, 'quiz_sections', `video_${videoTopics.indexOf(topic)}`)
      await setDoc(ref, {
        num: videoTopics.indexOf(topic) + 16,
        title: result.title,
        vocab: result.vocab,
        quizzes: result.quizzes
      })
      console.log(`    ✅ Saved: ${result.title}`)
    } catch (e) {
      console.error(`    ❌ Error: ${e.message}`)
    }
    console.log('')
  }

  console.log(`\n🎉 Generated ${allSections.length} quiz sections!`)
  console.log(JSON.stringify(allSections, null, 2))
  process.exit(0)
}

generateAll().catch(err => {
  console.error('❌ Fatal:', err)
  process.exit(1)
})
