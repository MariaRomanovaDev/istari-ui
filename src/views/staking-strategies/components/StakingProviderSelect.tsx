import React from 'react';
import Select from '../../components/Select';
import { IStakingProvider } from '../../../stores/stakingProvider';

export interface IStakingProviderProp {
  value: string;
  label: string;
}

interface Props {
  stakingProviders: IStakingProvider[];
  activeStakingProvider:  IStakingProvider | undefined;
  onChange: (o: IStakingProviderProp) => void;
}

const getStakingProvidersOpts = (stakingProviders: IStakingProvider[]): IStakingProviderProp[] => {
  return stakingProviders.map(({identity}) => ({value: identity, label: identity}));
}

const StakingProviderSelect: React.FC<Props> = ({ stakingProviders, activeStakingProvider, onChange })=> {
  const stakingProviderOpts = getStakingProvidersOpts(stakingProviders);
  return (
    <Select
      value={stakingProviderOpts.find(spo => spo.value === activeStakingProvider?.identity)}
      name="staking-provider"
      options={stakingProviderOpts}
      onChange={onChange}
    />
  )
}

export default StakingProviderSelect;