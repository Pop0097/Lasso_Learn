import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import "../styles/chatroom.css";

function Chat() {
	const { hostEmail } = useParams();
	const [roomMessages, setRoomMessages] = useState([]);

	useEffect(() => {
		//changes every time room id changes
		db.collection("users")
			.doc(hostEmail)
			.collection("messages")
			.orderBy("date", "asc")
			.onSnapshot((snapshot) =>
				setRoomMessages(snapshot.docs.map((doc) => doc.data()))
			);
	}, [hostEmail]);

	return (
		<div className="chat">
			<div className="chat-messages">
				{roomMessages.map(({ message, date, profilePic, displayName }) => (
					<Message
						message={message}
						date={date}
						displayName={displayName}
						profilePic={profilePic}
					/>
				))}
			</div>
			<ChatInput id={hostEmail} />
		</div>
	);
}

export default Chat;
