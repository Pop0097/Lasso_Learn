import React from "react";
import "../styles/message.css";

function Message({ message, date, displayName, profilePic }) {
	return (
		<div className="message">
			<img src={profilePic} alt="" />
			<div className="message-info">
				<h4>
					{displayName}{" "}
					<span className="message-timestamp">
						{new Date(date?.toDate()).toUTCString()}
					</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Message;
