import { create } from 'zustand';
import axios from 'axios';

export const useMovieWithParams = create((set) => ({
  movie: [],
  loading: true,
  fetchItems: async (params) => {
    try {
      console.log('first');
      set({ loading: true });
      const data = await axios.get(
        `https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&${params}`,
        {
          headers: {
            'X-API-KEY': 'QXH7WES-08KMJYM-NW88RJH-KGZSCMQ',
            'Content-Type': 'application/json',
          },
          params: {
            limit: 30,
          },
        },
      );
      set({
        movie: data.data.docs,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching items:', error);
      set({ loading: false });
    }
  },
}));
