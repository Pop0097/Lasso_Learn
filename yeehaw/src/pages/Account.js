import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/account.css';
import '../styles/global.css';
import { useStateValue } from "../StateProvider"; 
import { useHistory } from 'react-router-dom';
import db from "../firebase";

function Account() {
    let history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const userEmail = user.email;

    //const dbUser = db.collection("users").doc(userEmail).get(); 

    return (
        <div className="AccountContainer">
            <div className="TopHalfContainer">
                <div className="row height100 ToBottom">
                    <div className="col-4">
                        <div className="ProfileImageLarge">
                            <img src={user.photoURL} id="profile-image-large" />
                        </div>
                    </div>
                    <div className="col-8 ToBottom">
                        <div id="name">
                            {user.displayName}
                        </div>
                    </div>
                </div>
            </div>
            <div className="BottomHalfContainer">
                <div className="row">
                    <div className="col-4">
                        <div className="UserPoints center">
                            <div className="row">
                                <div className="col-3 TokenImage">

                                </div>
                                <div className="col-6 TokenName">
                                    <p><b>Bounty: </b></p>
                                </div>
                                <div className="col-3 TokenValue">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 TokenImage">

                                </div>
                                <div className="col-6 TokenName">
                                    <p><b>Gold: </b></p>
                                </div>
                                <div className="col-3 TokenValue">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
