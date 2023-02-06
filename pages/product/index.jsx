import AppLayout from '../../components/layout/AppLayout';
import Image from 'next/image';
import TitlePrimary from '../../components/ui/TitlePrimary';
const Product = () => {
	return (
		<AppLayout>
			<div className="product">
				<div className="product__image">
					<Image
						src="/images/f1.png"
						width={300}
						height={300}
						alt="product image"
					/>
				</div>
				<div className="product__info px-5">
					<TitlePrimary>Hamburger</TitlePrimary>
					<div className="product__price">10 ₺</div>
					<p className="product__info--text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
						facere consequatur voluptate. Saepe, perferendis harum
						assumenda doloremque incidunt nulla. Ipsum?
					</p>
					<div className="product__size">
						<button
							type="button"
							className="product__size--item btn btn-primary"
						>
							Küçük
						</button>
						<button
							type="button"
							className="product__size--item btn btn-primary btn-active"
						>
							Orta
						</button>
						<button
							type="button"
							className="product__size--item btn btn-primary"
						>
							Büyük
						</button>
					</div>
					<div className="product__extra">
						<h3>Extra Malzeme</h3>
						<div className="product__extra--items">
							<label htmlFor="extra1">Extra 1</label>
							<input type="checkbox" id="extra1" name="extra1" />
							<label htmlFor="extra2">Extra 2</label>
							<input type="checkbox" id="extra2" name="extra2" />
							<label htmlFor="extra3">Extra 3</label>
							<input type="checkbox" id="extra3" name="extra3" />
						</div>
					</div>
					<button type="button" className="btn btn-primary--rounded mt-5">
						Sepete Ekle
					</button>
				</div>
			</div>
		</AppLayout>
	);
};
export default Product;
