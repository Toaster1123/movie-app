import React from 'react';
import style from './sliderItem.module.scss';

import { FilmInfo } from '../../filmInfo';

export const SliderItem = ({ item, height }) => {
  if (height == undefined) {
    height = 'imageBorderLow';
  }
  return (
    <div className={style.main}>
      <div className={style[height]}>
        <img
          className={style.image}
          src={
            height == 'imageBorderLow'
              ? item.backdrop.url || item.backdrop.preveiwUrl
              : item.poster.url || item.poster.preveiwUrl
          }
          alt="заставка фильма"
        />
      </div>

      <div className={style.textBlock}>
        <div className={style.filmName}>{item.name}</div>

        <FilmInfo item={item} />
        <div className={style.buttons}>
          <div className={style.btnMore}>Подробнее</div>
          <div className={style.btnSave}></div>
        </div>
      </div>
    </div>
  );
};
