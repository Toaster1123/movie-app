import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useSimilarFilms = create((set) => ({
  similarMovies: [],
  loading: true,
  fetchItems: async (id) => {
    try {
      set({ loading: true });
      const data = await axios.get(
        `https://api.kinopoisk.dev/v1.4/movie?similarMovies.id=${id}&notNullFields=name&notNullFields=backdrop.url`,
        {
          headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json',
          },
          params: {
            limit: 12,
          },
        },
      );
      set({
        similarMovies: data.data.docs,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
