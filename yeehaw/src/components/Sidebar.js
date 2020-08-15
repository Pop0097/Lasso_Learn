import React, { useEffect, useState } from 'react'
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "../firebase";

//Icons
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Chat browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMoreIcon} title="Chats" />
			<hr />
			{userRooms.map((userRoom) => (
				<SidebarOption title={userRoom.name} id={userRoom.id} />
			))}
			<hr />
		</div>
	);
}

export default Sidebar;