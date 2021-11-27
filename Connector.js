import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjy33u67BcbGsO1Z2riuZPYm3eE0uMCvc",

  authDomain: "ethiopian-history-9b443.firebaseapp.com",

  projectId: "ethiopian-history-9b443",

  storageBucket: "ethiopian-history-9b443.appspot.com",

  messagingSenderId: "1005349355211",

  appId: "1:1005349355211:web:90064ec157f79a7050e54e",

  measurementId: "G-XZ92LF3E8P",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// firebase.initializeApp(configuration);

export default db;
