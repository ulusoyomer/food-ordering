import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { Autoplay } from 'swiper';
import { useRef } from 'react';
import Link from 'next/link';
import 'swiper/css';

const HeroSlider = () => {
	const swiperRef = useRef();

	return (
		<div className="u--center">
			<div className="hero-slider">
				<div className="hero-slider__navigation">
					<button
						onClick={() => swiperRef.current.slidePrev()}
						className="hero-slider__navigation--buttons"
						type="button"
					>
						<FaArrowUp />
					</button>
					<button
						onClick={() => swiperRef.current.slideNext()}
						className="hero-slider__navigation--buttons"
						type="button"
					>
						<FaArrowDown />
					</button>
				</div>

				<div className="hero-slider__slider">
					<Swiper
						direction={'vertical'}
						className="mySwiper"
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						speed={1000}
						loop={true}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						modules={[Autoplay]}
					>
						<SwiperSlide>
							<div className="hero-slider__slider--container">
								<div className="hero-slider__slider--text">
									<h1>
										Yakınınızda Hizmet Sunan Restoranları Keşfedin
									</h1>
									<p>
										Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Repellendus reiciendis, dolores
										expedita quisquam maxime corporis molestiae
										cupiditate sequi illum a quia dolor dolore aut
										quasi.
									</p>
								</div>
								<div className="hero-slider__slider--image">
									<Link href="#">
										<img
											src="/images/burger_slide.png"
											alt="food_name"
										/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="hero-slider__slider--container">
								<div className="hero-slider__slider--text">
									<h1>
										Yakınınızda Hizmet Sunan Restoranları Keşfedin
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Veritatis quo ipsum perferendis
										provident vel laudantium.
									</p>
								</div>
								<div className="hero-slider__slider--image">
									<Link href="#">
										<img
											src="/images/burger_slide.png"
											alt="food_name"
										/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default HeroSlider;
