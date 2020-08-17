import React from "react";
import "../styles/landing.css";
import db, { provider, auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';

function Landing() {
	function loadAvatars() {
		let avatarAmt = 6;
		let avatars = [];
		for (let i = 0; i < avatarAmt; i++) {
			avatars.push("/avatars/avatar" + i + ".png");
		}
		console.log(avatars);
		return avatars;
	}

	function getDocument(email) {
		console.log("A", email);
		return new Promise((resolve, reject) => {
			var userDocument;
			db.collection("users").doc(email).get().then(documentSnapshot => {
				if(documentSnapshot.exists) {
					userDocument = documentSnapshot.data(); 
					resolve(userDocument);
				}
			});
		})
	}

	const avatars = loadAvatars();
	const [state, dispatch] = useStateValue();
	let history = useHistory(); 

	const signIn = (e) => {
		auth.signInWithPopup(provider).then((result) => {
			let picture = avatars[Math.floor(Math.random() * 6)];
			//add user to database
			db.collection("users")
				.doc(result.user.email)
				.set({
					displayName: result.user.displayName,
					email: result.user.email,
					profilePicture: picture,
					coursesOffered: ["CSS", "HTML"],
					desiredCourses: ["English", "French"],
					numCoursesOffered: 2,
					numCoursesDesired: 2,
					points: 0,
					coins: 20,
				})
				.then(() => {
					console.log(result.user);
					getDocument(result.user.email).then((doc) => {
						console.log("B", doc);
						dispatch({
							type: "set_user",
							user: result.user,
							userPic: picture,
						});
						dispatch({
							type: "set_doc",
							userDoc: doc,
						});
					})
					history.push("/");
				})
				.catch((error) => {
					alert(error.message);
				});
		});
	};

	return (
		<div className="landing">
			<h1> LassoLearn</h1>
			<div className="landing-container">
				<div id="email-login" className="buttons" onClick={signIn}>
					Your email
				</div>
				<p>or</p>
				<div className="buttons" onClick={signIn}>
					Sign in with Google
				</div>
				<br />
				<div id="account-login" className="buttons" onClick={signIn}>
					Login with an account
				</div>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default Landing;
