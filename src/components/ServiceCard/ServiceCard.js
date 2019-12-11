import React from 'react';
import './ServiceCard.scss';

export default ({ title, image, color, path }) => (

    <li className={`cards__list__card cards__list__card--${color}`}>
        <a className="cards__list__card__link" href={path}>
            <p className="cards__list__card__headline">{title}</p>
			<img className="cards__list__card__image" src={image}/>
        </a>
    </li>

)