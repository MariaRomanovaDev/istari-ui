import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/rootStore';

const StakingRewards = observer((): JSX.Element  => {
  const { stakingStrategiesStore, strategySettingsStore } = useStore();
  const { egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly } = strategySettingsStore;

  useEffect(() => {
    void stakingStrategiesStore.fetchStakingStrategies(strategySettingsStore.settings);
  }, [egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly]);

  return (
    <div>
      <div>Your Staking Rewards</div>
      <div>{stakingStrategiesStore.stakingStrategies.toString()}</div>
      {stakingStrategiesStore.stakingStrategies.map(strategy => {
        return (
          <div key={strategy.order}>
            <div>tokenType: {strategy.tokenType}</div>
            <div>strategyName: {strategy.strategyName}</div>
            <div>egldTokens: {strategy.egldTokens}</div>
            <div>mexTokens: {strategy.mexTokens}</div>
            <div>usDollars: {strategy.usDollars}</div>
            <div>totalBalanceInEgld: {strategy.totalBalanceInEgld}</div>
            <div>totalBalanceInMex: {strategy.totalBalanceInMex}</div>
            <div>totalBalanceInDollars: {strategy.totalBalanceInDollars}</div>
            <div>profit: {strategy.profit}</div>
            <div>order: {strategy.order}</div>
          </div>
        )
      })}
    </div>
  )
});

export default StakingRewards;
