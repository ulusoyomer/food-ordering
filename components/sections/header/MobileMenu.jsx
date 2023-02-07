import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
const MobileMenu = ({ isMobileMenuActive, setIsMobileMenuActive }) => {
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
							<Link href="/">Anasayfa</Link>
						</li>
						<li className="mobile-menu__menu--item">
							<Link href="/menu">Menü</Link>
						</li>
						<li className="mobile-menu__menu--item">
							<Link href="/about">Hakkımızda</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default MobileMenu;
