import { create } from 'zustand';
import axios from 'axios';

export const usePersonItem = create((set) => ({
  person: {},
  loading: true,
  fetchItems: async (id) => {
    try {
      set({ loading: true });
      const data = await axios.get(`https://api.kinopoisk.dev/v1.4/person/${id}`, {
        headers: {
          'X-API-KEY': '6G49KG3-0164VVC-HEBEDNP-B4EMR80',
          'Content-Type': 'application/json',
        },
      });
      set({
        person: data.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
