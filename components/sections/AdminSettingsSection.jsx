import React from 'react';

const AdminFooterSection = () => {
	return (
		<div className="profile__items">
			<h1 className="profile__content--title">Ayarlar</h1>
			<div className="profile__items--content">
				<form className="profile__items--form">
					<label htmlFor="location">Adres</label>
					<input
						className="input"
						type="text"
						name="location"
						id="location"
						placeholder="Adres"
					/>

					<label htmlFor="email">Email</label>
					<input
						className="input"
						placeholder="Email"
						type="email"
						name="email"
						id="email"
					/>

					<label htmlFor="tel">Telefon</label>
					<input
						placeholder="Telefon"
						className="input"
						type="tel"
						name="tel"
						id="tel"
					/>
					<label htmlFor="description">Açıklama</label>
					<textarea
						className="input"
						name="description"
						id="description"
						cols="30"
						rows="2"
						placeholder="Açıklama"
					></textarea>

					<label htmlFor="openDays">Açık Günler</label>
					<input
						placeholder="Açık Günler"
						className="input"
						type="text"
						name="openDays"
						id="openDays"
					/>

					<label htmlFor="openDays">Açık Saatler</label>
					<input
						placeholder="Açık Saatler"
						className="input"
						type="text"
						name="openHours"
						id="openHours"
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
