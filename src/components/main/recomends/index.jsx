import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import style from './Rec.module.scss';
import { SliderItem } from './sliderItem';
import 'swiper/css';
import 'swiper/css/navigation';

export const RecomendsMovie = () => {
  return (
    <div className={style.main}>
      <section className={style.NameOfRec}>Лучшие фильмы за 1902 год</section>
      <section>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          slidesPerView={5.5}
          navigation
          modules={[Navigation]}
          spaceBetween={30}>
          {[...Array(8)].map((item, id) => {
            return (
              <SwiperSlide key={id}>
                <SliderItem />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};
