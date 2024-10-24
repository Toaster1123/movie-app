import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import style from './slider.module.scss';

import { FilmInfo } from '../../filmInfo/index.jsx';

import { useMovieMainSwiper } from '../../../store/movieMainSlider.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SliderMain = () => {
  const scrollItems = useMovieMainSwiper((state) => state.dataMainSwiper);
  const fetchData = useMovieMainSwiper((state) => state.fetchItems);

  React.useEffect(() => {
    try {
      fetchData('SMF2M17-D074329-QBAG7RZ-MBRR9QB');
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (useMovieMainSwiper((state) => state.loading)) {
    return;
  }
  return (
    <section className={style.sliderMain}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        slidesPerView={2}
        speed={800}
        navigation
        modules={[Navigation, Autoplay]}
        spaceBetween={200}
        loop
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        centeredSlides>
        {scrollItems.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <Link to={`/film/${item.id}`}>
                <div className={style.item}>
                  <img src={item.backdrop.url} />
                  <div className={style.item_text}>
                    <div className={style.item_title}>{item.name}</div>
                    <FilmInfo size={'textSize'} item={item} />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
