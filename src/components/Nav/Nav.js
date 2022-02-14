import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav(props) {
	const menuItems = props.menu.map((item, index) => {
		let itemClassName;
		if (index === props.menu.length - 1) {
			itemClassName = s.item + ' ' + s.last;
		} else {
			itemClassName = s.item;
		}
		return <li key={index} className={itemClassName}>
			<NavLink to={`/${item.url}`}>{item.text}</NavLink>
		</li>
	});
	return <>
		<nav className='nav'>
			<h2>Меню</h2>
			<ul className={s.menu}>
				{menuItems}
			</ul>
		</nav>
	</>
}

export default Nav;