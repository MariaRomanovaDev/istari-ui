import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/rootStore';
import styled, { css } from 'styled-components';
import { Row } from 'react-grid-system';
import { AppProps } from '../../App';
import { grayText, rowCss, Container, CornerCell, DataCol, DataHeaderRow, DataRow, HeadersCol, TotalRow, topRoundedCorners } from '../components/Table';

const Header = styled.div`
  ${grayText}
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
    ${grayText}
    font-size: 14px;
    align-self: flex-start;
    padding-top: 5px;
  }
`;

const BeautyContainerElement = styled.div`
  position: absolute;
  height: calc(100% - 150px);
  top: 150px;
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
  ${topRoundedCorners}
`;

const getFormattedPercent = (profit: string): string => {
  return profit.startsWith('-') ? `${profit.replace("-", "- ")} %` : `+ ${profit} %`
}

const StakingRewards = observer((): JSX.Element  => {
  const { stakingStrategiesStore, strategySettingsStore } = useStore();
  const { egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly } = strategySettingsStore;

  useEffect(() => {
    void stakingStrategiesStore.fetchStakingStrategies(strategySettingsStore.settings);
  }, [egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget,
    dateFrom, dateTo, activeStakingProvider, ownEgldOnly]);

  return (
    <>
      <Header>Your Staking Rewards</Header>
      <Container fluid>
        <Row>
          <BeautyContainerElement />
          <HeadersCol xl={6}>
            <CornerCell>Total reward</CornerCell>
            <DataRow>in EGLD tokens</DataRow>
            <DataRow>in MEX tokens</DataRow>
            <DataRow>in US $</DataRow>
            <DataRow>Total Balance in EGLD tokens</DataRow>
            <DataRow>Total Balance in MEX tokens</DataRow>
            <TotalRow>Total Balance in US $</TotalRow>
          </HeadersCol>
          {stakingStrategiesStore.stakingStrategies.map(({
            tokenType, strategyName, egldTokens, mexTokens, usDollars,
            totalBalanceInEgld, totalBalanceInMex, totalBalanceInDollars, profit,
            order
          }) => {
            return (
              <DataCol xl={4} key={tokenType + strategyName}>
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
      </Container>
    </>
  )
});

export default StakingRewards;
