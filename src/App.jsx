import './App.scss';
import Carousel from './Carousel';
import {GiShoppingBag, GiBigDiamondRing} from 'react-icons/gi';
import {FaBars, FaShoppingCart, FaEnvelopeOpen, FaFacebookF} from 'react-icons/fa';
import {AiFillGift} from 'react-icons/ai';
import { MdCardMembership, MdLocalShipping, MdLocationOn, MdPhonelinkRing } from 'react-icons/md';
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from './img/verona-small.png';
import bg from './img/bg-cropped.png'
import bg1 from './img/bg-3-cropped.png'
import temp1 from './img/temp-1.jpg';
import temp2 from './img/temp-2.jpg';
import temp3 from './img/temp-3.jpg';
import mix from './img/mixed.png';

const App = () => {

  const [navbarBackground, setNavbarBackground] = useState('navbar-transparent');

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    center: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


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
          <div className='navbar-nav'>
            <li><FaBars /></li>
            <p><GiBigDiamondRing />Jubileo</p>
          </div>
          <div className='navbar-links'>
            <li>O nas </li>
            <li>Sklep </li>
            <li>Kontakt </li>
            <li><GiShoppingBag /></li>
          </div>
        </ul>
      </header>
      <section className='main-page-container'>
        <img src={bg} className='main-bg' alt ='bg'></img>
        <div className='main'>
          <div className='main-content'>
            <h6>Partner</h6>
            <img src={logo} alt='verona-logo'></img>
            <div className='main-content-title'>
              <h4>Poczuj piękno</h4>
            </div>
            <button>Sprawdź ofertę</button>
          </div>
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
      </section>

      <section className='about-container'>
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
      </section>

      <section className='offer-container'>
        <span className='line'></span>
        <button>Zobacz pełną ofertę</button>   
      </section>
      <Carousel />

      <div className='contact-container'>
        <div className='container'>
          <h4>Kontakt</h4>
          <div className='row contact-items'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div className='contact-box'>
                <div className='contact-icon'>
                  <MdLocationOn />
                </div>
                <p>Łęczna, Jana Pawła II 99</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div className='contact-box'>
                <div className='contact-icon'>
                  <MdPhonelinkRing />
                </div>
                <p>608 351 864</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div className='contact-box'>
                <div className='contact-icon'>
                  <FaFacebookF />
                </div>
                <p>/jubileo</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div className='contact-box'>
                <div className='contact-icon'>
                  <FaEnvelopeOpen />
                </div>
                <p>jubileo@kontakt.gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    
  );
}

export default App;
