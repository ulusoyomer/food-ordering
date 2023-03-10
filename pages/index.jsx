import Head from 'next/head';
import axios from 'axios';
import Home from '@/components';

export default function Index({ categoryList, productsList }) {
	return (
		<>
			<Head>
				<title>App</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Home categoryList={categoryList} productsList={productsList} />
		</>
	);
}

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
