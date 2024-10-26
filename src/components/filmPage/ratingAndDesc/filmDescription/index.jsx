import React from 'react';

import { useMovieItem } from '../../../../store/movieItem';
import style from './description.module.scss';

export const FilmDescription = () => {
  const [open, setOpen] = React.useState(false);
  const movieItem = useMovieItem((state) => state.movieItem);
  const text =
    'Реакт - приложение для просмотра фильмов предоставляет пользователю удобный интерфейс для поиска и изучения информации о различных кинолентах. Система использует React Router для навигации между различными страницами сайта. Axios применяется для загрузки данных о фильмах из внешних источников. Zustand используется для управления состоянием приложения, обеспечивая эффективное хранение и обновление данных. SASS применяется для создания кастомных стилей, что позволяет гибко настраивать внешний вид интерфейса. Swiper библиотека используется для создания слайдеров, которые помогают отображать информацию в привлекательном и удобном виде. Lucide-React предоставляет широкий набор иконок, используемых в пользовательском интерфейсе. Реакт - приложение для просмотра фильмов предоставляет пользователю удобный интерфейс для поиска и изучения информации о различных кинолентах. Система использует React Router для навигации между различными страницами сайта. Axios применяется для загрузки данных о фильмах из внешних источников. Zustand используется для управления состоянием приложения, обеспечивая эффективное хранение и обновление данных. SASS применяется для создания кастомных стилей, что позволяет гибко настраивать внешний вид интерфейса. Swiper библиотека используется для создания слайдеров, которые помогают отображать информацию в привлекательном и удобном виде. Lucide-React предоставляет широкий набор иконок, используемых в пользовательском интерфейсе.';
  return (
    <article className={style.text}>
      <div>{!open ? text.substring(0, 450) + '...' : text}</div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={style.showMore}>
        {open ? 'Свернуть описание ' : 'Подробное описание'}
      </div>
    </article>
  );
};
