import React from 'react';
import Message from './Message/Message';
import s from "./DialogContent.module.css";


function DialogContent(props) {
	let resMessages = props.messagesData.map((message, index) => {
		return <Message key={index} avaUrl={message.ava} message={message.message} myPost={message.myPost} />
	});
	let newMessage = React.createRef();
	function addMessage() {
		let text = newMessage.current.value;
	}

	return <>
		{resMessages}
		<h3>Написать</h3>
		<div className={s.form}>
			<textarea ref={newMessage} className={`${s.inpText} inpText`}></textarea>
			<div className={s.buttonBox}>
				<button onClick={addMessage} className="button">Отправить</button>
			</div>
		</div>
	</>
}

export default DialogContent;