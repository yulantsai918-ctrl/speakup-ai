---
name: scenario-expand
description: 擴充場景對話 — 說「擴充場景」「加對話」「增加場景」時載入
---

# 擴充場景對話工作流程

當使用者要求擴充場景對話內容時，依序執行：

## 1. 資料來源
### 1a. NotebookLM（優先）
- Notebook ID: `46d90fa7-56df-4a1e-817e-22a661936287`（SpeakUp-AI）
- 使用 `notebooklm_notebook_query` 查詢特定影片的對話內容
- 若連線失敗，改用 `websearch` 搜尋對應影片

### 1b. 既有 Firestore 資料
- 10 個場景已存在 Firestore `scenarios/{id}`：
  `cafe`, `shopping`, `restaurant`, `travel`, `phone`, `workplace`, `medical`, `checkout`, `convenience_store`, `social`
- 每個場景結構：
  ```typescript
  { id, title, level, icon, description, systemPrompt, initialMessage, hints: string[], phrases: { english, chinese }[] }
  ```

## 2. 擴充方式

### 2a. 擴充 phrases（常用句庫）
- 編輯 `scripts/seed-firestore.mjs` 中的 `scenariosData` 陣列
- 每個場景的 `phrases` 陣列應有 **10-15 句**（目前約 7-13 句）
- 每句格式：`{ english: "自然美式英文", chinese: "中文翻譯" }`
- 新增的句子應：
  - 來自 NotebookLM 影片中的真實對話
  - 涵蓋該場景的不同面向（開場、中間應對、結尾）
  - 長度適中（1 句，不超過 20 字）

### 2b. 新增 hints（建議用語）
- 每個場景維持 **3 句 hints**
- 放在 `hints` 陣列中，用於聊天頁面的提示卡

### 2c. 隨機開場對話（已實作）
- `src/App.tsx` 中 `generateRandomOpening()` 函式會在選擇場景時呼叫 Groq API
- system prompt 使用場景的 `systemPrompt` 欄位
- temperature 0.9 確保每次開場不同
- 失敗時自動降級使用 `initialMessage`

## 3. 執行重新寫入
```bash
node scripts/seed-firestore.mjs
```

## 4. 新增完整新場景
若要新增一個全新場景（不限於既有的 10 個）：

### 4a. Firestore 資料
在 `scripts/seed-firestore.mjs` 的 `scenariosData` 中加入新物件：
```javascript
{
  id: 'unique_id',            // 英文 id，作為 Firestore document key
  title: '中文場景名稱',       // 顯示用標題
  level: '初級 (Beginner)',   // 難度：Beginner / Intermediate / Advanced / Casual
  icon: '🆕',                 // emoji 圖示
  description: '描述文字',     // 1 句話描述
  systemPrompt: `...`,        // AI 角色扮演提示（重要！決定 AI 行為）
  initialMessage: "...",      // 預設開場（隨機開場失敗時降級用）
  hints: [                    // 3 句建議用語
    "Hint sentence 1.",
    "Hint sentence 2.",
    "Hint sentence 3."
  ],
  phrases: [                  // 10-15 句中英對照
    { english: "...", chinese: "..." },
    ...
  ]
}
```

### 4b. 前端無需修改
- `src/App.tsx` 已透過 `useEffect` 自動從 Firestore `scenarios/` 載入所有場景
- 新場景會自動出現在「探索情境」頁籤

## 5. 驗證
- `npm run build` 確認 TypeScript 無誤
- 檢查新場景在 Firestore 中是否正確寫入

## 6. 提交
- commit message：`feat: expand scenario dialogues (new: topic1, update: topic2)`
- 推送到 GitHub Pages 自動部署
- 更新 Obsidian 工作日誌

## 相關檔案
- `scripts/seed-firestore.mjs` — Firestore 種子腳本（場景資料主檔）
- `src/App.tsx` — 場景載入 + 隨機開場邏輯
- `src/firebase.ts` — Firebase 初始化
- `firestore.rules` — Firestore 安全規則（scenarios 允許公開讀取）
