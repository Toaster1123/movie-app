import { create } from 'zustand';
import axios from 'axios';

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
            'X-API-KEY': 'QXH7WES-08KMJYM-NW88RJH-KGZSCMQ',
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
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
