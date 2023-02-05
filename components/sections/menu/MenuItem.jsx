import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
const MenuItem = () => {
	return (
		<div className="menu__item">
			<div className="menu__item--image">
				<Image
					src="/images/f1.png"
					alt="menu_image"
					width={300}
					height={300}
				/>
			</div>
			<div className="menu__item--content">
				<h3 className="menu__item--title">Köfte</h3>
				<p className="menu__item--description">
					lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className="menu__item--footer">
				<div className="menu__item--price">
					<span>₺ 15</span>
				</div>
				<div className="menu__item--button">
					<button
						type="button"
						className="btn btn-primary btn--full-rounded"
					>
						<FaShoppingCart />
					</button>
				</div>
			</div>
		</div>
	);
};
export default MenuItem;