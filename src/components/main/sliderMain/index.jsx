import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './slider.module.scss';

import chooseColorRating from '../../../lib/chooseColorRating.js';
import { setMovieLength } from '../../../lib/setMovieLength.js';

import { useMovieMainSwiper } from '../../../store/movieMainSlider.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SliderMain = () => {
  const scrollItems = useMovieMainSwiper((state) => state.dataMainSwiper);
  const fetchData = useMovieMainSwiper((state) => state.fetchItems);

  React.useEffect(() => {
    try {
      fetchData('4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5');
      // console.log(scrollItems);
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
