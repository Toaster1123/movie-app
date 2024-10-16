import React from 'react';
import axios from 'axios';

import { Header } from './components/header';
import { MainPage } from './components/main';
function App() {
  const [movieArr, setMovieArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.4/movie', {
          headers: {
            'X-API-KEY': 'QXH7WES-08KMJYM-NW88RJH-KGZSCMQ',
            'Content-Type': 'application/json',
          },
          params: {
            limit: 11,
            // 'countries.name': 'Россия',
            'rating.kp': '6 - 10',
            notNullFields: 'backdrop.url',
          },
        });
        setLoading(false);
        console.log(data.docs);

        setMovieArr(data.docs);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <MainPage scrollItems={movieArr} loading={loading} />
    </div>
  );
}

export default App;
