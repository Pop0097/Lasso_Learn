import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "../firebase";

function Sidebar() {
	const [userRooms, setUserRooms] = useState([]);

	useEffect(() => {
		//snapshot is an array of "users" collection
		db.collection("users").onSnapshot((snapshot) => {
			setUserRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().displayName,
				}))
			);
		});
	}, []);

	return (
		<div className="sidebar">
			{userRooms.map((userRoom) => (
				<div>
				<SidebarOption name={userRoom.name} id={userRoom.id} />
				<hr className="bar-hr"/></div>
			))}
		</div>
	);
}

export default Sidebar;
