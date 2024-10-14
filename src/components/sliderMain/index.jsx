import React from 'react';
import style from './slider.module.scss';

export const SliderMain = () => {
  return (
    <div className={style.sliderMain}>
      {[...Array(2)].map((item, id) => {
        return (
          <div key={id} className={style.item}>
            <img src="https://s.yimg.com/ny/api/res/1.2/dljqJy0.l2_kJfjpG5zOQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTg-/https://media.zenfs.com/en/deadline.com/26b0b429f4de1632c63a442124050a9d" />
          </div>
        );
      })}
    </div>
  );
};
