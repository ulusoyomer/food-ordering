import TitlePrimary from '@/components/ui/TitlePrimary';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ categoryList, productsList }) => {
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeProducts, setActiveProducts] = useState(productsList);

	const handleCategory = (index) => {
		setActiveCategory(index);
	};

	useEffect(() => {
		if (activeCategory !== 0) {
			const newProductList = productsList.filter(
				(product) => product.category === activeCategory
			);
			setActiveProducts(newProductList);
		} else setActiveProducts(productsList);
	}, [activeCategory, productsList]);

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
					{activeProducts.map((product) => {
						return <MenuItem key={product._id} {...product} />;
					})}
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
