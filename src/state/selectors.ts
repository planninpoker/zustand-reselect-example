import { Bear, BearState, BearStatus } from './types.ts';
import { createSelector } from 'reselect';

const getBears = (state: BearState) => state.bears;

export const selectBears = createSelector(getBears, (bears) => Object.values(bears));

export const selectBearsByStatus = createSelector(getBears, (bears) => {
  return Object.values(bears).reduce(
    (acc, bear) => {
      if (!acc[bear.status]) {
        acc[bear.status] = [];
      }
      acc[bear.status].push(bear);
      return acc;
    },
    {} as Record<BearStatus, Bear[]>,
  );
});
