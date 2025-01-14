import './Footer.css';

const Footer = () => {

	return (
		<footer id='Footer'>
			<div className="Footer-content">
				<div className="Footer-logo">
					<a href="#/" className="logo">
						<img src="./images/Footer/logo.svg" alt="" />
						<span>幣方舟</span>
					</a>
				</div>
				<small>&copy; 2025 幣方舟 | All Rights Reserved</small>
			</div>
			<div id='Footer-notice'>
				<small>本網站為學生練習作品，僅供學習使用，無商業用途。</small>
			</div>
		</footer>
	);
}

export default Footer;
