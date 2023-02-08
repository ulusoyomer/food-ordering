import Image from 'next/image';
import React from 'react';

import {
	BsPersonCircle,
	BsFillKeyFill,
	BsFillBagFill,
	BsFillXCircleFill,
} from 'react-icons/bs';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profilSchema';
import { passwordSchema } from '../../schema/passwordSchema';

const ProfilePage = () => {
	const profileSection = useRef();
	const passwordSection = useRef();
	const ordersSection = useRef();

	const profileClickHandler = (e) => {
		if (
			e.target.nextElementSibling.nextElementSibling.classList.contains(
				'btn-active'
			)
		) {
			e.target.nextElementSibling.nextElementSibling.classList.remove(
				'btn-active'
			);
		}
		if (e.target.nextElementSibling.classList.contains('btn-active')) {
			e.target.nextElementSibling.classList.remove('btn-active');
		}
		if (!e.target.classList.contains('btn-active')) {
			e.target.classList.add('btn-active');
		}
		hiddenAllSections();
		if (profileSection.current.classList.contains('hidden')) {
			profileSection.current.classList.remove('hidden');
		}
	};
	const passwordClickHandler = (e) => {
		if (e.target.nextElementSibling.classList.contains('btn-active')) {
			e.target.nextElementSibling.classList.remove('btn-active');
		}
		if (e.target.previousElementSibling.classList.contains('btn-active')) {
			e.target.previousElementSibling.classList.remove('btn-active');
		}

		if (!e.target.classList.contains('btn-active')) {
			e.target.classList.add('btn-active');
		}
		hiddenAllSections();
		if (passwordSection.current.classList.contains('hidden')) {
			passwordSection.current.classList.remove('hidden');
		}
	};
	const ordersClickHandler = (e) => {
		if (
			e.target.previousElementSibling.previousElementSibling.classList.contains(
				'btn-active'
			)
		) {
			e.target.previousElementSibling.previousElementSibling.classList.remove(
				'btn-active'
			);
		}
		if (e.target.previousElementSibling.classList.contains('btn-active')) {
			e.target.previousElementSibling.classList.remove('btn-active');
		}

		if (!e.target.classList.contains('btn-active')) {
			e.target.classList.add('btn-active');
		}
		hiddenAllSections();
		if (ordersSection.current.classList.contains('hidden')) {
			ordersSection.current.classList.remove('hidden');
		}
	};
	const logout = () => {};

	const profilFormik = useFormik({
		initialValues: {
			name: '',
			email: '',
			tel: '',
			address: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
			actions.resetForm();
		},
		validationSchema: profileSchema,
	});

	const passwordFormik = useFormik({
		initialValues: {
			password: '',
			newPassword: '',
			newPasswordConfirm: '',
		},
		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
			actions.resetForm();
		},
		validationSchema: passwordSchema,
	});

	const hiddenAllSections = () => {
		if (!profileSection.current.classList.contains('hidden')) {
			profileSection.current.classList.add('hidden');
		}
		if (!passwordSection.current.classList.contains('hidden')) {
			passwordSection.current.classList.add('hidden');
		}
		if (!ordersSection.current.classList.contains('hidden')) {
			ordersSection.current.classList.add('hidden');
		}
	};

	return (
		<div className="profile">
			<div className="profile__menu">
				<div className="profile__image">
					<Image
						src={'/images/about-img.jpg'}
						width={100}
						height={100}
						alt="profile"
					/>
				</div>
				<p className="text-center text-bold text-3xl font-poppins my-3">
					User Name
				</p>
				<button
					onClick={profileClickHandler}
					className="profile__button btn btn-primary btn-active"
				>
					<BsPersonCircle />
					Profil
				</button>
				<button
					onClick={passwordClickHandler}
					className="profile__button btn btn-primary"
				>
					<BsFillKeyFill />
					Şifre
				</button>
				<button
					onClick={ordersClickHandler}
					className="profile__button btn btn-primary"
				>
					<BsFillBagFill />
					Siparişler
				</button>
				<button
					onClick={logout}
					className="profile__button btn btn-primary"
				>
					<BsFillXCircleFill />
					Çıkış
				</button>
			</div>
			<div className="profile__content">
				<div ref={profileSection} className="profile__items">
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
								<p className="u--alert">
									{'*' + profilFormik.errors.name}
								</p>
							) : (
								' '
							)}
							<label htmlFor="tel">Telefon</label>
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
							{profilFormik.touched.email &&
							profilFormik.errors.email ? (
								<p className="u--alert">
									{'*' + profilFormik.errors.email}
								</p>
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
								<p className="u--alert">
									{'*' + profilFormik.errors.tel}
								</p>
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
							{profilFormik.touched.address &&
							profilFormik.errors.address ? (
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
				<div ref={passwordSection} className="profile__items hidden">
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
							<label htmlFor="newPasswordConfirm">
								Yeni Parola Tekrar
							</label>
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
				<div ref={ordersSection} className="profile__items hidden">
					<h1 className="profile__content--title">Siparişler</h1>
					<div className="profile__items--content">
						<table className="cart__table">
							<thead>
								<tr>
									<th>Sipariş Numarası</th>
									<th>Sipariş</th>
									<th>Tarih</th>
									<th>Toplam</th>
									<th>Durumu</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">S. NO</div>

											<p className="table__info">138</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">
												Sipariş
											</div>
											<p className="table__info">
												Lorem ipsum dolor sit
											</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">Adres</div>
											<p className="table__info">10.10.2020</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">
												Toplam
											</div>
											<p className="table__info">30 $</p>
										</div>
									</td>
									<td>
										<div className="table__cell">
											<div className="table__inner_title">
												Durumu
											</div>
											<p className="table__info">Tamamlandı</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
