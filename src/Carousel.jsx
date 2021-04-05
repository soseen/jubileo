import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCoverflow, EffectCube} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Carousel.scss'
import temp1 from './img/temp-1.jpg';
import temp2 from './img/temp-2.jpg';
import temp3 from './img/temp-3.jpg';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade, EffectCoverflow, EffectCube]);



const Carousel = () => {

    return(
        <Swiper
        id='swiper-wrapper'
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        navigation
        speed = {1300}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div className='item-container'>
                <div className='item-content'>
                    <h4>Pierścionek srebrny</h4>
                    <p className='item-price'>380 zł</p>
                    <button>Dodaj do koszyka</button>
                </div>
                <div className='item-img'>
                    <img src={temp1}></img>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-container'>
                <div className='item-content'>
                    <h4>Zegarek Domani</h4>
                    <p className='item-price'>199 zł</p>
                    <button>Dodaj do koszyka</button>
                </div>
                <div className='item-img'>
                    <img src={temp3}></img>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-container'>
                <div className='item-content'>
                    <h4>Łańcuszek srebrny</h4>
                    <p className='item-price'>240 zł</p>
                    <button>Dodaj do koszyka</button>
                </div>
                <div className='item-img'>
                    <img src={temp2}></img>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;