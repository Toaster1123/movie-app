import React from 'react';
import style from './adv.module.scss';
export const AdvMain = () => {
  return (
    <div className={style.Main}>
      <img src="" />
      <div className={style.TextBlock}>
        <div className={style.subscrube}>
          <div className={style.subText}>Подписка</div>
          <div className={style.subimg}>Прайм</div>
        </div>
        <div className={style.advBigText}>Смотрите мультики, спорт и кино</div>
        <div className={style.advYellowPrice}>Месяц за 1 ₽, затем месяц за 99 ₽</div>
        <div className={style.advPrice}>дальше — 199 ₽⁠/⁠месяц</div>
        <div className={style.buttons}>
          <button className={style.buttonBuy}>Оформить подписку</button>
          <button className={style.buttonMore}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};