import './styles/Home.css'
import Navbar from './Components/Navbar'
import Btn_goTop from './Components/Btn_goTop'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Btn_goTop />
        <div id='Home-banner'>
          <div id='Home-banner-title'>
            <img src="/images/Home/logo.svg" alt="" />
            <h1>幣方舟</h1>
          </div>
          <div id='Home-banner-subtitle'>
            <p>帶您探索加密貨幣的世界</p>
            <p>乘載入門所需的資訊</p>
          </div>
          <button className='banner-button'>探索幣方舟</button>
        </div>
        <div id='Home-banner'>
          <button className='banner-button'>探索幣方舟</button>
        </div>
        <div id='Home-banner'>
          <button className='banner-button'>探索幣方舟</button>
        </div>
      </main>
    </>
  )
}

export default Home
