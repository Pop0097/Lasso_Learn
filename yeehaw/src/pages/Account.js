import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/account.css';
import '../styles/global.css';
import { useHistory } from 'react-router-dom';
import db from "../firebase";
import { useStateValue } from "../StateProvider"; 
import Modal from 'react-modal';

var desiredCourseList = "";
var courseList = "";

function setDesiredList(props) {
    desiredCourseList = "";

    props.location.state.person.desiredCourses.map(( course ) => {
        desiredCourseList = desiredCourseList.concat(course);
        desiredCourseList = desiredCourseList.concat(", ");
    });

    desiredCourseList = desiredCourseList.slice(0, -2);

}

function setCourseList(props) {
    courseList = "";

    props.location.state.person.coursesOffered.map(( course ) => {
        courseList = courseList.concat(course);
        courseList = courseList.concat(", ");
    });

    courseList = courseList.slice(0, -2);
}

function Account(props) {
    let history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [desiredC, setDesired] = useState("");
    const [offeredC, setOffered] = useState("");


    const sendRansom = () => {
        alert("Ransom Sent");
    }

    //Check if user is present
    var isCurrentUser = "hidden";

    if(user.email == props.location.state.person.email) {
        isCurrentUser = "visible"; 
    }
    
    //Strings for courses offered/desired

    setCourseList(props);
    setDesiredList(props);

    //Modal
    const openModal = () => {
        setOffered(courseList);
        setDesired(desiredCourseList);
        console.log("Heww ", desiredC, offeredC);

        setIsOpen(true);
    }

    const updateCourses = (event) => {
        event.preventDefault();

        desiredCourseList = desiredC;
        var desiredArray = desiredC.split(", ");
        db.collection("users").doc(props.location.state.person.email).update({desiredCourses: desiredArray, numCoursesDesired: desiredArray.length});

        courseList = offeredC;
        var offeredArray = offeredC.split(", ");
        console.log(offeredArray);
        db.collection("users").doc(props.location.state.person.email).update({coursesOffered: offeredArray, numCoursesOffered: offeredArray.length});
        
        setIsOpen(false);
    }

    const isInvalid1 = ((offeredC.split(", ").length < 2) || (offeredC.split(", ").length > 5) || offeredC.indexOf(", ") == -1) || ((desiredC.split(", ").length < 2) || (desiredC.split(", ").length > 5) || desiredC.indexOf(", ") == -1);  

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
                        <button onClick={openModal} style={{visibility: isCurrentUser}}>Edit Courses</button>
                    </div>
                </div>
            </div>

            <Modal 
                isOpen={modalIsOpen}
                contentLabel="Edit Course Preferences"
            >
                <p onClick={() => setIsOpen(false)}>Cancel</p>
                <p> Instructions: Separate all courses with a comma and a space (ex. "CSS, HTML, JavaScript"). You must have between 2-5 tags. </p>
                <form onSubmit={updateCourses}>
                    <h4>Courses Offered (Ransom):</h4><br />
                    <input type="text" name="offeredC" value={offeredC} onChange={(event) => setOffered(event.target.value)} /><br />
                    <h4>Courses Desired (Seeking):</h4><br />
                    <input type="text" name="desiredC" value={desiredC} onChange={(event) => setDesired(event.target.value)} /><br />
                    <button disabled={isInvalid1} type="submit">Update</button>
                </form>
            </Modal>

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
                                    <p> {offeredC} </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h4>Seeking: </h4>
                                </div>
                                <div className="col-6">
                                    <p> {desiredC}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="center" onClick={sendRansom}>Send Ransom</button>
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