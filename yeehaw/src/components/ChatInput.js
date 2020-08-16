import React, { useState } from "react";
import "../styles/chatinput.css";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function ChatInput({ id }) {
	const [input, setInput] = useState("");
	const [{ user, userPic }] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();

		if (id) {
			db.collection("users").doc(id).collection("messages").add({
				message: input,
				date: firebase.firestore.FieldValue.serverTimestamp(),
				displayName: user.displayName,
				profilePic: userPic,
			});
			setInput("");
		}
	};

	return (
		<div className="chatInput">
			<form>
				<input
					placeholder={"Send a Message"}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit" onClick={sendMessage}></button>
			</form>
		</div>
	);
}

export default ChatInput;
