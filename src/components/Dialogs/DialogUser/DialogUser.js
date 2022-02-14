import React from 'react';
import s from "./DialogUser.module.css";
import { NavLink } from 'react-router-dom';

function DialogUser(props) {
	let path = '/dialogs/' + props.id;
	return <>
		<NavLink className={s.link} to={path}>
			<div className={s.item}>
				<div className={s.ava}><img src={props.ava} alt={props.name} /></div>
				<div className={s.name}>{props.name}</div>
			</div>
		</NavLink>
	</>
}

export default DialogUser;