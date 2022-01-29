import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styled from 'styled-components';
import { AppProps } from '../../App';
import { useStore } from '../../stores/rootStore';

const StyledToggle = styled(Toggle)`
  margin: 0 20px;
  
  // overloading react-toggle styles
  .react-toggle-track {
    background-color: ${(props: AppProps): string => props.theme.colors.lightGreen};
    width: 40px;
  }
  .react-toggle-thumb {
    border: 2px solid ${(props: AppProps): string => props.theme.colors.lightGreen};
    background-color: ${(props: AppProps): string => props.theme.colors.gray};
  }
  &&&:hover:not(.react-toggle--disabled) {
    .react-toggle-track {
      background-color: ${(props: AppProps): string => props.theme.colors.shadedGreen};
    }
    .react-toggle-thumb {
      border: 2px solid ${(props: AppProps): string => props.theme.colors.shadedGreen};
    }
  }
  &.react-toggle--checked {
    .react-toggle-thumb {
      left: 17px;
    }
  }
`;

const Container = styled.div`
  line-height: 24px;
  display: flex;
  font-size: 1rem;
`;

const MexEgldToggle: React.FC<Record<string, never>> = () => {
  const { strategySettingsStore } = useStore();
  const [ egldOnly, setEgldOnly ] = useState(strategySettingsStore.ownEgldOnly);

  useEffect(() => {
    strategySettingsStore.setOwningEgldOnly(egldOnly);
  }, [egldOnly]);

  return (
    <Container>
      <span>You own MEX & EGLD</span>
        <StyledToggle
          icons={false}
          onChange={(): void => setEgldOnly(!egldOnly)}
          aria-label="You own EGLD only"
          checked={egldOnly}
        />
      <span>You own EGLD only</span>
    </Container>
  );
}

export default MexEgldToggle;