import style from './partic.module.scss';
import { usePersonItem } from '../../../store//requests/personId';
import { Link } from 'react-router-dom';

export const Participation = () => {
  const personData = usePersonItem((state) => state.person);
  return (
    <div className={style.main}>
      <div className={style.title}>Участвовал в фильмах:</div>
      <div className={style.info}>
        {personData.movies.map((item, id) => {
          return (
            <Link key={id} to={`/film/${item.id}`}>
              <div key={id} className={style.text}>
                {item.name}
                {personData.movies.length - 1 != id && ', '}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
