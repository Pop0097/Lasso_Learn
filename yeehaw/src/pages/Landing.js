import React from 'react'
import { Button } from "@material-ui/core";
import "../styles/landing.css";

function Landing() {
  const signIn = () => {
    console.log("You Clicked the Sign In Button!")
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



