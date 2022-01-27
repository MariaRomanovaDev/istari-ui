import React from 'react';
import styled from 'styled-components';

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

const Header: React.FC<Props> = ({title, description}: Props) => {
  return (
    <HeaderComponent>
      {title}<Delimiter>|</Delimiter><span>{description}</span>
    </HeaderComponent>
  )
};

export default Header;