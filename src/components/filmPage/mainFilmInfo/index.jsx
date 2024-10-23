import React from 'react';

import style from './mainFilmInfo.module.scss';
import { FilmInfo } from '../../filmInfo';
export const MainFilmInfo = () => {
  return (
    <section>
      <div className={style.filmName}>Симба</div>
      {/* <FilmInfo item={}/> */}
      <div className={style.shortDesc}>Приключение юного кота Симбы по просторам Африки</div>
      <div className={style.persons}>
        <div className={style.dirctor}>Женя Головин</div>
        <div className={style.actors}>Тарас Вульва, Борис Кепарис, Ножка Буша</div>
      </div>
      <div className={style.price}></div>
      <div className={style.btns}>
        <button className={style.buttonBuy}>Оформить подписку</button>
        <button>Трейлер</button>
        <button>*закладка</button>
      </div>
    </section>
  );
};
