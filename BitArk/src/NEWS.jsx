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
			<section>
				<Carousel prevLabel="" nextLabel="">
					<Carousel.Item>
						<CarouselImage />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
							<li>熱門1</li>
							<li>熱門2</li>
							<li>熱門3</li>
							<li>熱門4</li>
							<li>熱門5</li>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NEWS