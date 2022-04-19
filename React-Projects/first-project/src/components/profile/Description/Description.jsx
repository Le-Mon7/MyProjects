import style from './Description.module.scss';

function Description() {
	return (
		<div>
			<div>
				<img
					src='http://dgdesign.ru/uploads/posts/2017-02/1486798055_shapka-sayta-osen-1836271.jpg'
					alt=''
				/>
			</div>
			<div className={style.profile}>
				<div className={style.avatar}>
					<img
						src='https://marketplace.canva.com/EAEjuxgtTrE/1/0/1600w/canva-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B8-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80-%D0%B3%D1%80%D0%B0%D0%BD%D0%B4%D0%B6-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-twitch-TctTVI0Tna4.jpg'
						alt=''
					/>
				</div>
				<div className={style.description}>
					<div className={style.name}>Igorejkee</div>
					<div className={style.text}>
						<p>Date of Birth: 2 january</p>
						<p>City: Minsk</p>
						<p>Education: BSU'11</p>
						<p>Web Site: https://it-kamasutra.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;
