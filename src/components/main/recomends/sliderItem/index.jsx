import React from 'react';
import style from './sliderItem.module.scss';

import chooseColorRating from '../../../../lib/chooseColorRating';
export const SliderItem = () => {
  return (
    <div className={style.main}>
      <img
        className={style.image}
        src="https://pic.rutubelist.ru/video/b3/51/b3518c0f1f662f5e6298b6ac9802bed3.jpg"
        alt="заставка фильма"
      />
      <div className={style.textBlock}>
        <div className={style.top}>
          <div className={`${style.rating} ${chooseColorRating(7.7)}`}></div>
          {/* {item.rating.kp.toFixed(1)} */}

          <div className={style.year}></div>
          {/* {item.year} */}
          <div className={style.genres}></div>
          {/* {item.genres[0].name} */}
          <div className={style.length}></div>
          {/* {setMovieLength(item.movieLength || item.seriesLength)} */}
          <div className={style.age}></div>
          {/* {item.ageRating && item.ageRating + '+'}  */}
        </div>
      </div>
    </div>
  );
};
