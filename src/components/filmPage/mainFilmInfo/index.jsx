import React from 'react';
import { Bookmark } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { useMovieItem } from '../../../store/movieItem';
import { FilmInfo } from '../../filmInfo';

import style from './mainFilmInfo.module.scss';
export const MainFilmInfo = () => {
  const { id } = useParams();
  const fetchData = useMovieItem((state) => state.fetchItems);
  const movieItem = useMovieItem((state) => state.movieItem);
  const loading = useMovieItem((state) => state.loading);

  React.useEffect(() => {
    try {
      fetchData('SMF2M17-D074329-QBAG7RZ-MBRR9QB', id);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(movieItem);

  return (
    <>
      {loading ? (
        ''
      ) : (
        <div className={style.filmImage}>
          <div className={style.img}>
            <div className={style.gradientLeft}></div>
            <div className={style.gradientBottom}></div>
            <img src={movieItem.backdrop.url} />
          </div>
          <div className={style.mainInfo}>
            <div className={style.filmName}>{movieItem.name}</div>
            <FilmInfo item={movieItem} size={'textBigSize'} />
            <div className={style.shortDesc}>{movieItem.shortDescription}</div>
            <div className={style.persons}>
              <div className={style.members}>
                <div className={style.role}>Режисер: </div>
                <div className={style.names}>Женя Головин</div>
              </div>
              <div className={style.members}>
                <div className={style.role}>Актёры: </div>
                <div className={style.names}>Надежда Аникеева</div>
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
        </div>
      )}
    </>
  );
};
