import React from 'react';

import { Header } from './components/header';
import { MainPage } from './components/main';
function App() {
  // const [movieArr, setMovieArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="App">
      <Header />
      <MainPage humorFilmsRec={humorFilmsRec} loading={loading} />
    </div>
  );
}

export default App;

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов, начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций, разобраться с zostand
