import React from 'react';
import s from './Friends.module.css';
import { nanoid } from 'nanoid';

function Friends(props) {
	for (let friend of props.friends) {
		friend.id = nanoid();
	}
	const friendsItems = props.friends.map((friend, index) => {
		return <div key={friend.id} className={s.item}>
			<div className={s.ava}><img src={friend.ava} alt={friend.name} /></div>
			<div className={s.name}>{friend.name}</div>
		</div>;
	});
	return <>
		<h3>Friends:</h3>
		<div className={s.friends}>
			{friendsItems}
		</div>
	</>
}

export default Friends;