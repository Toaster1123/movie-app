import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';

import { FilmPage } from './pages/filmPage';
import { Home } from './pages/main';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов, начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций, разобраться с zostand
