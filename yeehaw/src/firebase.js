import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbKPSYESnQtcwn_2EHDj5nN7z37_1O5I4",
  authDomain: "yeehaw-hacks.firebaseapp.com",
  databaseURL: "https://yeehaw-hacks.firebaseio.com",
  projectId: "yeehaw-hacks",
  storageBucket: "yeehaw-hacks.appspot.com",
  messagingSenderId: "451848576725",
  appId: "1:451848576725:web:9c51580a30afc3a2b18c5c",
  measurementId: "G-RGZ6CNJ79C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
