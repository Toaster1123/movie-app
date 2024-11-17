import { create } from 'zustand';
import axios from 'axios';

export const useMovieGenres = create((set) => ({
  movieGenres: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const data = await axios.get(
        `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name`,
        {
          headers: {
            'X-API-KEY': '6G49KG3-0164VVC-HEBEDNP-B4EMR80',
            'Content-Type': 'application/json',
          },
        },
      );
      set({
        movieGenres: data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
