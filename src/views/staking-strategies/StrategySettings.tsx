import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/rootStore';
import { Container, Col, Row, setConfiguration } from 'react-grid-system';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/fake-mex.svg' or its corresponding type declarations.
import MexIcon from '-!svg-react-loader?name=Icon!../../icons/fake-mex.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/egld.svg' or its corresponding type declarations.
import EgldIcon from '-!svg-react-loader?name=Icon!../../icons/egld.svg';
import Price from './Price';
import styled from 'styled-components';
import { AppProps } from '../../App';

setConfiguration({ defaultScreenClass: 'xl', gutterWidth: 0 });

const Title = styled(Row)`
  height: 36px;
  line-height: 36px;
  
  &.with-padding {
    padding-top: 20px !important; // to override react-grid-system styles
  }
`;

const StyledCol = styled(Col)`
  padding: 0 8px !important; // to override react-grid-system styles
  
  &.first-setting {
    padding-left: 0px !important; // to override react-grid-system styles
    padding-right: 16px !important;
  }
  &.last-setting {
    padding-right: 0px !important; // to override react-grid-system styles
  }
  ${Title} {
        padding-top: 20px !important; // to override react-grid-system styles
  }
`;

const Input = styled.input`
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${(props: AppProps): string => props.theme.colors.darkGray};
  width: 100%;
  padding: 0 10px 0 15px;
  font-size: 16px;
  color: ${(props: AppProps): string => props.theme.colors.darkGray};
`;

const StrategySettings = observer((): JSX.Element  => {
  const { strategySettingsStore, pricesStore } = useStore();

  useEffect(() => {
    void strategySettingsStore.fetchProviders();
    void pricesStore.fetchPrices();
  }, [strategySettingsStore.stakingProviders]);

  const { mexPrice, egldPrice } = pricesStore;
  const { egldTokensInvested, mexTokensInvested, egldPercentage, mexPercentage, egldPriceTarget, mexPriceTarget, dateFrom, dateTo, stakingProviders } = strategySettingsStore;

  const egldDescription = 'EGLD Price: ' + egldPrice.toFixed(2) + ' $';
  const mexDescription = 'MEX Price: ' + mexPrice.toFixed(2) + ' $';

  return (
    <Container fluid>
      <Row>
        <StyledCol xl="content" className="first-setting">
          <Title />
          <Row><Price description={egldDescription}><EgldIcon /></Price></Row>
          <Title className="with-padding"/>
          <Row><Price description={mexDescription}><MexIcon /></Price></Row>
        </StyledCol>
        <StyledCol xl={2}>
          <Title>EGLD tokens invested:</Title>
          <Row><Input value={egldTokensInvested} /></Row>
          <Title className="with-padding">MEX tokens invested:</Title>
          <Row><Input value={mexTokensInvested} /></Row>
        </StyledCol>
        <StyledCol xl={1}>
          <Title>% in EGLD:</Title>
          <Row><Input value={egldPercentage} /></Row>
          <Title className="with-padding">% in MEX:</Title>
          <Row><Input value={mexPercentage} /></Row>
        </StyledCol>
        <StyledCol xl={2}>
          <Title>EGLD price target:</Title>
          <Row><Input value={egldPriceTarget} /></Row>
          <Title className="with-padding">MEX price target:</Title>
          <Row><Input value={mexPriceTarget} /></Row>
        </StyledCol>
        <StyledCol className="last-setting">
          <Title>Time monitored:</Title>
          <Row><Input value={"dateFrom:" + dateFrom.toString() + "dateTo:" + dateTo.toString()} /></Row>
          <Title className="with-padding">Choose a staking provider: </Title>
          <Row><Input value={JSON.stringify(stakingProviders)} /></Row>
        </StyledCol>
      </Row>
    </Container>
  )
});

export default StrategySettings;