import React from 'react';

import style from './rating.module.scss';
export const Rating = () => {
  return (
    <div className={style.main}>
      <h2>Поставьте оценку</h2>
      <h4>Оценки улучшают ваши рекомендаций</h4>
      <div className={style.stars}>
        {[...Array(10)].map((_, id) => {
          return <div className={style.starBlock}>{id + 1}</div>;
        })}
      </div>
    </div>
  );
};
