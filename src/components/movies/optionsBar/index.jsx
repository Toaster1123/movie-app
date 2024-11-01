import React from 'react';
import { Selector } from './selector';
import style from './options.module.scss';
export const OptionsBar = () => {
  const barData = {
    Рекомендуемые: ['Рекомендуемые', 'По рейтингу', 'По дате выхода'],
    Жанры: [
      'Боевик',
      'Комедия',
      'Драма',
      'Фантастика',
      'Ужасы',
      'Приключения',
      'Мультфильм',
      'Детектив',
      'Триллер',
      'Мелодрама',
      'Исторический',
      'Вестерн',
      'Семейный',
      'Спорт',
      'Музыкальный',
      'Фильм-нуар',
    ],
    Страны: ['Россия', 'США'],
    Годы: [
      '2024',
      '2023',
      '2022',
      '2021',
      '2020',
      '2010-2019',
      '2000-2009',
      '1990-1999',
      '2080-2089',
      'до 1980',
    ],
    Новое: [],
    'Высокий рейтинг': [],
  };
  return (
    <div className={style.main}>
      {Object.entries(barData).map((item, id) => {
        return <Selector {...item} id={id} key={id} />;
      })}
      <div className={style.resetBtn}>
        <p>Сбросить</p>
      </div>
    </div>
  );
};
