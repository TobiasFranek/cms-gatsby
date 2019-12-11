import React from 'react';
import './ServiceList.scss';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useServices } from '../../query/static';

export default () => {
	const services = useServices();

	const color = [
		'yellow',
		'blue',
		'green'
	]

	return (
		<ul className="cards__list">
			{services.map((service, index) => (
				<ServiceCard 
					title={service.title} 
					path={service.path} 
					color={color[index]} 
					image={service.icon.publicURL}/>
			))}
		</ul>
	)
}

