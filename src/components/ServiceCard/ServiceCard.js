import React from 'react';
import './ServiceCard.scss';

export default ({title, image, color}) => (

    <li className={`cards__list__card cards__list__card--${color}`}>
        <a className="cards__list__card__link" href="#">
            <p className="cards__list__card__headline">{title}</p>
            {image}
        </a>
    </li>

)