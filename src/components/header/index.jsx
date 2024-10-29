import React from 'react';
import { Search, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import { isOpened } from '../../store/openUser';

import style from './header.module.scss';

const genres = ['Главная', 'Фильмы', 'Сериалы', 'Мультфильмы'];
export const Header = () => {
  const opened = isOpened((state) => state.opened);
  const setOpened = isOpened((state) => state.setOpened);

  console.log(opened);
  const [currentGenres, setCurrentGenres] = React.useState(0);
  return (
    <header>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Link to="/">
            <img src="/./img/logo.png" alt="Логотип" height={50} width={50} />
          </Link>
          <div className={style.genres}>
            {genres.map((item, id) => {
              return (
                <div
                  onClick={() => {
                    setCurrentGenres(id);
                  }}
                  className={currentGenres == id ? style.active : ''}
                  key={id}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.headerRight}>
          <div>
            <Search className={style.search} />
          </div>
          <div
            onClick={() => {
              setOpened(true);
            }}
            className={style.user}>
            <CircleUserRound />
            <span>Войти</span>
          </div>
        </div>
      </div>
    </header>
  );
};
