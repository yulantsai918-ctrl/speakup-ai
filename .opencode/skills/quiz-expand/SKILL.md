---
name: quiz-expand
description: 擴充互動測驗 — 說「擴充測驗」「加題目」「增加測驗」時載入
---

# 擴充互動測驗工作流程

當使用者要求擴充或新增互動測驗內容時，依序執行：

## 1. 載入 NotebookLM 筆記本內容
- Notebook ID: `46d90fa7-56df-4a1e-817e-22a661936287`（SpeakUp-AI）
- 使用 `notebooklm_notebook_query` 或 `notebooklm_notebook_query_start` + 輪詢
- 一次最多查詢 3-5 個來源（避免 timeout）
- 若 NotebookLM 無法連線，改用 `websearch` 搜尋對應影片內容
- 查詢格式範例：
  ```
  從「影片標題」這個影片中，給我 quiz 資料。
  5 個高頻單字（英中對照）、3 題選擇題（4選項）、2 題填充題。
  純 JSON 格式：[{"title":"主題","vocab":[["word","中文"]],"quizzes":[{"type":"choice","q":"題目","opts":["A","B","C","D"],"ans":0}]}]
  ```

## 2. 取得筆記本中 15 個影片來源清單
影片主題對照：
| 編號 | 主題 | 對應 quiz 主題 |
|---|---|---|
| 1 | 出行交通 | 交通 Transportation |
| 2 | 聊天交流 | 社交聚會 Social |
| 3 | 休閒娛樂 | 休閒娛樂 Leisure |
| 4 | 購物逛街 | 購物 Shopping |
| 5 | 電話英文 | 電話英文 Phone |
| 6 | 用餐點餐 | 餐飲 Dining |
| 7 | 旅遊萬用 | 旅遊英文 Travel |
| 8 | 結帳付款 | 結帳 Checkout |
| 9 | 職場英文 | 職場 Workplace |
| 10 | 醫療英文 | 醫療 Medical |
| 11 | 便利店 | 便利店 Convenience Store |
| 12 | 城市生活 | 城市生活 City Life |
| 13 | 美國生活實境 | 居家生活 Home & Daily Life |
| 14 | 聚會社交 | 社交 Social |
| 15 | 點飲料 | 點飲料 Ordering Drinks |

新增主題（notebook 未涵蓋，從 web search 補充）：
| 16 | 機場英文 | Airport & Flight |
| 17 | 飯店住宿 | Hotel Accommodation |
| 18 | 外送英文 | Food Delivery |
| 19 | 開車交通 | Driving |
| 20 | 超市購物 | Grocery Shopping |

## 3. 編輯 seed-quiz.mjs（寫入 Firestore）
- 檔案位置：`scripts/seed-quiz.mjs`
- `quizData` 陣列中的資料結構（對應 `src/quizData.ts` 介面）：
  ```typescript
  // 型別（src/quizData.ts）
  QuizChoice  { type: 'choice', q: string, opts: string[], ans: number }
  QuizFill    { type: 'fill', q: string, en: string, ans: string }
  QuizItem    = QuizChoice | QuizFill
  QuizSection { num: number, title: string, vocab: { en: string; zh: string }[], quizzes: QuizItem[] }
  ```
- `vocab` 格式已從 `[string, string][]` 改為 `{ en, zh }[]`，使用 helper 函式：
  ```js
  const vocab = (pairs) => pairs.map(([en, zh]) => ({ en, zh }))
  // 用法：vocab([['hello', '你好'], ['world', '世界']])
  ```
- 每段要有：
  - 8-10 個 vocab（英中配對）
  - 10 題 quiz（5 題選擇 + 5 題填充混合，或 7 題選擇 + 3 題填充）
- 填充題的 `en` 欄位用 `___` 標示挖空位置

## 4. 命名規則
- `num` 從既有最大編號 +1 開始
- `title` 格式：`「中文主題 English Title」`
- 選擇題 `opts` 固定 4 個選項，`ans` 為正確答案索引（0-based）
- 填充題 `ans` 為小寫單字或短語

## 5. 寫入 Firestore
- 執行 `node scripts/seed-quiz.mjs`
- 腳本會將 `quizData` 全部寫入 Firestore `quiz_sections` 集合（先刪除既有資料再批次寫入，或覆蓋同 `section-N` 文件）
- 確認所有 section 皆顯示 `✅ Saved quiz section:`

## 6. 驗證
- 執行 `npm run build` 確認 TypeScript 編譯無誤

## 7. 提交
- commit message 格式：`feat: expand quiz to N sections (new: topic1, topic2)`
- 推送到 GitHub（GitHub Actions 會自動重新部署，Firestore 資料已直接更新，不需部署）
- 更新 Obsidian 工作日誌（`每日筆記/YYYY-MM-DD`）

## 相關檔案
- `scripts/seed-quiz.mjs` — 主資料檔（寫入 Firestore）
- `src/quizData.ts` — 型別介面定義（資料在 Firestore，前端執行期載入）
- `src/App.tsx` — 測驗 UI 渲染（第 4 個頁籤，從 Firestore 載入）
- `src/firestoreService.ts` — `loadQuizSections()`、`loadQuizResults()`、`saveQuizResults()`
