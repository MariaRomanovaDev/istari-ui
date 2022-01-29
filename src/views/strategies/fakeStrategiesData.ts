import { ISelectProp } from '../components/Select';

export const currenciesOpts: ISelectProp[] = [
  { value: 'usd', label: 'USD $' },
  { value: 'euro', label: 'EURO €' },
  { value: 'rub', label: 'RUB ₽' },
];

export interface IStrategy {
  tokenType: string;
  strategyName: string;
  egldPriceGainLoss: boolean;
  egldArp: boolean;
  egldApy: boolean;
  mexPriceGainLoss: boolean;
  mexArp: boolean;
  mexApy: boolean;
  ikMexArp: boolean;
  ikMexApy: boolean;
  lpTokensArp: boolean;
  lpTokensApy: boolean;
  swapFeeRewards: boolean;
  order: number;
}
export const strategies: IStrategy[] = [
  {
    tokenType: 'Egld',
    strategyName: 'Hold in Wallet',
    egldPriceGainLoss: true,
    egldArp: false,
    egldApy: false,
    mexPriceGainLoss: false,
    mexArp: false,
    mexApy: false,
    ikMexArp: false,
    ikMexApy: false,
    lpTokensArp: false,
    lpTokensApy: false,
    swapFeeRewards: false,
    order: 0,
  },
  {
    tokenType: 'Egld',
    strategyName: 'Staking',
    egldPriceGainLoss: true,
    egldArp: true,
    egldApy: false,
    mexPriceGainLoss: false,
    mexArp: false,
    mexApy: false,
    ikMexArp: false,
    ikMexApy: false,
    lpTokensArp: false,
    lpTokensApy: false,
    swapFeeRewards: false,
    order: 1,
  },
  {
    tokenType: 'Egld',
    strategyName: 'Stake & Redelegate',
    egldPriceGainLoss: true,
    egldArp: true,
    egldApy: true,
    mexPriceGainLoss: false,
    mexArp: false,
    mexApy: false,
    ikMexArp: false,
    ikMexApy: false,
    lpTokensArp: false,
    lpTokensApy: false,
    swapFeeRewards: false,
    order: 2,
  },
  {
    tokenType: 'Mex',
    strategyName: 'Staking',
    egldPriceGainLoss: false,
    egldArp: false,
    egldApy: false,
    mexPriceGainLoss: true,
    mexArp: true,
    mexApy: false,
    ikMexArp: true,
    ikMexApy: false,
    lpTokensArp: false,
    lpTokensApy: false,
    swapFeeRewards: false,
    order: 3,
  },
  {
    tokenType: 'Mex',
    strategyName: 'Stake & Redelegate',
    egldPriceGainLoss: false,
    egldArp: false,
    egldApy: false,
    mexPriceGainLoss: true,
    mexArp: true,
    mexApy: true,
    ikMexArp: true,
    ikMexApy: true,
    lpTokensArp: false,
    lpTokensApy: false,
    swapFeeRewards: false,
    order: 4,
  },
  {
    tokenType: 'Egld-Esdt',
    strategyName: 'Liquidity Pool',
    egldPriceGainLoss: true,
    egldArp: false,
    egldApy: false,
    mexPriceGainLoss: true,
    mexArp: false,
    mexApy: false,
    ikMexArp: false,
    ikMexApy: false,
    lpTokensArp: true,
    lpTokensApy: true,
    swapFeeRewards: true,
    order: 5,
  },
];