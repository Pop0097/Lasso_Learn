import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import UserCard from "../components/UserCard";
import "../styles/featuredusers.css";
import "../styles/global.css";

function Search() {
	const [{ search }, dispatch] = useStateValue();
	const [searchResults, setSearchResults] = useState([]);

	var userRef = db.collection("users");
	var query = userRef
		.where("coursesOffered", "array-contains", search)
		.limit(10);

	//Retrieve all users that fit "search" criteria
	useEffect(() => {
		query.onSnapshot((snapshot) =>
			setSearchResults(snapshot.docs.map((doc) => doc.data()))
		);
	}, [searchResults]);

	return (
		<div className="searchContainer">
			<p id="result-indication">Results for "{search}" </p>
			<div className="row-flex">
				{searchResults.map((user) => (
					<UserCard user={user} />
				))}
			</div>
		</div>
	);
}

export default Search;
