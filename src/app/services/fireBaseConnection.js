import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyACa6BN2TWVkK-kEUqcM10RpbsDnpPZkz0",
    authDomain: "tickets-fc2f0.firebaseapp.com",
    projectId: "tickets-fc2f0",
    storageBucket: "tickets-fc2f0.appspot.com",
    messagingSenderId: "990210459658",
    appId: "1:990210459658:web:8a319852f1b568a1d437f3",
    measurementId: "G-SB5VE1YZ52"
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

const storage = getFirestore(firebaseApp)

export { auth, db, storage }