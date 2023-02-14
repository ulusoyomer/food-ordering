import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
const MobileMenu = ({ isMobileMenuActive, setIsMobileMenuActive }) => {
	const route = useRouter();
	return (
		<div
			className={
				isMobileMenuActive ? 'mobile-menu mobile-menu--show' : 'mobile-menu'
			}
		>
			<div className="mobile-menu__close">
				<FaTimes onClick={() => setIsMobileMenuActive(false)} />
			</div>
			<div className="mobile-menu__content">
				<div className="mobile-menu__menu">
					<ul className="mobile-menu__menu--list">
						<li className="mobile-menu__menu--item">
							<Link
								className={
									route.pathname === '/'
										? 'header__menu--item--active'
										: ''
								}
								onClick={() => setIsMobileMenuActive(false)}
								href="/"
							>
								Anasayfa
							</Link>
						</li>
						<li className="mobile-menu__menu--item">
							<Link
								className={
									route.pathname === '/menu'
										? 'header__menu--item--active'
										: ''
								}
								onClick={() => setIsMobileMenuActive(false)}
								href="/menu"
							>
								Menü
							</Link>
						</li>
						<li className="mobile-menu__menu--item">
							<Link
								className={
									route.pathname === '/about'
										? 'header__menu--item--active'
										: ''
								}
								onClick={() => setIsMobileMenuActive(false)}
								href="/about"
							>
								Hakkımızda
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default MobileMenu;
