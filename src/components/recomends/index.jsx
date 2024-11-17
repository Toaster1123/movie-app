import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ContentLoader from 'react-content-loader';

import style from './Rec.module.scss';
import { SliderItem } from './sliderItem';
import 'swiper/css';
import 'swiper/css/navigation';

export const RecomendsMovie = (props) => {
  const loading = props.filmsData.length > 0 ? props.loading : true;
  return (
    <div className={style.main}>
      <section className={style.NameOfRec}>
        {loading ? (
          <ContentLoader
            speed={2.3}
            width={325}
            height={40}
            backgroundColor="#111"
            foregroundColor="#4d4d4d">
            <rect x="0" y="0" rx="16" ry="16" width="325" height="40" />
          </ContentLoader>
        ) : (
          props.title
        )}
      </section>
      <section>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
          }}
          slidesPerView={5.35}
          slidesPerGroup={4}
          speed={600}
          breakpoints={{
            1310: {
              slidesPerView: 4.3,
            },
            1800: {
              slidesPerView: 5.35,
            },
          }}
          navigation
          modules={[Navigation]}
          spaceBetween={12}>
          {(loading ? [...Array(5)] : props.filmsData).map((item, id) => {
            return (
              <SwiperSlide className={style.SwiperSlide} key={id}>
                <SliderItem item={item} height={props.height} loading={loading} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};
// props.filmsData != undefined
