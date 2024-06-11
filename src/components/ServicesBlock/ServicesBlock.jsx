import React from 'react';
import styles from './Services.module.css';
import { ReactComponent as Dots } from './../../svg/dots.svg';
import ServiceItem from './ServiceItem/ServiceItem';

const services = [
	{
		title: 'Разработка программного обеспечения',
		color: 'rgba(2, 105, 204, 1)',
	},
	{
		title: 'Построение аналитических систем',
		color: 'rgba(215, 26, 167, 1)',
	},
	{
		title: 'Создание хранилищ данных',
		color: 'rgba(253, 95, 52, 1)',
	},
	{
		title: 'Системная интеграция',
		color: 'rgba(143, 226, 8, 1)',
	},
];

function ServicesBlock() {
	return (
		<div className="container">
			<section className={styles.services__block}>
				<div className="block__header">
					<div className="subtitle">
						Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское
						обеспечение нашей деятельности не оставляет шанса для укрепления моральных ценностей.
					</div>
					<div className="title__box">
						<div className="title">Направления</div>
						<Dots />
					</div>
				</div>
				<div className={styles.service__items}>
					{services.map((el, index) => {
						return (
							<ServiceItem
								key={index}
								id={index + 1}
								title={el.title}
								color={el.color}></ServiceItem>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default ServicesBlock;
