import StrategySettings from '../strategySettings';
import { subDays } from 'date-fns';

describe('Strategy settings:', () => {
  const dateFrom = new Date();
  const dateTo = subDays(new Date, 7);

  const snapshot = {
    dateFrom,
    dateTo,
    egldPercentage: 100,
    egldPriceTarget: 0,
    egldTokensInvested: 0,
    mexPercentage: 0,
    mexPriceTarget: 0,
    mexTokensInvested: 0,
    ownEgldOnly: false,
    stakingProviders: [{identity: 'istary', isActive: false}, {identity: 'other_company', isActive: true}]
  }

  it('convert settings for fetching',() => {
    const store = StrategySettings.create(snapshot, {});
    const settings = {
      ...snapshot,
      provider: 'other_company',
    };

    expect(store.settings).toEqual(settings);
  });

  it('calculate active staking provider', () => {
    const store = StrategySettings.create(snapshot, {});
    expect(store.activeStakingProvider).toEqual(snapshot.stakingProviders[1]);
  });
})