import React from 'react';
import style from './slider.module.scss';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { House } from 'lucide-react';

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов
export const SliderMain = ({ scrollItems, loading }) => {
  console.log(loading);
  console.log(scrollItems);
  const chooseColorRating = (val) => {
    if (val < 4.0) {
      return style.ratingColorRed;
    }
    if ((val > 4.0) & (val < 7.0)) {
      return style.ratingColorOrange;
    } else {
      return style.ratingColorGreen;
    }
  };
  let hours = 0;
  let minutes = 0;
  const setMovieLength = (num) => {
    while (num > 0) {
      minutes = num;
      num -= 60;
      if (num >= 0) {
        hours++;
        minutes = 0;
      } else {
        if (hours === 0) {
          return minutes + ' мин';
        } else {
          return hours + ' ч ' + minutes + ' мин';
        }
      }
    }
  };
  return (
    <section className={style.sliderMain}>
      <Swiper
        slidesPerView={1}
        navigation
        naviga
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop
        // autoplay={{
        //   delay: 14000,
        //   disableOnInteraction: false,
        // }}
        centeredSlides>
        {!loading
          ? scrollItems.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className={style.item}>
                    <img src={item.poster.previewUrl} />
                    <div className={style.item_text}>
                      <div className={style.item_title}>{item.name}</div>
                      <div className={style.item_info}>
                        <div className={`${style.rating} ${chooseColorRating(item.rating.kp)}`}>
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
            })
          : 'sdsdds'}
      </Swiper>
    </section>
  );
};
