import TitlePrimary from '@/components/ui/TitlePrimary';
import {
	MdPayment,
	MdDeliveryDining,
	MdFastfood,
	MdOutlineDoneAll,
} from 'react-icons/md';
import axios from 'axios';
const OrderPage = ({ order }) => {
	return (
		<div className="cart">
			<TitlePrimary>Siparişleriniz</TitlePrimary>
			<table className="cart__table">
				<thead>
					<tr>
						<th>Sipariş Numarası</th>
						<th>Sipariş</th>
						<th>Adres</th>
						<th>Toplam</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">S. NO</div>

								<p className="table__info">{order._id}</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Sipariş</div>
								<p className="table__info">
									{order.orders.map((item, index) => {
										return <span key={index}>{item},</span>;
									})}
								</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Adres</div>
								<p className="table__info">{order.address}</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Toplam</div>
								<p className="table__info">{order.total}₺</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<TitlePrimary className="mt-6">Sipariş Durumu</TitlePrimary>
			<div className="cart__status">
				<div
					className={
						order.status === 0
							? 'cart__status_item animate-pulse'
							: 'cart__status_item '
					}
				>
					<MdPayment className="cart__status_item--icon" />
					<p className="cart__status--text">Ödeme Kabul Edildi</p>
				</div>
				<div
					className={
						order.status === 1
							? 'cart__status_item animate-pulse'
							: 'cart__status_item '
					}
				>
					<MdFastfood className="cart__status_item--icon" />
					<p className="cart__status--text">Hazırlanıyor</p>
				</div>
				<div
					className={
						order.status === 2
							? 'cart__status_item animate-pulse'
							: 'cart__status_item '
					}
				>
					<MdDeliveryDining className="cart__status_item--icon" />
					<p className="cart__status--text">Yolda</p>
				</div>
				<div
					className={
						order.status === 3
							? 'cart__status_item animate-pulse'
							: 'cart__status_item '
					}
				>
					<MdOutlineDoneAll className="cart__status_item--icon" />
					<p className="cart__status--text">Teslim Edildi</p>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ params: { id } }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`
		);
		return {
			props: {
				order: response.data.data,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

export default OrderPage;
