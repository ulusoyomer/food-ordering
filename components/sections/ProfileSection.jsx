import { useFormik } from 'formik';
import axios from 'axios';
import { profileSchema } from '@/schema/profilSchema';
import { toast } from 'react-toastify';

const ProfileSection = ({ name, email, tel, address, id }) => {
	const profilFormik = useFormik({
		initialValues: {
			name,
			email,
			tel,
			address,
		},
		onSubmit: async (values, actions) => {
			try {
				const response = await axios.put(
					`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
					values
				);
				if (response.status === 200) {
					toast.success('Profil Güncellendi', {
						position: 'top-right',
					});
				}
			} catch (error) {}
		},
		validationSchema: profileSchema,
	});
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Profil</h1>
			<div className="profile__items--content">
				<form
					className="profile__items--form"
					onSubmit={profilFormik.handleSubmit}
				>
					<label htmlFor="name">Ad Soyad</label>
					<input
						className="input"
						type="text"
						name="name"
						value={profilFormik.values.name}
						onChange={profilFormik.handleChange}
						onBlur={profilFormik.handleBlur}
						id="name"
						placeholder="Ad"
					/>
					{profilFormik.touched.name && profilFormik.errors.name ? (
						<p className="u--alert">{'*' + profilFormik.errors.name}</p>
					) : (
						' '
					)}
					<label htmlFor="tel">Email</label>
					<input
						className="input"
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						value={profilFormik.values.email}
						onChange={profilFormik.handleChange}
						onBlur={profilFormik.handleBlur}
					/>
					{profilFormik.touched.email && profilFormik.errors.email ? (
						<p className="u--alert">{'*' + profilFormik.errors.email}</p>
					) : (
						' '
					)}
					<label htmlFor="tel">Telefon</label>
					<input
						placeholder="Telefon"
						className="input"
						type="tel"
						name="tel"
						id="tel"
						value={profilFormik.values.tel}
						onChange={profilFormik.handleChange}
						onBlur={profilFormik.handleBlur}
					/>
					{profilFormik.touched.tel && profilFormik.errors.tel ? (
						<p className="u--alert">{'*' + profilFormik.errors.tel}</p>
					) : (
						' '
					)}
					<label htmlFor="address">Adres</label>
					<textarea
						className="input"
						name="address"
						id="address"
						cols="30"
						rows="2"
						placeholder="Adres"
						value={profilFormik.values.address}
						onChange={profilFormik.handleChange}
						onBlur={profilFormik.handleBlur}
					></textarea>
					{profilFormik.touched.address && profilFormik.errors.address ? (
						<p className="u--alert">
							{'*' + profilFormik.errors.address}
						</p>
					) : (
						' '
					)}
					<button type="submit" className="btn btn-primary w-full">
						Güncelle
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProfileSection;
