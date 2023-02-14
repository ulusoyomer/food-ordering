import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/reducers/cartSlice';
const MenuItem = ({ image, name, prices, description, _id }) => {
	const dispatch = useDispatch();
	return (
		<div className="menu__item">
			<Link href={`/product/${_id}`}>
				<div className="menu__item--image">
					<Image
						className="mt-2"
						src={image}
						alt={name}
						width={165}
						height={150}
						placeholder="blur"
						blurDataURL="/images/preload.gif"
					/>
				</div>
				<div className="menu__item--content">
					<h3 className="menu__item--title">{name}</h3>
					<p className="menu__item--description text-justify">
						{description.substr(0, 50)}...
					</p>
				</div>
			</Link>
			<div className="menu__item--footer">
				<div className="menu__item--price">
					{prices.map((price, index) => {
						if (price > 0) return <span key={index}>{price}₺</span>;
					})}
				</div>
				<div className="menu__item--button">
					<button
						type="button"
						className="btn btn-primary btn--full-rounded"
						onClick={() => {
							dispatch(
								addToCart({
									id: _id,
									name,
									image,
									price: prices[1],
									amount: 1,
									size: 0,
									extra: [],
								})
							);
						}}
					>
						<FaShoppingCart />
					</button>
				</div>
			</div>
		</div>
	);
};
export default MenuItem;
