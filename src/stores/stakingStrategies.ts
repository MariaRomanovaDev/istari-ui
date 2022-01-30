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

      // strategies should be ordered due to design
      let strategies = (yield resp.json()).sort((a:IStakingStrategy, b:IStakingStrategy) => {
        return a.order - b.order;
      });

      // dirty fix due to backend returning NaN from time to time
      // should be fixed on backend side
      strategies = strategies.map((strategy: { [x: string]: string | number; }) => {
        for (const i in strategy) {
          if (strategy[i] !== "order" &&
            strategy[i] !== "tokenType" &&
            strategy[i] !== "strategyName" &&
            isNaN(parseFloat(strategy[i] as string))) {
            // eslint-disable-next-line no-param-reassign
            strategy[i] = '0';
          }
        }
        return strategy;
      }) as IStakingStrategy[];

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