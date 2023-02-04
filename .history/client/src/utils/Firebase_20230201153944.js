import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
const app = firebase.initializeApp({
    apiKey: "AIzaSyBlCu-wx6Nim9Hv7aE9ZL_09w6ssMDhA6I",
    authDomain: "admin-crm-8474f.firebaseapp.com",
    projectId: "admin-crm-8474f",
    storageBucket: "admin-crm-8474f.appspot.com",
    messagingSenderId: "312544559345",
    appId: "1:312544559345:web:d2e26ceee103ac4b432950"
  })
  
  // Initialize Firebase
export const storage = getStorage(app)
export const auth = app.auth()
export const db = getFirestore(app)
export default app