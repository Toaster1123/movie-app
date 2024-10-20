import { create } from 'zustand';
import axios from 'axios';

export const useMovieMainSwiper = create((set) => ({
  dataMainSwiper: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const data = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength',
        {
          headers: {
            'X-API-KEY': 'QXH7WES-08KMJYM-NW88RJH-KGZSCMQ',
            'Content-Type': 'application/json',
          },
          params: {
            limit: 12,
            'rating.kp': '6 - 10',
          },
        },
      );
      set({
        dataMainSwiper: data.data.docs,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
