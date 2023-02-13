import TitlePrimary from '../../components/ui/TitlePrimary';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '@/redux/reducers/cartSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const discount = 0;

const CartPage = ({ usersList }) => {
	const { cartItems } = useSelector((state) => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const { data: session } = useSession();
	const [user, setUser] = useState(null);
	const [order, setOrder] = useState({});
	const dispatch = useDispatch();

	const router = useRouter();

	useEffect(() => {
		if (session) {
			const u = usersList.find((user) => user._id === session.user.name);
			setUser(u);
			setOrder({
				customer: user?._id,
				address: user?.address ?? 'No Address',
				total: totalPrice,
				method: 0,
				status: 0,
				orders: cartItems.map((item) => item.name),
			});
		}
	}, [cartItems, session, totalPrice, user, usersList]);

	useEffect(() => {
		const total = cartItems.reduce(
			(total, item) => total + item.price * item.amount,
			0
		);
		setTotalPrice(total);
	}, [cartItems]);

	const createOrder = async () => {
		try {
			if (session) {
				if (confirm('Siparişinizi Onaylıyormusunuz ?')) {
					const res = await axios.post(
						`${process.env.NEXT_PUBLIC_API_URL}/orders`,
						order
					);
					if (res.status === 201) {
						router.push(`/orders/${res.data.data._id}`);
						dispatch(resetCart());
						toast.success('Siparişiniz Oluşturuldu. Teşekkürler. :)', {
							position: 'top-right',
							autoClose: 1000,
						});
					}
				}
			} else {
				toast.error('Lütfen Giriş Yapınız. :(', {
					position: 'top-right',
				});
			}
		} catch (error) {
			toast.error('Siparişiniz Oluşturulamadı Tekrar Deneyiniz. :(', {
				position: 'top-right',
			});
		}
	};

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
							{discount > 0
								? parseFloat(
										totalPrice - (totalPrice * discount) / 100
								  ).toFixed(2)
								: totalPrice}{' '}
							₺
						</div>
						<div>
							<button
								onClick={createOrder}
								className="btn btn-secondary--rounded"
							>
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

export const getServerSideProps = async (context) => {
	try {
		const catagoriesResponse = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/users`
		);
		return {
			props: {
				usersList: catagoriesResponse.data.data ?? [],
			},
		};
	} catch (error) {
		console.log(error);
	}
};

export default CartPage;
