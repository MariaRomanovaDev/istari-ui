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

setConfiguration({ defaultScreenClass: 'xl', gutterWidth: 0 });

const Title = styled(Row)`
  height: 36px;
  line-height: 36px;
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
      <Row justify="between">
        <Col xl={2}>
          <Title />
          <Row><Price description={egldDescription}><EgldIcon /></Price></Row>
        </Col>
        <Col xl={2}>
          <Title>egldTokensInvested:</Title>
          <Row><input value={egldTokensInvested} /></Row>
        </Col>
        <Col xl={1}>
          <Title>egldPercentage:</Title>
          <Row><input value={egldPercentage} /></Row>
        </Col>
        <Col xl={2}>
          <Title>egldPriceTarget:</Title>
          <Row><input value={egldPriceTarget} /></Row>
        </Col>
        <Col xl={5}>
          <Title>dateFrom:</Title>
          <Row>{dateFrom.toString()} dateTo: {dateTo.toString()}</Row>
        </Col>
      </Row>
      <Row justify="between">
        <Col>
          <Title />
          <Row><Price description={mexDescription}><MexIcon /></Price></Row>
        </Col>
        <Col xl={2}>
          <Title>mexTokensInvested:</Title>
          <Row><input value={mexTokensInvested} /></Row>
        </Col>
        <Col xl={1}>
          <Title>mexPercentage:</Title>
          <Row><input value={mexPercentage} /></Row>
        </Col>
        <Col xl={2}>
          <Title>mexPriceTarget:</Title>
          <Row><input value={mexPriceTarget} /></Row>
        </Col>
        <Col xl={5}>
          <Title>stakingProviders: </Title>
          <Row><input value={JSON.stringify(stakingProviders)} /></Row>
        </Col>
      </Row>
    </Container>
  )
});

export default StrategySettings;