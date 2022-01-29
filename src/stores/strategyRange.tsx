import { types, Instance } from 'mobx-state-tree';

const StrategyRange = types.
  model('StrategyRange', {
    from: types.optional(types.number, 0),
    to: types.optional(types.number, 1),
  })
  .views((self) => ({
    get rangeValues(): number[] {
      return [self.from, self.to];
    }
  }))
  .actions((self) => ({
    setRange(values: number[]): void {
      self.from = values[0];
      self.to = values[1];
    },
  }));

export default StrategyRange;
export interface IStrategyRange extends Instance<typeof StrategyRange> {}