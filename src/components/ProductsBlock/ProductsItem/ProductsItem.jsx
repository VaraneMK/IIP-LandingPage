import React from 'react';
import styles from './ProductsItem.module.css';

function ProductsItem({ name, date, text }) {
	return (
		<div className={styles.item}>
			<span className={styles.product__box}></span>
			<div className={styles.item__left_side}>
				<div className={styles.item__date}>{date}</div>
				<div className={styles.item__name}>{name}</div>
			</div>
			<div className={styles.item__right_side}>{text}</div>
		</div>
	);
}

export default ProductsItem;
