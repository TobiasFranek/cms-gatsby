import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import './Navigation.scss';

export default () => {
	const [ open, setOpen ] = useState(false);

	return (
		<nav className="main-navigation">
			<Burger onClick={() => setOpen(!open)} open={open}/>
			<ul className={`main-navigation__list ${open ? 'open': ''}`}>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Start</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Leistungen</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Blog</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Über mich</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Kontakt</a>
				</li>
			</ul>
		</nav>
	)
}