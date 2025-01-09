import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './styles/Crypto.css'
import React, { useState } from 'react';

const CryptoSection = () => {
	const [currentContent, setCurrentContent] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// 定義每個虛擬貨幣的介紹內容
	const contentData = [
		{
			title: '比特幣（Bitcoin，BTC）',
			year: 2009,
			use: '數字貨幣、價值儲存',
			description:
				'比特幣是最早的虛擬貨幣，也是目前市值最大的一種。由神秘人物中本聰（Satoshi Nakamoto）創立，設計為去中心化的數字貨幣，旨在提供一種不依賴政府或銀行的價值儲存方式。比特幣的交易基於區塊鏈技術，並以其安全性和有限的供應量（總量2100萬）而著稱。',
			img: './images/Crypto/img_BTC.svg',
		},
		{
			title: '以太坊（Ethereum，ETH）',
			year: 2015,
			use: '智能合約平台、去中心化應用',
			description:
				'以太坊是一個開放源代碼的區塊鏈平台，不僅支持虛擬貨幣交易，還允許開發者建立智能合約和去中心化應用（dApps）。智能合約是自動執行的合約條款，無需中介即可完成交易。ETH是以太坊的原生加密貨幣，並被廣泛用於支付交易手續費和運行智能合約。',
			img: './images/Crypto/img_ETH.svg',
		},
		{
			title: '穩定幣（Stablecoins）',
			year: 'N/A',
			use: '穩定價值、交易媒介',
			description:
				'穩定幣是一種類型的加密貨幣，其價值與法幣（如美元）掛鉤，目的是減少加密貨幣市場的價格波動。它們的價值與相應法幣緊密相連，通常由金融機構或其合作夥伴負責發行和監管。例如，USDT（泰達幣）和USDC（美元硬幣）通常以1:1的比例與美元掛鉤，讓投資者在加密貨幣市場中進行交易時，可以保有較為穩定的價值。',
				img: './images/Crypto/img_USDT-C.svg',
		},
		{
			title: '瑞波幣（XRP）',
			year: 2012,
			use: '跨境支付、金融機構間結算',
			description:
				'XRP是由瑞波公司（Ripple）發行的加密貨幣，主要用於金融機構之間的快速跨境支付。XRP的設計目的是提供一種便宜且高效的國際支付方式，相比傳統銀行系統，它可以在數秒內完成全球範圍內的交易，並且大大降低交易成本。',
			img: './images/Crypto/img_XRP.svg',
		},
	];

	const handleNavClick = (index) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setCurrentContent(index);
			setIsTransitioning(false);
		}, 400); // 設定過渡效果的時間，與 CSS 中的過渡時間匹配
	};

	return (
		<>
			<Navbar />
			<section id='Crypto-section1'>
				<img src="./images/News/img_NEWS_Banner2.png" alt="" />
				<h1>貨幣介紹</h1>
			</section>
			<section id='Crypto-section2'>
				{/* 導覽列 */}
				<div id='Crypto-nav-title'>
					<h2>種類</h2>
				</div>
				<div id="Crypto-nav">
					<ul>
						{contentData.map((content, index) => (
							<li key={index}>
								<a href="javascript:void(0);" onClick={() => handleNavClick(index)}>
									{content.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				{/* 內容區域 */}
				<div id="Crypto-section2-content" className={`Crypto-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
					<div className="Crypto-content">
						{/* 動態更新標題和內容 */}
						<h2>{contentData[currentContent].title}</h2><br />
						<p>創立年份： {contentData[currentContent].year}</p>
						<p>用途： {contentData[currentContent].use}</p>
						<br />
						<p>{contentData[currentContent].description}</p>
					</div>
					<img className="Crypto-image" src={contentData[currentContent].img} alt="" />
				</div>
			</section >
			<Footer />
		</>
	)
}
export default CryptoSection