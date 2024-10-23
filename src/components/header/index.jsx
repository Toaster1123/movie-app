import React from 'react';
import style from './header.module.scss';
import { Search, CircleUserRound } from 'lucide-react';

const genres = ['Главная', 'Фильмы', 'Сериалы', 'Мультфильмы'];
export const Header = () => {
  const [currentGenres, setCurrentGenres] = React.useState(0);
  return (
    <header>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <img src="/./img/logo.png" alt="Логотип" height={50} width={50} />
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
          <div className={style.user}>
            <CircleUserRound className={style.user} />
            <span>Войти</span>
          </div>
        </div>
      </div>
    </header>
  );
};
