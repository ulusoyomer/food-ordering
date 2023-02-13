import React from 'react';
import Image from 'next/image';
import AddProductModal from './AddProductModal';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminProductsSection = ({ categories, productsList }) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [products, setProducts] = React.useState(productsList);

	const productDeleteHandle = async (id) => {
		if (confirm('Ürünü Silme İşlemini Onaylıyor musunuz?')) {
			try {
				const response = await axios.delete(
					`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
				);
				if (response.data.success) {
					const newProductList = productsList.filter(
						(product) => product._id !== id
					);
					setProducts(newProductList);
					toast.success(response.data.message, {
						position: 'top-right',
					});
				}
			} catch (error) {
				toast.error('Ürün Silinemedi', {
					position: 'top-right',
				});
			}
		}
	};

	return (
		<>
			<AddProductModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				categories={categories}
				products={products}
				setProducts={setProducts}
			/>
			<div className="profile__items">
				<h1 className="profile__content--title">Ürünler</h1>
				<div className="profile__items--content">
					<div className="text-right">
						<button
							onClick={() => {
								setIsModalOpen(true);
							}}
							className="btn btn-green m-1"
						>
							Ürün Ekle
						</button>
					</div>
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
							{products.map((product) => {
								return (
									<tr key={product._id}>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Ü. Resim
												</div>
												<p className="table__info">
													<Image
														src={product.image}
														alt={product.name}
														width={45}
														height={45}
														loading="lazy"
														placeholder="blur"
														blurDataURL="/images/preload.gif"
													/>
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Ü. No
												</div>
												<p className="table__info">{product._id}</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Adı
												</div>
												<p className="table__info">
													{product.name}
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Fiyatı
												</div>
												<p className="table__info">
													{product.prices.map((price) => {
														if (price > 0) return price + '₺,';
													})}
												</p>
											</div>
										</td>
										<td>
											<div className="table__cell">
												<div className="table__inner_title">
													Düzenle
												</div>
												<p className="table__info">
													<button
														onClick={() =>
															productDeleteHandle(product._id)
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
			</div>
		</>
	);
};

export default AdminProductsSection;
