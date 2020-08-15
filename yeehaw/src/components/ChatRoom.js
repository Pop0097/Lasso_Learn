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
		if ( hostEmail) {
			db.collection("users")
				.doc(hostEmail)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) =>
					setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
		}
	}, [hostEmail]);

	return (
		<div className="chat">

			<div className="chat-messages">
				{roomMessages.map(({ message, date, profilePic, displayName }) => (
					<Message
						message={message}
						data={date}
						displayName={displayName}
						profilePic={profilePic}
					/>
				))}
			</div>

			<ChatInput room={roomDetails?.name} roomId={hostEmail} />
		</div>
	);
}

export default Chat;
