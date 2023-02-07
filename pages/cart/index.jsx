import TitlePrimary from '../../components/ui/TitlePrimary';
import Image from 'next/image';
const CartPage = () => {
	return (
		<div className="cart">
			<TitlePrimary>Sepetiniz</TitlePrimary>
			<table className="cart__table">
				<thead>
					<tr>
						<th>Ürün</th>
						<th>Extra</th>
						<th>Ücret</th>
						<th>Adet</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Ürün</div>

								<p className="table__info">
									<Image
										src="/images/f1.png"
										alt="ürün title"
										width={65}
										height={65}
									/>
									Ürün Adı
								</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Malzeme</div>
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
								<div className="table__inner_title">Adet</div>
								<p className="table__info">x1</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Ürün</div>

								<p className="table__info">
									<Image
										src="/images/f1.png"
										alt="ürün title"
										width={65}
										height={65}
									/>
									Ürün Adı
								</p>
							</div>
						</td>
						<td>
							<div className="table__cell">
								<div className="table__inner_title">Malzeme</div>
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
								<div className="table__inner_title">Adet</div>
								<p className="table__info">x1</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<TitlePrimary className="mt-6">Ödeme Kısmı</TitlePrimary>
			<div className="cart__payment">
				<div className="cart__payment--text">Ara Toplam : 30 $</div>
				<div className="cart__payment--text">İndirim : 30 $</div>
				<div className="cart__payment--text">Toplam : 30 $</div>
				<div>
					<button className="btn btn-secondary--rounded">Ödeme Yap</button>
				</div>
			</div>
		</div>
	);
};
export default CartPage;
