// import * as firebase from "firebase";

// import "firebase/firestore";

// const configuration = {
//   apiKey: "AIzaSyDjy33u67BcbGsO1Z2riuZPYm3eE0uMCvc",

//   authDomain: "ethiopian-history-9b443.firebaseapp.com",

//   projectId: "ethiopian-history-9b443",

//   storageBucket: "ethiopian-history-9b443.appspot.com",

//   messagingSenderId: "1005349355211",

//   appId: "1:1005349355211:web:90064ec157f79a7050e54e",

//   measurementId: "G-XZ92LF3E8P",
// };

// firebase.initializeApp(configuration);

// const db = firebase.firestore();

// export default db;
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

initializeApp(firebaseConfig);
