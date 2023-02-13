import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminCategoriesSection = ({ categories, setCategories }) => {
	const categoryRef = React.useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/categories`,
				{ name: categoryRef.current.value }
			);
			if (response.data.success) {
				setCategories([
					...categories,
					{ _id: response.data.data._id, name: categoryRef.current.value },
				]);
				toast.success(response.data.message, {
					position: 'top-right',
				});
				categoryRef.current.value = '';
			}
		} catch (error) {
			toast.error('Kategori Eklenemedi', {
				position: 'top-right',
			});
			console.log(error);
		}
	};

	const deleteCategory = async (id) => {
		if (confirm('Kategoriyi silmek istediğinize emin misiniz?')) {
			try {
				const response = await axios.delete(
					`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
				);
				if (response.data.success) {
					const newCategories = categories.filter(
						(category) => category._id !== id
					);
					setCategories(newCategories);
					toast.success(response.data.message, {
						position: 'top-right',
					});
				}
			} catch (error) {
				toast.error('Kategori Silinemedi', {
					position: 'top-right',
				});
				console.log(error);
			}
		}
	};

	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Kategoriler</h1>
			<div className="profile__items--content">
				<form onSubmit={handleSubmit} className="profile__items--form">
					<label htmlFor="password">Kategori Adı</label>
					<input
						ref={categoryRef}
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
				{categories.length > 0 ? (
					categories.map((category) => {
						return (
							<div
								key={category._id}
								className="profile__items--categories"
							>
								<div>{category.name}</div>
								<div>
									<button
										onClick={() => deleteCategory(category._id)}
										type="button"
										className="btn btn-red"
									>
										Sil
									</button>
								</div>
							</div>
						);
					})
				) : (
					<p>Kategori Bulunamadı</p>
				)}
			</div>
		</div>
	);
};

export default AdminCategoriesSection;
