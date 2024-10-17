import React from 'react';
import { SliderMain } from './sliderMain';
import { AdvMain } from './advMain';
import { RecomendsMovie } from './recomends';

export const MainPage = ({ scrollItems, loading }) => {
  return (
    <div>
      <SliderMain scrollItems={scrollItems} loading={loading} />
      <AdvMain />
      <RecomendsMovie />
    </div>
  );
};
