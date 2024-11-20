import style from './options.module.scss';
import { openSelectorBar } from '../../../store/openSelectorBar';
import { CountrySelector } from './oprions/contries';
import { GenreSelector } from './oprions/genres';
import { YearSelector } from './oprions/years';
import { Button } from './oprions/button';
import { urlParams } from '../../../store/urlParams';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useMovieWithParams } from '../../../store/requests/movie-with-params';

import qs from 'qs';

export const OptionsBar = () => {
  const navigate = useNavigate();

  const { paramCount, clearParamCount } = openSelectorBar((state) => state);
  const { genre, country, year, hightRating, setGenre, setCountry, setYear, setHightRating } =
    urlParams((state) => state);
  const fetchItems = useMovieWithParams((state) => state.fetchItems);

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
    if (paramCount > 0) {
      navigate(`?${qs.stringify(paramObj)}`);
      fetchItems(qs.parse(window.location.search.substring(1)));
    }
  }, [genre, country, year, hightRating]);

  return (
    <div className={style.main}>
      <GenreSelector />
      <CountrySelector />
      <YearSelector />
      <Button />
      <div className={style.resetBtn}>
        {paramCount > 0 && <p onClick={() => clearParamCount()}>Сбросить</p>}
      </div>
    </div>
  );
};
