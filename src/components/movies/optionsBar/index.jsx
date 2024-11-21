import React from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import style from './options.module.scss';
import { openSelectorBar } from '../../../store/openSelectorBar';
import { CountrySelector } from './oprions/contries';
import { GenreSelector } from './oprions/genres';
import { YearSelector } from './oprions/years';
import { Button } from './oprions/button';
import { urlParams } from '../../../store/urlParams';

import { useMovieWithParams } from '../../../store/requests/movie-with-params';
import { useMovieNews } from '../../../store/requests/movieRecNews';
import { useMovieBestFilms } from '../../../store/requests/movieRecomendBest';

export const OptionsBar = () => {
  const fetchReqBest = useMovieBestFilms((state) => state.fetchItems);
  const fetchReqNews = useMovieNews((state) => state.fetchItems);

  const navigate = useNavigate();
  const [isMounted, setIsMounted] = React.useState(false);

  const { paramCount, clearParamCount } = openSelectorBar((state) => state);
  const { genre, country, year, hightRating, setGenre, setCountry, setYear, setHightRating } =
    urlParams((state) => state);
  const { fetchItems, loading, movie } = useMovieWithParams((state) => state);
  const paramObj = {
    'genres.name': genre,
    'countries.name': country,
    year: year,
    'rating.imdb': hightRating,
  };
  React.useEffect(() => {
    const urlParams = qs.parse(window.location.search.substring(1));
    urlParams['genres.name'] != undefined && setGenre(urlParams['genres.name']);
    urlParams['countries.name'] != undefined && setCountry(urlParams['countries.name']);
    urlParams['year'] != undefined && setYear(urlParams['year']);
    urlParams['rating.imdb'] != undefined && setHightRating(urlParams['rating.imdb']);
  }, []);
  React.useEffect(() => {
    if (isMounted) {
      if (paramCount > 0) {
        navigate(`?${qs.stringify(paramObj)}`);
        const urlParams = window.location.search.substring(1);
        fetchItems(urlParams);
      } else {
        fetchReqNews();
        fetchReqBest();
        navigate(``);
      }
    }
    setIsMounted(true);
  }, [genre, country, year, hightRating, isMounted]);

  return (
    <div className={style.main}>
      <GenreSelector loading={loading} />
      <CountrySelector loading={loading} />
      <YearSelector loading={loading} />
      <Button loading={loading} />
      <button disabled={loading} className={style.resetBtn}>
        {paramCount > 0 && <p onClick={() => clearParamCount()}>Сбросить</p>}
      </button>
    </div>
  );
};
