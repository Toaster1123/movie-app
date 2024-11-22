import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useMovieBestFilms = create((set) => ({
  data: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const fetchReq = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength&genres.name=!документальный&genres.name=!концерт&genres.name=!мелодрама',
        {
          headers: {
            'X-API-KEY': key,
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
        data: fetchReq.data.docs,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
