import React from 'react';
import { Container, StyledLink } from './styles';
import iconExit from '../../assests/image/icons/exit.png';

function Header() {
  return (
    <Container>
      <StyledLink to="/">
        <img src={iconExit} alt="sair" title="exit" />
      </StyledLink>
    </Container>
  );
}

export default Header;
