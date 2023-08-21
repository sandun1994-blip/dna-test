import {  initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STROGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_APPID
  };
  console.log(process.env.REACT_APP_APIKEY);
  
  // Initialize Firebase
  // const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();  
  const app =initializeApp(firebaseConfig)
  
  export const auth =getAuth(app)
  export const database =getFirestore(app)