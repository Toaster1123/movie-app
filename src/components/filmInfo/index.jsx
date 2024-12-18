import chooseColorRating from '../../lib/chooseColorRating';
import { setMovieLength } from '../../lib/setMovieLength';

import style from './filmInfo.module.scss';

export const FilmInfo = ({ item, size }) => {
  const rand = () => {
    return ((Math.random() * (100 - 1) + 1) / 10).toFixed(1);
  };
  let rating = rand();
  return (
    <div className={`${style.text} ${size && style.textBigSize}`}>
      <div
        className={`${style.rating} ${
          style[chooseColorRating(item.rating.kp == 0 ? rating : item.rating.kp.toFixed(1))]
        } ${size && style.ratingBigSize}`}>
        {item.rating.kp == 0 ? rating : item.rating.kp.toFixed(1)}
      </div>
      <div className={style.year}>{item.year}</div>
      <div className={style.genres}>{item.genres != null && item.genres[0].name}</div>
      <div className={style.length}>{setMovieLength(item.movieLength || item.seriesLength)}</div>
      <div className={style.age}>{item.ageRating != null && item.ageRating + '+'} </div>
    </div>
  );
};
