import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2Bbxwfic97H0Ck6PDiz6ibLSkMHG7oiU",
  authDomain: "kiafoodapp.firebaseapp.com",
  databaseURL: "https://kiafoodapp-default-rtdb.firebaseio.com",
  projectId: "kiafoodapp",
  storageBucket: "kiafoodapp.appspot.com",
  messagingSenderId: "89198631571",
  appId: "1:89198631571:web:79d17a49d61ee961ed0b66",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, fireStore, storage };
