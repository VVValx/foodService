import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPUMg0LCZVD9LCrybrDconTbG1hyfwWPI",
  authDomain: "food-85141.firebaseapp.com",
  databaseURL: "https://food-85141.firebaseio.com",
  projectId: "food-85141",
  storageBucket: "food-85141.appspot.com",
  messagingSenderId: "673023327438",
  appId: "1:673023327438:web:f1bce80439a210ad20649f",
  measurementId: "G-6NTDLSYTBZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const googleAuth = () => auth.signInWithPopup(provider);

export default firebase;
