import React from 'react';

import { FilmDescription } from './filmDescription';
import { Rating } from './ratingFilm';

import style from './rd.module.scss';
export const RatingDesc = () => {
  return (
    <div className={style.main}>
      <div className={style.name}>Описание</div>
      <div className={style.content}>
        <FilmDescription />
        <Rating />
      </div>
    </div>
  );
};
