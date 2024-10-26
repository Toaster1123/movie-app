import React from 'react';

import { useMovieItem } from '../../../../store/movieItem';
import style from './description.module.scss';

export const FilmDescription = () => {
  const [open, setOpen] = React.useState(false);
  const movieItem = useMovieItem((state) => state.movieItem);
  const text = movieItem.description;
  console.log(text);
  const marks = () => {
    if (text?.length >= 450) {
      return '...';
    }
    return '';
  };
  return (
    <article className={style.text}>
      <div>{!open ? text?.substring(0, 450) + marks() : text}</div>
      {text?.length >= 450 && (
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={style.showMore}>
          {open ? 'Свернуть описание ' : 'Подробное описание'}
        </div>
      )}
    </article>
  );
};
