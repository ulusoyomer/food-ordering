import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import axios from 'axios';

const MenuPage = ({ categoryList, productsList }) => {
	return <Menu categoryList={categoryList} productsList={productsList} />;
};

export const getServerSideProps = async (context) => {
	try {
		const catagoriesResponse = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/categories`
		);
		const productsResponse = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/products`
		);
		return {
			props: {
				categoryList: catagoriesResponse.data.data ?? [],
				productsList: productsResponse.data.data ?? [],
			},
		};
	} catch (error) {
		console.log(error);
	}
};

export default MenuPage;
