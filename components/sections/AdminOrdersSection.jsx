import React from 'react';
import Image from 'next/image';

const AdminOrdersSection = () => {
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
						<tr>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Ürün</div>
									<p className="table__info">Lorem ipsum dolor sit</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Müşteri</div>
									<p className="table__info">Lorem ipsum dolor sit</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Fiyat</div>
									<p className="table__info">30 $</p>
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
									<div className="table__inner_title">Durumu</div>
									<p className="table__info">Hazırlanıyor</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Düzenle</div>
									<p className="table__info">
										<button className="btn btn-primary">
											İlerlet
										</button>
									</p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminOrdersSection;
