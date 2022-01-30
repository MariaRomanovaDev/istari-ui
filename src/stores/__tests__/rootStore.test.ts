import { getSnapshot } from 'mobx-state-tree';
import RootStore from '../rootStore';
import { subDays } from 'date-fns';

describe('Root store:', () => {
  it('creates an initial state of RootStore', () => {
    const dateFrom = new Date().getTime();
    const dateTo = subDays(new Date, 7).getTime();
    const store = RootStore.create({strategySettingsStore: {dateFrom, dateTo}}, {});

    expect(getSnapshot(store)).toEqual({
      pricesStore: {
        egldPrice: 0,
        mexPrice: 0,
      },
      stakingStrategiesStore: {
        stakingStrategies: []
      },
      strategyRange: {
        from: 0,
        to: 1,
      },
      strategySettingsStore: {
        dateFrom,
        dateTo,
        egldPercentage: 100,
        egldPriceTarget: 0,
        egldTokensInvested: 0,
        mexPercentage: 0,
        mexPriceTarget: 0,
        mexTokensInvested: 0,
        ownEgldOnly: false,
        stakingProviders: []
      },
    });
  });
});
