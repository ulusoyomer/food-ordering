import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';
import About from '@/components/sections/About';
import BookTable from '@/components/sections/BookTable';

const Index = ({ categoryList }) => {
	console.log(categoryList);
	return (
		<>
			<HeroSlider />
			<Campaigns />
			<Menu categoryList={categoryList} />
			<About />
			<BookTable />
		</>
	);
};

export default Index;
