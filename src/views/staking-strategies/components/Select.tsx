import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { inputCss } from './Input';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  ${inputCss};
`;

export interface ISelectProp {
  value: number | string;
  label: number | string;
}

const selectStyles: StylesConfig<ISelectProp> = {
  control: (styles) => ({ ...styles, borderRadius: '0px' }),
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: () => ({ div: { paddingLeft: '0px' }})
}

// @ts-ignore: TODO: check how to work with Select types here https://react-select.com/typescript
const SelectContainer = ({value, name, options, onChange}): JSX.Element => {
  // @ts-ignore: somehow Select doesn't understand own props
  return <StyledSelect value={value} name={name} options={options} styles={selectStyles} onChange={onChange}/>
}

export default SelectContainer;
