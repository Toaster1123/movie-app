import React from 'react';

import { MainFilmInfo } from '../../components/filmPage/mainFilmInfo';
import { RatingDesc } from '../../components/filmPage/ratingAndDesc';

import style from './filmPage.module.scss';
export const FilmPage = () => {
  return (
    <div className={style.filmPrview}>
      <MainFilmInfo />
      <RatingDesc />
    </div>
  );
};
