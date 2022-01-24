import { types, Instance } from 'mobx-state-tree';

const StakingProvider = types.
  model('StakingProvider', {
    identity: types.string,
    isActive: types.optional(types.boolean, false),
  });

export default StakingProvider;
export interface IStakingProvider extends Instance<typeof StakingProvider> {}