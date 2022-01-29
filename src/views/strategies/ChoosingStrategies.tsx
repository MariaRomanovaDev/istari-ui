import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DownDoubleArrow, Select, StepHeader } from '../components';
import { ISelectProp } from '../components/Select';
import { Container, CornerCell, DataCol, DataHeaderRow, DataRow, HeadersCol, tableConsts } from '../components/Table';
import { Row } from 'react-grid-system';
import { currenciesOpts, strategies } from './fakeStrategiesData';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/check.svg' or its corresponding type declarations.
import Check from '-!svg-react-loader?name=Icon!../../icons/check.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/forbidden.svg' or its corresponding type declarations.
import Forbidden from '-!svg-react-loader?name=Icon!../../icons/forbidden.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/info.svg' or its corresponding type declarations.
import Info from '-!svg-react-loader?name=Icon!../../icons/info.svg';
import { AppProps } from '../../App';
import { NextStepButton } from '../components/Button';

const iconCss = css`
  height: 16px;
`;
const Truthy = styled(Check)`
  ${iconCss}
  fill: ${(props: AppProps): string => props.theme.colors.lightGreen};
`;

const Falsy = styled(Forbidden)`
  ${iconCss}
  fill: ${tableConsts.grayTableTextColor};
  transform: rotate(90deg);
`;

const getIcon = (val: boolean): JSX.Element => {
  return val ? <Truthy /> : <Falsy />;
};

const selectContainersStyles = css`
  width: 115px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  font-weight: normal;
`;

const selectStyles = css`
  .right-side-select-container {
    ${selectContainersStyles}
      
    .right-side-select__control {
      ${selectContainersStyles}
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  
  ${selectStyles}
`;

const AppHeader = styled.div`
  font-size: 3rem;
`;

const BeautyRow = styled.div`
  height: 30px;
`;

const StyledHeadersCol = styled(HeadersCol)`
  ${DataRow}:not(:nth-child(2n)) {
    background-color: transparent;
    border: 1px solid ${(props: AppProps): string => props.theme.colors.lightGray};
  }
`;

const ChoosingStrategies: React.FC = () => {
  const [value, setValue] = useState(currenciesOpts[0]);

  return (
    <>
      <HeaderContainer>
        <AppHeader>Compare Reward Strategies</AppHeader>
        <Select
          value={value}
          name="currency"
          options={currenciesOpts}
          onChange = {(opt: ISelectProp): void => setValue(opt)}
          className="right-side-select-container"
          classNamePrefix="right-side-select"
        />
      </HeaderContainer>
      <StepHeader title="Step 1" description="Choose your strategies"/>
      <Container fluid>
        <Row>
          <StyledHeadersCol xl={6}>
            <CornerCell>Type of reward<Info /></CornerCell>
            <DataRow>EGLD price gain/loss</DataRow>
            <DataRow>EGLD Staking Rewards (APR)</DataRow>
            <DataRow>EGLD Staking Rewards (APY)</DataRow>
            <BeautyRow />
            <DataRow>MEX Price gain/loss</DataRow>
            <DataRow>MEX Staking Rewards (APR)</DataRow>
            <DataRow>MEX Staking Rewards (APY)</DataRow>
            <BeautyRow />
            <DataRow>IkMEX Staking Rewards (APR)</DataRow>
            <DataRow>IkMEX Staking Rewards (APY)</DataRow>
            <BeautyRow />
            <DataRow>LP-Tokens + MEX-Farming (APR)</DataRow>
            <DataRow>LP-Tokens + IkMEX-Farming (APR)</DataRow>
            <DataRow>Rewards from Swap Fees</DataRow>
          </StyledHeadersCol>
          {strategies.map(({
             tokenType, strategyName, egldPriceGainLoss, egldArp, egldApy,
             mexPriceGainLoss, mexArp, mexApy, ikMexArp, ikMexApy,
             lpTokensArp, lpTokensApy, swapFeeRewards,
           }) => {
            return (
              <DataCol xl={4} key={tokenType + strategyName}>
                <div />
                <DataHeaderRow tokenType={tokenType} strategyName={strategyName}/>
                <DataRow>{getIcon(egldPriceGainLoss)}</DataRow>
                <DataRow>{getIcon(egldArp)}</DataRow>
                <DataRow>{getIcon(egldApy)}</DataRow>
                <BeautyRow />
                <DataRow>{getIcon(mexPriceGainLoss)}</DataRow>
                <DataRow>{getIcon(mexArp)}</DataRow>
                <DataRow>{getIcon(mexApy)}</DataRow>
                <BeautyRow />
                <DataRow>{getIcon(ikMexArp)}</DataRow>
                <DataRow>{getIcon(ikMexApy)}</DataRow>
                <BeautyRow />
                <DataRow>{getIcon(lpTokensArp)}</DataRow>
                <DataRow>{getIcon(lpTokensApy)}</DataRow>
                <DataRow>{getIcon(swapFeeRewards)}</DataRow>
              </DataCol>
            )
          })}
        </Row>
      </Container>
      <NextStepButton>Specify staking strategies</NextStepButton>
      <DownDoubleArrow />
    </>
  )
}

export default ChoosingStrategies;