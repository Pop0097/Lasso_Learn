import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import { useStateValue } from "../StateProvider";
import { useHistory, Link } from "react-router-dom";
import db from "../firebase";
import styled from "styled-components";

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: black;
	}
`;

function Header() {
	const [input, setInput] = useState("");
	const [currentUser, setCurrentUser] = useState(null);
	const [{ user, userPic }, dispatch] = useStateValue();

	let history = useHistory();

	const onChange = (event) => {
		setInput(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: "set_search",
			search_value: input,
		});
		setInput("");

		history.push("/search");
	};

	// db.collection("users")
	// 	.doc(userEmail)
	// 	.onSnapshot((snapshot) => setCurrentUser(snapshot.data()));

	return (
		<div className="HeaderContainer">
			<div className="row height100">
				<div className="col-md-3 col-2 my-auto HeaderLogo text-center">
					<h1>
						{" "}
						<StyledLink to="/">LassoLearn</StyledLink>
					</h1>
				</div>
				<div className="col-md-6 col-8 my-auto">
					<form className="SearchForm center" onSubmit={onSubmit}>
						<input
							name="input"
							type="text"
							value={input}
							onChange={onChange}
							id="search-input"
							placeHolder="Search for a Course!"
						/>
						<button id="submit-button" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="col-md-3 col-2 my-auto AccountLink text-center">
					{/* <Link
						to={{
							pathname: "/account",
							state: {
								user: currentUser,
							},
						}}
					> */}
					<img
						src={userPic}
						alt=""
						id="profile-image-small"
						className="center"
					/>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
}

export default Header;
