import React, { useEffect } from 'react';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import StrategySettings from './components/staking-strategies/StrategySettings';
import StakingRewards from './components/staking-strategies/StakingRewards';
import { observer } from 'mobx-react';
import RootStore, { StoreProvider, IRootStore } from './stores/rootStore';

export interface AppProps {
  theme: Theme
}

const App: React.FC = observer(() => {
  const rootStore: IRootStore = RootStore.create();

  useEffect(() => {
    void rootStore.initializeStore();
  }, []);

  return (
    <StoreProvider value={rootStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, Istari
          <StrategySettings />
          <StakingRewards />
      </ThemeProvider>
    </StoreProvider>
  );
})

export default App;
