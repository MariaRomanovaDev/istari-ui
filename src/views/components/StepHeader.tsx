import React from 'react';
import styled from 'styled-components';

export const HeaderDescription = styled.span`
  font-weight: normal;
`;

const HeaderComponent = styled.div`
  font-size: 2rem;
`;
const Delimiter = styled.span`
  margin-right: 20px;
  margin-left: 20px;
`;

interface Props {
  title: string;
  description: string;
}

const Header = ({title, description}: Props): JSX.Element => {
  return (
    <HeaderComponent>
      {title}<Delimiter>|</Delimiter><HeaderDescription>{description}</HeaderDescription>
    </HeaderComponent>
  )
};

export default Header;