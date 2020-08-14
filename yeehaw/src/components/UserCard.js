import React from "react";

function UserCard({user}) {
  return(
      <div className="usercard">
        <div className="usercard-top">
          <h1 className="wanted">WANTED</h1>
          <hr />
          <h1 className="username">{user.displayName}</h1>
        </div>
        <div className="usercard-pic">
          <img src={user.profilePicture} alt=""/>
        </div>
        <div className="usercard-bottom">
          <p className="courses">I Teach Nothing</p>
        </div>
      </div>
  );
}

export default UserCard;