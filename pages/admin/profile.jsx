import Image from 'next/image';
import React from 'react';

import {
	BsFillInboxFill,
	BsFillBagFill,
	BsFillXCircleFill,
} from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';

import { IoSettingsOutline } from 'react-icons/io5';

import AdminProductsSection from '../../components/sections/products/AdminProductsSection';
import AdminOrdersSection from '../../components/sections/AdminOrdersSection';
import AdminCategoriesSection from '../../components/sections/AdminCategoriesSection';
import AdminSettingsSection from '../../components/sections/AdminSettingsSection';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const AdminProfilePage = ({ categoryList }) => {
	const [content, setContent] = React.useState('products');
	const { push } = useRouter();
	const [categories, setCategories] = React.useState(categoryList);

	const logoutAdmin = async () => {
		try {
			if (confirm('Çıkmak istediğinize emin misiniz?')) {
				const response = await axios.put(
					`${process.env.NEXT_PUBLIC_API_URL}/admin`
				);
				if (response.status === 200) {
					toast.success(response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					push('/admin');
				}
			}
		} catch (error) {
			console.log(error);
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
					onClick={logoutAdmin}
					className="profile__button btn btn-primary"
				>
					<BsFillXCircleFill />
					Çıkış
				</button>
			</div>
			<div className="profile__content">
				{content === 'products' && (
					<AdminProductsSection categories={categories} />
				)}
				{content === 'orders' && <AdminOrdersSection />}
				{content === 'categories' && (
					<AdminCategoriesSection
						categories={categories}
						setCategories={setCategories}
					/>
				)}
				{content === 'settings' && <AdminSettingsSection />}
			</div>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const myCookie = context.req?.cookies ?? '';
	if (myCookie.token !== process.env.ADMIN_TOKEN) {
		return {
			redirect: {
				destination: '/admin',
				permanent: false,
			},
		};
	} else {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/categories`
			);
			return {
				props: {
					categoryList: response.data.data ?? [],
				},
			};
		} catch (error) {
			console.log(error);
		}
	}
};

export default AdminProfilePage;
