import React from 'react';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';

export interface AppProps {
  theme: Theme
}

const App: React.FC = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, Istari
      </ThemeProvider>
    </div>
  );
}

export default App;
