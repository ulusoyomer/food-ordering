import React from 'react';
import Image from 'next/image';

const AdminProductsSection = () => {
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Ürünler</h1>
			<div className="profile__items--content">
				<table className="cart__table">
					<thead>
						<tr>
							<th>Ürün Resim</th>
							<th>Ürün Numarası</th>
							<th>Adı</th>
							<th>Fiyatı</th>
							<th>Düzenle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Ü. Resim</div>
									<p className="table__info">
										<Image
											src="/images/f1.png"
											alt="ürün title"
											width={45}
											height={45}
										/>
									</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Ü. No</div>
									<p className="table__info">Lorem ipsum dolor sit</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Adı</div>
									<p className="table__info">10.10.2020</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Fiyatı</div>
									<p className="table__info">30 $</p>
								</div>
							</td>
							<td>
								<div className="table__cell">
									<div className="table__inner_title">Düzenle</div>
									<p className="table__info">
										<button className="btn btn-primary">
											Düzenle
										</button>
										<button className="btn btn-red">Sil</button>
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

export default AdminProductsSection;
