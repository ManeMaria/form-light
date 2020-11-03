import styled from 'styled-components';

export const Container = styled.div`
  /** a div que altera o estilo do meno de signIN está no styles do form */
  padding: 0;
  width: 300px;

  form {
    margin: 15px auto;
    width: 80%;
    height: 130px;
    display: flex;
    flex-direction: column;

    button {
      width: 60%;
      padding: 8px 0;
      margin: 0 auto;
      background: linear-gradient(90deg, #338a08, #42b309);
      border: none;
      border-radius: 25px;
      font-weight: bold;
      font-size: 16px;
      transition: background 1s;
      transition: color 0.5s;
      &:hover {
        background: #205705;
        color: #c9c9c9;
      }
    }
  }

  @media (max-width: 720px) {
    input {
      font-weight: bold;
    }
    button {
      width: 40%;
    }
  }
`;
export const DivContent = styled.div`
  position: relative;
  img {
    /**img do olho */
    position: absolute;
    top: 10px;
    left: 200px;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: `${
    props.type ? 'text' : 'password'
  }` /** recebe true||false da var enterDown */,
}))`
  width: 80%;
  background: ${(props) => (props.check ? '#e44e4e' : '#e6e6e0')};

  padding: 10px 0;
  margin-bottom: 5px;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 16px;
`;
