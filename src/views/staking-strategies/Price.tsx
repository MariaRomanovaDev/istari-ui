import React from 'react';
import styled from 'styled-components';
import { AppProps } from '../../App';

const PriceContainer = styled.div`
  position: relative;
  height: 40px;
  box-sizing: border-box;
  font-weight: normal;
`;

const IconContainer = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background-color: white;
  z-index: 0;
  left: 0;
  top: -6px;
  
  svg {
    z-index: 1;
    fill: ${(props: AppProps): string => props.theme.colors.darkGray}; // for the edlg icon
    color: ${(props: AppProps): string => props.theme.colors.darkGray}; // for the mex icon
    margin: 6px;
    padding: 2px;
    width: 36px;
    height: 36px;
  }
`;

const Gradient = styled.div`
  margin-left: 26px; // icon container width / 2
  line-height: 40px;
  height: 40px;
  background: linear-gradient(to right, #333333, #454444);
  padding-left: 36px; // 26px gradient margin + 26px half an icon + 10px for a padding
`;

interface Props {
  description: string;
}

const Price: React.FC<Props> = ({ children, description }) => {
  return (
    <PriceContainer>
      <Gradient>{description}</Gradient>
      <IconContainer>{children}</IconContainer>
    </PriceContainer>
  )
}

export default Price;