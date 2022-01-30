import StakingStrategies from '../stakingStrategies';
import { getSnapshot } from 'mobx-state-tree';

describe('StakingStrategies:', () => {
  it('creates an initial state of StakingStrategies', () => {
    const store = StakingStrategies.create({}, {});
    expect(getSnapshot(store)).toEqual({'stakingStrategies': []});
  })
});