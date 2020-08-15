import React from "react";
import "../styles/usercard.css";
import '../styles/global.css';
import { Link } from 'react-router-dom'

function UserCard({user}) {
  return(
    <Link to={{
      pathname: '/account',
      state: {
        person: user
      }
    }}>
    <div className="usercard">
            <h1 className="wanted">WANTED</h1>
            <hr />
            <h2 className="username">{user.displayName}</h2>
            <img src={user.profilePicture} alt="" className="usercard-pic"/>
            <p className="courses">For Ransom: ${}</p>
        </div>
    </Link>
  );
}

export default UserCard;