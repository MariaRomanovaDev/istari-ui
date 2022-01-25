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
import { Input, PercentSelect, StakingProviderSelect } from './components';
import { ISelectPercent } from './components/PercentSelect';
import { IStakingProviderProp } from './components/StakingProviderSelect';

setConfiguration({ defaultScreenClass: 'xl', gutterWidth: 0 });

const TitleRow = styled(Row)`
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
`;

const StrategySettings = observer((): JSX.Element  => {
  const { strategySettingsStore, pricesStore } = useStore();

  useEffect(() => {
    void strategySettingsStore.fetchProviders();
    void pricesStore.fetchPrices();
  }, [strategySettingsStore.stakingProviders]);

  const { mexPrice, egldPrice } = pricesStore;
  const {
    egldTokensInvested,
    mexTokensInvested,
    egldPercentage,
    mexPercentage,
    egldPriceTarget,
    mexPriceTarget,
    dateFrom,
    dateTo,
    stakingProviders,
    ownEgldOnly
  } = strategySettingsStore;

  const egldDescription = 'EGLD Price: ' + egldPrice.toFixed(2) + ' $';
  const mexDescription = 'MEX Price: ' + mexPrice.toFixed(2) + ' $';

  return (
    <Container fluid>
      <Row>
        <StyledCol xl="content" className="first-setting">
          <TitleRow />
          <Row><Price description={egldDescription}><EgldIcon /></Price></Row>
          <TitleRow className="with-padding"/>
          <Row><Price description={mexDescription}><MexIcon /></Price></Row>
        </StyledCol>
        <StyledCol xl={2}>
          <TitleRow>EGLD tokens invested:</TitleRow>
          <Row><Input value={egldTokensInvested} /></Row>
          <TitleRow className="with-padding">MEX tokens invested:</TitleRow>
          <Row><Input value={mexTokensInvested} /></Row>
        </StyledCol>
        {ownEgldOnly && (
          <StyledCol xl={1}>
            <TitleRow>% in EGLD:</TitleRow>
            <Row>
              <PercentSelect
                percent={egldPercentage}
                name="egld"
                onChange={(opt: ISelectPercent): void => { strategySettingsStore.setEgldPercentage(opt.value); }}
              />
            </Row>
            <TitleRow className="with-padding">% in MEX:</TitleRow>
            <Row>
              <PercentSelect
                percent={mexPercentage}
                name="mex"
                onChange={(opt: ISelectPercent): void => { strategySettingsStore.setMexPercentage(opt.value); }}
              />
            </Row>
          </StyledCol>
        )}
        <StyledCol xl={2}>
          <TitleRow>EGLD price target:</TitleRow>
          <Row><Input value={egldPriceTarget} /></Row>
          <TitleRow className="with-padding">MEX price target:</TitleRow>
          <Row><Input value={mexPriceTarget} /></Row>
        </StyledCol>
        <StyledCol className="last-setting">
          <TitleRow>Time monitored:</TitleRow>
          <Row><Input value={"dateFrom:" + dateFrom.toString() + "dateTo:" + dateTo.toString()} /></Row>
          <TitleRow className="with-padding">Choose a staking provider: </TitleRow>
          <Row>
            <StakingProviderSelect
              stakingProviders={stakingProviders}
              activeStakingProvider={strategySettingsStore.activeStakingProvider}
              onChange={(opt: IStakingProviderProp): void => { strategySettingsStore.setActiveStakingProvider(opt.value); }}
            />
          </Row>
        </StyledCol>
      </Row>
    </Container>
  )
});

export default StrategySettings;