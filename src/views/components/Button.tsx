import styled from 'styled-components';
import { AppProps } from '../../App';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/down-arrow.svg' or its corresponding type declarations.
import DownArrow from '-!svg-react-loader?name=Icon!../../icons/down-arrow.svg';
// @ts-ignore: TS2307: Cannot find module '-!svg-react-loader?name=Icon!../../icons/down-arrow.svg' or its corresponding type declarations.
import DownDoubleArrow from '-!svg-react-loader?name=Icon!../../icons/down-double-arrow.svg';

export const StyledDownArrow = styled(DownArrow)`
  fill: ${(props: AppProps): string => props.theme.colors.green};
  height: 30px;
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 10px;
`;

export const StyledDownDoubleArrow = styled(DownDoubleArrow)`
  path {
    fill: ${(props: AppProps): string => props.theme.colors.lightGreen};
  }
  path:first-child {
      fill: #64a268;
  }
  height: 30px;
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 10px 10px 30px 10px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${(props: AppProps): string => props.theme.colors.green};
  color: ${(props: AppProps): string => props.theme.colors.green};
  font-size: 16px;
  background-color: transparent;
  padding: 10px 30px;
`;

export const NextStepButton = styled(Button)`
  text-transform: uppercase;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export default Button;
