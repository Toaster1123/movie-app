import React from 'react';
import { Previev } from '../../components/movies/previev';
import { OptionsBar } from '../../components/movies/optionsBar';
import style from './movies.module.scss';
import { RecomendsMovie } from '../../components/recomends';

import { useMovieWithParams } from '../../store/requests/movie-with-params.js';
import { useMovieBestFilms } from '../../store/requests/movieRecomendBest.js';
import { useMovieNews } from '../../store/requests/movieRecNews.js';

import qs from 'qs';
import { useNavigate, useParams } from 'react-router-dom';
import { urlParams } from '../../store/urlParams.js';

export const Movies = () => {
  const isMounted = React.useRef(false);
  const params = useParams();
  console.log('params', params);
  const fetchReqBest = useMovieBestFilms((state) => state.fetchItems);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const fetchReqNews = useMovieNews((state) => state.fetchItems);
  const NewFilms = useMovieNews((state) => state.data);
  const fetchMoviesByParams = useMovieWithParams((state) => state.fetchItems);
  const moviesByParams = useMovieWithParams((state) => state.movie);
  const navigate = useNavigate();
  const { genre, country, year, hightRating, setUrlFiltres } = urlParams((state) => state);
  console.log(hightRating);
  const queryParams = {};
  if (genre != '') {
    queryParams.genre = genre;
  }
  if (country != '') {
    queryParams.country = country;
  }
  if (year != '') {
    queryParams.year = year;
  }

  if (hightRating != '') {
    queryParams['rating.imdb'] = hightRating;
  }
  React.useEffect(() => {
    const queryString = qs.parse(window.location.search.substring(1));
    console.log(queryString);
  }, [genre, country, year, hightRating]);

  React.useEffect(() => {
    // fetchReqNews();
    // fetchReqBest();
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

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(queryParams);
      navigate(`?${queryString}`);
      if (Object.keys(queryString).length > 0) {
        try {
          // fetchMoviesByParams(queryString);
        } catch (error) {
          console.error('Error in fetchItems:', error);
        }
      }
    }
    isMounted.current = true;
  }, [genre, country, year, hightRating]);
  return (
    <main>
      <Previev />
      <OptionsBar />
      {renderSliderParams.map((item) => {
        return <RecomendsMovie key={item.title} {...item} loading={item.loading} />;
      })}
    </main>
  );
};
