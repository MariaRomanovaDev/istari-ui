import React from 'react';
import { StepHeader, MexEgldToggle } from '../components';
import StrategySettings from '../staking-strategies/StrategySettings';
import StakingRewards from '../staking-strategies/StakingRewards';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 65px;
  padding-bottom: 65px;
`;

const StakingStrategies = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <StepHeader title="Step 2" description="Specify Staking Strategies"/>
        <MexEgldToggle />
      </HeaderContainer>
      <StrategySettings />
      <StakingRewards />
    </>
  )
};

export default StakingStrategies;