import Navbar from './Components/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './Components/CarouselImage';
import './styles/News.css'
import './styles/custom-bootstrap.scss';
import Btn_goTop from './Components/Btn_goTop';
import Footer from './Components/Footer';

function NEWS() {
	return (
		<>
			<Navbar />
			<Btn_goTop />
			<section id='NEWS-section1'>
				<Carousel prevLabel="" nextLabel="">
					<Carousel.Item>
						<CarouselImage src="./images/News/img_NEWS_Banner1.png" />
						<a href="#/ArticlePage"><Carousel.Caption>
							<h3>比特幣突破歷史新高</h3>
							<p>比特幣價格再次飆升，引發全球投資者熱議，其總市值已達數萬億美元。</p>
						</Carousel.Caption></a>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage src="./images/News/img_NEWS_Banner2.png" />
						<a href="#/ArticlePage"><Carousel.Caption>
							<h3>區塊鏈技術改變金融世界</h3>
							<p>區塊鏈技術正廣泛應用於跨境支付、供應鏈管理和數位身份認證，顛覆傳統金融模式。</p>
						</Carousel.Caption></a>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage src="./images/News/img_NEWS_Banner3.png" />
						<a href="#/ArticlePage"><Carousel.Caption>
							<h3>以太坊2.0全面升級</h3>
							<p>
								以太坊2.0成功過渡到股權證明機制，能源效率提升99%，成為更具永續性的區塊鏈網路。
							</p>
						</Carousel.Caption></a>
					</Carousel.Item>
				</Carousel>
			</section>
			<section id='NEWS-section2'>
				<div id='NEWS-section2-title'>
					<h1>最新消息</h1>
				</div>
				<div id='NEWS-section2-content'>
					<div id='NEWS-section2-latest'>
						<div className='NEWS-section2-latest-cards-row'>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article1.png" alt="" />
									</div>
									<h2>虛擬貨幣的現狀與未來發展</h2>
									<p>虛擬貨幣作為數位時代的產物，正以驚人的速度改變全球經濟的運作方式。比特幣（Bitcoin）作為首個虛擬貨幣，自 2009 年問世以來，已從一個技術實驗成長為具有全球影響力的金融資產。而隨著以太坊（Ethereum）、瑞波幣（Ripple）、卡爾達諾（Cardano）等多樣化的加密貨幣的出現，整個市場正在快速擴張。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article2.png" alt="" />
									</div>
									<h2>區塊鏈技術的創新應用</h2>
									<p>區塊鏈技術作為虛擬貨幣的基礎，正在被越來越多的行業所接受。從金融服務到供應鏈管理，區塊鏈的分散式特性和透明性使其成為解決多種問題的有效工具。企業正逐步將其應用於物流、醫療、能源和政府服務等領域，試圖提升數據的可信度和降低管理成本。

										在金融領域，區塊鏈被視為提高支付系統效率的核心技術。比特幣和以太坊等數位貨幣的基礎便是區塊鏈技術。隨著區塊鏈技術的發展，去中心化應用（DApps）和智能合約等概念也逐漸流行，它們有望在未來取代部分傳統的合同和協議形式，提升交易的效率與透明度。

										然而，區塊鏈仍面臨著擴展性、能源消耗和監管等挑戰，這些問題的解決將決定區塊鏈未來的發展方向。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article3.png" alt="" />
									</div>
									<h2>虛擬貨幣的投資風險與機會</h2>
									<p>隨著虛擬貨幣的普及，越來越多的投資者進入這一市場，尋求從中獲取高額回報。然而，虛擬貨幣市場的波動性也使得投資風險不容忽視。比特幣的價格曾在短短幾個月內翻倍或暴跌，這讓不少投資者在其價格波動中獲益或遭受損失。

										在這樣的環境下，投資者應該謹慎選擇投資標的並保持多元化的投資組合。除了比特幣和以太坊等主流貨幣外，越來越多的穩定幣和新興代幣也出現於市場。穩定幣如 USDT 和 USDC 主要用於穩定價格波動，而新興代幣則提供了更高的風險和回報潛力。

										投資虛擬貨幣的關鍵是了解市場的風險，並制定合理的資產配置策略。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article4.png" alt="" />
									</div>
									<h2>去中心化金融（DeFi）的未來</h2>
									<p>去中心化金融（DeFi）是利用區塊鏈技術和智能合約，創建不依賴於傳統金融中介（如銀行、保險公司等）的金融服務。DeFi 生態系統的發展為用戶提供了更高的金融自由度，無需中介機構，便可進行借貸、保險、交易等金融操作。

										DeFi 已經在貸款、交易所、穩定幣和保險等領域取得了顯著的成就。以 Compound 和 Aave 為代表的去中心化借貸平台，為用戶提供了更高的收益率，而去中心化交易所（DEX）如 Uniswap 則改變了交易的方式。

										然而，DeFi 仍處於初步階段，面臨著智能合約漏洞、流動性不足以及監管缺失等問題。隨著技術的成熟和監管的加強，DeFi 有望在未來發揮更大的影響力。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article5.png" alt="" />
									</div>
									<h2>NFT與數位藝術的崛起</h2>
									<p>非同質化代幣（NFT）是加密貨幣領域中一個新興的熱點，特別是在數位藝術領域。NFT 代表著一個獨特的、不可互換的數字資產，它為數位藝術家提供了一種全新的方式來出售和交易作品。無論是數位畫作、音樂、影片還是虛擬土地，NFT 都能幫助創作者在區塊鏈上證明其作品的唯一性和所有權。

										NFT 市場的迅猛增長吸引了來自藝術界、娛樂界和體育界的大量參與者。知名藝術家和名人如 Beeple 和 Jack Dorsey 的 NFT 藝術品拍賣，創造了數以千萬計的收益，這一現象也讓更多人關注到 NFT 的潛力。

										然而，NFT 的發展也面臨著環境影響、知識產權保護和市場過熱等挑戰。未來，如何平衡創作者的權益與市場的規範將是 NFT 成功發展的關鍵。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article6.png" alt="" />
									</div>
									<h2>穩定幣與跨境支付的未來</h2>
									<p>穩定幣是指那些與法定貨幣（如美元）掛鉤的數字貨幣，目的是保持價格穩定。穩定幣的誕生解決了加密貨幣市場中價格波動過大的問題，使得數位貨幣能夠在現實世界中得到更廣泛的應用。尤其在跨境支付領域，穩定幣的普及顯示出其巨大的潛力。

										USDT（泰達幣）和 USDC（美元幣）等穩定幣已經在國際匯款和跨境支付中得到了廣泛應用。由於穩定幣能夠顯著降低交易成本並提高支付效率，它們正逐漸成為全球支付系統的重要組成部分。

										然而，穩定幣的運作依賴於足夠的儲備金支持，因此監管機構對穩定幣的透明度和合規性要求日益增強。未來，穩定幣如何在全球支付體系中發揮更大作用，仍然需要觀察。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article7.png" alt="" />
									</div>
									<h2>中央銀行數字貨幣（CBDC）的挑戰與機遇</h2>
									<p>L中央銀行數字貨幣（CBDC）是各國中央銀行推出的官方數字貨幣，它將與現有的法定貨幣並行使用。與虛擬貨幣不同，CBDC 由政府和中央銀行支持，因此具有法定貨幣的價值。

										目前，許多國家已經開始研究和試驗 CBDC，如中國的數位人民幣（e-CNY）和歐洲央行的數位歐元。CBDC 有望提高支付系統的效率，並為政府提供更好的貨幣政策工具。它還能夠為跨境支付提供便捷的數字解決方案。

										然而，CBDC 的推出也面臨著挑戰，包括隱私問題、跨國協調、技術實施等問題。隨著全球範圍內 CBDC 研究的深入，未來它可能會在全球金融體系中扮演重要角色。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article8.png" alt="" />
									</div>
									<h2>數位資產在金融市場中的角色</h2>
									<p>數位資產不僅僅限於加密貨幣，它還包括其他形式的數字財產，如數字證券、代幣化資產等。數位資產正日益成為金融市場中重要的一部分，並正在改變傳統金融行業的運作模式。

										隨著區塊鏈技術的成熟，金融機構開始將數位資產納入到投資組合中。許多投資者正在將數位資產視為對抗通脹、分散風險和提高回報的工具。數字證券和代幣化資產的發展，為金融市場提供了更多的投資機會，並降低了交易的障礙。

										然而，數位資產的規模增長也帶來了市場操縱、資產泡沫和不確定性的風險。金融監管機構需要確保市場的穩定性並保護投資者的利益。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article9.png" alt="" />
									</div>
									<h2>虛擬貨幣的環境影響與可持續性</h2>
									<p>虛擬貨幣的開採過程通常需要大量的計算資源，這些計算資源消耗了大量的電力，對環境造成了不小的影響。比特幣的挖礦過程被批評為對能源的巨大浪費，尤其是在全球氣候變遷問題日益嚴峻的背景下。

										為了解決這一問題，許多加密貨幣項目開始轉向更為環保的共識機制，如以太坊的轉型至「權益證明（PoS）」機制，這不僅能夠減少能源消耗，還能提高網絡的安全性和可擴展性。

										此外，越來越多的虛擬貨幣項目正在探索碳中和策略，並承諾使用可再生能源來支持礦工和區塊鏈運營。隨著行業對環境責任的關注日益增強，加密貨幣的可持續發展將成為未來的重要議題。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article10.png" alt="" />
									</div>
									<h2>虛擬貨幣在全球經濟中的角色</h2>
									<p>虛擬貨幣正逐漸成為全球經濟中不可忽視的力量。儘管在某些國家，虛擬貨幣仍面臨著監管挑戰和限制，但在其他國家，它已經成為金融市場的重要組成部分。隨著更多國家承認加密貨幣的價值並推出相關政策，虛擬貨幣在全球經濟中的地位將進一步提升。

										例如，拉丁美洲的薩爾瓦多已經將比特幣作為法定貨幣，並積極推動加密貨幣在國內經濟中的應用。隨著更多的國家加入這一行列，虛擬貨幣的全球影響力將持續增強。

										然而，虛擬貨幣的普及仍面臨許多挑戰，包括價格波動、技術問題以及跨國監管協調等。對於全球經濟來說，如何在保護金融穩定的同時促進虛擬貨幣的發展，將是一個重要課題。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article11.png" alt="" />
									</div>
									<h2>虛擬貨幣與未來的支付系統</h2>
									<p>虛擬貨幣正在為未來的支付系統奠定基礎。隨著數位支付的普及和無現金社會的來臨，虛擬貨幣作為一種新型的支付工具，已經開始改變我們的支付方式。比特幣、以太坊等數字貨幣的快速交易和低交易成本，使其在跨境支付中顯得尤為重要。

										此外，區塊鏈技術使得去中心化支付系統（如 DeFi）成為可能，這一新興的支付模式正迅速吸引著全球消費者和商家的目光。未來，虛擬貨幣可能會取代傳統支付系統，成為全球經濟體系的重要支付手段。

										然而，要實現虛擬貨幣在支付系統中的普及，還需要解決可擴展性、速度和安全等技術挑戰。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
							<article className='NEWS-section2-latest-card'>
								<a href="#/ArticlePage">
									<div className="image-container">
										<img src="./images/News/img_article12.png" alt="" />
									</div>
									<h2>虛擬貨幣與金融市場的數位化轉型</h2>
									<p>隨著數位貨幣和區塊鏈技術的應用擴展，金融市場正在經歷一場數位化轉型。從傳統銀行到證券市場，許多金融機構正在探索如何將虛擬貨幣和區塊鏈技術融入現有的業務模式中。這不僅改變了資本市場的結構，還對傳統金融行業產生了深遠的影響。

									數字貨幣的崛起將使得跨國支付、資金轉移和資本運作更加高效。區塊鏈技術則使得資本市場中的交易更加透明、安全。這一轉型的挑戰在於如何在確保金融穩定的基礎上，順利推動數位化的進程，並應對新技術帶來的各種風險。</p>
									<div className='NEWS-section2-latest-card-footer'>
										<small>2025/01/01</small>
										<div>
											<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
											<small>1256</small>
										</div>
									</div>
								</a>
							</article>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NEWS