import { create } from 'zustand';
import axios from 'axios';

export const useMovieBestFilms = create((set) => ({
  data: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const fetchReq = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?notNullFields=backdrop.url&notNullFields=movieLength&genres.name=!документальный&genres.name=!мелодрама',
        {
          headers: {
            'X-API-KEY': '4G89DHV-E8P4HZE-NVKHR5V-HH4C6D5',
            'Content-Type': 'application/json',
          },
          params: {
            ageRating: '12-18',
            limit: 12,
            type: 'movie',
            'rating.kp': '6 - 10',
            'rating.imdb': '6 - 10',
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
