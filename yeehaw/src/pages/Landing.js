import React from 'react'
import { Button } from "@material-ui/core";
import "../styles/landing.css";
import db, {provider, auth} from "../firebase";
import { useStateValue } from "../StateProvider";
import { useHistory } from 'react-router-dom';

function Landing() {
  let history = useHistory();
  const [{user}, dispatch] = useStateValue()
  const signIn = (e) => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: "set_user",
					user: result.user,
				});
				console.log(result.user)
				db.collection("users").doc(result.user.email).set({
					displayName: result.user.displayName,
					email: result.user.email,
					proflePicture: result.user.photoURL,
          coursesOffered: [],
          desiredCourses: [],
					points: 20, //points and coins will be reset if we keep this code
					coins: 60
				}, {merge: true}).then(function() {
          history.push("/");
					console.log("user added to database!")
				})
			})
			.catch((error) => {
				alert(error.message);
			});
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

export default Landing