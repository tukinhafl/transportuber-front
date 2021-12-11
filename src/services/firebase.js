import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCeu_dPusOeNzgqCPaCdC8G9Fivs-obQ4",
  authDomain: "transportuber-1bdac.firebaseapp.com",
  projectId: "transportuber-1bdac",
  storageBucket: "transportuber-1bdac.appspot.com",
  messagingSenderId: "987128062304",
  appId: "1:987128062304:web:3923cc0a640e39fb6ebe05"
})

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
