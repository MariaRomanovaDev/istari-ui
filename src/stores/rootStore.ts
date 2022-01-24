import React, { createContext } from 'react';
import { flow, Instance, types } from 'mobx-state-tree';
import StrategySettings from './strategySettings';
import StakingStrategies from './stakingStrategies';
import Prices from './prices';

const RootStore = types
  .model('RootStore', {
    strategySettingsStore: types.optional(StrategySettings, {}),
    stakingStrategiesStore: types.optional(StakingStrategies, {}),
    pricesStore: types.optional(Prices, {}),
  })
  .actions(self => ({
  initializeStore: flow(function* initializeStore() {
    yield self.pricesStore.fetchPrices();
    yield self.strategySettingsStore.fetchProviders();
    yield self.stakingStrategiesStore.fetchStakingStrategies(self.strategySettingsStore.settings);
  }),
}));

const RootStoreContext = createContext<null | Instance<typeof RootStore>>(null);
export const StoreProvider = RootStoreContext.Provider;

export function useStore(): IRootStore {
  const store = React.useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export interface IRootStore extends Instance<typeof RootStore> {}
export default RootStore;
