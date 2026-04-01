import React, { useContext, useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper';

import { Navigation, Pagination } from 'swiper';
import './swipper.css'
import { modeContext } from '../../../Context/ModeContext';






const PortfolioSection = () => {

    const { mode } = useContext(modeContext)


    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('PortfolioData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    return (
        <div>
            <h1 className={mode ? 'text-5xl text-white font-bold' : 'text-5xl font-bold'}>Portfolio</h1>
            <p className={mode ? 'text-success font-semibold mt-2' : 'text-accent font-semibold mt-2'}>My ShowCase</p>

            <Swiper modules={[Navigation, EffectCoverflow]} effect='coverflow' className='md:w-11/12 mx-auto'
                spaceBetween={0}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    577: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
            >

                <div className=' w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-12'>
                    {
                        cards?.map(card =>
                            <SwiperSlide className='py-20'><PortfolioCard key={card.id} card={card}></PortfolioCard></SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default PortfolioSection;