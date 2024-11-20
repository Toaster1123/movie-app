import React from 'react';
import { Previev } from '../../components/movies/previev';
import { OptionsBar } from '../../components/movies/optionsBar';
import style from './movies.module.scss';
import { RecomendsMovie } from '../../components/recomends';

import { useMovieBestFilms } from '../../store/requests/movieRecomendBest.js';
import { useMovieNews } from '../../store/requests/movieRecNews.js';
import { openSelectorBar } from '../../store/openSelectorBar.js';
import { FilmArray } from '../../components/array-film-with-params/index.jsx';

export const Movies = () => {
  const { paramCount } = openSelectorBar((state) => state);
  const fetchReqBest = useMovieBestFilms((state) => state.fetchItems);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const fetchReqNews = useMovieNews((state) => state.fetchItems);
  const NewFilms = useMovieNews((state) => state.data);

  React.useEffect(() => {
    if (paramCount == 0) {
      fetchReqNews();
      fetchReqBest();
    }
  }, []);
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
        <Previev />
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
