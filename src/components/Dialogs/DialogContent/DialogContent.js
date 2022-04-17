import React from 'react';
import Message from './Message/Message';
import s from "./DialogContent.module.css";


function DialogContent({messagesData, newPostText, dispatch}) {
	let resMessages = messagesData.map((message, index) => {
		return <Message key={index} avaUrl={message.ava} message={message.message} myPost={message.myPost} idid={message.id} />
	});
	let newMessage = React.createRef();

	function onPostChange() {
		let text = newMessage.current.value;
		const action = {
			type: 'UPDATE-WRITE-FRIEND-TEXT',
			newText: text
		};
		dispatch(action);
	}
	
	function addMessage() {
		const action = {
			type: 'ADD-WRITE-FRIEND-TEXT',
		};
		dispatch(action);
	}

	return <>
		{resMessages}
		<h3>Написать</h3>
		<div className={s.form}>
			<textarea ref={newMessage} value={newPostText} onChange={onPostChange} className={`${s.inpText} inpText`}></textarea>
			<div className={s.buttonBox}>
				<button onClick={addMessage} className="button">Отправить</button>
			</div>
		</div>
	</>
}

export default DialogContent;