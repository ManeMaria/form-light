import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  top: 0;
  left: 0;
  background: #f0fff0;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 10px #b8ffb8;
`;
export const StyledLink = styled(Link)`
  margin-left: 95vw;

  @media (max-width: 720px) {
    margin-left: 90vw;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
