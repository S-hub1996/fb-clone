// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider,getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDLj9tbo2FR5VT9VA5gRRuVPwM1fcwa89Y",
    authDomain: "facebook-clone-s-hub.firebaseapp.com",
    projectId: "facebook-clone-s-hub",
    storageBucket: "facebook-clone-s-hub.appspot.com",
    messagingSenderId: "869774153269",
    appId: "1:869774153269:web:323a0a3c1f1c3b3111037c",
    measurementId: "G-TN9YL06300"
  };


const firebaseApp=initializeApp(firebaseConfig);

const db= getFirestore(firebaseApp);
const auth= getAuth();
const provider= new GoogleAuthProvider();
const storage= getStorage();
export{auth,provider,storage}
export default db;
