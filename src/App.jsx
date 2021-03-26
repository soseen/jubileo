import './App.scss';
import {GiShoppingBag, GiBigDiamondRing} from 'react-icons/gi';
import {FaBars, FaShoppingCart} from 'react-icons/fa';
import {AiFillGift} from 'react-icons/ai';
import { MdCardMembership, MdLocalShipping } from 'react-icons/md';
import { useEffect, useState } from 'react';
import logo from './img/verona.png';
import temp1 from './img/temp-1.jpg';
import temp2 from './img/temp-2.jpg';
import temp3 from './img/temp-3.jpg';
import mix from './img/mixed.png';

const App = () => {

  const [navbarBackground, setNavbarBackground] = useState('navbar-transparent');

  const handleScroll = () => {
    if(window.pageYOffset > 0) {
      setNavbarBackground('navbar-fill')
    }
    else {
      setNavbarBackground('navbar-transparent')
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
  }, [])

 

  return (
    <div className="app">
      <header className="site-header">
        <ul className={`navbar ${navbarBackground}`}>
          {/* <li><FaBars /></li> */}
          <li><GiBigDiamondRing />Jubileo</li>
          <li>O nas </li>
          <li>Sklep </li>
          <li>Kontakt </li>
          <li><GiShoppingBag /></li>
        </ul>
      </header>
      <div className='landing-page-container'>
        <div className='landing-info-container'>
           <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div className='landing-title'>
                  <h1>Poczuj piękno</h1>
                  <button><p>Sprawdź ofertę</p></button>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-md-block'>
                <div className='landing-info'>
                  <h3>Partner</h3>
                  <img src={logo} alt='verona-logo'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
         
          {/* <div className='landing-info-container'>
            <div className='landing-title'>
              <h1>Poczuj piękno</h1>
              <button><p>Sprawdź ofertę</p></button>
            </div>
            <div className='landing-info'>
              <h3>Partner</h3>
              <img src={logo} alt='verona-logo'></img>
            </div>
          </div> */}
          <div className='features-container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
              <div className='features-box'>
                <MdLocalShipping />
                <h4>Darmowa dostawa powyżej 150zł</h4>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
              <div className='features-box'>
                <AiFillGift />
                <h4>Karty upominkowe</h4>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
              <div className='features-box'>
                <MdCardMembership />
                <h4>Karty rabatowe dla stałych klientów</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* <div className='features-container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
              <div className='features-box'>
                <MdLocalShipping />
                <h4>Darmowa dostawa powyżej 150zł</h4>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
              <div className='features-box'>
                <AiFillGift />
                <h4>Karty upominkowe</h4>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
              <div className='features-box'>
                <MdCardMembership />
                <h4>Karty rabatowe dla stałych klientów</h4>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='about-container'>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='about-left'>
                <h5>Biżuteria & Zegarki</h5>
                <h2>Jubileo</h2>
                <span className='line'></span>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque esse maxime quas repellendus nesciunt veniam, corporis nulla rerum nisi a modi possimus sapiente, repudiandae iste nam sit distinctio excepturi hic natus animi ea ex laborum? Est nostrum aliquid cum corrupti reiciendis vero natus et mollitia expedita accusamus. Tempora iste magni voluptatem voluptate, minima tenetur architecto quasi quibusdam eaque, deserunt dicta in!</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <div className='about-right'>
                  <img src={mix} alt='watch'></img>
                </div>
            </div>
          </div>
        </div>
        {/* <div className='about-main'>
          <div className='about-left'>
            <h5>Biżuteria & Zegarki</h5>
            <h2>Jubileo</h2>
            <span className='line'></span>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque esse maxime quas repellendus nesciunt veniam, corporis nulla rerum nisi a modi possimus sapiente, repudiandae iste nam sit distinctio excepturi hic natus animi ea ex laborum? Est nostrum aliquid cum corrupti reiciendis vero natus et mollitia expedita accusamus. Tempora iste magni voluptatem voluptate, minima tenetur architecto quasi quibusdam eaque, deserunt dicta in!</p>
          </div>
          <div className='about-right'>
            <img src={temp1} alt='watch'></img>
          </div>
        </div> */}
        
      </div>

    </div>
  );
}

export default App;
