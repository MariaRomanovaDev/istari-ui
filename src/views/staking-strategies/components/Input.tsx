import React from 'react';
import styled, { css } from 'styled-components';
import { AppProps } from '../../../App';
import NumberFormat from 'react-number-format';

export const inputCss = css`
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${(props: AppProps): string => props.theme.colors.darkGray};
  width: 100%;
  font-size: 16px;
  color: ${(props: AppProps): string => props.theme.colors.darkGray};
`;

const StyledNumberFormat = styled(NumberFormat)`
  ${inputCss};
  padding: 0 10px 0 15px;
`;

interface Props {
  inputValue: number;
  onChange: (v: number) => void;
  suffix?: string;
}

// TODO: investigate the most appropriate number of decimals symbols and use for decimalScale
const Input: React.FC<Props> = ({inputValue, onChange, suffix = ''}) => {
  return (
    <StyledNumberFormat
      thousandsGroupStyle="thousand"
      value={inputValue}
      decimalSeparator="."
      displayType="input"
      type="text"
      thousandSeparator={true}
      allowNegative={true}
      suffix={suffix}
      decimalScale={2}
      onValueChange={(values): void => {
        const { value } = values;
        onChange(parseFloat(value));
      }}
    />
  )}

export default Input;