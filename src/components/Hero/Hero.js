import React from 'react';
import './Hero.scss'
import { useHero } from '../query/static';
import Img from 'gatsby-image';

export default () => {
	const { title, button_link, button, backgroundimage } = useHero();
	console.log(backgroundimage);
	return (
		<div className="hero">
			<Img 
				className="hero__image" 
				alt="Hero background vom Alex" 
				imgStyle={{objectPosition: 'top'}} 
				sizes={backgroundimage.childImageSharp.sizes} />
			<div className="hero__wrapper">
				<h2 className="hero__headline">
					{title}
				</h2>
				<br />
				<button className={`hero__btn btn btn--green`}>
					<a className="btn__a" href={button_link}>{button}</a>
				</button>
			</div>
		</div>
	)
}
