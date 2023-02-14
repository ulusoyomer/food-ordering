import { useFormik } from 'formik';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminFooterSection = ({ settings }) => {
	const [footer, setFooter] = useState(settings);
	const [id] = useState(settings._id);
	const formik = useFormik({
		initialValues: {
			address: footer?.address,
			email: footer?.email,
			phone: footer?.phone,
			description: footer?.description,
			openDays: footer?.openDays,
			openHours: footer?.openHours,
			facebook: footer?.facebook,
			instagram: footer?.instagram,
			twitter: footer?.twitter,
			youtube: footer?.youtube,
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.put(
					`${process.env.NEXT_PUBLIC_API_URL}/footer/${id}`,
					values
				);
				if (response.data.success) {
					setFooter(response.data.data[0]);
					toast.success('Ayarlar başarıyla güncellendi', {
						position: 'top-right',
					});
				}
			} catch (error) {
				toast.error('Ayarlar güncellenemedi', {
					position: 'top-right',
				});
				console.log(error);
			}
		},
	});

	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Ayarlar</h1>
			<div className="profile__items--content">
				<form
					className="profile__items--form"
					onSubmit={formik.handleSubmit}
				>
					<label htmlFor="address">Adres</label>
					<input
						className="input"
						type="text"
						name="address"
						id="address"
						placeholder="Adres"
						value={formik.values.address}
						onChange={formik.handleChange}
					/>

					<label htmlFor="email">Email</label>
					<input
						className="input"
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>

					<label htmlFor="tel">Telefon</label>
					<input
						placeholder="Telefon"
						className="input"
						type="tel"
						name="phone"
						id="phone"
						value={formik.values.phone}
						onChange={formik.handleChange}
					/>
					<label htmlFor="description">Açıklama</label>
					<textarea
						className="input"
						name="description"
						id="description"
						cols="30"
						rows="2"
						placeholder="Açıklama"
						value={formik.values.description}
						onChange={formik.handleChange}
					></textarea>

					<label htmlFor="openDays">Açık Günler</label>
					<input
						placeholder="Açık Günler"
						className="input"
						type="text"
						name="openDays"
						id="openDays"
						value={formik.values.openDays}
						onChange={formik.handleChange}
					/>

					<label htmlFor="openDays">Açık Saatler</label>
					<input
						placeholder="Açık Saatler"
						className="input"
						type="text"
						name="openHours"
						id="openHours"
						value={formik.values.openHours}
						onChange={formik.handleChange}
					/>

					<label htmlFor="facebook">Facebook</label>
					<input
						placeholder="Facebook"
						className="input"
						type="text"
						name="facebook"
						id="facebook"
						value={formik.values.facebook}
						onChange={formik.handleChange}
					/>

					<label htmlFor="instagram">Instagram</label>
					<input
						placeholder="Instagram"
						className="input"
						type="text"
						name="instagram"
						id="instagram"
						value={formik.values.instagram}
						onChange={formik.handleChange}
					/>

					<label htmlFor="twitter">Twitter</label>
					<input
						placeholder="Twitter"
						className="input"
						type="text"
						name="twitter"
						id="twitter"
						value={formik.values.twitter}
						onChange={formik.handleChange}
					/>

					<label htmlFor="youtube">Youtube</label>
					<input
						placeholder="Youtube"
						className="input"
						type="text"
						name="youtube"
						id="youtube"
						value={formik.values.youtube}
						onChange={formik.handleChange}
					/>

					<button type="submit" className="btn btn-primary w-full">
						Güncelle
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminFooterSection;
