import React from 'react';
import { Search, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { isOpened } from '../../store/openUser';

import style from './header.module.scss';

const genres = [
  ['/', 'Главная'],
  ['/movies', 'Фильмы'],
  ['/p', 'Сериалы'],
  ['/g', 'Мультфильмы'],
];
export const Header = () => {
  const setOpened = isOpened((state) => state.setOpened);
  const [currentGenres, setCurrentGenres] = React.useState('/');
  const location = useLocation();
  console.log(currentGenres);
  console.log(location.pathname);

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
                <Link key={id} to={item[0]}>
                  <div
                    onClick={() => {
                      setCurrentGenres(item[0]);
                    }}
                    className={location.pathname == item[0] ? style.active : ''}
                    key={id}>
                    {item[1]}
                  </div>
                </Link>
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
