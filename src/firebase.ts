import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyClM_7W3UXlIJzbunmktHRfgVC0eHLFJv0',
  authDomain: 'speakup-ai-english.firebaseapp.com',
  projectId: 'speakup-ai-english',
  storageBucket: 'speakup-ai-english.firebasestorage.app',
  messagingSenderId: '645218512607',
  appId: '1:645218512607:web:7f62196aedf145a3e6c36a'
}

const app = initializeApp(FIREBASE_CONFIG)
export const db = getFirestore(app)
export const auth = getAuth(app)

export async function ensureAuth(): Promise<string> {
  const { currentUser } = auth
  if (currentUser) return currentUser.uid
  const cred = await signInAnonymously(auth)
  return cred.user.uid
}
