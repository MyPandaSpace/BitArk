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
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article.png" alt="" />
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
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article2.png" alt="" />
								</div>
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article3.png" alt="" />
								</div>
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
						</div>
						<div className='NEWS-section2-latest-cards-row'>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article.png" alt="" />
								</div>
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article2.png" alt="" />
								</div>
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article3.png" alt="" />
								</div>
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
						</div>
						<div className='NEWS-section2-latest-cards-row'>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article.png" alt="" />
								</div>
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article2.png" alt="" />
								</div>
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article3.png" alt="" />
								</div>
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
						</div>
						<div className='NEWS-section2-latest-cards-row'>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article.png" alt="" />
								</div>
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article2.png" alt="" />
								</div>
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
							<a href="#/ArticlePage"><article className='NEWS-section2-latest-card'>
								<div className="image-container">
									<img src="./images/News/img_article3.png" alt="" />
								</div>
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
								<div className='NEWS-section2-latest-card-footer'>
									<small>2025/01/01</small>
									<div>
										<small><img id='icon' src="./icons/eye-solid.svg" alt="" /></small>
										<small>1256</small>
									</div>
								</div>
							</article></a>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NEWS