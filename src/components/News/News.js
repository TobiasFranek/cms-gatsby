import React from 'react';
import './News.scss';

export default () => (
    <ul className="news-list">
        <li className="news-list__item">
            <a className="a" href="#">365 Postkarten</a><span className="p"> - Eine Liebeserklärung für
            jeden Tag! </span><a className="a" href="#">[mehr erfahren]</a>
        </li>
        <li className="news-list__item">
            <a className="a" href="#">Award-Nominierung</a> <span className="p">- Tolle News: ich bin
            bei der Endauswahl 2018! </span><a className="a" href="#">[mehr erfahren]</a>
        </li>
        <li className="news-list__item">
            <a className="a" href="#">CMYK erklärt</a><span className="p"> - der neuste</span>
            <a className="a" href="#">Blog</a><span className="p">-Eintrag! </span>
            <a className="a" href="#">[mehr erfahren]</a>
        </li>
    </ul>
)