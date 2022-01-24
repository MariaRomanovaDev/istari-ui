import { cast, flow, getSnapshot, Instance, types } from 'mobx-state-tree';
import StakingProvider, { IStakingProvider } from './stakingProvider';
import { subDays } from 'date-fns';

const StrategySettings = types.
  model('StrategySettings', {
    egldTokensInvested: types.optional(types.number, 0),
    mexTokensInvested: types.optional(types.number, 0),
    egldPercentage: types.optional(types.integer, 100),
    mexPercentage: types.optional(types.integer, 0),
    egldPriceTarget: types.optional(types.number, 0),
    mexPriceTarget: types.optional(types.number, 0),
    dateFrom: types.optional(types.Date, subDays(new Date, 7)),
    dateTo: types.optional(types.Date, new Date()),
    stakingProviders: types.optional(types.array(StakingProvider), []),
    ownEgldOnly: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get settings(): Partial<IStrategySettings> & { provider: string } {
      const settingsSnapshot: IStrategySettings = cast(getSnapshot(self));
      const activeProvider = self.stakingProviders.filter(p => p.isActive);
      const provider = activeProvider.length > 0 ? activeProvider[0].identity : '';
      return {
        ...settingsSnapshot,
        dateFrom: new Date(self.dateFrom),
        dateTo: new Date(self.dateTo),
        provider
      };
    }
  }))
  .actions((self) => ({
    // eslint-disable-next-line consistent-return
    fetchProviders: flow(function* fetchProviders() {
      try {
        const resp = yield fetch('http://localhost:8088/providers',
          { headers: { "Content-Type": "application/json" } });

        const providers = yield resp.json();

        let firstProvider = true;
        self.stakingProviders = cast(providers.map(
          (provider: IStakingProvider) => {
            const isActive = firstProvider;
            firstProvider = false;
            return StakingProvider.create({ identity: provider.identity, isActive })
          }
        ));
        self.ownEgldOnly = !self.ownEgldOnly;
      } catch (e) {
        console.error('Fetch Providers: ', e);
      }
    }),
    setOwningEgldOnly(ownEgldOnly: boolean): void {
      self.ownEgldOnly = ownEgldOnly;
    },
  })
);

export default StrategySettings;
export interface IStrategySettings extends Instance<typeof StrategySettings> {}