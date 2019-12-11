import React, { useState } from 'react';
import './Burger.scss'

export default ({ onClick, open }) => {

	return (
		<button className={`burger ${open ? 'open' : ''}`} onClick={onClick}>
			<span className="burger__bar burger__bar--1"></span>
			<span className="burger__bar burger__bar--2"></span>
			<span className="burger__bar burger__bar--3"></span>
		</button>
	)
}