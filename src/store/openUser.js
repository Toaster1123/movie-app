import { create } from 'zustand';

export const isOpened = create((set) => ({
  opened: false,
  setOpened: (open) => set((state) => ({ opened: open })),
}));
