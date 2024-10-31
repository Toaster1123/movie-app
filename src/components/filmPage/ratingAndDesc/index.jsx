import React from 'react';
import ContentLoader from 'react-content-loader';

import { FilmDescription } from './filmDescription';
import { Rating } from './ratingFilm';
import { useMovieItem } from '../../../store/requests/movieItem';

import style from './rd.module.scss';
export const RatingDesc = () => {
  const loading = useMovieItem((state) => state.loading);

  return (
    <div className={style.main}>
      <div className={style.name}>
        {loading ? (
          <ContentLoader
            speed={2.3}
            width={200}
            height={40}
            backgroundColor="#111"
            foregroundColor="#4d4d4d">
            <rect x="0" y="0" rx="16" ry="16" width="200" height="40" />
          </ContentLoader>
        ) : (
          'Описание'
        )}
      </div>
      <div className={style.content}>
        <FilmDescription />
        <Rating />
      </div>
    </div>
  );
};
