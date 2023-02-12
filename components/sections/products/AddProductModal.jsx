import { FaWindowClose } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useEffect, useRef } from 'react';
import TitlePrimary from '../../ui/TitlePrimary';
import Image from 'next/image';
import { useFormik } from 'formik';
import { productSchema } from '../../../schema/productSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
const AddProductModal = ({
	isModalOpen,
	setIsModalOpen,
	categories,
	products,
	setProducts,
}) => {
	const [extras, setExtras] = useState([]);
	const extraNameRef = useRef();
	const extraPriceRef = useRef();

	const [file, setFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(null);

	useEffect(() => {
		setIsModalOpen(isModalOpen);
	}, [isModalOpen, setIsModalOpen]);

	const formik = useFormik({
		initialValues: {
			name: '',
			image: '',
			category: categories[0]._id ?? '',
			smallPrice: 0,
			mediumPrice: 0,
			bigPrice: 0,
			description: '',
		},
		onSubmit: async (values, actions) => {
			const {
				name,
				description,
				category,
				smallPrice,
				mediumPrice,
				bigPrice,
			} = values;

			const formData = new FormData();
			formData.append('file', file);
			formData.append('upload_preset', 'food-ordering');
			try {
				const uploadImage = await axios.post(
					'https://api.cloudinary.com/v1_1/dh8oci3oc/image/upload',
					formData
				);
				const data = {
					name,
					description,
					category,
					prices: [smallPrice, mediumPrice, bigPrice],
					extras: extras,
					image: uploadImage.data.secure_url,
				};
				try {
					const response = await axios.post(
						`${process.env.NEXT_PUBLIC_API_URL}/products`,
						data
					);
					if (response.status === 201) {
						actions.resetForm();
						data._id = response.data.data._id;
						setProducts([...products, data]);
						setIsModalOpen(false);
						setExtras([]);
						setPreviewUrl(null);
						setFile(null);
						toast.success(response.data.message, {
							position: 'top-right',
						});
					}
				} catch (error) {
					toast.error('Ürün Eklenemedi', {
						position: 'top-right',
					});
				}
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: productSchema,
	});

	const addExtra = () => {
		const extraName = extraNameRef.current.value;
		const extraPrice = extraPriceRef.current.value;

		setExtras([...extras, { name: extraName, price: extraPrice }]);

		extraNameRef.current.value = '';
		extraPriceRef.current.value = '';
	};

	const deleteExtra = (index) => {
		const newExtras = extras.filter((extra, i) => i !== index);
		setExtras(newExtras);
	};

	const handleChangeEvent = (changeEvent) => {
		const reader = new FileReader();
		reader.onload = (onLoadEvent) => {
			setPreviewUrl(onLoadEvent.target.result);
			setFile(changeEvent.target.files[0]);
		};
		reader.readAsDataURL(changeEvent.target.files[0]);
	};

	return (
		<div className={isModalOpen ? 'modal modal--active' : 'modal'}>
			<OutsideClickHandler
				onOutsideClick={() => {
					setIsModalOpen(false);
				}}
				disabled={!isModalOpen}
			>
				<div className="modal__container h-[40rem] overflow-auto">
					<button
						onClick={() => setIsModalOpen(false)}
						type="button"
						className="modal__close"
					>
						<FaWindowClose />
					</button>
					<div className="modal__header">
						<TitlePrimary>Ürün Ekle</TitlePrimary>
					</div>
					<div className="modal__content">
						<div className="modal__search">
							<form onSubmit={formik.handleSubmit}>
								<label htmlFor="image">Ürün Resmi</label>
								<div className="flex flex-row gap-x-5">
									<input
										required
										type="file"
										className="input"
										name="image"
										id="image"
										value={formik.values.image}
										onChange={(e) => {
											handleChangeEvent(e);
											formik.handleChange(e);
										}}
										onBlur={formik.handleBlur}
									/>
									{previewUrl && (
										<div className="relative">
											<Image
												src={previewUrl}
												alt="Ürün Resmi"
												width={90}
												height={90}
											/>
											<button
												onClick={() => {
													setPreviewUrl(null);
													setFile(null);
													formik.values.image = '';
												}}
												className="btn btn-red btn--small btn--now absolute right-2 top-0"
											>
												<FaWindowClose />
											</button>
										</div>
									)}
								</div>
								{formik.touched.image && formik.errors.image ? (
									<p className="u--alert">* {formik.errors.image}</p>
								) : null}
								<label htmlFor="name">Ürün Adı</label>
								<input
									required
									type="text"
									className="input"
									name="name"
									id="name"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.name && formik.errors.name ? (
									<p className="u--alert">* {formik.errors.name}</p>
								) : null}
								<label htmlFor="name">Ürün Açıklama</label>
								<textarea
									required
									className="input"
									name="description"
									id="description"
									row="2"
									value={formik.values.description}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.description &&
								formik.errors.description ? (
									<p className="u--alert">
										* {formik.errors.description}
									</p>
								) : null}
								<label className="mb-3" htmlFor="category">
									Ürün Kategori
								</label>
								<select
									value={formik.values.category}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									name="category"
									id="category"
								>
									{categories.map((category) => {
										return (
											<option
												key={category._id}
												value={category._id}
											>
												{category.name}
											</option>
										);
									})}
								</select>
								{formik.touched.category && formik.errors.category ? (
									<p className="u--alert">
										* {formik.errors.category}
									</p>
								) : null}
								<label htmlFor="price" className="mt-3">
									Ürün Fiyatı
								</label>
								<div className="flex flex-row gap-x-3">
									<input
										required
										type="number"
										min="0"
										className="input"
										name="smallPrice"
										id="smallPrice"
										placeholder="Küçük"
										value={formik.values.smallPrice}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<input
										required
										type="number"
										min="0"
										className="input"
										name="mediumPrice"
										id="mediumPrice"
										placeholder="Orta"
										value={formik.values.mediumPrice}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<input
										required
										type="number"
										min="0"
										className="input"
										name="bigPrice"
										id="bigPrice"
										placeholder="Büyük"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.bigPrice}
									/>
								</div>
								{formik.touched.smallPrice &&
								formik.errors.smallPrice ? (
									<p className="u--alert">
										* {formik.errors.smallPrice}
									</p>
								) : null}
								{formik.touched.mediumPrice &&
								formik.errors.mediumPrice ? (
									<p className="u--alert">
										* {formik.errors.mediumPrice}
									</p>
								) : null}
								{formik.touched.bigPrice && formik.errors.bigPrice ? (
									<p className="u--alert">
										* {formik.errors.bigPrice}
									</p>
								) : null}
								{extras.length > 0 && (
									<>
										<label>Ekstralar</label>
										<div className="add-product__extra flex flex-row gap-x-5">
											{extras.map((extra, index) => {
												return (
													<div
														key={index}
														className="text-light rounded-full flex flex-row justify-between items-center bg-red-700 m-0 p-0"
													>
														<div className="text-xs pl-2">
															{extra.name} - {extra.price}₺
														</div>
														<div>
															<button
																type="button"
																onClick={() =>
																	deleteExtra(index)
																}
																className="btn btn-red rounded-full"
															>
																<FaWindowClose />
															</button>
														</div>
													</div>
												);
											})}
										</div>
									</>
								)}
								<label>Ekstra Ekle</label>
								<div className="flex flex-row gap-x-3 items-center">
									<input
										ref={extraNameRef}
										className="input"
										type="text"
										name="extra_name"
										id="extra_name"
										placeholder="Ekstra Adı"
									/>
									<input
										ref={extraPriceRef}
										className="input"
										type="number"
										min="0"
										name="extra_price"
										id="extra_price"
										placeholder="Ekstra Fiyatı"
									/>
									<button
										type="button"
										onClick={addExtra}
										className="btn btn-secondary btn--small"
									>
										Ekstra Ekle
									</button>
								</div>
								<button className="btn btn-primary" type="submit">
									Ekle
								</button>
							</form>
						</div>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
};

export default AddProductModal;
