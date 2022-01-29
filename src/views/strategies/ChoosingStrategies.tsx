import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DottedContainer, DownDoubleArrow, Select, StepHeader } from '../components';
import { ISelectProp } from '../components/Select';
import { Container, CornerCell, DataCol, DataHeaderRow, DataRow, HeadersCol, tableConsts } from '../components/Table';
import { Row, Col } from 'react-grid-system';
import { currenciesOpts, strategies } from './fakeStrategiesData';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/check.svg' or its corresponding type declarations.
import Check from '-!svg-react-loader?name=Icon!../../icons/check.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/forbidden.svg' or its corresponding type declarations.
import Forbidden from '-!svg-react-loader?name=Icon!../../icons/forbidden.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/info.svg' or its corresponding type declarations.
import Info from '-!svg-react-loader?name=Icon!../../icons/info.svg';
import { AppProps } from '../../App';
import { NextStepButton } from '../components/Button';
import { Range } from './components';
import { useStore } from '../../stores/rootStore';
import { observer } from 'mobx-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
  
  ${DataCol}.${tableConsts.chosenStrategyClassName} & {
    fill: ${(props: AppProps): string => props.theme.colors.lightGray} !important;
  }
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

const StyledRangeContainer = styled(Container)`
  margin-top: 50px;
`;

const RangeCol = styled(Col)`
  padding-left: 10px !important;
  padding-right: 10px !important;
  height: 30px;
  display: flex;
  align-items: center;
`;

const rangeDescriptionCss = css`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
`;

const RangeLeftDescriptionCol = styled(Col)`
  ${rangeDescriptionCss}
  padding-left: 10px !important;
`;

const RangeRightDescriptionCol = styled(Col)`
  ${rangeDescriptionCss}
  text-align: right;
  padding-right: 10px !important;
`;

const ChoosingStrategies: React.FC = observer(() => {
  const [value, setValue] = useState(currenciesOpts[0]);
  const { strategyRange } = useStore();

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
      <StyledRangeContainer fluid>
        <Row>
          <Col xl={6} />
          <RangeLeftDescriptionCol xl={12}>Lower opportunity / Lower complexity</RangeLeftDescriptionCol>
          <RangeRightDescriptionCol xl={12}>Higher opportunity / Higher complexity</RangeRightDescriptionCol>
        </Row>
        <Row>
          <Col xl={6} />
          <RangeCol>
            <Range
              values={strategyRange.rangeValues}
              onChange={ (values): void => strategyRange.setRange(values) }
            />
          </RangeCol>
        </Row>
      </StyledRangeContainer>
      <Container fluid>
        <Row>
          <StyledHeadersCol xl={6}>
            <CornerCell><DottedContainer>Type of reward<Info /></DottedContainer></CornerCell>
            <DataRow><DottedContainer>EGLD price gain/loss</DottedContainer></DataRow>
            <DataRow><DottedContainer>EGLD Staking Rewards (APR)</DottedContainer></DataRow>
            <DataRow><DottedContainer>EGLD Staking Rewards (APY)</DottedContainer></DataRow>
            <BeautyRow />
            <DataRow><DottedContainer>MEX Price gain/loss</DottedContainer></DataRow>
            <DataRow><DottedContainer>MEX Staking Rewards (APR)</DottedContainer></DataRow>
            <DataRow><DottedContainer>MEX Staking Rewards (APY)</DottedContainer></DataRow>
            <BeautyRow />
            <DataRow><DottedContainer>IkMEX Staking Rewards (APR)</DottedContainer></DataRow>
            <DataRow><DottedContainer>IkMEX Staking Rewards (APY)</DottedContainer></DataRow>
            <BeautyRow />
            <DataRow><DottedContainer>LP-Tokens + MEX-Farming (APR)</DottedContainer></DataRow>
            <DataRow><DottedContainer>LP-Tokens + IkMEX-Farming (APR)</DottedContainer></DataRow>
            <DataRow><DottedContainer>Rewards from Swap Fees</DottedContainer></DataRow>
          </StyledHeadersCol>
          {strategies.map(({
             tokenType, strategyName, egldPriceGainLoss, egldArp, egldApy,
             mexPriceGainLoss, mexArp, mexApy, ikMexArp, ikMexApy,
             lpTokensArp, lpTokensApy, swapFeeRewards, order
           }) => {
            return (
              <DataCol
                className={strategyRange.isStrategyChosen(order) ? tableConsts.chosenStrategyClassName : ''}
                xl={4}
                key={tokenType + strategyName}
              >
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
      <AnchorLink href='#staking-rewards'>
        <NextStepButton>Specify staking strategies</NextStepButton>
        <DownDoubleArrow />
      </AnchorLink>
    </>
  )
});

export default ChoosingStrategies;