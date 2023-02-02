import { openModal } from '@/redux/reducers/searchModalSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
const Header = () => {
	const dispatch = useDispatch();
	return (
		<nav className="header">
			<div className="header__container">
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
					<button
						onClick={() => dispatch(openModal())}
						type="button"
						className="header_buttons--link"
					>
						<FaSearch />
					</button>
					<button type="button" className="btn btn-secondary">
						Online Sipariş
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
