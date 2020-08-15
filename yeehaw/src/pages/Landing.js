import React from 'react'
import { Button } from "@material-ui/core";
import "../styles/landing.css";
import db, {provider, auth} from "../firebase";
import { useStateValue } from "../StateProvider";

function Landing() {
	const [state, dispatch] = useStateValue()

	const signIn = (e) => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: "set_user",
					user: result.user,
				});
				//set database equal
				db.collection("users").doc(result.user.email).set({
					displayName: result.user.displayName,
					email: result.user.email,
					profilePicture: result.user.photoURL,
					coursesOffered: ["CSS", "HTML"],
					desiredCourses: ["English", "French"],
					numCoursesOffered: 2,
					numCoursesDesired: 2,
					points: 0, //points and coins will be reset if we keep this code
					coins: 20,
				}).catch((error) => {
					alert(error.message);
			});
		})
	}

  return (
    <div className="landing">
			<div className="landing-container">
        {/* currently a placeholder image*/}
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
					alt=""
				/>
        <h1>Lasso Learn</h1>
        <p>www.lassolearn.com</p>
				<Button onClick={signIn}>Sign In With Google!</Button>
			</div>
    </div>
  )
}

export default Landing;