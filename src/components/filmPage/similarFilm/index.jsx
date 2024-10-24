import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import style from './similar.module.scss';
export const SimilarFilm = () => {
  return (
    <div className={style.main}>
      <h2>Похожие</h2>
      <Swiper className={style.sliderMain}>
        {[Array(12)].map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <div className={style.slide}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
