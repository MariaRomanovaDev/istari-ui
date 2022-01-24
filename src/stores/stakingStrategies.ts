import { cast, types, flow, Instance } from 'mobx-state-tree';
import StakingStrategy, { IStakingStrategy } from './stakingStrategy';

const StakingStrategies = types.
  model('StakingStrategies', {
    stakingStrategies: types.array(StakingStrategy),
  })
  .actions((self) => ({
  fetchStakingStrategies: flow(function* fetchStakingStrategies(settings) {
    try {
      const resp = yield fetch('http://localhost:8088', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!resp.ok) { throw yield resp.json() }

      const strategies: IStakingStrategy[] = yield resp.json();

      self.stakingStrategies = cast(strategies.map(
        (strategy: IStakingStrategy) => StakingStrategy.create(strategy)
      ));
    } catch (e) {
      console.error('Fetch Staking Strategies: ', e);
    }
  }),
}));

export default StakingStrategies;
export interface IStakingStrategies extends Instance<typeof StakingStrategies> {}