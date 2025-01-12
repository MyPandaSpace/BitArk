import React from 'react';
import './Navbar_Article.css';
import { Link } from 'react-router-dom';

const Navbar_Article = () => {
	return (
		<nav className="navbar_Article">
			<div className="navbar-logo">
				<Link to="/" className="logo"><img src="./icons/logo.svg" alt="" /><span>幣方舟</span></Link>
			</div>
			<ul className="navbar-links">
				<li><Link to="/NEWS">NEWS</Link></li>
				<li><Link to="/Crypto">貨幣介紹</Link></li>
				<li><Link to="/FAQ">常見問題</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar_Article;
