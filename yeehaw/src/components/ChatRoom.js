import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
// import Message from "./Message";
// import ChatInput from "./ChatInput";
import "../styles/chat.css";

function Chat() {
	const { hostEmail } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
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

			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
		}
	}, [roomId]);

	return (
		<div className="chat">
			<div className="chat-header">
				<div className="chat-headerLeft">
					<h4 className="chat-channelName">
						{/* "?" = optional chaining (instant try catch) */}
						{/* sets to default value i.e. null if not there --> rather than breaking  */}
						<strong>#{roomDetails?.name}</strong>
						<StarBorderOutlinedIcon />
					</h4>
				</div>

				<div className="chat-headerRight">
					<p>
						<InfoOutlinedIcon /> Details
					</p>
				</div>
			</div>

			<div className="chat-messages">
				{roomMessages.map(({ message, timestamp, userImage, user }) => (
					<Message
						message={message}
						timestamp={timestamp}
						user={user}
						userImage={userImage}
					/>
				))}
			</div>

			<ChatInput channel={roomDetails?.name} channelId={roomId} />
		</div>
	);
}

export default Chat;
