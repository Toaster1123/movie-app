import React from 'react';

import { MainFilmInfo } from '../../components/filmPage/mainFilmInfo';
import { RatingDesc } from '../../components/filmPage/ratingAndDesc';
import { SimilarFilm } from '../../components/filmPage/similarFilm';
import { PersonsMain } from '../../components/filmPage/persons';
import { FilmInfoBottom } from '../../components/filmPage/filmInfoBottom';

import style from './filmPage.module.scss';
export const FilmPage = () => {
  return (
    <div className={style.filmPrview}>
      <MainFilmInfo />
      <RatingDesc />
      <SimilarFilm />
      <PersonsMain />
      <FilmInfoBottom />
    </div>
  );
};
