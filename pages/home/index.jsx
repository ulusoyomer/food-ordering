import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';
import About from '@/components/sections/About';
import AppLayout from '@/components/layout/AppLayout';

const Index = () => {
	return (
		<>
			<AppLayout>
				<HeroSlider />
				<Campaigns />
				<Menu />
				<About />
			</AppLayout>
		</>
	);
};

export default Index;
