import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// 滾動事件處理函數
	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	// 使用 useEffect 來綁定滾動事件
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// 清理事件監聽器
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
			<div className="navbar-logo">
				<a href="/" className="logo"><img src="/images/Navbar/logo.svg" alt="" /><span>幣方舟</span></a>
			</div>
			<ul className="navbar-links">
				<li><Link to="/Crypto">貨幣介紹</Link></li>
				<li><Link to="/Exchanges">交易所介紹</Link></li>
				<li><Link to="/About">關於</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar;
