import React from 'react';

import { MainFilmInfo } from '../../components/filmPage/mainFilmInfo';

import style from './filmPage.module.scss';
export const FilmPage = () => {
  return (
    <div className={style.filmPrview}>
      <img src="https://i-a.d-cd.net/xmVD6WbpR_2x4R4cIK1AXXmm-Fc-1920.jpg" />
      <MainFilmInfo />
    </div>
  );
};
