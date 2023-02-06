import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';
import About from '@/components/sections/About';
import AppLayout from '@/components/layout/AppLayout';
import BookTable from '@/components/sections/BookTable';

const Index = () => {
	return (
		<>
			<AppLayout>
				<HeroSlider />
				<Campaigns />
				<Menu />
				<About />
				<BookTable />
			</AppLayout>
		</>
	);
};

export default Index;
