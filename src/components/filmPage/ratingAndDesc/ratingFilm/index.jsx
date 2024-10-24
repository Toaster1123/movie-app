import React from 'react';

import { Star } from 'lucide-react';

import style from './rating.module.scss';
export const Rating = () => {
  return (
    <div className={style.main}>
      <h2>Поставьте оценку</h2>
      <h3>Оценки улучшают ваши рекомендаций</h3>
      <div className={style.stars}>
        {[...Array(10)].map((_, id) => {
          return (
            <div key={id} className={style.starBlock}>
              <Star fill="#8b88927c" strokeWidth={0} className={style.svg} />
              <div className={`${style.count} ${style.countActive}`}>{id + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// 3020
