import React from 'react';
import StakingStrategies from './staking-strategies/StakingStrategies';
import { FirstStep, Step } from './components'
import ChoosingStrategies from './strategies/ChoosingStrategies';


const Comparing: React.FC = () => {
  return (
    <>
      <div style={{height: "100px"}} />
      <FirstStep>
        <ChoosingStrategies />
      </FirstStep>
      <Step>
        <StakingStrategies />
      </Step>
    </>
  )
};

export default Comparing;