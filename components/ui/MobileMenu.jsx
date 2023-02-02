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
							<a href="#">Anasayfa</a>
						</li>
						<li className="mobile-menu__menu--item">
							<a href="#">Menü</a>
						</li>
						<li className="mobile-menu__menu--item">
							<a href="#">Hakkımızda</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default MobileMenu;
