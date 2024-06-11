import React from 'react';
import { ReactComponent as Dots } from './../../../svg/dots.svg';
import styles from './Services.module.css';
import ServicesPageItem from '../ServicesPageItem/ServicesPageItem';

function ServicesPageBlock({ list }) {
	return (
		<div className="container">
			<section className={styles.services__block}>
				<div className={styles.block__header}>
					<div className="title__box">
						<div className="title">Специализации направления</div>
						<Dots />
					</div>
				</div>
				<div className={styles.service__items}>
					{list.map((el, index) => {
						return (
							<ServicesPageItem
								key={index}
								id={index + 1}
								title={el.title}
								color={el.color}
								modalContent={el.modalContent}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default ServicesPageBlock;
