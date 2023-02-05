import { openModal } from '@/redux/reducers/searchModalSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import MobileMenu from './MobileMenu';
import SearchModal from './SearchModal';
const Header = () => {
	const dispatch = useDispatch();
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
	return (
		<>
			<SearchModal />
			<nav className="header">
				<div className="header__container">
					<div className="header__logo">
						<Link href="/">
							<Image
								src="/images/logo.png"
								alt="app_logo"
								priority={true}
								width={183}
								height={63}
							/>
						</Link>
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
						<button
							type="button"
							className="header__order btn btn-secondary--rounded"
						>
							Online Sipariş
						</button>
						<div className="header__toggle">
							<FaBars onClick={() => setIsMobileMenuActive(true)} />
						</div>
					</div>
				</div>
			</nav>
			<MobileMenu
				isMobileMenuActive={isMobileMenuActive}
				setIsMobileMenuActive={setIsMobileMenuActive}
			/>
		</>
	);
};

export default Header;
