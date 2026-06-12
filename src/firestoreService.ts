import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { db, auth, ensureAuth } from './firebase'

export interface UserData {
  streak: number
  wordsSpoken: number
  pronunciationScore: number
  savedPhrases: Array<{ english: string; chinese: string; scenario: string }>
  lastActiveDate: string
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
