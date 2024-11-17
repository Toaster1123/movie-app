import React from 'react';
import { Bookmark } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { useMovieItem } from '../../../store/requests/movieItem';
import { FilmInfo } from '../../filmInfo';

import style from './mainFilmInfo.module.scss';

export const MainFilmInfo = () => {
  const { id } = useParams();
  const fetchData = useMovieItem((state) => state.fetchItems);
  const movieItem = useMovieItem((state) => state.movieItem);
  const loading = useMovieItem((state) => state.loading);

  React.useEffect(() => {
    try {
      fetchData(id);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <div className={style.filmImage}>
          <ContentLoader
            className={style.mainInfo}
            speed={2.3}
            width={768}
            height={417}
            backgroundColor="#111"
            foregroundColor="#4d4d4d">
            <rect x="0" y="0" rx="12" ry="12" width="600" height="47" />
            <rect x="0" y="55" rx="12" ry="12" width="400" height="25" />
            <rect x="0" y="93" rx="12" ry="12" width="700" height="50" />
            <rect x="0" y="158" rx="12" ry="12" width="400" height="50" />
            <rect x="0" y="226" rx="12" ry="12" width="600" height="60" />
            <rect x="0" y="320" rx="12" ry="12" width="600" height="50" />
          </ContentLoader>
        </div>
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
                <div className={style.names}>
                  <span className={style.name}>
                    {movieItem?.persons[movieItem.persons.length - 1].name}
                  </span>
                </div>
              </div>
              {movieItem.type !== 'cartoon' && (
                <div className={style.members}>
                  <div className={style.role}>Актёры: </div>
                  <div className={style.names}>
                    {movieItem?.persons?.map((item, id) => {
                      if (id >= 3) {
                        return;
                      }
                      return (
                        <span key={id} className={style.name}>
                          {item.name == null ? item.enName : item.name}
                          {id == 2 ? '' : ','}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
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
