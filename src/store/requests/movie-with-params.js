import { create } from 'zustand';
import axios from 'axios';

export const useMovieWithParams = create((set) => ({
  movie: [],
  loading: true,
  fetchItems: async (params) => {
    try {
      set({ loading: true });
      const data = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?${params}`, {
        headers: {
          'X-API-KEY': '4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5',
          'Content-Type': 'application/json',
        },
        params: {
          limit: 30,
        },
      });
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
