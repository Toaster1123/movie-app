import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { FilmInfo } from '../../filmInfo/index.jsx';
import { useMovieMainSwiper } from '../../../store/requests/movieMainSlider.js';

import style from './slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SliderMain = () => {
  const scrollItems = useMovieMainSwiper((state) => state.dataMainSwiper);
  const fetchData = useMovieMainSwiper((state) => state.fetchItems);
  const swiperLoading = useMovieMainSwiper((state) => state.loading);
  const loading = scrollItems.length > 0 ? swiperLoading : true;
  React.useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section className={style.sliderMain}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        slidesPerView={1.8}
        speed={800}
        navigation
        modules={[Navigation, Autoplay]}
        // spaceBetween={0}
        loop
        autoplay={{
          enabled: !loading,
          delay: 12000,
          disableOnInteraction: false,
        }}
        centeredSlides>
        {(loading ? [...Array(4)] : scrollItems).map((item, id) => {
          return (
            <SwiperSlide key={id}>
              {loading ? (
                <div className={style.item}>
                  <ContentLoader
                    speed={2.3}
                    width={'100%'}
                    height={'100%'}
                    backgroundColor="#111"
                    foregroundColor="#4d4d4d">
                    <rect x="0" y="0" width="100%" height="100%" />
                  </ContentLoader>
                </div>
              ) : (
                <Link to={`/film/${item.id}`}>
                  <div className={style.item}>
                    <img src={item.backdrop.url} />
                    <div className={style.item_text}>
                      <div className={style.item_title}>{item.name}</div>
                      <FilmInfo size={'textSize'} item={item} />
                    </div>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
