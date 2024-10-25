import React from 'react';
import { useParams } from 'react-router-dom';

import { useSimilarFilms } from '../../../store/similarFilms';
import { RecomendsMovie } from '../../recomends';

import style from './similar.module.scss';
export const SimilarFilm = () => {
  const fetchSimilar = useSimilarFilms((state) => state.fetchItems);
  const similarMovies = useSimilarFilms((state) => state.similarMovies);

  const { id } = useParams();

  React.useEffect(() => {
    try {
      fetchSimilar(id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const similarFilmData = { title: 'Новинки', height: 'imageBorderLow', filmsData: similarMovies };
  return (
    <div className={style.main}>
      <RecomendsMovie {...similarFilmData} />
    </div>
  );
};
