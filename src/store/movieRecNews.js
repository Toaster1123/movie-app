import { create } from 'zustand';
import axios from 'axios';

export const useMovieNews = create((set) => ({
  data: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const fetchReq = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength',
        {
          headers: {
            'X-API-KEY': '4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5',
            'Content-Type': 'application/json',
          },
          params: {
            limit: 12,
            premiere: '01.01.2024-31.12.2024',
            // type: 'cartoon',
          },
        },
      );
      set({
        data: fetchReq.data.docs,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
