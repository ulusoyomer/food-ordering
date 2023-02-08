import Image from 'next/image';
import React from 'react';

import {
	BsFillInboxFill,
	BsFillBagFill,
	BsFillXCircleFill,
} from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';

import { IoSettingsOutline } from 'react-icons/io5';

import AdminProductsSection from '../../components/sections/AdminProductsSection';
import AdminOrdersSection from '../../components/sections/AdminOrdersSection';
import AdminCategoriesSection from '../../components/sections/AdminCategoriesSection';
import AdminSettingsSection from '../../components/sections/AdminSettingsSection';

const AdminProfilePage = () => {
	const [content, setContent] = React.useState('products');

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
					Admin Name
				</p>
				<button
					onClick={(e) => setContent('products')}
					className={
						content === 'products'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
				>
					<BsFillInboxFill />
					Ürünler
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
					onClick={(e) => setContent('categories')}
					className={
						content === 'categories'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
				>
					<BiCategory />
					Kategoriler
				</button>
				<button
					onClick={(e) => setContent('settings')}
					className={
						content === 'settings'
							? 'profile__button btn btn-primary btn-active'
							: 'profile__button btn btn-primary '
					}
				>
					<IoSettingsOutline />
					Site Ayarları
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
				{content === 'products' && <AdminProductsSection />}
				{content === 'orders' && <AdminOrdersSection />}
				{content === 'categories' && <AdminCategoriesSection />}
				{content === 'settings' && <AdminSettingsSection />}
			</div>
		</div>
	);
};

export default AdminProfilePage;
