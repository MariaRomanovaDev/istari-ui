import React from 'react';
import styled from 'styled-components';

export const HeaderDescription = styled.span`
  font-weight: 400;
`;

const HeaderComponent = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

interface Props {
  title: string;
  description: string;
}

const Header = ({title, description}: Props): JSX.Element => {
  return (
    <HeaderComponent>{title}<HeaderDescription>{description}</HeaderDescription></HeaderComponent>)
};

export default Header;