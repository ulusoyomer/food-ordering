import TitlePrimary from '../../components/ui/TitlePrimary';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/redux/reducers/cartSlice';
import { useEffect, useState } from 'react';

const discount = 10;

const CartPage = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		const total = cartItems.reduce(
			(total, item) => total + item.price * item.amount,
			0
		);
		setTotalPrice(total);
	}, [cartItems]);

	return (
		<div className="cart">
			<TitlePrimary>Sepetiniz</TitlePrimary>
			{cartItems.length > 0 ? (
				<>
					<div className="overflow-auto max-h-82">
						<table className="cart__table">
							<thead>
								<tr>
									<th>Ürün</th>
									<th>Extra</th>
									<th>Ücret</th>
									<th>Adet</th>
									<th>Toplam</th>
									<th>Değiştir</th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((item, index) => {
									return (
										<tr key={index}>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Ürün
													</div>

													<p className="table__info">
														<Image
															src={item.image}
															alt={item.name}
															width={65}
															height={65}
														/>
														{item.name}
													</p>
												</div>
											</td>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Malzeme
													</div>
													<p className="table__info">
														{item.extra.map((extra, i) => {
															return (
																<span key={i}>
																	{extra.name},
																</span>
															);
														})}
													</p>
												</div>
											</td>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Fiyat
													</div>
													<p className="table__info">
														{item.price} ₺
													</p>
												</div>
											</td>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Adet
													</div>
													<p className="table__info">
														x{item.amount}
													</p>
												</div>
											</td>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Toplam
													</div>
													<p className="table__info">
														{item.amount * item.price} ₺
													</p>
												</div>
											</td>
											<td>
												<div className="table__cell">
													<div className="table__inner_title">
														Değiştir
													</div>
													<p className="table__info">
														<button
															onClick={() =>
																dispatch(removeFromCart(index))
															}
															className="btn btn-red"
														>
															Sil
														</button>
													</p>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<TitlePrimary className="mt-6">Ödeme Kısmı</TitlePrimary>
					<div className="cart__payment">
						<div className="cart__payment--text">
							Ara Toplam :{totalPrice} ₺
						</div>
						<div className="cart__payment--text">
							İndirim : {discount} %
						</div>
						<div className="cart__payment--text">
							Toplam :
							{parseFloat(
								totalPrice - (totalPrice * discount) / 100
							).toFixed(2)}{' '}
							₺
						</div>
						<div>
							<button className="btn btn-secondary--rounded">
								Ödeme Yap
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="text-center text-red-700 text-poppins text-4xl my-8">
					Sepetinizde Ürün Bulunmamaktadır.
				</div>
			)}
		</div>
	);
};
export default CartPage;
