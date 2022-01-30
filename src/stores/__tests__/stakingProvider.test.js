import StakingProvider from '../stakingProvider';
import { getSnapshot } from 'mobx-state-tree';

describe('Price store:', () => {
  it('should fetch both prices', () => {
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
