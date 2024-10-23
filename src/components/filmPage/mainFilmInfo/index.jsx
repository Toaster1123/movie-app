import React from 'react';

import { Bookmark } from 'lucide-react';

import style from './mainFilmInfo.module.scss';
import { FilmInfo } from '../../filmInfo';
export const MainFilmInfo = () => {
  return (
    <section className={style.filmImage}>
      <div className={style.img}>
        <div className={style.gradientLeft}></div>
        <div className={style.gradientBottom}></div>
        <img src="https://i.pinimg.com/originals/c4/67/48/c467487c02cbd04cc5e684159b02e1fb.jpg" />
      </div>
      <div className={style.mainInfo}>
        <div className={style.filmName}>Симба</div>
        {/* <FilmInfo item={}/> */}
        <div className={style.shortDesc}>
          Приключение юного кота Симбы по просторам Африки.В начале фильма его отца съедают, а в
          конце фильма он победит. Эталонный боевик.
        </div>
        <div className={style.persons}>
          <div className={style.members}>
            <div className={style.role}>Режисер: </div>
            <div className={style.names}>Женя Головин</div>
          </div>
          <div className={style.members}>
            <div className={style.role}>Актёры: </div>
            <div className={style.names}>Тарас Вульва, Борис Кепарис, Ножка Буша</div>
          </div>
        </div>
        <div className={style.price}>
          <div className={style.advYellowPrice}>Месяц за 1 ₽, затем месяц за 99 ₽</div>
          <div className={style.advPrice}>
            <div>дальше — 199 ₽⁠/⁠месяц в подписке</div>
            <img src="/img/prime.png" alt="" />
          </div>
        </div>
        <div className={style.btns}>
          <button className={style.buttonBuy}>Оформить подписку</button>
          <button className={style.trailer}>Трейлер</button>
          <button className={style.trailer}>
            <Bookmark strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
};
