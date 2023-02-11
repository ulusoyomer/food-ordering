import { FaWindowClose } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useEffect, useRef } from 'react';
import TitlePrimary from '../../ui/TitlePrimary';
import Image from 'next/image';
const AddProductModal = ({ isModalOpen, setIsModalOpen, categories }) => {
	const [extras, setExtras] = useState([]);
	const extraNameRef = useRef();
	const extraPriceRef = useRef();

	const [file, setFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(null);

	useEffect(() => {
		setIsModalOpen(isModalOpen);
	}, [isModalOpen, setIsModalOpen]);

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
		console.log(file);
		console.log(previewUrl);
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
							<form>
								<label htmlFor="image">Ürün Resmi</label>
								<div className="flex flex-row gap-x-5">
									<input
										required
										type="file"
										className="input"
										name="image"
										id="image"
										onChange={handleChangeEvent}
									/>
									{previewUrl && (
										<div className="relative">
											<Image
												src={previewUrl}
												alt="Ürün Resmi"
												width={100}
												height={100}
											/>
											<button
												onClick={() => {
													setPreviewUrl(null);
													setFile(null);
												}}
												className="btn btn-red btn--small btn--now absolute right-2 top-0"
											>
												<FaWindowClose />
											</button>
										</div>
									)}
								</div>
								<label htmlFor="name">Ürün Adı</label>
								<input
									required
									type="text"
									className="input"
									name="name"
									id="name"
								/>
								<label htmlFor="name">Ürün Açıklama</label>
								<textarea
									required
									className="input"
									name="description"
									id="description"
									row="2"
								/>
								<label className="mb-3" htmlFor="category">
									Ürün Kategori
								</label>
								<select name="category" id="category">
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
									/>
									<input
										required
										type="number"
										min="0"
										className="input"
										name="mediumPrice"
										id="mediumPrice"
										placeholder="Orta"
									/>
									<input
										required
										type="number"
										min="0"
										className="input"
										name="bigPrice"
										id="bigPrice"
										placeholder="Büyük"
									/>
								</div>
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
										required
										ref={extraNameRef}
										className="input"
										type="text"
										name="extra_name"
										id="extra_name"
										placeholder="Ekstra Adı"
									/>
									<input
										required
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
