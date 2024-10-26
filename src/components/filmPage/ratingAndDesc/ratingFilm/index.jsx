import React from 'react';

import { Star } from 'lucide-react';

import style from './rating.module.scss';
export const Rating = () => {
  return (
    <div className={style.main}>
      <h2>Поставьте оценку</h2>
      <h3>Оценки улучшают ваши рекомендаций</h3>
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
    </div>
  );
};
// 3020
