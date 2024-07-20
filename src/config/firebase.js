import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  // Paste configuration object from project settings page under General tab
  // in Firebase console of your app
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}
