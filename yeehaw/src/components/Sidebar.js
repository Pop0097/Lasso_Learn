import React, { useEffect, useState } from 'react'
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "../firebase";

function Sidebar() {

  const [userRooms, setUserRooms] = useState([])
  useEffect(() => {
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
			<hr />
			{userRooms.map((userRoom) => (
				<SidebarOption name={userRoom.name} id={userRoom.id} />
			))}
			<hr />
		</div>
	);
}

export default Sidebar;