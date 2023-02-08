import React from 'react';

const OrdersSection = () => {
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
									<p className="table__info">10.10.2020</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Toplam</div>
									<p className="table__info">30 $</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Durumu</div>
									<p className="table__info">Tamamlandı</p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrdersSection;
