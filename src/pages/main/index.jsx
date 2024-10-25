import React from 'react';

import { SliderMain } from '../../components/main/sliderMain/index.jsx';
import { AdvMain } from '../../components/main/advMain/index.jsx';
import { RecomendsMovie } from '../../components/recomends';

import { useMovieBestFilms } from '../../store/movieRecomendBest.js';
import { useMovieCartoons } from '../../store/movieRecCartoons.js';
import { useMovieNews } from '../../store/movieRecNews.js';

export const Home = () => {
  const fetchReqBest = useMovieBestFilms((state) => state.fetchItems);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const fetchReqNews = useMovieNews((state) => state.fetchItems);
  const NewFilms = useMovieNews((state) => state.data);
  const fetchReqCartoon = useMovieCartoons((state) => state.fetchItems);
  const cartoons = useMovieCartoons((state) => state.data);
  React.useEffect(() => {
    try {
      fetchReqBest();
      fetchReqNews();
      fetchReqCartoon();
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
