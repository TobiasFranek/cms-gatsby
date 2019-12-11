import React from 'react';
import './FooterNavigation.scss';

export default () => (
	<nav className="footer-navigation">
		<ul className="footer-navigation__list">
			<li className="footer-navigation__list-item">
				<a className="footer-navigation__list-item__link p--white" href="#">Impressum</a>
			</li>
			<li className="footer-navigation__list-item">
				<a className="footer-navigation__list-item__link p--white" href="#">Datenschutzerklärung</a>
			</li>
		</ul>
	</nav>
)