import { FaWindowClose } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useEffect, useRef } from 'react';
import TitlePrimary from '../../ui/TitlePrimary';
const AddProductModal = ({ isModalOpen, setIsModalOpen, categories }) => {
	const [extras, setExtras] = useState([]);
	const extraNameRef = useRef();
	const extraPriceRef = useRef();

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

	return (
		<div className={isModalOpen ? 'modal modal--active' : 'modal'}>
			<OutsideClickHandler
				onOutsideClick={() => {
					setIsModalOpen(false);
				}}
				disabled={!isModalOpen}
			>
				<div className="modal__container">
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
								<input
									type="file"
									className="input"
									name="image"
									id="image"
								/>
								<label htmlFor="name">Ürün Adı</label>
								<input
									type="text"
									className="input"
									name="name"
									id="name"
								/>
								<label htmlFor="name">Ürün Açıklama</label>
								<textarea
									className="input"
									name="description"
									id="description"
								/>
								<label className="mb-3" htmlFor="category">
									Ürün Kategori
								</label>
								<select>
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
										type="text"
										className="input"
										name="smallPrice"
										id="smallPrice"
										placeholder="Küçük"
									/>
									<input
										type="text"
										className="input"
										name="mediumPrice"
										id="mediumPrice"
										placeholder="Orta"
									/>
									<input
										type="text"
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
															<button className="btn btn-red rounded-full">
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
										type="text"
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
