import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const AdminOrdersSection = ({ ordersList }) => {
	const [orders, setOrders] = React.useState(ordersList);

	const orderStatusPrev = async (id, status) => {
		if (status < 3) {
			try {
				const res = await axios.put(
					`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
					{ status: status + 1 }
				);
				if (res.status === 200) {
					const newOrders = orders.map((order) => {
						if (order._id === id) {
							order.status = status + 1;
						}
						return order;
					});
					setOrders(newOrders);
					toast.success('Sipariş Durumu Güncellendi', {
						position: 'top-right',
					});
				}
			} catch (error) {
				console.log(error);
				toast.error('Sipariş Durumu Güncellenemedi', {
					position: 'top-right',
				});
			}
		}
	};

	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Siparişler</h1>
			<div className="profile__items--content">
				<table className="cart__table">
					<thead>
						<tr>
							<th>Ürün</th>
							<th>Müşteri</th>
							<th>Fiyat</th>
							<th>Ödeme</th>
							<th>Durum</th>
							<th>Düzenle</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => {
							return (
								<tr key={order._id}>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">Ürün</div>
											<p className="table__info">
												{order.orders.map((item, index) => {
													return <span key={index}>{item},</span>;
												})}
											</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">
												Müşteri
											</div>
											<p className="table__info">
												{order.customer.name}
											</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">Fiyat</div>
											<p className="table__info">{order.total}</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">Ödeme</div>
											<p className="table__info">Nakit</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">
												Durumu
											</div>
											<p className="table__info">
												{order.status === 0 && 'Ödeme Alındı'}
												{order.status === 1 && 'Hazırlanıyor'}
												{order.status === 2 && 'Yolda'}
												{order.status === 3 && 'Teslim Edildi'}
											</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<p className="table__info">
												{order.status < 3 && (
													<button
														onClick={() =>
															orderStatusPrev(
																order._id,
																order.status
															)
														}
														className="btn btn-primary"
													>
														İlerlet
													</button>
												)}
											</p>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminOrdersSection;
