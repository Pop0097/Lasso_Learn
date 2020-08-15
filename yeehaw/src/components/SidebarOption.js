import React from "react";
import "../styles/sidebar-option.css";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, name, id }) {

	const history = useHistory();
	
	const selectRoom = () => {
		if (id) {
			history.push(`/userRoom/${id}`);
		} else {
			history.push("/userRoom");
		}
	};

	return (
		<div
			className="sidebarOption"
			onClick={selectRoom}
		>
			{Icon ? <Icon className="sidebarOption-icon" /> : null}
			{Icon ? (
				<h3>{name}</h3>
			) : (
				<h3 className="sidebarOption-room">
        {/* # should be replaced with profile picture*/ }
					<span className="sidebarOption-hash">#</span> {name}
				</h3>
			)}
		</div>
	);
}

export default SidebarOption;
