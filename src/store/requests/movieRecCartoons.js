import { create } from 'zustand';
import axios from 'axios';

export const useMovieCartoons = create((set) => ({
  data: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const fetchReq = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&genres.name=мультфильм',
        {
          headers: {
            'X-API-KEY': '6G49KG3-0164VVC-HEBEDNP-B4EMR80',
            'Content-Type': 'application/json',
          },
          params: {
            ageRating: '0-6',
            limit: 12,
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