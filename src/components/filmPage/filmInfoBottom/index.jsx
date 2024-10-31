import ContentLoader from 'react-content-loader';

import style from './bottomInfo.module.scss';
import { useMovieItem } from '../../../store/requests/movieItem';

import { formatDate } from '../../../lib/formatDate';

export const FilmInfoBottom = () => {
  const filmData = useMovieItem((state) => state.movieItem);
  const loading = useMovieItem((state) => state.loading);

  const writeDate = (param) => {
    const writeData = [];
    filmData?.persons.map((item) => {
      return item.enProfession === param && writeData.push(item.name != null ? item.name : '');
    });
    const lastItem = writeData[writeData.length - 1];
    return lastItem ? lastItem.substring(0, lastItem.length - 2) : '';
  };

  let data = {};
  if (!loading) {
    data = {
      Информация: {
        Страна: filmData.countries.map((item, id) => {
          return item.name + (id == filmData.countries.length - 1 ? '' : ', ');
        }),
        Жанр: filmData.genres.map((item, id) => {
          return item.name + (id == filmData.genres.length - 1 ? '' : ', ');
        }),
        'Оригинальное название ': filmData.alternativeName
          ? filmData.alternativeName
          : filmData.name,
        'Примьера в мире': formatDate(filmData.premiere.world),
        'Примьера в России': formatDate(filmData.premiere.russia),
      },
      'Съёмочная группа': {
        Режисёры: writeDate('director'),
        Актёры: writeDate('actor'),
        Продюсеры: writeDate('producer'),
        Сценаристы: writeDate('writer'),
        Оператор: writeDate('operator'),
      },
      'Звук и субтитры ': {
        Аудиодорожки: 'Русский',
        Субтитры: 'Русский, Английский',
        Качество: filmData.lists.map((item, id) => {
          return item.toUpperCase() + (id == filmData.lists.length - 1 ? '' : ', ');
        }),
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
                if (item[1] == undefined || item[1] == '') {
                  return;
                }
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
