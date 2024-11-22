import { create } from 'zustand';
import axios from 'axios';
import { key } from './key';

export const useMovieWithParams = create((set) => ({
  movie: [],
  loading: false,
  fetchItems: async (params) => {
    try {
      set({ loading: true });
      const data = await axios.get(
        `https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=name&notNullFields=rating.imdb&${params}`,
        {
          headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json',
          },
          params: {
            limit: 30,
          },
        },
      );
      set({
        movie: data.data.docs,
        // loading: data.data.docs.length > 0 ? false : true,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching items:', error);
      set({ loading: false });
    }
  },
}));
