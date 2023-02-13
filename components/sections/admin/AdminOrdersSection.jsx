import React from 'react';

const AdminOrdersSection = ({ ordersList }) => {
	const orderStatusPrev = async (id) => {};

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
						{ordersList.map((order) => {
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
												<button
													onClick={() =>
														orderStatusPrev(order._id)
													}
													className="btn btn-primary"
												>
													İlerlet
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
		</div>
	);
};

export default AdminOrdersSection;
