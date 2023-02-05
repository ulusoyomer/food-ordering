import TitlePrimary from '@/components/ui/TitlePrimary';
import MenuItem from './MenuItem';

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu__container">
				<div className="menu__title">
					<TitlePrimary>Menü</TitlePrimary>
				</div>
				<div className="menu__category">
					<button className="menu__category--item btn btn-primary btn-active">
						Hepsi
					</button>
					<button className="menu__category--item btn btn-primary">
						Kahvaltı
					</button>
					<button className="menu__category--item btn btn-primary">
						Hamburger
					</button>
					<button className="menu__category--item btn btn-primary">
						Pizza
					</button>
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
