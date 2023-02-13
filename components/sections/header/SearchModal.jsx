import { closeModal } from '@/redux/reducers/searchModalSlice';
import { FaWindowClose } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import TitlePrimary from '../../ui/TitlePrimary';
import { useState, useEffect } from 'react';
import axios from 'axios';
const SearchModal = () => {
	const { isModalOpen } = useSelector((store) => store.searchModal);
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');

	const getAllProducts = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/products`
			);
			if (response.status === 200) {
				setProducts(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (search.length > 0) {
			const filteredProducts = products.filter((product) =>
				product.name.toLowerCase().includes(search.toLowerCase())
			);
			setProducts(filteredProducts);
		} else {
			getAllProducts();
		}
	}, [products, search]);

	useEffect(() => {
		getAllProducts();
	}, []);

	const dispatch = useDispatch();
	return (
		<div className={isModalOpen ? 'modal modal--active' : 'modal'}>
			<OutsideClickHandler
				onOutsideClick={() => {
					dispatch(closeModal());
				}}
				disabled={!isModalOpen}
			>
				<div className="modal__container">
					<button
						onClick={() => dispatch(closeModal())}
						type="button"
						className="modal__close"
					>
						<FaWindowClose />
					</button>
					<div className="modal__header">
						<TitlePrimary>Arama</TitlePrimary>
					</div>
					<div className="modal__content">
						<div className="modal__search">
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								type="text"
								placeholder="Ara..."
							/>
						</div>
						<ul>
							{products.map((product) => {
								return (
									<li key={product._id}>
										<Link href={`product/${product._id}`}>
											<div className="modal__food-img">
												<Image
													src={product.image}
													alt={product.name}
													width={52}
													height={52}
												/>
											</div>
											<div className="modal__food-name">
												{product.name}
											</div>
											<div className="modal__food-price">
												{product.prices.map((price) => {
													return price + '₺, ';
												})}
											</div>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
};
export default SearchModal;
