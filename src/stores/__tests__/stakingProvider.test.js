import StakingProvider from '../stakingProvider';
import { getSnapshot } from 'mobx-state-tree';

describe('Price store:', () => {
  it('can change provider is active or not', () => {
    const store = StakingProvider.create({
      identity: 'istary',
      isActive: false,
    }, {});

    expect(getSnapshot(store)).toEqual({
      identity: 'istary',
      isActive: false,
    });

    store.changeIsActive(true);

    expect(getSnapshot(store)).toEqual({
      identity: 'istary',
      isActive: true,
    });
  });
});
