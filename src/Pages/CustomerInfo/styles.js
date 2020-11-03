import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 15vh auto 0 auto;
`;
export const Content = styled.div`
  position: relative;
  h2 {
    margin: 0 5vw;
  }

  > button {
    margin: 5vh 5vw;
    max-width: 100px;

    padding: 5px 10px;
    background: linear-gradient(90deg, #338a08, #42b309);
    border: none;
    border-radius: 25px;
    font-weight: bold;
    font-size: 12px;
    transition: background 1s;
    transition: color 0.5s;

    &:hover {
      background: #205705;
      color: #c9c9c9;
    }
  }

  table {
    margin: 0 auto;
    width: 600px;
    height: 100px;
    background: none; // #e6e6e0

    thead {
      background: #bbbbaa;
      text-align: center;
    }

    tbody {
      position: relative;
      tr {
        td {
        }
      }
    }
  }
  @media (max-width: 720px) {
    > button {
      padding: 10px 25px;
      font-size: 16px;
    }
  }
`;
export const EditTable = styled.span`
  width: 80px;
  height: 25px;
  background: none;
  display: flex;
  align-items: center;
  button {
    background: #e6e6e0;
    border: none;
    margin-left: 5px;
    padding-top: 2px;

    img {
      width: 20px;
      height: 20px;
    }
    &:hover {
      background: #bbbbaa;
    }
  }
`;

export const TableData = styled.td`
  background: #e6e6e0;
  min-width: 150px;
  min-height: 50px;
  text-align: center;
  font-size: 16px;
  cursor: ${(props) => (props.contentEditable ? 'pointer' : 'default')};

  button {
    background: none;
    border: none;
  }
`;
export const InvisibleComponentName = styled.div`
  left: 70px;
  top: 115px;
  position: absolute;

  .name {
    top: 115px;
    display: block;
    margin: 0 auto;
    top: 30px;
    right: 100px;
    height: 350px;
    width: 600px;
  }
  div {
    position: fixed;
    overflow: hidden;
    transition: height 0.25s ease-in-out;
    height: 400px;
  }

  div.hide {
    height: 0;
    position: absolute;
    opacity: 0; /**por entar combinar o p. absolute como fixed, cria-se um pequeno desvio, onde a div hide joga o form pro canto direito da tela, usei o opacity enquanto hide para o usuário não identificá-lo. Vale para as demais divs. */
  }
  @media (max-width: 720px) {
    .name {
      top: 20%;
      right: 25%;
    }
  }
`;
export const InvisibleComponentAddress = styled.div`
  position: absolute;
  top: 115px;
  left: 70px;
  .address {
    display: block;
    margin: 0 auto;
    top: 30px;
    right: 100px;
    height: 350px;
    width: 600px;
  }
  div {
    position: fixed;
    overflow: hidden;
    transition: height 0.25s ease-in-out;
    height: 400px;
  }

  div.hide {
    height: 0;
    position: absolute;
    opacity: 0;
  }
  @media (max-width: 720px) {
    .address {
      top: 20%;
      right: 25%;
    }
  }
`;
export const InvisibleComponentContact = styled.div`
  position: absolute;
  top: 115px;
  left: 70px;
  .contact {
    display: block;
    margin: 0 auto;
    top: 30px;
    right: 100px;
    height: 350px;
    width: 600px;
  }
  div {
    position: fixed;
    overflow: hidden;
    transition: height 0.25s ease-in-out;
    height: 400px;
  }

  div.hide {
    height: 0;
    position: absolute;
    opacity: 0;
  }
  @media (max-width: 720px) {
    .contact {
      top: 20%;
      right: 25%;
    }
  }
`;
export const InvisibleComponentEmail = styled.div`
  position: absolute;
  top: 115px;
  left: 70px;
  .email {
    display: block;
    margin: 0 auto;
    top: 30px;
    right: 100px;
    height: 350px;
    width: 600px;
  }
  div {
    position: fixed;
    overflow: hidden;
    transition: height 0.25s ease-in-out;
    height: 400px;
  }

  div.hide {
    height: 0;
    position: absolute;
    opacity: 0;
  }
  @media (max-width: 720px) {
    .email {
      top: 20%;
      right: 25%;
    }
  }
`;
export const Loading = styled.span`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50vh;
  left: 50vw;
`;
