import React from 'react';
import { Previev } from '../../components/movies/previev/index.jsx';
import { OptionsBar } from '../../components/movies/optionsBar/index.jsx';
import style from './movies.module.scss';
import { RecomendsMovie } from '../../components/recomends/index.jsx';

import { useMovieBestFilms } from '../../store/requests/movieRecomendBest.js';
import { useMovieNews } from '../../store/requests/movieRecNews.js';
import { openSelectorBar } from '../../store/openSelectorBar.js';
import { FilmArray } from '../../components/array-film-with-params/index.jsx';
const text =
  'Онлайн-кинотеатр Okke собрал для своих подписчиков коллекцию из тысяч фильмов самых разных жанров и направлений. Мы позаботились о том, чтобы для каждого из наших зрителей был возможен просмотр любимого фильма в отличном качестве, с живым объемным звуком. Зрелищные блокбастеры, лучшие комедии, остросюжетные триллеры, космическая фантастика, нестареющая классика и фильмы множества других жанров вы найдете в нашем каталоге. Начиная с немой комедии «Огни большого города» мастера Чарли Чаплина до эпического научно-фантастического фильма «Прибытие» Дени Вильнёва, с его невероятными визуальными эффектами. Ставший классикой фильм «Пятый элемент» Люка Бессонна и современный комедийный экшен с Джеки Чаном — «Кунг-фу  жеребец». Зрелищный боевик «Джон Уик 4» и семейная комедия «Чебурашка» ждут вас в нашем онлайн-кинотеатре. Приятного просмотра!';

export const Movies = () => {
  const { paramCount } = openSelectorBar((state) => state);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const NewFilms = useMovieNews((state) => state.data);

  React.useEffect(() => {
    if (paramCount == 0) {
    }
  }, [paramCount]);
  const renderSliderParams = [
    {
      title: 'Рекомендации',
      height: 'imageBorderLow',
      filmsData: NewFilms,
      loading: useMovieNews((state) => state.loading),
    },
    {
      title: 'Фантастика',
      height: 'imageBorderLow',
      filmsData: bestFilms,
      loading: useMovieBestFilms((state) => state.loading),
    },
  ];

  return (
    <main>
      <div className={style.top_elements}>
        <Previev title={'Фильмы'} text={text} />
        <OptionsBar />
      </div>
      {paramCount == 0 ? (
        renderSliderParams.map((item) => {
          return <RecomendsMovie key={item.title} {...item} loading={item.loading} />;
        })
      ) : (
        <FilmArray />
      )}
    </main>
  );
};
