import { create } from 'zustand';
import axios from 'axios';

export const useMovieItem = create((set) => ({
  movieItem: {},
  loading: true,
  fetchItems: async (id) => {
    try {
      set({ loading: true });
      const data = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        headers: {
          'X-API-KEY': '4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5',
          'Content-Type': 'application/json',
        },
      });
      set({
        movieItem: data.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
