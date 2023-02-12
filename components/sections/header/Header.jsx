import { openModal } from '@/redux/reducers/searchModalSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import SearchModal from './SearchModal';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
	const dispatch = useDispatch();
	const route = useRouter();
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
	const { piece } = useSelector((store) => store.cart);
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
								loading="lazy"
								placeholder="blur"
								blurDataURL="/images/preload.gif"
								width={183}
								height={63}
							/>
						</Link>
					</div>
					<div className="header__menu">
						<ul className="header__menu--list">
							<li className="header__menu--item">
								<Link
									className={
										route.pathname === '/'
											? 'header__menu--item--active'
											: ''
									}
									href="/"
								>
									Anasayfa
								</Link>
							</li>
							<li className="header__menu--item">
								<Link
									className={
										route.pathname === '/menu'
											? 'header__menu--item--active'
											: ''
									}
									href="/menu"
								>
									Menü
								</Link>
							</li>
							<li className="header__menu--item">
								<Link
									className={
										route.pathname === '/about'
											? 'header__menu--item--active'
											: ''
									}
									href="/about"
								>
									Hakkımızda
								</Link>
							</li>
						</ul>
					</div>
					<div className="header__buttons">
						<Link
							className="header_buttons--link cursor-pointer"
							href="/auth/login"
						>
							<FaUserAlt />
						</Link>
						<Link
							className="header_buttons--link relative cursor-pointer"
							href="/cart"
						>
							<div className="text-xs rounded-full w-5 h-5 absolute bg-red-600 text-white -right-3 -top-3 text-center flex items-center justify-center">
								{piece}
							</div>
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
