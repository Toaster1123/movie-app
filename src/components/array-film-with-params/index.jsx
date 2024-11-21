import React from 'react';
import { useMovieWithParams } from '../../store/requests/movie-with-params';
import style from './film-with-params.module.scss';
import { FilmWithParamItem } from './film-with-param-item';

export const FilmArray = () => {
  const { movie, loading } = useMovieWithParams((state) => state);
  return (
    <div className={style.main}>
      {(loading ? [...Array(10)] : movie).map((item, id) => (
        <FilmWithParamItem key={id} item={item} loading={loading} />
      ))}
    </div>
  );
};
