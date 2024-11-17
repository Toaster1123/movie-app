import { create } from 'zustand';
export const urlParams = create((set) => ({
  genre: '',
  country: '',
  year: '',
  hightRating: '',
  setGenre: (param) => set(() => ({ genre: param })),
  setCountry: (param) => set(() => ({ country: param })),
  setYear: (param) => set(() => ({ year: param })),
  setHightRating: (param) => set(() => ({ hightRating: param })),
}));
