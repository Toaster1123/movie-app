import React from 'react';

import { useMovieItem } from '../../../../store/movieItem';
import style from './description.module.scss';

export const FilmDescription = () => {
  const movieItem = useMovieItem((state) => state.movieItem);

  return (
    <article className={style.text}>
      <div>{movieItem.description}</div>
      {/* <div className={style.showMore}>Показать полностью</div> */}
    </article>
  );
};
