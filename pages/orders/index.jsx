import TitlePrimary from '@/components/ui/TitlePrimary';
import {
	MdPayment,
	MdDeliveryDining,
	MdFastfood,
	MdOutlineDoneAll,
} from 'react-icons/md';
const OrderPage = () => {
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

								<p className="table__info">138</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Sipariş</div>
								<p className="table__info">Lorem ipsum dolor sit</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Adres</div>
								<p className="table__info">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Cumque voluptatibus quas illum, veniam aperiam
									fuga quod ut sequi deserunt quidem.
								</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Toplam</div>
								<p className="table__info">30 $</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<TitlePrimary className="mt-6">Sipariş Durumu</TitlePrimary>
			<div className="cart__status">
				<div className="cart__status_item animate-pulse">
					<MdPayment className="cart__status_item--icon" />
					<p className="cart__status--text">Ödeme Kabul Edildi</p>
				</div>
				<div className="cart__status_item">
					<MdFastfood className="cart__status_item--icon" />
					<p className="cart__status--text">Hazırlanıyor</p>
				</div>
				<div className="cart__status_item">
					<MdDeliveryDining className="cart__status_item--icon" />
					<p className="cart__status--text">Yolda</p>
				</div>
				<div className="cart__status_item">
					<MdOutlineDoneAll className="cart__status_item--icon" />
					<p className="cart__status--text">Teslim Edildi</p>
				</div>
			</div>
		</div>
	);
};
export default OrderPage;
