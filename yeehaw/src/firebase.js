import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBdKCGTigCMu17V2BTuVii6K45CEi1RLjU",
	authDomain: "lassolearn.firebaseapp.com",
	databaseURL: "https://lassolearn.firebaseio.com",
	projectId: "lassolearn",
	storageBucket: "lassolearn.appspot.com",
	messagingSenderId: "134700774917",
	appId: "1:134700774917:web:dcdd25dc591c0bf50dce6c",
	measurementId: "G-4J70N46GJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
