import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/account.css";
import "../styles/global.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import Modal from "react-modal";

function Account(props) {
	user = props.location.state.person;
	var desiredCourseList = "HTML, CSS";
	var courseList = "English, French";

	function setCourseList(props) {
		courseList = "";
		user.coursesOffered.map((course) => {
			courseList = courseList.concat(course);
			courseList = courseList.concat(", ");
		});

		courseList = courseList.slice(0, -2);
	}

	function setDesiredList(props) {
		desiredCourseList = "";

		user.desiredCourses.map((course) => {
			desiredCourseList = desiredCourseList.concat(course);
			desiredCourseList = desiredCourseList.concat(", ");
		});
		desiredCourseList = desiredCourseList.slice(0, -2);
	}

	let history = useHistory();
	const [{ user }, dispatch] = useStateValue();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [desiredC, setDesired] = useState("English, French");
	const [offeredC, setOffered] = useState("HTML, CSS");

	const Action = () => {
		if (act == 1) {
			var newVal1 = user.coins + 1;
			var newVal2 = user.points + 10;
			db.collection("users")
				.doc(user.email)
				.update({ coins: newVal1, points: newVal2 });

			var data;
			var docRef = db
				.collection("users")
				.doc(user.email)
				.get()
				.then(function (documentSnapshot) {
					if (documentSnapshot.exists) {
						data = documentSnapshot.data();

						newVal1 = data.coins - 1;
						db.collection("users").doc(user.email).update({ coins: newVal1 });
						alert("Ransom Paid!");
					} else {
						console.log("document not found");
					}
				});
		} else {
			setOffered(courseList);
			setDesired(desiredCourseList);
			console.log("Heww ", desiredC, offeredC);

			setIsOpen(true);
		}
	};

	//Check if user is present
	var buttonString = "Send Ransom";
	var act = 1;

	if (user.email == user.email) {
		buttonString = "Edit Course Preferences";
		act = 2;
	}

	//Strings for courses offered/desired

	setCourseList(props);
	setDesiredList(props);

	//Modal
	const updateCourses = (event) => {
		event.preventDefault();

		desiredCourseList = desiredC;
		var desiredArray = desiredC.split(", ");
		db.collection("users").doc(user.email).update({
			desiredCourses: desiredArray,
			numCoursesDesired: desiredArray.length,
		});

		courseList = offeredC;
		var offeredArray = offeredC.split(", ");
		console.log(offeredArray);
		db.collection("users").doc(user.email).update({
			coursesOffered: offeredArray,
			numCoursesOffered: offeredArray.length,
		});

		setIsOpen(false);
	};

	const isInvalid1 =
		offeredC.split(", ").length < 2 ||
		offeredC.split(", ").length > 5 ||
		offeredC.indexOf(", ") == -1 ||
		desiredC.split(", ").length < 2 ||
		desiredC.split(", ").length > 5 ||
		desiredC.indexOf(", ") == -1;

	return (
		<div className="AccountContainer">
			<div className="TopHalfContainer">
				<div className="row height100" style={{ verticalAlign: "middle" }}>
					<div className="col-lg-4 my-auto col-12">
						<div className="ProfileImageLarge center">
							<img
								src={user.profilePicture}
								id="profile-image-large"
								className="center"
							/>
						</div>
					</div>
					<div className="col-lg-8 my-auto col-12 ToBottom height100">
						<div id="name">{user.displayName}</div>
					</div>
				</div>
			</div>

			<Modal
				isOpen={modalIsOpen}
				contentLabel="Edit Course Preferences"
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(255, 255, 255, 0.75)",
					},
					content: {
						position: "absolute",
						alignSelf: "center",
						border: "1px solid #ccc",
						background: "#fff",
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "4px",
						outline: "none",
						padding: "20px",
					},
				}}
			>
				<p id="instructions-title"> Instructions:</p>
				<p id="instructions">
					{" "}
					Separate all courses with a comma and a space (ex. "css, html,
					javascript"). <br />
					You must have between 2 to 5 tags.{" "}
				</p>
				<hr className="center" />
				<div className="center">
					<form onSubmit={updateCourses} className="update-form center">
						<h4>Courses Offered (Ransom)</h4>
						<br />
						<input
							type="text"
							className="center"
							name="offeredC"
							value={offeredC}
							onChange={(event) => setOffered(event.target.value)}
						/>
						<br />
						<h4>Courses Desired (Seeking)</h4>
						<br />
						<input
							type="text"
							className="center"
							name="desiredC"
							value={desiredC}
							onChange={(event) => setDesired(event.target.value)}
						/>
						<br />
						<button
							id="update-button"
							className="center"
							disabled={isInvalid1}
							type="submit"
						>
							Update
						</button>
					</form>
					<p style={{ textAlign: "center" }} onClick={() => setIsOpen(false)}>
						Cancel
					</p>
				</div>
			</Modal>

			<div className="BottomHalfContainer">
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="UserPoints center">
							<div className="row">
								<div className="col-5 TokenName">
									<p>Bounty:</p>
								</div>
								<div className="col-7 TokenValue">
									<p>
										<b>{user.points} </b>
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-5 TokenName">
									<p>Gold:</p>
								</div>
								<div className="col-7 TokenValue">
									<p>
										<b>{user.coins} </b>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-12">
						<div className="UserPreferences center">
							<div className="row">
								<div className="col-5 ItemName">
									<p>County: </p>
								</div>
								<div className="col-7 Criteria">
									<p> Fort Worth</p>
								</div>
							</div>
							<div className="row">
								<div className="col-5 ItemName">
									<p>Up for Ransom: </p>
								</div>
								<div className="col-7 Criteria">
									<p> {offeredC} </p>
								</div>
							</div>
							<div className="row">
								<div className="col-5 ItemName">
									<p>Seeking: </p>
								</div>
								<div className="col-7 Criteria">
									<p> {desiredC}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<button id="use-button" className="center" onClick={Action}>
										{buttonString}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Account;
