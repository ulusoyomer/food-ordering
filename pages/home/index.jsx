import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';
import About from '@/components/sections/About';
import BookTable from '@/components/sections/BookTable';

const Index = () => {
	return (
		<>
			<HeroSlider />
			<Campaigns />
			<Menu />
			<About />
			<BookTable />
		</>
	);
};

export default Index;
