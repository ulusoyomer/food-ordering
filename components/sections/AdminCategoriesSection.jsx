import React from 'react';

const AdminCategoriesSection = () => {
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Kategoriler</h1>
			<div className="profile__items--content">
				<form className="profile__items--form">
					<label htmlFor="password">Kategori Adı</label>
					<input
						className="input"
						type="text"
						name="category"
						id="category"
						placeholder="Kategori Adı"
					/>
					<button type="submit" className="btn btn-primary">
						Ekle
					</button>
				</form>
				<h4>Kategoriler</h4>
				<div className="profile__items--categories">
					<div>Kategori Adı</div>
					<div>
						<button className="btn btn-red">Sil</button>
					</div>
				</div>
				<div className="profile__items--categories">
					<div>Kategori Adı</div>
					<div>
						<button className="btn btn-red">Sil</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminCategoriesSection;
