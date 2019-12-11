import React from 'react';

import '../../scss/main.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default ({ children }) => (
	<>
		<Header />
		<main className="content">
			{children}
		</main>
		<Footer />
	</>
);