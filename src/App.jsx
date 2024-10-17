import React from 'react';
import axios from 'axios';

import { Header } from './components/header';
import { MainPage } from './components/main';
function App() {
  const [movieArr, setMovieArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [humorFilmsRec, setHumorFilmsRec] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMainSwiper = await axios.get(
          'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength',
          {
            headers: {
              'X-API-KEY': 'SMF2M17-D074329-QBAG7RZ-MBRR9QB',
              'Content-Type': 'application/json',
            },
            params: {
              limit: 12,
              'rating.kp': '6 - 10',
            },
          },
        );
        const dataRecSwiper = await axios.get(
          'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength',
          {
            headers: {
              'X-API-KEY': 'SMF2M17-D074329-QBAG7RZ-MBRR9QB',
              'Content-Type': 'application/json',
            },
            params: {
              limit: 15,
              'rating.kp': '8 - 10',
              type: 'movie',
              year: '2020-2024',
            },
          },
        );
        setLoading(false);
        setHumorFilmsRec(dataRecSwiper.data.docs);
        setMovieArr(dataMainSwiper.data.docs);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <MainPage humorFilmsRec={humorFilmsRec} scrollItems={movieArr} loading={loading} />
    </div>
  );
}

export default App;

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов, начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций
