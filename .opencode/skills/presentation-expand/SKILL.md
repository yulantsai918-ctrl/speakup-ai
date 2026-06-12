---
name: presentation-expand
description: 擴充互動簡報 — 說「加簡報」「擴充簡報」「加課程」「新增投影片」時載入
---

# 擴充互動簡報工作流程

當使用者要求從新的投影片內容建立互動簡報課程時，依序執行：

## 1. 取得投影片內容
- 使用者會提供一份完整的 HTML 檔案（或貼上 HTML 內容）
- HTML 檔案中包含 `slidesData` 陣列，每頁有 `page`、`title`、`subtitle`、`category`、`content`、`render()` 等欄位
- `content` 為純文字內容（用於 Groq API context）
- `render()` 為該頁的 HTML 版面字串
- 若提供的是 HTML 檔案，先讀取檔案內容；若貼上內文則直接使用

## 2. 建立 `src/lessonData.ts`
- 使用 `LessonSlide` 介面：
  ```typescript
  export interface LessonSlide {
    title: string
    subtitle: string
    category: string
    content: string
    phrases: { en: string; zh: string }[]
    practice: string
  }
  ```
- `subtitle` 為副標題（中文或英文皆可）
- `category` 為分類標籤（如 Morning Boost / Dining Out / Grocery & Convenience 等）
- `content` 為詳細內容（可含換行與項目符號，使用反引號樣板字串）
- 匯出名稱：`LESSON_{N}_SLIDES`（N 為課號，如 `LESSON_2_SLIDES`）
- 每頁 4 組中英對照例句

## 3. 建立 `src/Lesson{Num}Slides.tsx`
- 為新課程建立獨立的 React 元件檔案，每個投影片一個自訂版面
- 每個 slide 元件接收 `page`（頁碼）與 `active`（是否顯示）props
- 使用 `<Slide>` 元件（從 Lesson 1 的檔案複製，或直接在該檔案中定義）包裹內容
- 版面樣式使用 `bg-[#fcfbf4] text-[#2d2013]` 作為基礎色調
- 頂部 Ribbon：顯示 category badge、subtitle、NotebookLM Studio
- 底部 Branding：版權文字 + Page X / 15 指示器
- 中間內容區使用 `flex-1 flex flex-col justify-center` 垂直置中
- 套用原有 HTML 的獨特視覺設計（表格、時間軸、象限圖、卡片格線、色彩標示等），轉換為 React JSX
- 圖示使用 `lucide-react` 套件（不可使用 FontAwesome）
- 每個頁面獨立函式如 `Slide1Content`、`Slide2Content`...，由 `LessonNSlide` 根據 `page` 值分支渲染
- content 資料可從 `lessonData.ts` 的 `LESSON_N_SLIDES` import 來取用

## 4. 修改 `src/Presentation.tsx`
- 在 `lessonData.ts` 的 import 中加入新的 slide 資料
- import 新的 `{ LessonNSlide } from './LessonNSlides'`
- 在 component 頂部計算 `SLIDE_CONTENTS` 與 `SLIDE_TITLES` 時加入新 lesson 的對應
  ```typescript
  const SLIDE_CONTENTS = lessonMode === 'lesson1' ? SLIDE_CONTENTS_L1
    : lessonMode === 'lesson2' ? Object.fromEntries(LESSON_2_SLIDES.map((s, i) => [i + 1, `${s.title}。${s.content}`]))
    : /* 下一課 */
  const SLIDE_TITLES = lessonMode === 'lesson1' ? SLIDE_TITLES_L1
    : lessonMode === 'lesson2' ? LESSON_2_SLIDES.map(s => s.title)
    : /* 下一課 */
  const totalSlides = lessonMode === 'lesson1' ? 15
    : lessonMode === 'lesson2' ? LESSON_2_SLIDES.length
    : /* 下一課 */
  ```
- 在 `switchLesson` 的型別中加入新模式
- 在 lesson toggle bar（右上角）加入新按鈕
- 在 slide 渲染區加入新 lesson 的 JSX：
  ```tsx
  {lessonMode === 'lessonN' && (
    <>
      {Array.from({ length: totalSlides }, (_, i) => (
        <LessonNSlide key={`lN-${i + 1}`} page={i + 1} active={currentSlide === i + 1} />
      ))}
    </>
  )}
  ```
- 在 `getLocalAnswer` 的 `else if` 區塊中加入新的關鍵字配對陣列
- 不要刪除既有的 Slide 元件（Lesson 1 仍使用）

## 5. 側欄建議晶片
- 在 sidebar 的 chips 陣列中為新 lesson 加入對應的建議指令
- Lesson 1 建議：`['下一頁', '上一頁', '跳到第五頁', '生存線說什麼']`
- 其他 Lesson：依主題自訂

## 6. 驗證
- 執行 `npx tsc -b` 確認 TypeScript 無誤
- 執行 `npx vite build` 確認建置成功

## 7. 提交
- commit message 格式：`feat: add Lesson N from NotebookLM content`
- 推送到 GitHub（自動觸發 GitHub Pages 部署）

## 相關檔案
- `src/lessonData.ts` — 各課投影片資料（`LESSON_N_SLIDES`）
- `src/LessonNSlides.tsx` — 各課的自訂 React 投影片版面元件
- `src/Presentation.tsx` — 簡報主元件，包含 lesson 切換與渲染
- `src/App.tsx` — 主應用，分頁標籤「AI 互動簡報」
- NotbookLM CLI：`nlm query notebook <NOTEBOOK_ID> <QUESTION> --json`
