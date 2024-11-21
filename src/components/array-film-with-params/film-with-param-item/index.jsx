import React from 'react';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';
import style from './film-card.module.scss';
import debounce from 'lodash.debounce';

import { FilmInfo } from '../../filmInfo';

export const FilmWithParamItem = ({ item, loading }) => {
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
          <img
            onMouseOver={onHover}
            className={style.image}
            src={item.backdrop?.url || item.backdrop?.preveiwUrl}
            alt="заставка фильма"
          />
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
