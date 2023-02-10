import React from 'react';
import { useFormik } from 'formik';
import { passwordSchema } from '../../schema/passwordSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
const PasswordSection = ({ id }) => {
	const passwordFormik = useFormik({
		initialValues: {
			password: '',
			newPassword: '',
			newPasswordConfirm: '',
		},
		onSubmit: async (values, actions) => {
			try {
				const response = await axios.patch(
					`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
					values
				);
				if (response.status === 200) {
					toast.success('Şifre Güncellendi', {
						position: 'top-right',
					});
				}
			} catch (error) {}
		},
		validationSchema: passwordSchema,
	});
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Şifre</h1>
			<div className="profile__items--content">
				<form
					className="profile__items--form"
					onSubmit={passwordFormik.handleSubmit}
				>
					<label htmlFor="password">Eski Parola</label>
					<input
						className="input"
						type="password"
						name="password"
						id="password"
						placeholder="Eski Parola"
						value={passwordFormik.values.password}
						onChange={passwordFormik.handleChange}
						onBlur={passwordFormik.handleBlur}
					/>
					{passwordFormik.touched.password &&
					passwordFormik.errors.password ? (
						<p className="u--alert">
							{'*' + passwordFormik.errors.password}
						</p>
					) : (
						' '
					)}
					<label htmlFor="newPassword">Yeni Parola</label>
					<input
						className="input"
						placeholder="Yeni Parola"
						type="password"
						name="newPassword"
						id="newPassword"
						value={passwordFormik.values.newPassword}
						onChange={passwordFormik.handleChange}
						onBlur={passwordFormik.handleBlur}
					/>
					{passwordFormik.touched.newPassword &&
					passwordFormik.errors.newPassword ? (
						<p className="u--alert">
							{'*' + passwordFormik.errors.newPassword}
						</p>
					) : (
						' '
					)}
					<label htmlFor="newPasswordConfirm">Yeni Parola Tekrar</label>
					<input
						className="input"
						placeholder="Yeni Parola Tekrar"
						type="password"
						name="newPasswordConfirm"
						id="newPasswordConfirm"
						value={passwordFormik.values.newPasswordConfirm}
						onChange={passwordFormik.handleChange}
						onBlur={passwordFormik.handleBlur}
					/>
					{passwordFormik.touched.newPasswordConfirm &&
					passwordFormik.errors.newPasswordConfirm ? (
						<p className="u--alert">
							{'*' + passwordFormik.errors.newPasswordConfirm}
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

export default PasswordSection;
