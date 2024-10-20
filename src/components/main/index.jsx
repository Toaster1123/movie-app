import React from 'react';

import { SliderMain } from './sliderMain';
import { AdvMain } from './advMain';
import { RecomendsMovie } from './recomends';

import { useMovieBestFilms } from '../../store/movieRecomendBest.js';
import { useMovieCartoons } from '../../store/movieRecCartoons.js';
import { useMovieNews } from '../../store/movieRecNews.js';

export const MainPage = () => {
  const fetchReqBest = useMovieBestFilms((state) => state.fetchItems);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const fetchReqNews = useMovieNews((state) => state.fetchItems);
  const NewFilms = useMovieNews((state) => state.data);
  const fetchReqCartoon = useMovieCartoons((state) => state.fetchItems);
  const cartoons = useMovieCartoons((state) => state.data);
  React.useEffect(() => {
    try {
      fetchReqBest('4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5');
      fetchReqNews('4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5');
      fetchReqCartoon('4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5');
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderSliderParams = [
    { title: 'Лучшие фильмы Самарской области', height: 'imageBorderLow', filmsData: bestFilms },
    { title: 'Мультики', height: 'imageBorderLow', filmsData: cartoons },
    { title: 'Новинки', height: 'imageBorderBig', filmsData: NewFilms },
  ];
  return (
    <div>
      <SliderMain />
      <AdvMain />
      {renderSliderParams.map((item) => {
        return <RecomendsMovie key={item.title} {...item} />;
      })}
    </div>
  );
};
