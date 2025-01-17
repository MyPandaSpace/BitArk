import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Btn_goTop from './Components/Btn_goTop'
import './styles/FaqPage.css'
import React, { useState } from 'react';

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{ question: "什麼是加密貨幣？", answer: "加密貨幣是一種數位貨幣，利用區塊鏈技術進行分散式記錄。" },
		{ question: "區塊鏈是如何運作的？", answer: "區塊鏈是一種分散式帳本技術，記錄交易並由多個節點共同維護。" },
		{ question: "加密貨幣是否安全？", answer: "加密貨幣使用密碼學技術保護交易安全，但仍需警惕詐騙和交易所風險。" },
		{ question: "如何保護我的加密貨幣資產？", answer: "您可以使用硬體錢包或軟體錢包來存儲加密貨幣，並開啟雙重認證來提高安全性。" },
		{ question: "如何開始投資加密貨幣？", answer: "您可以通過註冊交易所帳戶並購買加密貨幣來開始。" },
		{ question: "如何選擇一個交易所？", answer: "選擇具有良好聲譽、安全性和流動性的交易所，例如 Coinbase 或 Binance。" },
		{ question: "交易是否需要支付手續費？", answer: "是的，大多數交易需要支付手續費，費用視交易所和區塊鏈網絡而定。" },
		{ question: "加密貨幣的價值是如何決定的？", answer: "加密貨幣的價值由市場供需、投資者情緒以及技術發展等多種因素決定。" },
		{ question: "加密貨幣的交易速度有多快？", answer: "交易速度取決於所使用的區塊鏈。例如，比特幣每秒可處理約7筆交易，而以太坊則可以處理30筆左右。" },
		{ question: "什麼是礦工？", answer: "礦工是指利用計算能力維護區塊鏈網絡，並解決數學問題以驗證交易的人或機構。" }
	];

	return (
		<>
			<Navbar />
			<div className="faq-container">
				<Btn_goTop />
				<section id='faq-section1'>
					<img src="./images/FaqPage/img_FAQ_title-banner.png" alt="" />
					<h1>常見問題</h1>
				</section>
				<section id='faq-section2'>
					<div id='faq-list'>
						{faqs.map((faq, index) => (
							<div key={index} className="faq-item">
								<div
									className={`faq-question ${activeIndex === index ? "active" : ""}`}
									onClick={() => toggleFAQ(index)}
								>
									{faq.question}
								</div>
								<div
									className={`faq-answer ${activeIndex === index ? "show" : ""}`}
								>
									{faq.answer}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default FAQ;