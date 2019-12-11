import React from 'react';

import '../../scss/main.scss';
import Header from '../Header/Header';

export default ({ children }) => (
	<>
		<Header />
		<main className="content">
			{children}
		</main>
	</>
);