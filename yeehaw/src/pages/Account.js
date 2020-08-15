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

    const setCourseValues = () => {
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

        console.log(desiredCourseList, courseList);
    }

    //Modal
    const openModal = () => {
        setOffered(courseList);
        setDesired(desiredCourseList);

        setIsOpen(true);
    }

    const updateDesiredCourses = (event) => {
        event.preventDefault();

        var desiredArray = desiredC.split(", ");
        console.log(desiredArray);

        setIsOpen(false);
    }

    const updateOfferedCourses = (event) => {
        event.preventDefault();

        var offeredArray = offeredC.split(", ");
        console.log(offeredArray);



        setIsOpen(false);
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
                        <button onClick={openModal} style={{visibility: isCurrentUser}}>Edit Courses</button>
                    </div>
                </div>
            </div>

            <Modal 
                isOpen={modalIsOpen}
                contentLabel="Edit Course Preferences"
            >
                <p onClick={() => setIsOpen(false)}>Cancel</p>
                <p> Instructions: Separate all courses with a comma and a space (ex. "CSS, HTML, JavaScript")</p>
                <h4>Courses Offered (Ransom):</h4>
                <form onSubmit={updateOfferedCourses}>
                    <input type="text" name="offeredC" value={offeredC} onChange={(event) => setOffered(event.target.value)} /><br />
                    <button type="submit">Update Ransom</button>
                </form>

                <h4>Courses Desired (Seeking):</h4>
                <form onSubmit={updateDesiredCourses}>
                    <input type="text" name="desiredC" value={desiredC} onChange={(event) => setDesired(event.target.value)} /><br />
                    <button type="submit">Update Seeking</button>
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