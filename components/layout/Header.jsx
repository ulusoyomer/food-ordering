import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
const Header = () => {
	return (
		<nav className="header">
			<div className="header__logo">
				<Image
					src="https://via.placeholder.com/183x63"
					alt="app_logo"
					width={183}
					height={63}
				/>
			</div>
			<div className="header__menu">
				<ul className="header__menu--list">
					<li className="header__menu--item">
						<Link href="#">Anasayfa</Link>
					</li>
					<li className="header__menu--item">
						<Link href="#">Menü</Link>
					</li>
					<li className="header__menu--item">
						<Link href="#">Hakkımızda</Link>
					</li>
				</ul>
			</div>
			<div className="header__buttons">
				<Link className="header_buttons--link" href="#">
					<FaUserAlt />
				</Link>
				<Link className="header_buttons--link" href="#">
					<FaShoppingCart />
				</Link>
				<Link className="header_buttons--link" href="#">
					<FaSearch />
				</Link>
				<Link className="btn btn-secondary" href="#">
					Online Sipariş
				</Link>
			</div>
		</nav>
	);
};

export default Header;
