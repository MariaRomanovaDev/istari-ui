import styled from 'styled-components';
import { AppProps } from '../../App';

const Step = styled.div`
  background-color: ${(props: AppProps): string => props.theme.colors.gray};
  box-shadow: 5px 5px 15px rgb(0 0 0 / 16%);
  width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 90px;
  
  min-height: 500px;
  
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
`;

export default Step;
