import { create } from 'zustand';
export const openSelectorBar = create((set) => ({
  opened: null,
  paramCount: 0,
  incParamCount: () => set((state) => ({ paramCount: state.paramCount + 1 })),
  decParamCount: () => set((state) => ({ paramCount: state.paramCount - 1 })),
  clearParamCount: () => set(() => ({ paramCount: 0 })),
  setOpened: (id) => set(() => ({ opened: id })),
}));
