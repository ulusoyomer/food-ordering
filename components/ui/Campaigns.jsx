import Image from 'next/image';
const Campaigns = () => {
	return (
		<div className="campaigns">
			<div className="campaigns__container">
				<div className="campaigns__item">
					<div className="campaigns__item--img">
						<Image
							src="/images/rs1.png"
							alt="campaign1"
							width={300}
							height={300}
						/>
					</div>
					<div className="campaigns__item--text">
						<h2>Perşembe İndirimi</h2>
						<h3>%20 İndirim</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<button className="btn btn-primary">Sipariş Ver</button>
					</div>
				</div>
				<div className="campaigns__item">
					<div className="campaigns__item--img">
						<Image
							src="/images/rs1.png"
							alt="campaign1"
							width={300}
							height={300}
						/>
					</div>
					<div className="campaigns__item--text">
						<h2>Perşembe İndirimi</h2>
						<h3>%20 İndirim</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<button className="btn btn-primary">Sipariş Ver</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Campaigns;
