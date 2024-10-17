import React from 'react';
import style from './slider.module.scss';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import chooseColorRating from '../../../lib/chooseColorRating.js';
import { setMovieLength } from '../../../lib/setMovieLength.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export const SliderMain = ({ scrollItems, loading }) => {
  console.log(loading);

  if (loading) {
    return;
  }
  return (
    <section className={style.sliderMain}>
      <Swiper
        effect={'coverflow'}
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 300,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        modules={[Navigation, Autoplay, EffectCoverflow]}
        // spaceBetween={310}
        loop
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        centeredSlides>
        {scrollItems.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <div className={style.item}>
                <img src={item.backdrop.url} />
                <div className={style.item_text}>
                  <div className={style.item_title}>{item.name}</div>
                  <div className={style.item_info}>
                    <div className={`${style.rating} ${style[chooseColorRating(item.rating.kp)]}`}>
                      {item.rating.kp.toFixed(1)}
                    </div>
                    <div className={style.year}>{item.year}</div>
                    <div className={style.genres}>{item.genres[0].name}</div>
                    <div className={style.length}>
                      {setMovieLength(item.movieLength || item.seriesLength)}
                    </div>
                    <div className={style.age}>{item.ageRating && item.ageRating + '+'} </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
