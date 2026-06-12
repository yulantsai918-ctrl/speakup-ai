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
  vocab: { en: string; zh: string }[]
  quizzes: QuizItem[]
}
