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
						<CarouselImage src="./images/News/img_NEWS_Banner1.jpg" />
						<Carousel.Caption>
							<h3>比特幣突破歷史新高</h3>
							<p>比特幣價格再次飆升，引發全球投資者熱議，其總市值已達數萬億美元。</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage />
						<Carousel.Caption src="">
							<h3>區塊鏈技術改變金融世界</h3>
							<p>區塊鏈技術正廣泛應用於跨境支付、供應鏈管理和數位身份認證，顛覆傳統金融模式。</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage src="./images/News/img_NEWS_Banner3.png" />
						<Carousel.Caption>
							<h3>以太坊2.0全面升級</h3>
							<p>
								以太坊2.0成功過渡到股權證明機制，能源效率提升99%，成為更具永續性的區塊鏈網路。
							</p>
						</Carousel.Caption>
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
								<img src="./images/News/img_article.png" alt="" />
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article2.png" alt="" />
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article3.png" alt="" />
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
						</div>
						<div className='NEWS-section2-latest-cards-row'>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article.png" alt="" />
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article2.png" alt="" />
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article3.png" alt="" />
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
						</div>
						<div className='NEWS-section2-latest-cards-row'>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article.png" alt="" />
								<h2>活動1</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article2.png" alt="" />
								<h2>活動2</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
							<article className='NEWS-section2-latest-card'>
								<img src="./images/News/img_article3.png" alt="" />
								<h2>活動3</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime perferendis doloribus, corrupti sequi consequatur adipisci ex excepturi! Explicabo, exercitationem!</p>
							</article>
						</div>
					</div>
					<div id='NEWS-section2-hot'>
						<div className='NEWS-section2-hot-list'>
							<h2>熱門焦點</h2>
							<li>比特幣價格突破新高！(15,682 views)</li>
							<li>以太坊2.0升級完成，挖礦模式將改變？(12,304 views)</li>
							<li>區塊鏈如何改變傳統金融？(9,876 views)</li>
							<li>熱門加密貨幣投資策略分析(7,543 views)</li>
							<li>如何選擇適合的新興加密貨幣？(6,219 views)</li>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NEWS