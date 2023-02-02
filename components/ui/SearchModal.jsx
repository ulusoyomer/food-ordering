import { closeModal } from '@/redux/reducers/searchModalSlice';
import { FaWindowClose } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
const SearchModal = () => {
	const { isModalOpen } = useSelector((store) => store.searchModal);
	const dispatch = useDispatch();
	return (
		<div className={isModalOpen ? 'modal modal--active' : 'modal'}>
			<OutsideClickHandler
				onOutsideClick={() => {
					dispatch(closeModal());
				}}
				disabled={!isModalOpen}
			>
				<div className="modal__container">
					<button
						onClick={() => dispatch(closeModal())}
						type="button"
						className="modal__close"
					>
						<FaWindowClose />
					</button>
					<div className="modal__header">
						<h1>Arama</h1>
					</div>
					<div className="modal__content">
						<div className="modal__search">
							<form>
								<input type="text" placeholder="Ara..." />
							</form>
						</div>
						<ul>
							<li>
								<Link href="#">
									<Image
										src="https://via.placeholder.com/50"
										alt="search"
										width={50}
										height={50}
									/>
									<div className="modal__food-name">Yemek Adı</div>
									<div className="modal__food-price">10 &#8378;</div>
								</Link>
							</li>
							<li>
								<Link href="#">
									<Image
										src="https://via.placeholder.com/50"
										alt="search"
										width={50}
										height={50}
									/>
									<div className="modal__food-name">Yemek Adı</div>
									<div className="modal__food-price">10 &#8378;</div>
								</Link>
							</li>
							<li>
								<Link href="#">
									<Image
										src="https://via.placeholder.com/50"
										alt="search"
										width={50}
										height={50}
									/>
									<div className="modal__food-name">Yemek Adı</div>
									<div className="modal__food-price">10 &#8378;</div>
								</Link>
							</li>
							<li>
								<Link href="#">
									<Image
										src="https://via.placeholder.com/50"
										alt="search"
										width={50}
										height={50}
									/>
									<div className="modal__food-name">Yemek Adı</div>
									<div className="modal__food-price">10 &#8378;</div>
								</Link>
							</li>
							<li>
								<Link href="#">
									<Image
										src="https://via.placeholder.com/50"
										alt="search"
										width={50}
										height={50}
									/>
									<div className="modal__food-name">Yemek Adı</div>
									<div className="modal__food-price">10 &#8378;</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</OutsideClickHandler>
		</div>
	);
};
export default SearchModal;
