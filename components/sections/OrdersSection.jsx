import Link from 'next/link';
import React from 'react';

const OrdersSection = ({ orders }) => {
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Siparişler</h1>
			<div className="profile__items--content">
				<table className="cart__table">
					<thead>
						<tr>
							<th>Sipariş Numarası</th>
							<th>Sipariş</th>
							<th>Tarih</th>
							<th>Toplam</th>
							<th>Durumu</th>
						</tr>
					</thead>
					<tbody>
						{orders
							.sort((a, b) => {
								return new Date(b.createdAt) - new Date(a.createdAt);
							})
							.map((order) => {
								return (
									<tr key={order._id}>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													S. NO
												</div>
												<p className="table__info">
													<Link href={`orders/${order._id}`}>
														{order._id.substring(0, 8)}...
													</Link>
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Sipariş
												</div>
												<p className="table__info">
													{order.orders.map((item, index) => {
														return (
															<span key={index}>{item},</span>
														);
													})}
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Tarih
												</div>
												<p className="table__info">
													{new Date(
														order.createdAt
													).toLocaleDateString('tr-TR')}
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Toplam
												</div>
												<p className="table__info">
													{order.total} ₺
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title"></div>
												<p className="table__info">
													{order.status === 0 && 'Ödeme'}
													{order.status === 1 && 'Hazırlanıyor'}
													{order.status === 2 && 'Yolda'}
													{order.status === 3 && 'Teslim Edildi'}
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

export default OrdersSection;
