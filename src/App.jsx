import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Register } from './components/register';

import { FilmPage } from './pages/filmPage';
import { Home } from './pages/main';
import { Movies } from './pages/movies';
import { PersonPage } from './pages/personPage';
import { ErrorPage } from './pages/error-page';
import { SeriesPage } from './pages/series';
import { CartoonPage } from './pages/cartoons';

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/series/" element={<SeriesPage />} />
        <Route path="/cartoons/" element={<CartoonPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//todo:  начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций, подогнать размер картинки на странице с фильмом, убрать кнопки навигации если не активен слайдер, react form hook, next auth
