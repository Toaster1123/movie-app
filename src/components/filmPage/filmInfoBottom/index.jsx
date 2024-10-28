import ContentLoader from 'react-content-loader';
import style from './bottomInfo.module.scss';
import { useMovieItem } from '../../../store/movieItem';
export const FilmInfoBottom = () => {
  const filmData = useMovieItem((state) => state.movieItem);
  const loading = useMovieItem((state) => state.loading);
  console.log(filmData);
  console.log(loading);
  let data = {};
  if (!loading) {
    data = {
      Информация: {
        Страна: 'ds',
        Жанр: 'Комедия, Драмы',
        'Оригинальное название ': filmData.name,
        'Примьера в мире': filmData.premiere.world,
        'Примьера в России': filmData.premiere.russia,
      },
      'Съёмочная группа': {
        режисёр: 'Александр Хан',
        Актёры: 'Орландо Уэллс, Доминик Пинон, Чулпан Хаматова',
        Сценарист: 'Александр Малер',
      },
      'Звук и субтитры ': {
        Аудиодорожки: 'Русский',
        Качество: 'SD',
      },
    };
  }
  return (
    <div className={style.main}>
      {loading ? (
        <ContentLoader
          speed={2.3}
          width={'100%'}
          height={400}
          backgroundColor="#111"
          foregroundColor="#4d4d4d">
          <rect x="0" y="0" rx="16" ry="16" width="100%" height={400} />
        </ContentLoader>
      ) : (
        Object.entries(data).map((item, id) => {
          return (
            <div key={id} className={style.infoBlock}>
              <div className={style.title}>{item[0]}</div>
              {Object.entries(item[1]).map((item, id) => {
                return (
                  <div key={id} className={style.info}>
                    <div className={style.itemTitle}>{item[0]}</div>
                    <div className={style.itemParams}>{item[1]}</div>
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};
