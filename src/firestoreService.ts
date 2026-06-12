import { doc, setDoc, getDoc, updateDoc, getDocs, collection } from 'firebase/firestore'
import { db, auth, ensureAuth } from './firebase'

import type { QuizSection } from './quizData'

export interface UserData {
  streak: number
  wordsSpoken: number
  pronunciationScore: number
  savedPhrases: Array<{ english: string; chinese: string; scenario: string }>
  lastActiveDate: string
  quizResults?: Record<string, { status: 'correct' | 'wrong'; selected?: number }>
}

const defaultData: UserData = {
  streak: 1,
  wordsSpoken: 0,
  pronunciationScore: 80,
  savedPhrases: [],
  lastActiveDate: new Date().toISOString().split('T')[0]
}

export async function loadUserData(): Promise<UserData | null> {
  if (!auth.currentUser) return null
  const uid = auth.currentUser.uid
  const snap = await getDoc(doc(db, 'users', uid))
  if (snap.exists()) {
    return snap.data() as UserData
  }
  return null
}

export async function saveUserData(data: Partial<UserData>): Promise<void> {
  const uid = await ensureAuth()
  const ref = doc(db, 'users', uid)
  const existing = await getDoc(ref)
  if (existing.exists()) {
    await updateDoc(ref, data)
  } else {
    await setDoc(ref, { ...defaultData, ...data })
  }
}

export async function loadQuizSections(): Promise<QuizSection[]> {
  const snap = await getDocs(collection(db, 'quiz_sections'))
  const sections: QuizSection[] = []
  snap.forEach(d => sections.push(d.data() as QuizSection))
  sections.sort((a, b) => a.num - b.num)
  return sections
}

export async function loadQuizResults(): Promise<Record<string, { status: 'correct' | 'wrong'; selected?: number }>> {
  if (!auth.currentUser) return {}
  const uid = auth.currentUser.uid
  const snap = await getDoc(doc(db, 'users', uid))
  if (snap.exists()) {
    const data = snap.data() as UserData
    return data.quizResults || {}
  }
  return {}
}

export async function saveQuizResults(results: Record<string, { status: 'correct' | 'wrong'; selected?: number }>): Promise<void> {
  await saveUserData({ quizResults: results })
}
