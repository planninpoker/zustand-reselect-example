import create from 'zustand';
import { BearState } from './types.ts';

export const useBearStore = create<BearState>((set, get) => ({
  bears: {
    '0': {
      id: '0',
      name: 'Pooh',
      status: 'sleeping',
    },
  },
  getBears: () => {
    return Object.values(get().bears);
  },
  getBear: (id) => {
    return get().bears[id];
  },
  addBear: (bear) => {
    set((state) => {
      const nextBears = { ...state.bears };
      nextBears[bear.id] = bear;

      return { bears: nextBears };
    });
  },
}));
