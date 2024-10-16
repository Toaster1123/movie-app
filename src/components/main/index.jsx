import React from 'react';
import { SliderMain } from './sliderMain';
import { AdvMain } from './advMain';
import { RecomendsMovie } from './recomends';

export const MainPage = ({ scrollItems, loading, humorFilmsRec }) => {
  return (
    <div>
      <SliderMain scrollItems={scrollItems} loading={loading} />
      <AdvMain />
      <RecomendsMovie humorFilmsRec={humorFilmsRec} />
    </div>
  );
};
