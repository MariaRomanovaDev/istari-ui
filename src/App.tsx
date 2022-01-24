import React, { useEffect } from 'react';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import { observer } from 'mobx-react';
import RootStore, { StoreProvider, IRootStore } from './stores/rootStore';
import StakingStrategies from './views/staking-strategies/StakingStrategies';

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
        <StakingStrategies />
      </ThemeProvider>
    </StoreProvider>
  );
})

export default App;
