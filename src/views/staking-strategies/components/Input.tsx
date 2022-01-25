import styled, { css } from 'styled-components';
import { AppProps } from '../../../App';

export const inputCss = css`
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${(props: AppProps): string => props.theme.colors.darkGray};
  width: 100%;
  font-size: 16px;
  color: ${(props: AppProps): string => props.theme.colors.darkGray};
`;

const Input = styled.input`
  ${inputCss};
  padding: 0 10px 0 15px;
`;

export default Input;