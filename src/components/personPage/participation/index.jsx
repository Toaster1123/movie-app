import style from './partic.module.scss';
import { usePersonItem } from '../../../store//requests/personId';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Participation = () => {
  const [maxItems, setMaxItems] = useState(100);

  const personData = usePersonItem((state) => state.person);
  return (
    <div className={style.main}>
      <div className={style.title}>Участвовал в фильмах:</div>
      <div className={style.info}>
        {personData.movies.map((item, id) => {
          if (id >= maxItems || item.name == null) {
            return;
          }
          return (
            <Link key={id} to={`/film/${item.id}`}>
              <div key={id} className={style.text}>
                {item.name}
                {personData.movies.length - 1 != id && ', '}
              </div>
            </Link>
          );
        })}
        {personData.movies.length > 100 && maxItems != personData.movies.length && (
          <div
            onClick={() => {
              setMaxItems(personData.movies.length);
            }}
            className={style.showAll}>
            Показать все
          </div>
        )}
      </div>
    </div>
  );
};
