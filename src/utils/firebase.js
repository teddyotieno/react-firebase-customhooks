import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5-8YQiBni8Ox0tfVvrtneDDtcITO9T24",
  authDomain: "slack-clone-afdbd.firebaseapp.com",
  databaseURL: "https://slack-clone-afdbd.firebaseio.com",
  projectId: "slack-clone-afdbd",
  storageBucket: "slack-clone-afdbd.appspot.com",
  messagingSenderId: "466956418854",
  appId: "1:466956418854:web:53645d6261577a37"
};
// Intialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase };
