import { createGlobalStyle } from 'styled-components';
import { AppProps } from '../App';

const GlobalStyle =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${(props: AppProps): string => props.theme.font.family};
    font-size: ${(props: AppProps): string => props.theme.font.size};
  }
  
  #root {
    margin: 0 auto;
    background-color: ${(props: AppProps): string => props.theme.colors.darkGray};
    color: white;
  }
`;

export default GlobalStyle;