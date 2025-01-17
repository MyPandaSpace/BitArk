import './styles/Home.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Btn_ScrollDown from './Components/btn_ScrollDown'
import Btn_goTop from './Components/Btn_goTop'
import { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

function Home() {
  const introRef = useRef(null);

  const scrollToIntro = () => {
    if (introRef.current) {
      setTimeout(() => {
        introRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 200);
    }
  };

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Btn_goTop />
        <section id='Home-banner'>
          <div id='Home-banner-title' data-aos="fade-up" data-aos-duration="2500">
            <img src="./icons/logo.svg" alt="" />
            <h1>幣方舟</h1>
          </div>
          <div id='Home-banner-subtitle' data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="1000">
            <p>帶您探索加密貨幣的世界</p>
            <p>乘載入門所需的資訊</p>
          </div>
          <button id='banner-button' onClick={scrollToIntro}>探索幣方舟</button>
        </section>
        <section id='Intro-banner' ref={introRef}>
          <div className='Intro-banner-container'>
            <div id='Intro-banner-container-row'>
              <div id='Intro-banner-title' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="300">
                <h2>關於幣方舟</h2>
                <img src="./icons/logo.svg" alt="" />
              </div>
              <div id='Intro-banner-content'>
                <li id='Intro-banner-content-1' data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000">幣方舟帶領您進入加密貨幣的世界，除了提供貨幣基本介紹外，同時整合最新的虛擬貨幣資訊。</li>
                <br /><br />
                <li id='Intro-banner-content-2' data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000">無論您是新手還是有經驗的投資者，都能在這裡找到有價值的資源，幫助您更了解加密貨幣的動態與趨勢。</li>
              </div>
            </div>
            <Btn_ScrollDown />
          </div>
        </section>
        <section id='Intro2-banner'>
          <div className='Intro2-banner-container'>
            <div id='Intro2-banner-container-row'>
              <div id='Intro2-banner-title' data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
                <h2>虛擬貨幣的起源</h2>
              </div>
              <div id='Intro2-banner-content'>
                <li id='Intro2-banner-content-1' data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000">虛擬貨幣是一種基於區塊鏈技術的數位資產，最早由化名中本聰（Satoshi Nakamoto）於2009年創造的比特幣（Bitcoin）引領潮流。
                </li>
                <br /><br />
                <li id='Intro2-banner-content-2' data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000">
                  它的誕生源自對傳統金融系統的挑戰，主要提供一種去中心化、點對點的交易方式，不依賴銀行或政府機構。比特幣的成功啟發了更多加密貨幣的發展，進而形成了今日多元化的虛擬貨幣生態系統。</li>
              </div>
            </div>
            <div id='Intro2-banner-btn-container'>
              <div id='Intro2-banner-btn'>
                <Btn_ScrollDown />
                <Link to="/NEWS"><button>前往<br />幣方舟</button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
