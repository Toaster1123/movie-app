import React from 'react';
import style from './cartoon.module.scss';
import { openSelectorBar } from '../../store/openSelectorBar';
import { useMovieBestFilms } from '../../store/requests/movieRecomendBest';
import { useMovieNews } from '../../store/requests/movieRecNews';
import { OptionsBar } from '../../components/movies/optionsBar';
import { Previev } from '../../components/movies/previev';
import { RecomendsMovie } from '../../components/recomends';
import { FilmArray } from '../../components/array-film-with-params';

const text =
  'Онлайн-кинотеатр Okke приглашает вас в увлекательную страну мировой мультипликации. Мы собрали для маленьких зрителей и их родителей тысячи добрых волшебных историй со всего света — от великолепных шедевров советских и российских мультипликаторов до разнообразного и многогранного мира зарубежной анимации. Выбирайте мультфильмы по вкусу, способные перенести в добрый и беззаботный мир детства. Вас ждут веселые погони Волка за Зайцем в «Ну, погоди! Каникулы», приключения героев русских сказок в мультфильмах «Яга и книга заклинаний» и «Три богатыря и Конь на троне», увлекательное путешествие в тёплые края вместе с героями «Три кота и море приключений» и огромная коллекция развивающих мультсериалов и зажигательных песенок для самых маленьких. Эти и тысячи других чудесных анимационных фильмов, способных подарить массу приятных моментов, ждут своих верных поклонников.';
export const CartoonPage = () => {
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
        <Previev title={'Мультфильмы'} text={text} />
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
