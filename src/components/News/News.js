import React from 'react';
import './News.scss';
import { useNews } from '../query/static';

export default () => {
	const news = useNews();

	return (
		<ul className="news-list">
			{news.map((newsItem) => (
				<li className="news-list__item">
					<a className="a" href={newsItem.path}>{newsItem.title}</a><span className="p"> - {newsItem.description} </span><a className="a" href={newsItem.path}>[mehr erfahren]</a>
				</li>
			))}
		</ul>
	)
}
