import React from 'react';
import PreviewBlock from '../PreviewBlock/PreviewBlock';
import ProductsBlock from '../ProductsBlock/ProductsBlock';
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import Header from '../Header/Header';
function DefaultPage() {
	return (
		<div>
			{' '}
			<Header />
			<PreviewBlock />
			<ServicesBlock />
			<ProductsBlock />
		</div>
	);
}

export default DefaultPage;
