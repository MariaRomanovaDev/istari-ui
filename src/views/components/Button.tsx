import styled from 'styled-components';
import { AppProps } from '../../App';

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
