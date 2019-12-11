import React from 'react';
import './References.scss';
import Img from 'gatsby-image';
import useReferences from '../../query/static/references';

export default () => {
	const references = useReferences();

	return (
		<div className="grid">
			{references.map((reference, index) => (
				<>
					<div className={`grid__area grid__area--${index+1}`}></div>
					<div className={`grid__picture grid__picture--${index+1}`}>
						<Img 
							className="grid__picture__image"
							alt={reference.name}
							imgStyle={{objectPosition: 'top'}} 
							sizes={reference.image.childImageSharp.sizes} />
					</div>
					<div className={`grid__picture__description grid__picture__description--${index+1}`}>
						<p className="p">{reference.name}</p>
						<p className="p">{reference.company}</p>
					</div>
					<blockquote className={`grid__picture__blockquote grid__picture__blockquote--${index+1} p`}>
						{reference.quote}
					</blockquote>
					{index === 2 ? <p className="special-quotes">&rdquo;</p> : null}
				</>
			))}
		
		</div>
	)
}