import React from 'react';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

import style from './sliderItem.module.scss';

import { FilmInfo } from '../../filmInfo';

export const SliderItem = ({ item, height, loading }) => {
  const [isHover, setIsHover] = React.useState(false);
  const debonse = debounce((bol) => {
    setIsHover(bol);
  }, 500);
  const onHover = () => {
    debonse(true);
  };
  const onOutHover = () => {
    setIsHover(false);
    debonse.cancel();
  };
  return (
    <div
      onMouseOut={onOutHover}
      onMouseLeave={onOutHover}
      className={`${style.main} ${isHover ? style.main_hover : ''} `}>
      {loading ? (
        <ContentLoader
          speed={2.3}
          width={325}
          height={183}
          backgroundColor="#111"
          foregroundColor="#4d4d4d">
          <rect x="0" y="0" rx="16" ry="16" width="325" height="183" />
        </ContentLoader>
      ) : (
        <Link to={`/film/${item.id}`}>
          <div className={style[height]}>
            <img
              onMouseOver={onHover}
              className={style.image}
              src={
                height == 'imageBorderLow'
                  ? item.backdrop?.url || item.backdrop?.preveiwUrl
                  : item.poster?.url || item.poster?.preveiwUrl
              }
              alt="заставка фильма"
            />
          </div>
          <div className={style.textBlock}>
            <div className={style.filmName}>{item.name}</div>
            <FilmInfo item={item} />
            <div className={style.buttons}>
              <div className={style.btnMore}>Подробнее</div>
              <div className={style.btnSave}></div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
