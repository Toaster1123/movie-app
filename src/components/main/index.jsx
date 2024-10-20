import React from 'react';
import { SliderMain } from './sliderMain';
import { AdvMain } from './advMain';
import { RecomendsMovie } from './recomends';

export const MainPage = ({ loading, humorFilmsRec }) => {
  return (
    <div>
      <SliderMain loading={loading} />
      <AdvMain />
      <RecomendsMovie humorFilmsRec={humorFilmsRec} title={'Лучшие фильмы за 1902 год'} />
      <RecomendsMovie humorFilmsRec={humorFilmsRec} title={'Мультики'} />
      <RecomendsMovie humorFilmsRec={humorFilmsRec} title={'Новинки'} />
    </div>
  );
};
