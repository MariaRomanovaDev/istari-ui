import React from 'react';
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-grid-system';
import { AppProps } from '../../App';

// TODO: add an instruction how to use table's elements

// reusable styles
export const grayText = css`
  color: #bbbbbb;
`;
export const topRoundedCorners = css`
  border-radius: 10px 10px 0 0;
`;
export const rowCss = css`
  padding: 0 15px;
  font-size: 14px;
  align-items: center !important;
  justify-content: center !important;
  
  background-color: ${(props: AppProps): string => props.theme.colors.lightGray};

  &:nth-child(2n) {
    background-color: ${(props: AppProps): string => props.theme.colors.shadedGray};
  }
`;
const headerRowCss = css`
  padding: 0 15px;
  border: 1px solid ${(props: AppProps): string => props.theme.colors.lightGray};
  justify-content: flex-end !important;
  box-sizing: border-box;
`;

const StyledContainer = styled(Container)`
  padding: 60px 0;
`;
export { StyledContainer as Container };

export const CornerCell = styled(Row)`
  ${headerRowCss}
  align-items: start !important;
  
  background-color: ${(props: AppProps): string => props.theme.colors.gray};
  ${topRoundedCorners}
  border-bottom: none;
  height: 90px;
  font-size: 18px;
  padding: 15px;
`;

export const DataRow = styled(Row)`
  ${rowCss}
  height: 30px;
  &:first-child {
    border: 1px solid ${(props: AppProps): string => props.theme.colors.shadedGray};
  }
  background-color: ${(props: AppProps): string => props.theme.colors.lightGray};
  &:nth-child(2n) {
    background-color: ${(props: AppProps): string => props.theme.colors.shadedGray};
  }
`;

export const HeadersCol = styled(Col)`
  padding: 0 8px !important; // to override react-grid-system styles
  padding-left: 0px !important; // to override react-grid-system styles
  
  ${DataRow} {
    background-color: #595858;
    &:nth-child(2n) {
      background-color: ${(props: AppProps): string => props.theme.colors.lightGray};
    }
    ${headerRowCss}
    border-top: none;

    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const TotalRow = styled(DataRow)`
  background-color: ${(props: AppProps): string => props.theme.colors.darkGray} !important;
`;

export const DataCol = styled(Col)`
  padding: 0 8px !important; // to override react-grid-system styles
  
  ${DataRow} {
    padding: 0;
  }
`;

// header for data columns
interface IDataHeaderRow {
  tokenType: string;
  strategyName: string;
}
const StakingNameRow = styled(Row)`
  ${rowCss}
  height: 50px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: ${(props: AppProps): string => props.theme.colors.darkGray} !important;
  ${topRoundedCorners}
`;
const StrategyDescriptionRow = styled(Row)`
  ${rowCss}
  height: 40px;
  font-size: 14px;
  background-color: #595858 !important;
  padding: 0 15px !important;
  box-sizing: border-box;
`;
const StyledRow = styled(Row)`
    ${rowCss}
    ${topRoundedCorners}
    padding: 0;
`;
export const DataHeaderRow: React.FC<IDataHeaderRow> = ({tokenType, strategyName, ...rowProps}) => {
  return (
    <StyledRow {...rowProps}>
      <Col>
        <StakingNameRow>{tokenType}</StakingNameRow>
        <StrategyDescriptionRow>{strategyName}</StrategyDescriptionRow>
      </Col>
    </StyledRow>
  )
};