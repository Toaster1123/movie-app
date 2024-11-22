import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useMovieMainSwiper = create((set) => ({
  dataMainSwiper: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const data = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength&genres.name=!документальный&genres.name=!мультфильм',
        {
          headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json',
          },
          params: {
            limit: 12,
            movieLength: '60-300',
            'countries.name': 'Россия',
            'rating.kp': '6 - 10',
          },
        },
      );
      set({
        dataMainSwiper: data.data.docs,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
