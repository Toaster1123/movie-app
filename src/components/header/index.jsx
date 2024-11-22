import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { isOpened } from '../../store/openUser';

import style from './header.module.scss';
import { SearchBar } from './search';

const genres = [
  ['/', 'Главная'],
  ['/movies', 'Фильмы'],
  ['/series', 'Сериалы'],
  ['/cartoons', 'Мультфильмы'],
];
export const Header = () => {
  const location = useLocation();
  const setOpened = isOpened((state) => state.setOpened);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos || (currentScrollPos >= 0 && currentScrollPos <= 100)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${!visible ? style.header_active : ''}`}>
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
          <div className={style.searchBar}>
            <SearchBar />
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
