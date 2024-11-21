import React from 'react';
import style from './seriesPage.module.scss';
import { openSelectorBar } from '../../store/openSelectorBar';
import { useMovieBestFilms } from '../../store/requests/movieRecomendBest';
import { useMovieNews } from '../../store/requests/movieRecNews';
import { Previev } from '../../components/movies/previev';
import { OptionsBar } from '../../components/movies/optionsBar';
import { RecomendsMovie } from '../../components/recomends';
import { FilmArray } from '../../components/array-film-with-params';
const text =
  'Приступайте к просмотру самых захватывающих сериалов нашей коллекции, которые по своей зрелищности и качеству уже давно не уступают серьезным полнометражным картинам. Современные сериалы способны целиком захватить внимание зрителя, заставляя его с нетерпением ожидать следующего эпизода. Вас ждут детективные, комедийные, фантастические, медицинские, исторические сериалы, а также дорамы и аниме-сериалы. Откровенный российский сериал «Открытый брак» о трудностях семейной жизни и турецкий сериал «Зимородок» о превратностях любви. Драма об участниках поисково-спасательных миссий «Плейлист волонтёра» и культовая сага «Игра престолов» о политике и драконах. Семейный сериал о дружбе советских школьниц «Манюня» и популярная дорама «Хилер» с экшеном и романтикой. Эти и многие другие захватывающие истории помогут вам отвлечься от повседневных забот.';
export const SeriesPage = () => {
  const { paramCount } = openSelectorBar((state) => state);
  const bestFilms = useMovieBestFilms((state) => state.data);
  const NewFilms = useMovieNews((state) => state.data);

  React.useEffect(() => {
    if (paramCount == 0) {
    }
  }, [paramCount]);
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
        <Previev title={'Сериалы'} text={text} />
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
