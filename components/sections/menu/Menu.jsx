import TitlePrimary from '@/components/ui/TitlePrimary';
import { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ categoryList }) => {
	const [activeCategory, setActiveCategory] = useState(0);
	const handleCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="menu">
			<div className="menu__container">
				<div className="menu__title">
					<TitlePrimary>Menü</TitlePrimary>
				</div>
				<div className="menu__category">
					<button
						onClick={() => handleCategory(0)}
						className={
							activeCategory === 0
								? 'menu__category--item btn btn-primary btn-active'
								: 'menu__category--item btn btn-primary'
						}
					>
						Hepsi
					</button>
					{categoryList.map((category) => {
						return (
							<button
								key={category._id}
								onClick={() => handleCategory(category._id)}
								className={
									activeCategory === category._id
										? 'menu__category--item btn btn-primary btn-active'
										: 'menu__category--item btn btn-primary'
								}
							>
								{category.name}
							</button>
						);
					})}
				</div>
				<div className="menu__foods">
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</div>
				<div className="menu__more">
					<button className="btn btn-secondary--rounded btn--bigger ">
						Daha Fazla
					</button>
				</div>
			</div>
		</div>
	);
};
export default Menu;
