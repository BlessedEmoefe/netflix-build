import {initializeApp} from 'firebase/app';
import { getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5l44ZmrG2JIVGYKePlUqZ5TWBue5m3t0",
  authDomain: "netflix-build-fd31d.firebaseapp.com",
  projectId: "netflix-build-fd31d",
  storageBucket: "netflix-build-fd31d.appspot.com",
  messagingSenderId: "536989585622",
  appId: "1:536989585622:web:d9c2878f92b1c5b1c2f977",
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


export { auth }
export default db;