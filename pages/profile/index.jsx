import Image from 'next/image';
import React from 'react';

import {
	BsPersonCircle,
	BsFillKeyFill,
	BsFillBagFill,
	BsFillXCircleFill,
} from 'react-icons/bs';
import PasswordSection from './PasswordSection';

import ProfileSection from './ProfileSection';
import OrdersSection from './OrdersSection';

const ProfilePage = () => {
	const [content, setContent] = React.useState('profile');

	const logout = () => {};

	return (
		<div className="profile">
			<div className="profile__menu">
				<div className="profile__image">
					<Image
						src={'/images/about-img.jpg'}
						width={100}
						height={100}
						alt="profile"
						priority
					/>
				</div>
				<p className="text-center text-bold text-3xl font-poppins my-3">
					User Name
				</p>
				<button
					onClick={(e) => setContent('profile')}
					className={
						content === 'profile'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
				>
					<BsPersonCircle />
					Profil
				</button>
				<button
					onClick={(e) => setContent('password')}
					className={
						content === 'password'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
				>
					<BsFillKeyFill />
					Şifre
				</button>
				<button
					onClick={(e) => setContent('orders')}
					className={
						content === 'orders'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
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
				{content === 'profile' && <ProfileSection />}

				{content === 'password' && <PasswordSection />}
				{content === 'orders' && <OrdersSection />}
			</div>
		</div>
	);
};

export default ProfilePage;
