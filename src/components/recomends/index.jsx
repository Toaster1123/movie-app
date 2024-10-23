import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import style from './Rec.module.scss';
import { SliderItem } from './sliderItem';
import 'swiper/css';
import 'swiper/css/navigation';

export const RecomendsMovie = (props) => {
  return (
    <div className={style.main}>
      <section className={style.NameOfRec}>{props.title}</section>
      <section>
        <Swiper
          className={style.swiper}
          style={{
            '--swiper-navigation-color': '#fff',
          }}
          slidesPerView={5.35}
          slidesPerGroup={4}
          speed={600}
          breakpoints={{
            1410: {
              slidesPerView: 4.3,
            },
            1800: {
              slidesPerView: 5.35,
            },
          }}
          navigation
          modules={[Navigation]}
          spaceBetween={12}>
          {props.filmsData != undefined &&
            props.filmsData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <SliderItem item={item} height={props.height} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </div>
  );
};
