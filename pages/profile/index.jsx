import Image from 'next/image';
import React from 'react';

import {
	BsPersonCircle,
	BsFillKeyFill,
	BsFillBagFill,
	BsFillXCircleFill,
} from 'react-icons/bs';
import PasswordSection from '../../components/sections/PasswordSection';

import ProfileSection from '../../components/sections/ProfileSection';
import OrdersSection from '../../components/sections/OrdersSection';
import { signOut, getSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProfilePage = ({ user }) => {
	const [content, setContent] = React.useState('profile');
	const { push } = useRouter();
	const logout = () => {
		if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
			signOut({ redirect: false });
			toast.success('Çıkış Başarılı', {
				position: toast.POSITION.TOP_RIGHT,
			});
			push('/');
		}
	};

	return (
		<div className="profile">
			<div className="profile__menu">
				<div className="profile__image">
					<Image
						src={user.image ?? '/images/about-img.jpg'}
						width={100}
						height={100}
						alt="profile"
						priority
					/>
				</div>
				<p className="text-center text-bold text-3xl font-poppins my-3">
					{user.name}
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
				{content === 'profile' && (
					<ProfileSection
						id={user._id}
						name={user.name}
						email={user.email}
						tel={user.tel ?? ''}
						address={user.address ?? ''}
					/>
				)}

				{content === 'password' && <PasswordSection id={user._id} />}
				{content === 'orders' && <OrdersSection />}
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ req }) => {
	const session = await getSession({ req });
	if (!session) {
		return {
			redirect: {
				destination: '/auth/login',
				permanent: false,
			},
		};
	}
	const user = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/users/${session?.user.name}`
	);

	return {
		props: {
			user: user ? user.data.data : null,
		},
	};
};

export default ProfilePage;
