// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyARIqWFN1zo42vzmYd1IVFpopPvM77pFcQ",
    authDomain: "whatsapp-clone-e63b5.firebaseapp.com",
    projectId: "whatsapp-clone-e63b5",
    storageBucket: "whatsapp-clone-e63b5.appspot.com",
    messagingSenderId: "209933585397",
    appId: "1:209933585397:web:3f610d105effe49fb02ebc",
    measurementId: "G-TKB4WZP4FJ"
    
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;