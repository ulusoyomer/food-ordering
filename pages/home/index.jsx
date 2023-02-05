import React from 'react';
import Menu from '../../components/sections/menu/Menu';
import HeroSlider from '@/components/sections/HeroSlider';
import Campaigns from '@/components/sections/Campaigns';

const Index = () => {
	return (
		<>
			<HeroSlider />
			<Campaigns />
			<Menu />
		</>
	);
};

export default Index;
