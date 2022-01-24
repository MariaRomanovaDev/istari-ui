import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore} from '../../stores/rootStore';

const StrategySettings = observer((): JSX.Element  => {
  const { strategySettingsStore, pricesStore } = useStore();

  useEffect(() => {
    void strategySettingsStore.fetchProviders();
    void pricesStore.fetchPrices();
  }, [strategySettingsStore.stakingProviders]);

  const { mexPrice, egldPrice } = pricesStore;
  const { egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget, dateFrom, dateTo, stakingProviders } = strategySettingsStore;

  return (
    <div>
      <div>Specify Staking Strategies</div>
      <div> mexPrice: {mexPrice} </div>
      <div> egldPrice: {egldPrice} </div>
      <div> egldTokensInvested: {egldTokensInvested} </div>
      <div> mexTokensInvested: {mexTokensInvested} </div>
      <div> egldPercentage: {egldPercentage} </div>
      <div> mexPercentage: {mexPercentage} </div>
      <div> egldPriceTarget: {egldPriceTarget} </div>
      <div> mexPriceTarget: {mexPriceTarget} </div>
      <div> dateFrom: {dateFrom.toString()} </div>
      <div> dateTo: {dateTo.toString()} </div>
      <div> stakingProviders: {JSON.stringify(stakingProviders)} </div>
  </div>
  )
});

export default StrategySettings;