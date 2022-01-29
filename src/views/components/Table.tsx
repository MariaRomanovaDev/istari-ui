import React from 'react';
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-grid-system';
import { AppProps } from '../../App';

// TODO: add an instruction how to use table's elements

// TODO: put here all the repeating constants or those on which something depends
export const tableConsts = {
  dataHeaderLength: '90px',
  grayTableTextColor: '#bbbbbb',
  topRoundedCorners: '10px 10px 0 0',
  chosenStrategyClassName: 'chosen-strategy',
};

// reusable styles
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

// styled table components
const StyledContainer = styled(Container)`
  margin: 60px 0;
`;
export { StyledContainer as Container };

export const CornerCell = styled(Row)`
  ${headerRowCss}
  align-items: start !important;
  
  background-color: ${(props: AppProps): string => props.theme.colors.gray};
  border-radius: ${tableConsts.topRoundedCorners};
  border-bottom: none;
  height: 90px;
  font-size: 18px;
  padding: 15px;
  
  svg {
    fill: ${(props: AppProps): string => props.theme.colors.lightGray};
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

export const DataCol = styled(Col)`
  padding: 0 8px !important; // to override react-grid-system styles
`;

export const HeadersCol = styled(Col)`
  padding: 0 8px !important; // to override react-grid-system styles
  padding-left: 0px !important; // to override react-grid-system styles
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
  
  ${DataCol} & {
    padding: 0;
  }
  
  ${DataCol}.${tableConsts.chosenStrategyClassName} & {
    background-color: ${(props: AppProps): string => props.theme.colors.green};
    color: ${(props: AppProps): string => props.theme.colors.darkGray};
    svg {
      fill: ${(props: AppProps): string => props.theme.colors.darkGray};
    }

    &:nth-child(2n) {
        background-color:  ${(props: AppProps): string => props.theme.colors.shadedGreen};
    }
  }
  
  ${HeadersCol} & {
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
  color: white !important;
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
  border-radius: ${tableConsts.topRoundedCorners};
  text-transform: uppercase;
`;
const StrategyDescriptionRow = styled(Row)`
  ${rowCss}
  height: 40px;
  font-size: 14px;
  background-color: #595858 !important;
  padding: 0 15px !important;
  box-sizing: border-box;
  
  ${DataCol}.${tableConsts.chosenStrategyClassName} & {
    background-color: ${(props: AppProps): string => props.theme.colors.darkGreen} !important;
  }
`;
const StyledRow = styled(Row)`
    ${rowCss}
    border-radius: ${tableConsts.topRoundedCorners};
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