import React from 'react';
import { Search, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { isOpened } from '../../store/openUser';

import style from './header.module.scss';

const genres = [
  ['/', 'Главная'],
  ['/movies', 'Фильмы'],
  ['/series', 'Сериалы'],
  ['/cartoons', 'Мультфильмы'],
];
export const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = React.useState(false);
  const [prevPos, setPrevPos] = React.useState(0);
  const setOpened = isOpened((state) => state.setOpened);
  const location = useLocation();
  const scroll = () => {
    const scrollPos = window.scrollY;
    console.log('scrollPos', scrollPos);
    console.log('prevPOs', prevPos);
    if (scrollPos - prevPos > 0) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
    // if (scrollPos > 100 && !isScrolledDown) {
    //   setIsScrolledDown(true);
    // } else if (scrollPos <= 200 && isScrolledDown) {
    //   setIsScrolledDown(false);
    // }
    setPrevPos(scrollPos);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [isScrolledDown]);
  return (
    <header className={`${isScrolledDown ? style.header_active : ''}`}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Link to="/">
            <img src="/./img/logo.png" alt="Логотип" height={50} width={50} />
          </Link>
          <div className={style.genres}>
            {genres.map((item, id) => {
              return (
                <Link key={id} to={item[0]}>
                  <div className={location.pathname == item[0] ? style.active : ''} key={id}>
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
