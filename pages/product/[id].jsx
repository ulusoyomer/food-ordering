import Image from 'next/image';
import TitlePrimary from '../../components/ui/TitlePrimary';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/cartSlice';
import axios from 'axios';

const Product = ({ product, prices }) => {
	const [extraItems, setExtraItems] = useState([]);
	const [selectedSize, setSelectedSize] = useState(0);
	const [itemsExtra] = useState(product.extras);
	const [sizePrice] = useState(prices);

	const [totalPrice, setTotalPrice] = useState(prices[0]);

	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const sizeValue = sizePrice[selectedSize];
		const extraValue = extraItems.reduce((acc, item) => acc + item.price, 0);
		setTotalPrice((sizeValue + extraValue) * quantity);
	}, [selectedSize, extraItems, quantity, sizePrice]);

	const dispatch = useDispatch();

	return (
		<>
			<div className="product">
				<div className="product__image">
					<Image
						src={product.image}
						width={300}
						height={300}
						alt={product.name}
						priority
					/>
				</div>
				<div className="product__info px-5">
					<TitlePrimary>{product.name}</TitlePrimary>
					<div className="product__price">
						{totalPrice} <span>₺</span>{' '}
						<span className="product__quantity">x{quantity}</span>
					</div>
					<p className="product__info--text">{product.description}</p>
					<h3 className="text-2xl">Boyut</h3>
					<div className="product__size">
						{prices.map((price, index) => {
							if (price > 1) {
								return (
									<button
										key={index}
										type="button"
										className={
											selectedSize === index
												? 'product__size--item btn btn-primary btn-active'
												: 'product__size--item btn btn-primary'
										}
										onClick={() => setSelectedSize(index)}
									>
										{price} ₺
									</button>
								);
							}
						})}
					</div>
					{itemsExtra.length > 0 && (
						<div className="product__extra">
							<h3>Extra Malzeme</h3>
							<div className="product__extra--items">
								{itemsExtra.map((item, index) => {
									return (
										<div key={index}>
											<label htmlFor="extra1">{item.name}</label>
											<input
												type="checkbox"
												onChange={(e) => {
													if (e.target.checked) {
														setExtraItems([...extraItems, item]);
													} else {
														setExtraItems(
															extraItems.filter(
																(i) => i._id !== item._id
															)
														);
													}
												}}
												id={item.name}
												name={item.name}
												className="mx-2"
											/>
										</div>
									);
								})}
							</div>
						</div>
					)}

					<div className="product__extra">
						<h3>Adet</h3>
						<input
							type="number"
							className="input"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							min="1"
						/>
					</div>
					<button
						onClick={() => {
							dispatch(
								addToCart({
									id: product._id,
									name: product.name,
									price: totalPrice / quantity,
									size: selectedSize,
									extra: extraItems,
									amount: quantity,
									image: product.image,
								})
							);
						}}
						type="button"
						className="btn btn-primary--rounded mt-5"
					>
						Sepete Ekle
					</button>
				</div>
			</div>
		</>
	);
};
export const getServerSideProps = async ({ params: { id } }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
		);
		const { data } = response.data;
		const prices = data.prices.filter((price) => price > 0);
		return {
			props: {
				product: data,
				prices,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};
export default Product;
