import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useSerchFilms = create((set) => ({
  films: [],
  fetchItems: async (value) => {
    try {
      set({ loading: true });
      const data = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/search?query=${value}`, {
        headers: {
          'X-API-KEY': key,
          'Content-Type': 'application/json',
        },
      });
      set({
        films: data.data.docs,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
