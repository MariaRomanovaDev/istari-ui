import styled from 'styled-components';
import { AppProps } from '../../App';

const Step = styled.div`
  background-color: ${(props: AppProps): string => props.theme.colors.gray};
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 16%);
  width: 1400px;
  margin-left: auto;
  margin-right: auto;
  
  min-height: 500px;
`;

export default Step;
