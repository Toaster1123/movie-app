import React from 'react';
import style from './slider.module.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SliderMain = () => {
  return (
    <div className={style.sliderMain}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={3}
        navigation
        centeredSlides
        loop
        modules={[Pagination, Navigation]}>
        {[...Array(4)].map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <div className={style.item}>
                <img src="https://s.yimg.com/ny/api/res/1.2/dljqJy0.l2_kJfjpG5zOQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTg-/https://media.zenfs.com/en/deadline.com/26b0b429f4de1632c63a442124050a9d" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
