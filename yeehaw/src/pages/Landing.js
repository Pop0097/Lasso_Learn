import React from 'react'
import { Button } from "@material-ui/core";
import "../styles/landing.css";
import {provider, auth} from "../firebase";
import { useStateValue } from "../StateProvider";

function Landing() {
  const [state, dispatch] = useStateValue()
  const signIn = (e) => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result)
				dispatch({
					type: "set_user",
					user: result,
				});
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