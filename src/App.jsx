import React from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { MainPage } from './components/main';
function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов, начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций, разобраться с zostand
