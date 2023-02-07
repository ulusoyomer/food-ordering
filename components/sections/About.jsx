import { GiForkKnifeSpoon } from 'react-icons/gi';
import TitlePrimary from '../ui/TitlePrimary';
import Image from 'next/image';
const About = () => {
	return (
		<div className="about">
			<div className="about__title">
				<TitlePrimary>Hakkımızda</TitlePrimary>
				<h2>
					<GiForkKnifeSpoon />
				</h2>
				<h4>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
					provident repellendus perferendis esse
				</h4>
			</div>
			<div className="about__container">
				<div className="about__text">
					<h5>Yemeklerimiz</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Excepturi, facilis adipisci? Nulla mollitia inventore dolor,
						nostrum enim culpa unde quod! Adipisci eos laborum commodi
						ducimus veniam, assumenda quam. Reiciendis animi quo
						repellendus tempore magnam quas officiis nulla, rem unde
						voluptas ut pariatur saepe optio fuga corrupti maiores
						recusandae modi dolore!
					</p>
				</div>
				<div className="about__image">
					<div className="about__imag--background">
						<Image
							src="/images/about-img.jpg"
							alt="about_image"
							width={300}
							height={300}
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
