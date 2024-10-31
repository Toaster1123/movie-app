import React from 'react';
import ContentLoader from 'react-content-loader';
import { Star } from 'lucide-react';

import { useMovieItem } from '../../../../store/requests/movieItem';
import style from './rating.module.scss';

export const Rating = () => {
  const loading = useMovieItem((state) => state.loading);

  return (
    <div className={style.main}>
      {loading ? (
        <ContentLoader
          speed={2.3}
          width={'37vw'}
          height={149}
          backgroundColor="#111"
          foregroundColor="#4d4d4d">
          <rect x="0" y="0" rx="16" ry="16" width="37vw" height="149" />
        </ContentLoader>
      ) : (
        <>
          <h2>Поставьте оценку</h2>
          <h3>Оценки улучшают ваши рекомендации</h3>
          <ul className={style.stars}>
            {[...Array(10)].map((_, id) => {
              return (
                <li key={id} className={style.starBlock}>
                  <Star strokeWidth={0} className={`${style.svg}`} />
                  <div className={style.count}>{id + 1}</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
// 3020
