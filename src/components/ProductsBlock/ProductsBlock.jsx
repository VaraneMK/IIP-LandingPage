import React from 'react';
import styles from './ProductsBlock.module.css';
import { ReactComponent as Dots } from './../../svg/dots.svg';
import ProductsItem from './ProductsItem/ProductsItem';

const products = [
	{
		name: 'Распознание речи',
		text: 'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности не оставляет шанса для укрепления моральных ценностей.',
		date: '2023',
	},
	{
		name: 'Распознание речи',
		text: 'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности не оставляет шанса для укрепления моральных ценностей.',
		date: '2023',
	},
];

function ProductsBlock() {
	return (
		<div className="container">
			<section
				id="products"
				className={styles.products__block}>
				<div className="block__header">
					<div className="title__box">
						<Dots />
						<div className="title">Продукты</div>
					</div>
					<div className="subtitle">
						Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское
						обеспечение нашей деятельности не оставляет шанса для укрепления моральных ценностей.
					</div>
				</div>
				<div className={styles.products__list}>
					{products.map((el, index) => {
						return (
							<ProductsItem
								key={index}
								name={el.name}
								text={el.text}
								date={el.date}></ProductsItem>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default ProductsBlock;
