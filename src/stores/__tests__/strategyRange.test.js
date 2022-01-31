import StrategyRange from '../strategyRange';
import { getSnapshot } from 'mobx-state-tree';

describe('Range store:', () => {
  it('create range values', () => {
    const store = StrategyRange.create({
      from: 2,
      to: 4,
    }, {});

    expect(getSnapshot(store)).toEqual({
      from: 2,
      to: 4,
    });

    const values = store.rangeValues;

    expect(values).toEqual([2,4]);
  });

  it('show is strategy chosen', () => {
    const store = StrategyRange.create({
      from: 2,
      to: 4,
    }, {});

    expect(store.isStrategyChosen(1)).toBeFalsy();
    expect(store.isStrategyChosen(2)).toBeTruthy();
    expect(store.isStrategyChosen(3)).toBeTruthy();
    expect(store.isStrategyChosen(4)).toBeFalsy();
  });

  it('sets range', () => {
    const store = StrategyRange.create({
      from: 2,
      to: 4,
    }, {});

    store.setRange([3, 6]);

    expect(store.from).toBe(3);
    expect(store.to).toBe(6);
  });
});
