import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import axios from 'axios';

const MenuPage = ({ categoryList }) => {
	return <Menu categoryList={categoryList} />;
};

export const getServerSideProps = async (context) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/categories`
		);
		return {
			props: {
				categoryList: response.data.data ?? [],
			},
		};
	} catch (error) {
		console.log(error);
	}
};

export default MenuPage;
