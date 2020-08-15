import React from "react";
import "../styles/usercard.css";
import '../styles/global.css';
import { Link } from 'react-router-dom'

function UserCard({ user }) {

 let courseList = "";

 user.coursesOffered.map(( course ) => {
      courseList = courseList.concat(course);
      courseList = courseList.concat(", ");
  });

  courseList = courseList.slice(0, -2);

  return (
    <Link to={{pathname: '/account', state: {person: user}}}>
      <div className="usercard">
        <h1 className="wanted">WANTED</h1>
        <hr />
        <h2 className="username">{user.displayName}</h2>
        <img src={user.profilePicture} alt="" className="usercard-pic"/>
        <p className="courses">For Ransom: {courseList}</p>
      </div>
    </Link>
  );
}

export default UserCard;