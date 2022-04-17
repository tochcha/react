import React from 'react';
import s from "./Message.module.css";

function Message(props) {
	return <>
		<div className={s.dialog}>
			<div className={`${s.box} ${props.myPost === true ? s.myPost : ''}`}>
				<div className={s.ava}><img src={props.avaUrl} alt="avatar" /></div>
				<div className={s.text}>
					<p>{props.message}</p>
					<p><small><strong>id: </strong><em>{props.idid}</em></small></p>
				</div>
			</div>
		</div>
	</>
}

export default Message;