import { create } from 'zustand';
export const openSelectorBar = create((set) => ({
  opened: null,
  setOpened: (id) => set((state) => ({ opened: id })),
}));
