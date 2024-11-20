import React from 'react';
import { useMovieWithParams } from '../../store/requests/movie-with-params';
import style from './film-with-params.module.scss';
import { FilmWithParamItem } from './film-with-param-item';

export const FilmArray = () => {
  const { movie, loading } = useMovieWithParams((state) => state);
  console.log(movie);
  return (
    <div className={style.main}>
      {movie.map((item) => (
        <FilmWithParamItem key={item.id} item={item} loading={loading} />
      ))}
    </div>
  );
};
