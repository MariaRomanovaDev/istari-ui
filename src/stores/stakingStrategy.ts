import { types, Instance } from 'mobx-state-tree';

const StakingStrategy = types.
  model('StakingStrategy', {
    tokenType: types.optional(types.string, ''),
    strategyName: types.optional(types.string, ''),
    egldTokens: types.optional(types.string, ''),
    mexTokens: types.optional(types.string, ''),
    usDollars: types.optional(types.string, ''),
    totalBalanceInEgld: types.optional(types.string, ''),
    totalBalanceInMex: types.optional(types.string, ''),
    totalBalanceInDollars: types.optional(types.string, ''),
    profit: types.optional(types.string, ''),
    order: types.optional(types.number, 0),
  });

export default StakingStrategy;
export interface IStakingStrategy extends Instance<typeof StakingStrategy> {}