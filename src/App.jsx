import React from 'react';
import axios from 'axios';

import { useMovieMainSwiper } from './store/movie.js';

import { Header } from './components/header';
import { MainPage } from './components/main';
function App() {
  const movieArr = useMovieMainSwiper();
  // const [movieArr, setMovieArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [humorFilmsRec, setHumorFilmsRec] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRecSwiper = await axios.get(
          'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength&genres.name=!документальный&genres.name=!мелодрама',
          {
            headers: {
              'X-API-KEY': 'QXH7WES-08KMJYM-NW88RJH-KGZSCMQ',
              'Content-Type': 'application/json',
            },
            params: {
              ageRating: '12-18',
              limit: 12,
              type: 'movie',
              'rating.kp': '6 - 10',

              'rating.imdb': '6 - 10',
            },
          },
        );
        setLoading(false);
        console.log(movieArr.fetchItems());

        setHumorFilmsRec(dataRecSwiper.data.docs);
        // setMovieArr(dataMainSwiper.data.docs);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {/* <Header />
      <MainPage humorFilmsRec={humorFilmsRec} scrollItems={movieArr} loading={loading} /> */}
    </div>
  );
}

export default App;

//todo: Плавные переходы, поменять стиль кнопок, сделать несколько слайдов, начало сладера с предложениями на 100px вправо, фикс слайдов рекомендаций, разобраться с zostand
