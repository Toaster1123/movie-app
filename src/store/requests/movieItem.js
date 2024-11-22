import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useMovieItem = create((set) => ({
  movieItem: {},
  loading: true,
  fetchItems: async (id) => {
    try {
      set({ loading: true });
      const data = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        headers: {
          'X-API-KEY': key,
          'Content-Type': 'application/json',
        },
      });
      set({
        movieItem: data.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
