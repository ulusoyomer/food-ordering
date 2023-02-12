import Image from 'next/image';
import TitlePrimary from '../../components/ui/TitlePrimary';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/cartSlice';

const itemsExtra = [
	{
		id: 1,
		name: 'Ketçap',
		price: 2,
	},
	{
		id: 2,
		name: 'Mayonez',
		price: 2,
	},
	{
		id: 3,
		name: 'Hardal',
		price: 2,
	},
];

const sizePrice = {
	Küçük: 20,
	Orta: 30,
	Büyük: 50,
};

const itemId = 1;

const Product = () => {
	const [extraItems, setExtraItems] = useState([]);
	const [selectedSize, setSelectedSize] = useState('Küçük');
	const [totalPrice, setTotalPrice] = useState(sizePrice[0]);

	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const sizeValue = sizePrice[selectedSize];
		const extraValue = extraItems.reduce((acc, item) => acc + item.price, 0);
		setTotalPrice((sizeValue + extraValue) * quantity);
	}, [selectedSize, extraItems, quantity]);

	const dispatch = useDispatch();

	return (
		<>
			<div className="product">
				<div className="product__image">
					<Image
						src="/images/f1.png"
						width={300}
						height={300}
						alt="product image"
						priority
					/>
				</div>
				<div className="product__info px-5">
					<TitlePrimary>Hamburger</TitlePrimary>
					<div className="product__price">
						{totalPrice} <span>₺</span>{' '}
						<span className="product__quantity">x{quantity}</span>
					</div>
					<p className="product__info--text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
						facere consequatur voluptate. Saepe, perferendis harum
						assumenda doloremque incidunt nulla. Ipsum?
					</p>
					<div className="product__size">
						<button
							type="button"
							className={
								selectedSize === 'Küçük'
									? 'product__size--item btn btn-primary btn-active'
									: 'product__size--item btn btn-primary'
							}
							onClick={() => setSelectedSize('Küçük')}
						>
							Küçük
						</button>
						<button
							type="button"
							className={
								selectedSize === 'Orta'
									? 'product__size--item btn btn-primary btn-active'
									: 'product__size--item btn btn-primary'
							}
							onClick={() => setSelectedSize('Orta')}
						>
							Orta
						</button>
						<button
							type="button"
							className={
								selectedSize === 'Büyük'
									? 'product__size--item btn btn-primary btn-active'
									: 'product__size--item btn btn-primary'
							}
							onClick={() => setSelectedSize('Büyük')}
						>
							Büyük
						</button>
					</div>
					<div className="product__extra">
						<h3>Extra Malzeme</h3>
						<div className="product__extra--items">
							{itemsExtra.map((item) => {
								return (
									<div key={item.id}>
										<label htmlFor="extra1">{item.name}</label>
										<input
											type="checkbox"
											onChange={(e) => {
												if (e.target.checked) {
													setExtraItems([...extraItems, item]);
												} else {
													setExtraItems(
														extraItems.filter(
															(i) => i.id !== item.id
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
									id: itemId,
									name: 'Hamburger',
									price: totalPrice,
									size: selectedSize,
									extra: extraItems,
									amount: quantity,
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
export default Product;
