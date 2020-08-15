import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/account.css';
import '../styles/global.css';
import { useHistory } from 'react-router-dom';
import db from "../firebase";
import { useStateValue } from "../StateProvider"; 
import Modal from 'react-modal';

function Account(props) {
    let history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const [desired, setDesired] = useState([]);

    const sendRansom = () => {
        alert("Ransom Sent");
    }

    var isCurrentUser = "hidden";

    if(user.email == props.location.state.person.email) {
        //alert("User is current user");
        isCurrentUser = "visible"; 
    }
    
    
    var desiredCourseList = "";
    var courseList = "";

    props.location.state.person.coursesOffered.map(( course ) => {
        courseList = courseList.concat(course);
        courseList = courseList.concat(", ");
    });

    props.location.state.person.desiredCourses.map(( course ) => {
        desiredCourseList = desiredCourseList.concat(course);
        desiredCourseList = desiredCourseList.concat(", ");
    });

    courseList = courseList.slice(0, -2);
    desiredCourseList = desiredCourseList.slice(0, -2);
    //console.log(courseList, desiredCourseList);

    const editUser = () => {

    }

    return (
        <div className="AccountContainer">
            <div className="TopHalfContainer">
                <div className="row height100 ToBottom"> 
                    <div className="col-lg-4 col-12">
                        <div className="ProfileImageLarge center" >
                            <img src={props.location.state.person.profilePicture} id="profile-image-large" className="center"/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 ToBottom height100">
                        <div id="name">
                            {props.location.state.person.displayName}
                        </div>
                        <button onClick={editUser} style={{visibility: isCurrentUser}}>Edit Courses</button>
                    </div>
                </div>
            </div>
            <div className="BottomHalfContainer">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="UserPoints center">
                            <div className="row">
                                <div className="col-3 TokenImage">

                                </div>
                                <div className="col-6 TokenName">
                                    <h4>Bounty:</h4>
                                </div>
                                <div className="col-3 TokenValue">
                                    <p><b>{props.location.state.person.points} </b></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 TokenImage">

                                </div>
                                <div className="col-6 TokenName">
                                    <h4>Gold:</h4>
                                </div>
                                <div className="col-3 TokenValue">
                                <p><b>{props.location.state.person.coins} </b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="UserPreferences center">
                            <div className="row">
                                <div className="col-6">
                                    <h4>County: </h4>
                                </div>
                                <div className="col-6">
                                    <p> Fort Worth</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h4>Up for Ransom: </h4>
                                </div>
                                <div className="col-6">
                                    <p> {courseList} </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h4>Seeking: </h4>
                                </div>
                                <div className="col-6">
                                    <p> {desiredCourseList}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="center" onClick={sendRansom}>Send ransom to ___(name)___</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
