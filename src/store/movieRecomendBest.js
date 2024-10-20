import { create } from 'zustand';
import axios from 'axios';

export const useMovieMainSwiper = create((set) => ({
  dataMainSwiper: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
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
      set({
        dataMainSwiper: data.data.docs,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
