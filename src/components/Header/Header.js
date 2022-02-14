import React from 'react';
import s from './Header.module.css';

function Header() {
	return <header className={s.header}>
		<div className="wrapper">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzLY__gZ-O6dFM7WKKJfqMWh7oC-UyK901Q&usqp=CAU" alt="" />
		</div>
	</header>
}

export default Header;