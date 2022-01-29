import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/rootStore';
import styled, { css } from 'styled-components';
import { Row } from 'react-grid-system';
import { AppProps } from '../../App';
import { rowCss, Container, CornerCell, DataCol, DataHeaderRow, DataRow, HeadersCol, TotalRow, tableConsts } from '../components/Table';
import { NextStepButton } from '../components/Button';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/info.svg' or its corresponding type declarations.
import Info from '-!svg-react-loader?name=Icon!../../icons/info.svg';
import { Button, DownArrow } from '../components';

const StakeEgldCell = styled(Row)`
  height: 80px;
  background: transparent;
  justify-content: flex-end !important;
  padding-top: 30px;
  box-sizing: border-box;
`;

const Header = styled.div`
  color: ${tableConsts.grayTableTextColor};
  font-size: 2rem;
  text-align: center;
  width: 100%;
`;

const bottomRoundedCorners = css`
  border-radius: 0 0 10px 10px;
`;

const ProfitCell = styled(Row)`
  ${rowCss}
  ${bottomRoundedCorners}
  height: 80px;
  background-color: ${(props: AppProps): string => props.theme.colors.lightGray};
  display: flex;
  
  .percent {
    font-size: 22px;
    align-self: flex-end;
  }
  
  .description {
    color: ${tableConsts.grayTableTextColor};
    font-size: 14px;
    align-self: flex-start;
    padding-top: 5px;
  }
`;

const BeautyContainerElement = styled.div`
  position: absolute;
  height: calc(100% - ${tableConsts.dataHeaderLength});
  top: ${tableConsts.dataHeaderLength};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #595858;
  ${bottomRoundedCorners}
`;

const BeautyDataColElement = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  right: 8px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px 1px rgb(0 0 0 / 16%);
`;

const BeautyDataFirstColElement = styled(BeautyDataColElement)`
  bottom: 80px;
  border-radius: ${tableConsts.topRoundedCorners};
`;

const StyledContainer = styled(Container)`
  padding-bottom: 60px;
`;

const getFormattedPercent = (profit: string): string => {
  return profit.startsWith('-') ? `${profit.replace("-", "- ")} %` : `+ ${profit} %`
}

const StakingRewards = observer((): JSX.Element  => {
  const { stakingStrategiesStore, strategySettingsStore, strategyRange } = useStore();
  const { egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly } = strategySettingsStore;

  useEffect(() => {
    void stakingStrategiesStore.fetchStakingStrategies(strategySettingsStore.settings);
  }, [egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly]);

  return (
    <>
      <Header>Your Staking Rewards</Header>
      <StyledContainer fluid>
        <Row>
          <BeautyContainerElement />
          <HeadersCol xl={6}>
            <CornerCell>Total reward<Info /></CornerCell>
            <DataRow>in EGLD tokens</DataRow>
            <DataRow>in MEX tokens</DataRow>
            <DataRow>in US $</DataRow>
            <DataRow>Total Balance in EGLD tokens</DataRow>
            <DataRow>Total Balance in MEX tokens</DataRow>
            <TotalRow>Total Balance in US $</TotalRow>
            <StakeEgldCell>
              <Button>Stake your EGLD</Button>
            </StakeEgldCell>
          </HeadersCol>
          {stakingStrategiesStore.stakingStrategies.map(({
            tokenType, strategyName, egldTokens, mexTokens, usDollars,
            totalBalanceInEgld, totalBalanceInMex, totalBalanceInDollars, profit,
            order
          }) => {
            return (
              <DataCol
                xl={4}
                key={tokenType + strategyName}
                className={strategyRange.rangeValues &&
                  strategyRange.isStrategyChosen(order) ? tableConsts.chosenStrategyClassName : ''}
              >
                {+order === 0 ? <BeautyDataFirstColElement /> : <BeautyDataColElement />}
                <DataHeaderRow tokenType={tokenType} strategyName={strategyName}/>
                <DataRow>{egldTokens}</DataRow>
                <DataRow>{mexTokens}</DataRow>
                <DataRow>{usDollars}</DataRow>
                <DataRow>{totalBalanceInEgld}</DataRow>
                <DataRow>{totalBalanceInMex}</DataRow>
                <TotalRow>{totalBalanceInDollars}</TotalRow>
                {+order !== 0 && (
                  <ProfitCell>
                    <div className="percent">{getFormattedPercent(profit)}</div>
                    <div className="description">compared to HOLD</div>
                  </ProfitCell>
                )}
              </DataCol>
            )
          })}
        </Row>
      </StyledContainer>
      <NextStepButton>Specify farming strategies</NextStepButton>
      <DownArrow />
    </>
  )
});

export default StakingRewards;
