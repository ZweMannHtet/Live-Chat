import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHTKZS45c57u1eRbpRS3bM0x_M1llhjeE",

  authDomain: "composition-api-20488.firebaseapp.com",

  projectId: "composition-api-20488",

  storageBucket: "composition-api-20488.appspot.com",

  messagingSenderId: "266267181827",

  appId: "1:266267181827:web:5c4346e60d1cd7a0f8df36",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth };
