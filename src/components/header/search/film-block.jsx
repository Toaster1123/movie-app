import React from 'react';
import { Link } from 'react-router-dom';
import style from './search.module.scss';
export const FilmBlock = ({ id, url, filmName }) => {
  return (
    <div className={style.filmBlock}>
      <Link to={`film/${id}`}>
        <div className={style.imageBlock}>
          <img height={70} src={url} alt="Картинка" />
        </div>
        <div>{filmName}</div>
      </Link>
    </div>
  );
};
