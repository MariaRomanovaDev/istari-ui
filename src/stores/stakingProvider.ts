import { types, Instance } from 'mobx-state-tree';

const StakingProvider = types.
  model('StakingProvider', {
    identity: types.string,
    isActive: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    changeIsActive(isActive: boolean): void {
      self.isActive = isActive
    }
  }))

export default StakingProvider;
export interface IStakingProvider extends Instance<typeof StakingProvider> {}