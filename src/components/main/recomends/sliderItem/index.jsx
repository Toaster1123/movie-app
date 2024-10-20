import React from 'react';
import style from './sliderItem.module.scss';

import chooseColorRating from '../../../../lib/chooseColorRating';
import { setMovieLength } from '../../../../lib/setMovieLength';
export const SliderItem = ({ item, height }) => {
  return (
    <div className={style.main}>
      <div className={style[height]}>
        <img
          className={style.image}
          src={item.backdrop.url || item.backdrop.preveiwUrl}
          alt="заставка фильма"
        />
      </div>
      <div className={style.textBlock}>
        <div className={style.filmName}>{item.name}</div>
        <div className={style.text}>
          <div className={`${style.rating} ${style[chooseColorRating(item.rating.kp)]}`}>
            {item.rating.kp.toFixed(1)}
          </div>
          <div className={style.year}>{item.year}</div>
          <div className={style.genres}>{item.genres != null && item.genres[0].name}</div>
          <div className={style.length}>
            {setMovieLength(item.movieLength || item.seriesLength)}
          </div>
          <div className={style.age}>{item.ageRating && item.ageRating + '+'} </div>
        </div>
        <div className={style.buttons}>
          <div className={style.btnMore}>Подробнее</div>
          <div className={style.btnSave}></div>
        </div>
      </div>
    </div>
  );
};
