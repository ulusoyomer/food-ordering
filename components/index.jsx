import React from 'react';
import Menu from './sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';
import About from '@/components/sections/About';
import BookTable from '@/components/sections/BookTable';

const Index = ({ categoryList, productsList }) => {
	return (
		<>
			<HeroSlider />
			<Campaigns />
			<Menu categoryList={categoryList} productsList={productsList} />
			<About />
			<BookTable />
		</>
	);
};

export default Index;
