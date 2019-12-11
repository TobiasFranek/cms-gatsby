import React from 'react';
import Burger from '../Burger/Burger';

export default () => (
	<header className="header">
		<h1 className="h1 header__headline">
			<a className="a header__headline__a" href="/">Alex Mayer</a>
		</h1>
		<nav className="main-navigation">
			<Burger />
			<ul className="main-navigation__list">
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a main-navigation__list-item__link--landing" href="index.html">Start</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Leistungen</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Blog</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a main-navigation__list-item__link--about-me" href="about-me.html">Über mich</a>
				</li>
				<li className="main-navigation__list-item">
					<a className="main-navigation__list-item__link a" href="#">Kontakt</a>
				</li>
			</ul>
		</nav>
		{/* TODO add Hero */}
	</header>
)