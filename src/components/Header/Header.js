import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import Hero from '../Hero/Hero';

export default () => (
	<header className="header">
		<h1 className="h1 header__headline">
			<a className="a header__headline__a" href="/">Alex Mayer</a>
		</h1>
		<Navigation />
		<Hero />
	</header>
)