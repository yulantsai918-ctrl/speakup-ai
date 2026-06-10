export interface LessonSlide {
  title: string
  subtitle: string
  content: string
  phrases: { en: string; zh: string }[]
  practice: string
}

export const LESSON_2_SLIDES: LessonSlide[] = [
  {
    title: '出行交通必備英文',
    subtitle: 'Commuting & Transit Essentials',
    content: '涵蓋日常通勤中的寒暄（Mondays always hit hard）、交通狀況描述（traffic was brutal）、城市問路技巧（go straight for two blocks）、公共運輸導覽（transfer at Central Station）以及加油站與停車規則等實用句型。',
    phrases: [
      { en: 'Mondays always hit hard.', zh: '週一總是讓人很難熬。' },
      { en: 'Traffic was brutal this morning.', zh: '今天早上的交通簡直是災難。' },
      { en: 'Is this the bus to downtown?', zh: '這是去市中心的公車嗎？' },
      { en: 'Go straight for two blocks, then turn left at the corner.', zh: '直走兩個街區，然後在轉角左轉。' },
    ],
    practice: '你正在街上迷路，試著向路人詢問某條街怎麼走，並確認是否在步行距離內。'
  },
  {
    title: '美國人常用聊天交流',
    subtitle: 'Conversational English',
    content: '重點在於如何自然地開啟對話（how\'s it going）、保持話題熱度（what brought you here）、表達強烈認同（that makes sense）以及在尷尬或沒聽清楚時的應對方式（I didn\'t catch that）。',
    phrases: [
      { en: 'Hey, how\'s it going today?', zh: '嘿，今天過得如何？' },
      { en: 'What brought you here?', zh: '是什麼原因讓你來這裡的？' },
      { en: 'That makes sense to me.', zh: '那對我來說很有道理。' },
      { en: "Sorry, I didn't catch what you said.", zh: '抱歉，我沒聽清楚你剛才說的話。' },
    ],
    practice: '用「What\'s up?」開啟對話，對方回答後使用「That sounds interesting」來延續話題。'
  },
  {
    title: '日常休閒娛樂英文',
    subtitle: 'Leisure & Entertainment',
    content: '學習非正式的計畫預約（grab a coffee）、討論活動意願（I\'m down for that）、電影與影集的心得分享（pacing feels off）以及遊戲與活動中的互動口語。',
    phrases: [
      { en: 'Are you free later today?', zh: '你等一下有空嗎？' },
      { en: 'Maybe we could grab a coffee or something.', zh: '也許我們可以去喝杯咖啡之類的。' },
      { en: "Sure, I'm down for that.", zh: '好啊，我加入。' },
      { en: "I think I'm about ready to call it.", zh: '我想我差不多準備好要回家休息了。' },
    ],
    practice: '邀約朋友進行一場隨性的聚會，並練習如何禮貌地表達自己累了想回家。'
  },
  {
    title: '每天都在用的購物英文',
    subtitle: 'Shopping English',
    content: '詳細介紹從進店後的開場（just browsing）、尋找特定走道（aisle）、試穿衣物（fitting room）、詢問特價與折扣（on sale）到瞭解退貨規定（return policy）的全流程。',
    phrases: [
      { en: "I'm just looking for now.", zh: '我現在只是先隨便看看。' },
      { en: 'Can I try this on?', zh: '我可以試穿這個嗎？' },
      { en: 'Do you have this in medium?', zh: '這個有中號的嗎？' },
      { en: "What's your return policy?", zh: '你們的退貨政策是什麼？' },
    ],
    practice: '在服飾店試穿後發現尺寸太小，練習詢問店員是否有大一號的尺寸以及商品的保固期限。'
  },
  {
    title: '每天都會用到的電話英文',
    subtitle: 'Phone Call English',
    content: '涵蓋電話溝通的所有細節，包含預約服務（make an appointment）、更改或取消時間（reschedule）、餐廳訂位、聯繫客服查詢訂單進度以及在語音信箱留下有效訊息。',
    phrases: [
      { en: "Hi, I'm calling about an appointment.", zh: '你好，我打來是為了預約。' },
      { en: 'Do you have openings this week?', zh: '你們這週有空檔嗎？' },
      { en: 'I need to reschedule my appointment.', zh: '我需要更改我的預約時間。' },
      { en: 'Please leave your message after the tone.', zh: '請在語音提示後留言。' },
    ],
    practice: '打電話給理髮店預約剪髮，若時間不湊巧，練習詢問「next available slot」。'
  },
  {
    title: '用餐點餐必備英文',
    subtitle: 'Dining & Restaurant Ordering',
    content: '整理了從餐廳入座（reservation under the name）、看菜單詢問推薦（recommendation）、點餐時的客製化要求（without onions）到最後的結帳需求（split the check）。',
    phrases: [
      { en: 'Table for two please.', zh: '請給我兩人的桌位。' },
      { en: 'What would you recommend here?', zh: '你推薦這裡的什麼菜？' },
      { en: 'Can I get that without onions?', zh: '可以不要加洋蔥嗎？' },
      { en: 'Could we split the check?', zh: '我們可以分開買單嗎？' },
    ],
    practice: '點餐時練習客製化要求，例如「sauce on the side」或將配菜更換為沙拉。'
  },
  {
    title: '美國旅遊萬用英文',
    subtitle: 'Travel English',
    content: '針對旅遊者設計的句型，包括獲取旅遊資訊（can I ask something real quick）、尋找最近的設施（nearest restroom）、搭乘大眾運輸系統的疑問以及景點預訂（book in advance）。',
    phrases: [
      { en: 'Excuse me, can I ask something real quick?', zh: '抱歉，我可以很快請教一個問題嗎？' },
      { en: 'Where is the nearest subway station?', zh: '最近的地鐵站在哪裡？' },
      { en: 'How far is it on foot?', zh: '走路去要多久？' },
      { en: 'Should I book in advance for this?', zh: '這需要提前預訂嗎？' },
    ],
    practice: '向路人詢問某個博物館的位置，並確認該景點是否步行可達。'
  },
  {
    title: '美國生活必備結帳英文',
    subtitle: 'Checkout English',
    content: '學習結帳時的標準流程，包含回應收銀員的問題（all set）、選擇支付方式（Apple Pay）、累積會員紅利點數（reward points）以及應對自助結帳機的常見警示音。',
    phrases: [
      { en: 'Are you all set today?', zh: '今天就買這些嗎？' },
      { en: 'Will you be paying with card or cash?', zh: '你要刷卡還是付現？' },
      { en: 'You can tap your card on the screen.', zh: '你可以直接感應螢幕刷卡。' },
      { en: 'Unexpected item in the bagging area.', zh: '裝袋區有異常物品。' },
    ],
    practice: '模擬使用自助結帳機時遇到問題，練習向工作人員尋求協助。'
  },
  {
    title: '美國人天天在說的職場英文',
    subtitle: 'Workplace English',
    content: '包含上班早晨的問候、確認工作任務期限（deadline）、在會議中提出建議（I\'d like to mention one small thing）、請假與調班流程（request off）以及結束一天的收尾工作。',
    phrases: [
      { en: 'I just want to confirm the deadline.', zh: '我只是想確認一下截止日期。' },
      { en: "How's the presentation coming along?", zh: '簡報準備得怎麼樣了？' },
      { en: "I'd like to request next Monday off.", zh: '我想請下週一的假。' },
      { en: "I'm heading out for tonight.", zh: '我要下班了。' },
    ],
    practice: '練習與主管討論工作進度，並在最後表達「I\'m heading out」下班。'
  },
  {
    title: '美國人每天都在說的醫療英文',
    subtitle: 'Medical English',
    content: '掌握看病時的關鍵對話，如描述症狀性質（sharp or dull pain）、過敏史告知（allergic to penicillin）、預約牙醫、進行物理檢查（blood pressure）以及藥局領藥流程。',
    phrases: [
      { en: 'My stomach has been hurting today.', zh: '我的胃今天一直在痛。' },
      { en: 'Is the pain sharp or dull?', zh: '痛感是尖銳的還是隱隱作痛？' },
      { en: "I'm allergic to penicillin.", zh: '我對青黴素過敏。' },
      { en: "I'm here to pick up a prescription.", zh: '我來拿處方藥。' },
    ],
    practice: '向醫生描述疼痛的頻率，是「comes and goes」還是「constant」。'
  },
  {
    title: '美國便利店最常用英文',
    subtitle: 'Convenience Store English',
    content: '實用的店內對話，包含尋找架上商品（snack aisle）、在加油泵進行支付（prepay）、詢問熟食新鮮度（freshly made）以及索取店內洗手間的通行碼。',
    phrases: [
      { en: 'Where can I find the snack aisle?', zh: '我在哪裡可以找到零食區？' },
      { en: 'Is this sandwich freshly made?', zh: '這份三明治是新鮮現做的嗎？' },
      { en: "I'll put $20 on pump six.", zh: '我要在六號油泵加 20 美元。' },
      { en: 'The code for the door is on your receipt.', zh: '門的密碼在你的收據上。' },
    ],
    practice: '練習在櫃檯預付加油費（prepay），並詢問店內是否有提供免費 Wi-Fi。'
  },
  {
    title: '美國城市生活實境聽力',
    subtitle: 'City Life Survival',
    content: '應對繁忙城市生活的各種突發狀況，如早起趕車（running late）、在擁擠的地鐵穿梭（squeeze through）、手機沒電借充電器、應對 Uber 取消以及包裹物流延誤等現實情境。',
    phrases: [
      { en: "Oh crap, I'm running late again.", zh: '糟了，我又遲到了。' },
      { en: 'Excuse me, can I squeeze through?', zh: '抱歉，我可以擠過去嗎？' },
      { en: "My phone's about to completely die.", zh: '我的手機快要完全沒電了。' },
      { en: 'Wait, my Uber just got cancelled again.', zh: '等等，我的 Uber 又被取消了。' },
    ],
    practice: '練習在擁擠的地鐵中禮貌地請人讓路，以及如何向陌生人借用充電器。'
  },
  {
    title: '美國生活實境英文應用',
    subtitle: 'Real-Life American English',
    content: '結合日常生活的瑣碎情境，如早晨睡過頭（slept in）、咖啡店點餐（oat milk）、超市內找不到商品以及在路上開車時 GPS 的重新導航與路況應對。',
    phrases: [
      { en: "I feel kind of out of it now.", zh: '我現在感覺有點神志恍惚。' },
      { en: "I'll get a medium iced latte.", zh: '我要一杯中杯冰拿鐵。' },
      { en: "I came in for one thing, not all this.", zh: '我本來只打算買一樣東西，結果買了這麼多。' },
      { en: "It's rerouting the whole thing again.", zh: '它（GPS）又在重新導航了。' },
    ],
    practice: '在咖啡店練習點一份「usual」的飲品，並練習描述自己早上睡懶覺的情況。'
  },
  {
    title: '聚會交友社交英文',
    subtitle: 'Social & Networking',
    content: '社交場合的生存技巧，包含如何自我介紹破冰、在閒談中尋找共同興趣（common ground）、禮貌地加入一群人的對話以及在派對結束前優雅地道別（catch you later）。',
    phrases: [
      { en: "I don't think we've met before.", zh: '我想我們以前沒見過面。' },
      { en: 'So what do you do for work?', zh: '你是做什麼工作的？' },
      { en: 'I love hiking on weekends a lot.', zh: '我很喜歡在週末去爬山。' },
      { en: "That's crazy, what are the odds?", zh: '太瘋狂了，真巧！' },
    ],
    practice: '在派對中找與你有共同點的人，練習使用「That reminds me of...」來延續話題。'
  },
  {
    title: '點喝的東西必備英文',
    subtitle: 'Ordering Drinks',
    content: '完整收錄點購咖啡（extra shot, decaf）、手搖飲（half sweet, light ice）以及在酒吧點酒（on the rocks）的專業術語，並包含簡單的酒後社交寒暄與祝酒。',
    phrases: [
      { en: 'Can you make it less sweet?', zh: '可以做不那麼甜嗎？' },
      { en: 'Add an extra shot please.', zh: '請幫我多加一份濃縮。' },
      { en: 'Can I get another round?', zh: '可以再來一輪（酒）嗎？' },
      { en: 'Cheers everyone!', zh: '大家乾杯！' },
    ],
    practice: '練習點一杯不加糖但要換成燕麥奶（oat milk）的客製化咖啡。'
  },
]
