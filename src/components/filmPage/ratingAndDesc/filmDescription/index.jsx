import React from 'react';
import ContentLoader from 'react-content-loader';

import { useMovieItem } from '../../../../store/requests/movieItem';
import style from './description.module.scss';

export const FilmDescription = () => {
  const movieItem = useMovieItem((state) => state.movieItem);
  const loading = useMovieItem((state) => state.loading);

  const [open, setOpen] = React.useState(false);
  const text = movieItem.description != '' ? movieItem.description : movieItem.shortDescription;
  const marks = () => {
    if (text?.length >= 430) {
      return '...';
    }
    return '';
  };

  return (
    <article className={style.text}>
      {loading ? (
        <ContentLoader
          speed={2.3}
          width={'100%'}
          height={183}
          backgroundColor="#111"
          foregroundColor="#4d4d4d">
          <rect x="0" y="0" rx="16" ry="16" width="48vw" height="149" />
        </ContentLoader>
      ) : (
        <>
          <div>{!open ? text?.substring(0, 430) + marks() : text}</div>
          {text?.length >= 430 && (
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className={style.showMore}>
              {open ? 'Свернуть описание ' : 'Подробное описание'}
            </div>
          )}
        </>
      )}
    </article>
  );
};
