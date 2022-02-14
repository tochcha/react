import React from 'react';
import profileStyles from './ProfileMain.module.css';

function ProfileMain(props) {
	return <>
	<div className={profileStyles.main}>
		<div className={profileStyles.ava}><img src="https://html5css.ru/howto/img_avatar.png" alt="" /></div>
		<div className={profileStyles.info}>
			<h1>{props.myProfile.name} {props.myProfile.surname}</h1>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sed consequatur recusandae.</p>
			<p>Далеко-далеко, <a href="#s">за словесными горами </a>в стране гласных и согласных живут рыбные тексты. Рыбными алфавит наш языкового.</p>
			<p>Запятой вопроса диких, буквоград речью lorem строчка по всей меня коварных семантика домах что власти страна жизни родного запятых! Одна всемогущая толку рыбного. </p>
			<p>Ipsum не маленькая дал всемогущая использовало речью коварный!</p>
		</div>
	</div>
	</>
}

export default ProfileMain;