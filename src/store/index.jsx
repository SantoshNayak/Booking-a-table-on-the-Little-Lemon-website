// make starter for zustand
import { create } from 'zustand';

export const useStore = create(set => ({
  navIsOpen: false,
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));
