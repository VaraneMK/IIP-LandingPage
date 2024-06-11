import React from 'react';
import styles from './ServiceItem.module.css';
import { Link } from 'react-router-dom';

function ServiceItem({ title, color, id }) {
	return (
		<Link
			to={`/service/${id}`}
			onClick={() => {
				window.scrollTo({ top: 0 });
			}}
			className={styles.service__item}>
			<span
				className={styles.service__box}
				style={{ backgroundColor: color }}></span>
			<div className={styles.service__name}>{title}</div>
		</Link>
	);
}

export default ServiceItem;
