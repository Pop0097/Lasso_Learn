import React from "react";
import "../styles/usercard.css";
import '../styles/global.css';

function UserCard({user}) {
  return(
      <div className="usercard">
          <h1 className="wanted">WANTED</h1>
          <hr />
          <h2 className="username">{user.displayName}</h2>
          <img src={user.proflePicture} alt="" className="usercard-pic"/>
        <div className="usercard-bottom">
          <p className="courses">I Teach Nothing</p>
        </div>
      </div>
  );
}

export default UserCard;